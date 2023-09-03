import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import react navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './login';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import userlogin from './userlogin';
import annonymous from './annonymous';
const Stack = createNativeStackNavigator();


export default function App() {
 

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={userlogin} />
    <Stack.Screen name="annonymous" component={annonymous} />
    <Stack.Screen name="Register" component={login} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
