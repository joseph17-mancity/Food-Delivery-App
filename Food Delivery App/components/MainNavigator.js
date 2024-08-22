import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Menu' }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart' }} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
