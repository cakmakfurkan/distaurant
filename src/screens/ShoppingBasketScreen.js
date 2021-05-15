import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import { firebase } from '../firebase/config'
import FloatingActionBar from 'react-native-floating-action-bar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../components/Header'
import AppState from '../AppState'
import { observer } from 'mobx-react'
import Toast from 'react-native-toast-message'
import BasketList from '../components/BasketList'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate`']); // Ignore log notification by message

@observer
export class ShoppingBasketScreen extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style = {{flex:1}}>
                <Header/>
                <Text style={styles.headerText}>Sepetim:</Text>
                <BasketList/>
                <FloatingActionBar
                    items={[{icon: ({active}) => (
                        <Icon
                          name="food"
                          size={30}
                          color={active ? 'rgb(3, 137, 253)' : 'rgb(130, 130, 130)'}
                        />
                      )}, {icon: 'shopping-cart'}]}
                    selectedIndex={1}
                    onPress={(index) => {
                        if(index == 0)
                            this.props.navigation.navigate('Main');
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


export default ShoppingBasketScreen