import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, View, Button, TextInput} from 'react-native'  

import firebase from 'firebase'

class RegisterScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            name: '',

        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    //Function to sign user up with firebase
    onSignUp() {
        console.log('---------onSignUp------------')
        const {email, password, name} = this.state

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            < SafeAreaView style={styles}>

                <TextInput
                    placeholder='name'
                    onChangeText={(name) => this.setState({ name })} 
                />

                <TextInput
                    placeholder='email'
                    onChangeText={(email) => this.setState({ email })} 
                />   

                <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })} 
                />

                <Button 
                    title = 'Sign Up'
                    onPress={() => this.onSignUp()}
                />

            </ SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default RegisterScreen
