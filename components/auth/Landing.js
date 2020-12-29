import React from 'react'
import { StyleSheet, SafeAreaView, Button } from 'react-native'

const LandingScreen = (props) => {
    const {navigation} = props

    return (
        <SafeAreaView style={styles}>
            <Button
                title="Register" 
                onPress={() => navigation.navigate('Register')} />

            <Button
                title="Login" 
                onPress={() => navigation.navigate('Login')} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}})

export default LandingScreen