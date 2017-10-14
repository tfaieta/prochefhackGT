import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import {Actions} from 'react-native-router-flux';
import {RkButton} from 'react-native-ui-kitten';


export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/Prochef.png')}
                    />

                    <Text style={styles.title}></Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>

            <RkButton onPress={() => Actions.infoGather()}> Skip </RkButton>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        height: 200,
        width: 258
    },
    title: {
        marginTop: 10,
        width: 140,
        textAlign: 'center'
    }
});