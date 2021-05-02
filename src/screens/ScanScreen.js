import React, { Component } from 'react';
import { StyleSheet, Text, Alert, ActivityIndicator, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { observer } from 'mobx-react';
import Axios from 'axios';
import AppState from '../AppState';
import {decode, encode} from 'base-64'

if (!global.btoa) {
global.btoa = encode;
}

if (!global.atob) {
global.atob = decode;
}

@observer
class ScanScreen extends Component {
  constructor(props){
      super(props);
      this.state={
          loading: false
      }
  }

  updateLoading = (val) => {
    this.setState({
      loading: val
    })
  }

  onSuccess = e => {
    this.updateLoading(true);
    let {tableID} = JSON.parse(e.data);
    console.log('table id = ' + tableID);
    Axios.get(AppState.API_URL + 'reservation?tableID=' + tableID + '&customerName=' + AppState.customerName, AppState.API_CONFIG)
      .then(res => {
        console.log(res.data)
        if(res.data.status == 'error'){
          this.updateLoading(false);
          Alert.alert('Masa rezerveli!','Lütfen başka bir masa ile tekrar deneyin.');
          setTimeout(() => this.scanner.reactivate(), 1500);
        }else{
          this.updateLoading(false);
          AppState.changeReservationID(res.data.reservationID);
          this.props.navigation.navigate('Main');
        }
      })
      .catch(err => {
        this.updateLoading(false);
        Alert.alert('Bir Hata Oluştu!','İnternet Bağlantınızı Kontrol Edin.');
      })
  };

  render() {
    return (
      <>
        <QRCodeScanner
          ref={(node) => { this.scanner = node }}
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={
            <Text style={styles.centerText}>
              Lütfen 
              <Text style={styles.textBold}> oturmak istediğiniz masanın </Text>
              üzerindeki QR kodu taratınız.
            </Text>
          }
        />
        {this.state.loading && (
          <View style={styles.loading}>
            {Platform.OS == "ios" ? (
              <ActivityIndicator />
            ) : (
              <ActivityIndicator size="large" color="#F07632" />
            )}
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    textAlign: 'center'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  loading: {
    elevation: 10,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5000,
  }
});

export default ScanScreen
