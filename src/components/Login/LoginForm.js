import React, { Component } from 'react';
import { StyleSheet, View, TextInput} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Username or Email"
                    placeholderTextColor="#FFF"
                    style={styles.input}>

                </TextInput>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#FFF"
                    style={styles.input}>

                </TextInput>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#483848',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    }
});