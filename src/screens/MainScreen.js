import React, { Component } from 'react'
import { Text, View , TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { firebase } from '../firebase/config'
import CategoriesSlider from '../components/CategoriesSlider'
import OrderStatusCard from '../components/OrderStatusCard'
import FloatingActionBar from 'react-native-floating-action-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header'
import FoodCard from '../components/FoodCard'
import FoodList from '../components/FoodList'


const itemArray = [
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
];

const foodArray = [
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', header: 'Big King', info: '2 x 120 gr. dana burger köftesi, pastırma, mantar, graten sos, cheddar peyniri. Patates kızartması ile', price: 15, onDetailPress: ()=>{}, onAddPrice: ()=>{}},
]
export class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            image: null
        }
    }
    componentDidMount(){
        /*firebase.database()
            .ref('/users/-MZ2P6CSgrDljJR9SJCr')
            .on('value', snapshot => {
              console.log('User data: ', snapshot.val());
            });

        let imageRef = firebase.storage().ref('/food_categories/' + 'burgers.jpeg');
        imageRef
          .getDownloadURL()
          .then((url) => {
            //from url you can fetched the uploaded image easily
            this.setState({
                image: url
            })
          })
          .catch((e) => console.log('getting downloadURL of image error => ', e));*/
    }
    addUser(){
        firebase.database()
        .ref('users/')
        .push({
            name: 'furkan',
            age: 32,
        })
        .then((snapshot) => console.log(snapshot))
        .catch((err)=>{ console.log(err)});
        console.log("aaa");
    }
    render() {
        return (
            <View style = {{flex:1}}>
                <Header/>
                <ScrollView>
                    <Text style={styles.headerText}>Sipariş Durumu:</Text>
                    <OrderStatusCard status={'prepearing'}/>
                    <Text style={styles.headerText}>Kategoriler:</Text>
                    <CategoriesSlider childrens={itemArray}/>
                    <Text style={styles.headerText}>Yemekler:</Text>
                    <FoodList childrens={foodArray}/>
                </ScrollView>
                <FloatingActionBar
                    items={[{icon: ({active}) => (
                        <Icon
                          name="food"
                          size={30}
                          color={active ? 'rgb(3, 137, 253)' : 'rgb(130, 130, 130)'}
                        />
                      )}, {icon: 'shopping-cart'}]}
                    onPress={()=> {}}
                    offset={10}
                />
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

