import { observable, action, makeObservable, values } from 'mobx'

function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

class AppState{
    @observable customerName = 'Furkan'
    @observable reservationID = '-MZh9VqPQTjjFCcweMMd'
    @observable API_URL = 'http://192.168.1.68:3000/distaurant/api/'
    @observable API_CONFIG = {
        auth: {
            username: 'api',
            password: 'test'
        }
    }
    @observable basket = {
        orders: {
        },
        prevEstimatedTime: 0,
        estimatedTime: 0,
        totalAmount: 0,
    }
    @observable order = {
        orderID: null,
        estimatedTime: 0,
        status: 'no_order'
    }

    @action addItem = (foodID, header, price, estimatedTime) => {
        let isContainItem = false;
        if(estimatedTime > this.basket.estimatedTime){
            this.basket.prevEstimatedTime = this.basket.estimatedTime;
            this.basket.estimatedTime = estimatedTime;
        }
        else if(estimatedTime > this.basket.prevEstimatedTime && estimatedTime != this.basket.estimatedTime){
            this.basket.prevEstimatedTime = estimatedTime;
        }
        this.basket.totalAmount += price;
        Object.entries(this.basket.orders).forEach(([key, value]) => {
            if(value.foodID == foodID){
                value.amount++;
                value.price += price;
                isContainItem = true;
            }
        })
        if(!isContainItem)
            this.basket.orders[makeid(6)] = {foodID: foodID, header, price: price, estimatedTime: estimatedTime, amount: 1};
    }
    @action deleteItem = (foodID, price, estimatedTime) => {
        if(estimatedTime = this.basket.estimatedTime)
            this.basket.estimatedTime = this.basket.prevEstimatedTime;
        this.basket.totalAmount -= price;
        Object.entries(this.basket.orders).forEach(([key, value]) => {
            if(value.foodID == foodID){
                value.amount--;
                value.price -= price;
                if(value.amount == 0)
                    delete this.basket.orders[key];
            }
        })
    }
    @action deleteOrder = (foodID) => {
        Object.entries(this.basket.orders).forEach(([key, value]) => {
            if(value.foodID == foodID){
                delete this.basket.orders[key];
            }
        })
    }
    @action updateOrderStatus = (status) => {
        this.order.status = status
    }

    @action changeCustomerName = (name) => {
        this.customerName = name
    }

    @action changeReservationID = ( id ) => {
        this.reservationID = id
    }

    constructor() {
        makeObservable(this);
    }
}
export default new AppState();