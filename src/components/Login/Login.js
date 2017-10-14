import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {RkButton} from 'react-native-ui-kitten';



export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>

            <RkButton onPress={() => Actions.infoGather()}> Next </RkButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});