import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import { firebase } from '../firebase/config'

const FoodCard = props => {
    const [image, setImage] = useState(null);

    FoodCard.propTypes={
        imageName: PropTypes.string,
        header: PropTypes.string,
        info: PropTypes.string,
        price: PropTypes.number,
        onDetailPress: PropTypes.func,
        onAddPress: PropTypes.func
    }
    const isMountedComponent = useRef(true);   
    useEffect(() => {     
        if (isMountedComponent.current){
            getImage();
        }     
        return () => { isMountedComponent.current = false; };   
    });

    getImage = () => {
        let imageRef = firebase.storage().ref('/food_categories/' + props.imageName);
        imageRef
          .getDownloadURL()
          .then((url) => {
            //from url you can fetched the uploaded image easily
            setImage(url);
          })
          .catch((e) => console.log('getting downloadURL of image error => ', e));
    }
    return(
        <TouchableOpacity style={styles.card} onPress={props.onDetailPress}>
            <Image style={styles.foodImage} source={{uri: image}}/>
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
