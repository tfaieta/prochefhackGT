import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

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
                    secureTextEntry={true}
                    style={styles.input}>
                </TextInput>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 50,
        backgroundColor: '#483848',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#483848',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        height: 50,
        fontSize: 25,
        paddingVertical:10
    }
});