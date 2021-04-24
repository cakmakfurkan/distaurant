import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';

const FoodCard = props => {

    FoodCard.propTypes={
        imageURL: PropTypes.string,
        header: PropTypes.string,
        info: PropTypes.string,
        price: PropTypes.number,
        onDetailPress: PropTypes.func,
        onAddPress: PropTypes.func
    }

    return(
        <TouchableOpacity style={styles.card} onPress={props.onDetailPress}>
            <Image style={styles.foodImage} source={{uri: props.imageURL}}/>
            <View style={styles.info}>
                <Text style={styles.headerText}>{props.header}</Text>
                <Text style={styles.foodInfo}>{props.info}</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>₺{props.price}</Text>
                <TouchableOpacity onPress={props.onAddPress}>
                    <Icon name={'diff-added'} size={30} color={'#FFBF00'}></Icon>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({  
    card: {
        height: 85,
        width: '97%',
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
        width: '50%'
    },
    price: {
        height: '100%',
        width: '20%',
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
        fontSize: 15,
        marginTop: '5%'
    },
    foodInfo: {
        fontSize: 8,
        marginTop: '2%'
    },
    foodImage: {
        height: '88%',
        width: '20%',
        borderRadius: 4,
        margin: 5
    }
})

export default FoodCard
