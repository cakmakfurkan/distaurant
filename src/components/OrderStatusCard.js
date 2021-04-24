import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Text } from 'react-native'
const OrderStatusCard = props => {

    OrderStatusCard.propTypes = {
        status: PropTypes.string
    }

    return(
        <View style={styles.cardView}>
            {props.status == 'prepearing' && 
                <>
                    <Image style={styles.imgStyle} source={require('../images/prepearing_order.png')}></Image>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.status}>Siparişiniz Hazırlanıyor</Text>
                        <Text style={styles.info}>Tahmini Süre</Text>
                        <Text style={styles.info}>20dk</Text>
                    </View>
                </>
            }
            {props.status == 'no_order' && 
                <>
                    <Image style={styles.imgStyle} source={require('../images/no_order.png')}></Image>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.status}>Hiç Siparişiniz Yok</Text>
                        <Text style={styles.info}>Aşağıdan Verebilirsiniz</Text>
                    </View>
                </>
            }

            {props.status == 'waiting' && 
                <>
                    <Image style={styles.imgStyle} source={require('../images/waiting_order.png')}></Image>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.status}>Siparişiniz Onaylanmayı</Text>
                        <Text style={styles.status}>Bekliyor</Text>
                    </View>
                </>
            }

            {props.status == 'finish' && 
                <>
                    <Image style={styles.imgStyle} source={require('../images/order_finish.png')}></Image>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.status}>Siparişiniz Hazırlandı</Text>
                    </View>
                </>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    cardView: {
        width: '95%',
        height: '20%',
        backgroundColor: '#FFBF00',
        margin:10,
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgStyle: {
        height: 100,
        width: 100,
        marginRight: 10
    },
    status: {
        fontWeight: '800',
        fontSize: 20,
        color: 'white'
    },
    info: {
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
    }
})

export default OrderStatusCard
