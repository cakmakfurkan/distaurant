import { observable, action, makeObservable } from 'mobx'

class AppState{
    @observable customerName = ''
    @observable reservationID = null
    @observable API_URL = 'http://192.168.1.68:3000/distaurant/api/'
    @observable API_CONFIG = {
        auth: {
            username: 'api',
            password: 'test'
        }
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