import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import BasketItem from './BasketItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import { observer } from 'mobx-react';
import AppState from '../AppState';

@observer
class BasketList extends Component{

    constructor(props){
        super(props);
        this.state={
        }
    }
    
    deleteRow = (rowKey) => {
        AppState.deleteOrder(rowKey);
    };

    render(){
        return(
            <View style={{flex:1, marginBottom: 75}}>
                <SwipeListView
                    data={Object.entries(AppState.basket.orders)}
                    renderItem={data => (
                        <BasketItem key={data.item[1].foodID} foodID={data.item[1].foodID} header={data.item[1].header} estimatedTime={data.item[1].estimatedTime} price={data.item[1].price} amount={data.item[1].amount}/>
                    )}
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={()=>this.deleteRow(data.item[1].foodID)}>
                                <Text style={styles.backTextWhite}>Sil</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    rightOpenValue={-75}
                    keyExtractor={data => data.foodID}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: '1%',
        height:76.8,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    backTextWhite: {
        color: '#FFF',
    },
});

export default BasketList