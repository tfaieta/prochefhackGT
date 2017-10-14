import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './Dropdown'
import { Actions } from 'react-native-router-flux';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';

export default class InfoGather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            ingredients: []
        };
    }
    render() {
        return (
            <View>
                <Text>What's in your pantry?</Text>
                <RkTextInput placeholder="Enter your ingredient." onChange={(text) => this.setState({ text })} />
                <Dropdown />
                <RkButton></RkButton>
                <Text>

                </Text>
            </View>
        );
    };
}