import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={[styles.headerText, {color: '#FFBF00'}]}>Dis</Text>
            <Text style={[styles.headerText, {color: 'white'}]}>Taurant</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    header: {
        height: '13%',
        width: '100%',
        backgroundColor: '#0394fc',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15
    }
})

export default Header
