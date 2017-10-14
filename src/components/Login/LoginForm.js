import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

export default class LoginForm extends Component {
    state = {email: '', password: '', error: '', loading: false};

    onLoginPress() {
        this.setState({error: '', loading: true});

        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { //Success
                this.setState({error: '', loading: false});
                Actions.infoGather();
            })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        this.setState({error: '', loading: false});
                    })
                    .catch(() => {
                        this.setState({error: 'Authentication failed.', loading: false});
                    });
                })
    }

    ;

    renderButtonOrSpinner() {
        if (this.state.loading) {
        }

        return <Button color={'#FFF'} onPress={this.onLoginPress.bind(this)} title="Log in"/>;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barstyle="light-content"
                />
                <TextInput
                    label='Email Address'
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    placeholder="Username or Email"
                    placeholderTextColor="#FFF"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType={"email-address"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}>
                </TextInput>
                <TextInput
                    label='Password'
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    placeholderTextColor="#FFF"
                    returnKeyType="go"
                    secureTextEntry={true}
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <TouchableOpacity style={styles.loginButtonContainer} >
                {this.renderButtonOrSpinner()}
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
    loginButtonContainer: {
        backgroundColor: '#483848',
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        height: 50,
        fontSize: 25,
        paddingVertical: 10
    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});