import { StatusBar } from 'expo-status-bar'
import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Importing firebase
import firebase from 'firebase'

//Installing required modules
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Importing components
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

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

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      loaded: false
    }
  }

  componentDidMount() {
    //Checking whether the user is logged in
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){

        this.setState({
          isLoggedIn: false,
          loaded: true
        })

      }else {
        this.setState({
          isLoggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const { isLoggedIn, loaded } = this.state

    if(!loaded){
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>
                Loading.....
            </Text>
        </View>
      )
    }

    if(!isLoggedIn) {

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
    
            <Stack.Screen name="Login" 
              component={LoginScreen} 
              options={{headerShown: false}}
            />

          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
  }
}

export default App