import React from 'react'
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const CategoryCard = props => {
    CategoryCard.propTypes = {
        imageURL: PropTypes.string,
        category: PropTypes.string,
        onPress: PropTypes.func 
    }
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <ImageBackground source={{ uri : props.imageURL}}   imageStyle={{ borderRadius: 10}} style={styles.cardImage}>
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
