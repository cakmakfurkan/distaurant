import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, FlatList } from 'react-native'
import CategoryCard from './CategoryCard';


const Item = ({ imageURL, category, onPress }) => (
    <CategoryCard imageURL={imageURL} category={category} onPress={onPress} />
);

const CategoriesSlider = props => {

    CategoriesSlider.propTypes = {
        childrens: PropTypes.array
    }
    const renderItem = ({ item }) => (
        <Item imageURL={item.imageURL} category={item.category} onPress={item.onPress} />
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
        maxHeight: '15%',
        backgroundColor: 'white',
        paddingTop:10
    }
})

export default CategoriesSlider
