import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { firebase } from '../firebase/config'

const CategoryCard = props => {
    const [image, setImage] = useState(null);

    CategoryCard.propTypes = {
        imageName: PropTypes.string,
        category: PropTypes.string,
        onPress: PropTypes.func 
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

    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <ImageBackground source={{ uri : image}}   imageStyle={{ borderRadius: 10}} style={styles.cardImage}>
                <View style={styles.imageTint}>
                    <Text style={styles.cardHeader}>{props.category}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: '85%',
        width: 150,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowRadius:5,
        shadowColor:'grey',
        shadowOpacity:0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    cardImage: {
        resizeMode: "contain",
        height: '100%',
        width: '100%',
    },
    imageTint: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 10,
        height: '100%',
        width: '100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    cardHeader: {
        fontWeight: '600',
        fontSize: 20,
        color: 'white',
        paddingBottom: 10
    }
})

export default CategoryCard
