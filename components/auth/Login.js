import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, View, Button, TextInput } from 'react-native'  

import firebase from 'firebase'

class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn() {
        console.log('---------onSignIn------------')
        const {email, password} = this.state

        //Making a call to firebase to sign in user with email and password
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <SafeAreaView>
                <TextInput
                    placeholder='email'
                    onChangeText = {(email) => this.setState({ email })}
                />

                <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button 
                    onPress = {() => this.onSignIn()}
                    title = "Login"
                />
            </SafeAreaView>
        )
    }
}

export default LoginScreen