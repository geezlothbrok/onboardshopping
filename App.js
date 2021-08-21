import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import SignupForm from './src/screens/SignupForm';
//import PaymentSuccess from './src/screens/PaymentSuccess';
//import AddToCart from './src/screens/AddToCart';
//import OnlineShopping from './src/screens/OnlineShopping';

export default function App() {
  return (
    <View style={styles.container}>
      <SignupForm />
      
    </View>
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
