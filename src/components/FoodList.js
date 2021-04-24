import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, View } from 'react-native'
import FoodCard from './FoodCard';


const Item = ({ imageURL, header, info, price, onDetailPress, onAddPress }) => (
    <FoodCard imageURL={imageURL} header={header} info={info} price={price} onDetailPress={onDetailPress} onAddPress={onAddPress} />
);

const FoodList = props => {

    FoodList.propTypes = {
        childrens: PropTypes.array
    }

    return(
        <View style={{marginBottom:60}}>
            {props.childrens.map((item) => {
                return(
                    <Item imageURL={item.imageURL} header={item.header} info={item.info} price={item.price} onDetailPress={item.onDetailPress} onAddPress={item.onAddPress} />
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    categoriesView: {
        width: '100%',
        flex:1,
    }
})

export default FoodList

/*
<FlatList
    showsHorizontalScrollIndicator={true}
    style={styles.categoriesView}
    data={props.childrens}
    renderItem={renderItem}
    keyExtractor={item => item.header}
/>
*/