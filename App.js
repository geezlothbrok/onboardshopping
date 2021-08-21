import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import SignupForm from './src/screens/SignupForm';
import PaymentSuccess from './src/screens/PaymentSuccess';
import AddToCart from './src/screens/AddToCart';
import OnlineShopping from './src/screens/OnlineShopping';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Online' component = {OnlineShopping}/>
        <Stack.Screen name ='Cart' component = {AddToCart}/>
        <Stack.Screen name ='Payment' component = {PaymentSuccess}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
