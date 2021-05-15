import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native'
import FoodCard from './FoodCard';


const Item = ({ imageName, header, info, price, onDetailPress, onAddPress }) => (
    <FoodCard imageName={imageName} header={header} info={info} price={price} onDetailPress={onDetailPress} onAddPress={onAddPress} />
);

const FoodList = props => {

    FoodList.propTypes = {
        childrens: PropTypes.array
    }

    return(
        <View style={{marginBottom:60}}>
            {props.childrens.map((item) => {
                return(
                    <Item key={item.header} imageName={item.imageName} header={item.header} info={item.info} price={item.price} onDetailPress={item.onDetailPress} onAddPress={item.onAddPress} />
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