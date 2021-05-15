import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import { firebase } from '../firebase/config'
import CategoriesSlider from '../components/CategoriesSlider'
import OrderStatusCard from '../components/OrderStatusCard'
import FloatingActionBar from 'react-native-floating-action-bar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../components/Header'
import FoodList from '../components/FoodList'
import AppState from '../AppState'
import { observer } from 'mobx-react'
import Toast from 'react-native-toast-message'
import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Warning: Overriding']); // Ignore log notification by message

@observer
export class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            categoryList: [],
            foodList: []
        }
    }

    setCategoryList = (categoryList) => {
        this.setState({
            categoryList: categoryList
        })
    }
    setFoodList = (foodList) => {
        this.setState({
            foodList: foodList
        })
    }

    componentDidMount(){
        this.getCategories();
        this.watchOrderStatus();
    }

    getCategories = () => {
        firebase.database()
            .ref('/Categories')
            .on('value', snapshot => {
                categoryList = [];
                let categories = snapshot.val();
                //console.log('categories data: ', snapshot.val());
                if(Object.keys(categories).length > 0){
                    let tempList = [];
                    Object.entries(categories).forEach(([key, value]) => {
                        tempList.push({imageName: value.imageName, category: value.categoryName, onPress: () => { this.getFoods(key)} });
                    });
                    this.setCategoryList(tempList);
                    this.getFoods(Object.keys(categories)[0]);
                }
            })
    }

    getFoods = (categoryID) => {
        firebase.database()
            .ref("Foods").orderByChild("categoryId").equalTo(categoryID)
            .once('value', snapshot => {
                let tempList = [];
                //console.log('food data: ', snapshot.val());

                Object.entries(snapshot.val()).forEach(([key, value]) => {
                    tempList.push({imageName: value.imageName, header: value.foodName, info: value.description, price: parseFloat(value.price), onDetailPress: ()=>{}, onAddPress: ()=>{ 
                        AppState.addItem(key, value.foodName, parseFloat(value.price), parseInt(value.estimatedTime));
                        Toast.show({
                          text2: 'Sepete eklendi 🎉',
                          visibilityTime: 500,
                        });
                    }})
                })
                this.setFoodList(tempList);
            })
    }

    watchOrderStatus = () => {
        if(AppState.order.orderID){
            firebase.database()
                .ref('Orders/' + AppState.order.orderID)
                .on('value')
                .then(snapshot => {
                    AppState.updateOrderStatus(snapshot.val().status);
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        let {categoryList, foodList} = this.state;
        return (
            <View style = {{flex:1}}>
                <Header/>
                <ScrollView>
                    <Text style={styles.headerText}>Sipariş Durumu:</Text>
                    <OrderStatusCard status={AppState.order.status}/>
                    <Text style={styles.headerText}>Kategoriler:</Text>
                    <CategoriesSlider childrens={categoryList}/>
                    <Text style={styles.headerText}>Yemekler:</Text>
                    <FoodList childrens={foodList}/>
                </ScrollView>
                <FloatingActionBar
                    items={[{icon: ({active}) => (
                        <Icon
                          name="food"
                          size={30}
                          color={active ? 'rgb(3, 137, 253)' : 'rgb(130, 130, 130)'}
                        />
                      )}, {icon: 'shopping-cart'}]}
                    onPress={(index) => {
                        if(index == 1)
                            this.props.navigation.navigate('Basket');
                    }}
                    offset={10}
                />
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    add: {
        alignSelf:'center',
        width:'90%',
        height:40,
        backgroundColor:'#56a3a6',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
    },
    headerText: {
        fontWeight: '600',
        color: 'grey',
        fontSize: 15,
        marginLeft: 30,
        marginVertical: 10,
        alignSelf: 'flex-start'
    }
})


export default MainScreen

