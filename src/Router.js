import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import ScanScreen from './screens/ScanScreen';
import GreetingsScreen from './screens/GreetingsScreen';
import ShoppingBasketScreen from './screens/ShoppingBasketScreen';

const AppNavigator = createSwitchNavigator({
    ScanScreen: ScanScreen,
    Main: MainScreen,
    Greetings: GreetingsScreen,
    Basket: ShoppingBasketScreen
}, {
    initialRouteName: 'Main'
});

export default createAppContainer(AppNavigator);
