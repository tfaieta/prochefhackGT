import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LoginForm from './LoginForm';
import {Actions} from 'react-native-router-flux';
import {RkButton} from 'react-native-ui-kitten';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../images/Logomakr_7Cqr0x.png')}
                    />

                    <Text style={styles.title}></Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>

            <RkButton onPress={() => Actions.infoGather()}> Skip </RkButton>
            </View>
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