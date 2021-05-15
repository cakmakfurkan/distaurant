import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import AppState from '../AppState';
import { observer } from 'mobx-react';

@observer
export class BasketItem extends Component{

    constructor(props){
        super(props);
        this.state={
            price: props.price,
            amount: props.amount
        }
    }

    setPrice = (price) => {
        this.setState({
            price: price
        })
    }
    setAmount = (amount) => {
        this.setState({
            amount: amount
        })
    }

    render() {
        var realPrice = this.props.price / this.props.amount;
        return(
            <View style={styles.card}>
                <View style={styles.amount}>
                    <Text style={styles.amountText}>{this.state.amount}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.headerText}>{this.props.header}</Text>
                </View>
                <View style={styles.price}>
                    <TouchableOpacity onPress={() => {
                        AppState.deleteItem(this.props.foodID, parseFloat(realPrice), this.props.estimatedTime);
                        this.setPrice(this.state.price-realPrice);
                        this.setAmount(this.state.amount-1);
                    }}>
                        <Icon name={'diff-removed'} size={30} color={'#FFBF00'}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.priceText}>₺{this.state.price}</Text>
                    <TouchableOpacity onPress={() => {
                        AppState.addItem(this.props.foodID, this.props.header, parseFloat(realPrice), this.props.estimatedTime);
                        this.setPrice(this.state.price+realPrice);
                        this.setAmount(this.state.amount+1);
                    }}>
                        <Icon name={'diff-added'} size={30} color={'#FFBF00'}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    card: {
        height:76.8,
        width: '98%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        shadowOpacity: 0.5,
        shadowColor: 'grey',
        marginBottom: '3%'
    },
    info: {
        height: '100%',
        width: '50%',
        justifyContent: 'center'
    },
    price: {
        height: '100%',
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 5
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    amount: {
        height: '55%',
        width: '12%',
        borderRadius: 4,
        borderWidth: 3,
        borderColor: '#FFBF00',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    amountText: {
        color: '#FFBF00',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default BasketItem
