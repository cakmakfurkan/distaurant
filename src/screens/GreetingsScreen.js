import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';
import backgroundImage from '../images/app_bg.jpg';
import AppState from '../AppState';
import { observer } from 'mobx-react';

@observer
class GreetingsScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            customerName: ""
        }
    }
    onChangeCustomerName = (val) => {
        this.setState({
            customerName: val
        })
    }
    render() {
      return (
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.header}>Merhaba</Text>
                    <Text style={styles.centerText}>Sipariş Verebilmek İçin Lüften Adınızı Giriniz</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.onChangeCustomerName}
                        value={this.state.customerName}
                        placeholder="Ad ve Soyad"
                    />
                    <TouchableOpacity style={styles.buttonTouchable} onPress={() => {
                            AppState.changeCustomerName(this.state.customerName);
                            this.props.navigation.navigate('ScanScreen');
                        }}>
                        <Text style={styles.buttonText}>GİRİŞ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        flex: 1
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingHorizontal: 20,
        color: 'white',
        textAlign: 'center'
    },
    centerText: {
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingHorizontal: 20,
        color: 'white',
        textAlign: 'center'
    },
    input: {
        height: 40,
        paddingLeft: 10,
        width: '80%',
        borderRadius: 30,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    buttonTouchable: {
        padding: 16,
        paddingHorizontal:40,
        backgroundColor: '#3CAEA3',
        borderRadius: 30
    },
    inputContainer: {
        paddingVertical: 60,
        width: '90%',
        backgroundColor: 'rgba(32, 100, 155, 0.9)',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GreetingsScreen
