import React, { Component } from 'react'
import { Text, View , TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { firebase } from '../firebase/config'
import CategoriesSlider from '../components/CategoriesSlider'
import OrderStatusCard from '../components/OrderStatusCard'
const itemArray = [
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
    {imageURL: 'https://firebasestorage.googleapis.com/v0/b/distaurant-fba6e.appspot.com/o/food_categories%2Fburgers.jpeg?alt=media&token=e7304aee-e04d-4217-9354-cb88a0e842ca', category: 'burger', onPress: () => { console.log( 'aaa' )}},
];
export class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            image: null
        }
    }
    componentDidMount(){
        /*firebase.database()
            .ref('/users/-MZ2P6CSgrDljJR9SJCr')
            .on('value', snapshot => {
              console.log('User data: ', snapshot.val());
            });

        let imageRef = firebase.storage().ref('/food_categories/' + 'burgers.jpeg');
        imageRef
          .getDownloadURL()
          .then((url) => {
            //from url you can fetched the uploaded image easily
            this.setState({
                image: url
            })
          })
          .catch((e) => console.log('getting downloadURL of image error => ', e));*/
    }
    addUser(){
        firebase.database()
        .ref('users/')
        .push({
            name: 'furkan',
            age: 32,
        })
        .then((snapshot) => console.log(snapshot))
        .catch((err)=>{ console.log(err)});
        console.log("aaa");
    }
    render() {
        return (
            <View style = {{flex:1}}>
                <TouchableOpacity style={styles.add} onPress={this.addUser}>
                        <Text style={styles.LoginText}>Ekle</Text>
                </TouchableOpacity>
                <OrderStatusCard status={'prepearing'}/>
                <CategoriesSlider childrens={itemArray}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    add: {
        alignSelf:'center',
        width:'90%',
        height:40,
        backgroundColor:'#56a3a6',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
    },

})


export default MainScreen

