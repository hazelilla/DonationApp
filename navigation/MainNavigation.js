import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import HomeScreen from '../screens/HomeScreen';
import DonationItemScreen from '../screens/DonationItemScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
    return (
        <Stack.Navigator
            initialRouteName={Routes.Login}
            screenOptions={{ header: () => null, headerShown: false }}>
            <Stack.Screen name={Routes.Login} component={LoginScreen} />
            <Stack.Screen name={Routes.Register} component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export const Authenticated = () => {
    return (
        <Stack.Navigator
            initialRouteName={Routes.Home}
            screenOptions={{ header: () => null, headerShown: false }}>
            <Stack.Screen name={Routes.Home} component={HomeScreen} />
            <Stack.Screen
                name={Routes.DonationItem}
                component={DonationItemScreen}
            />
        </Stack.Navigator>
    );
};