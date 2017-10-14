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
                <Text style={styles.center}>What's in your pantry?</Text>
                <RkTextInput
                    autoFocus={true} placeholder="Enter your ingredients" onChangeText={(text) => this.setState({ text })} />
                    {this.state.text.length < 2 ? null : <Dropdown text={this.state.text} />}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    center: {
        textAlign: "center"
    }
})