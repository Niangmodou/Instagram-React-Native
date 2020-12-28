import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Importing firebase
import firebase from 'firebase'

//Installing required modules
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Importing components
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

const firebaseConfig = {
  apiKey: "AIzaSyBv-51UP4vVwX64yH4ELqYza57woF5E-gk",
  authDomain: "instagram-clone-a5e14.firebaseapp.com",
  projectId: "instagram-clone-a5e14",
  storageBucket: "instagram-clone-a5e14.appspot.com",
  messagingSenderId: "652016567572",
  appId: "1:652016567572:web:2d8b32e3c7c24b45b7ae01",
  measurementId: "G-BXVZSXMT8T"
};

//Make sure we are not running any firebase instances
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator()

export default function App() {

  console.log('Executed')

  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" 
          component={LandingScreen} 
          options={{headerShown: false}}
        />

        <Stack.Screen name="Register" 
          component={RegisterScreen} 
          options={{headerShown: false}}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
