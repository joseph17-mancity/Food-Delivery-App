import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './components/CartContext';
import { FormProvider } from './components/FormContext';
import { ThemeProvider } from './components/ThemeContext';
import MainNavigator from './components/MainNavigator';
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';
import Form1Screen from './components/Form1Screen';
import Form2Screen from './components/Form2Screen';
import Form3Screen from './components/Form3Screen';
import SplashScreen from './components/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
      <FormProvider>
        <ThemeProvider>
            <CartProvider>
                <FormProvider>
                    <NavigationContainer>
                        <Stack.Navigator intialRouteName="Home" screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="SplashScreen" component={SplashScreen} />
                            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home'}}/>
                            <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: 'Menu'}} />
                            <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart'}} />
                            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile'}} />
                            <Stack.Screen name="Form1" component={Form1Screen} options={{ title: 'User Details'}} />
                            <Stack.Screen name="Form2" component={Form2Screen} options={{ title: 'Address Details'}} />
                            <Stack.Screen name="Form3" component={Form3Screen} options={{ title: 'Payment Details'}} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </FormProvider>
            </CartProvider>
        </ThemeProvider>
      </FormProvider>
    );
}

