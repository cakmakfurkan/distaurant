import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import ScanScreen from './screens/ScanScreen';
import GreetingsScreen from './screens/GreetingsScreen';

const AppNavigator = createSwitchNavigator({
    ScanScreen: ScanScreen,
    Main: MainScreen,
    Greetings: GreetingsScreen
}, {
    initialRouteName: 'Greetings'
});

export default createAppContainer(AppNavigator);
