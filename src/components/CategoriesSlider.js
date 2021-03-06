import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, FlatList } from 'react-native'
import CategoryCard from './CategoryCard';
import {responsiveScreenHeight, responsiveScreenWidth} from "react-native-responsive-dimensions";


const Item = ({ imageName, category, onPress }) => (
    <CategoryCard imageName={imageName} category={category} onPress={onPress} />
);

const CategoriesSlider = props => {

    CategoriesSlider.propTypes = {
        childrens: PropTypes.array
    }
    const renderItem = ({ item }) => (
        <Item imageName={item.imageName} category={item.category} onPress={item.onPress} />
    );
    return(
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            style={styles.categoriesView}
            data={props.childrens}
            renderItem={renderItem}
            keyExtractor={item => item.category}
        />
    );
}

const styles = StyleSheet.create({
    categoriesView: {
        width: '100%',
        maxHeight: responsiveScreenHeight(17),
        backgroundColor: 'white',
        paddingTop:10
    }
})

export default CategoriesSlider
