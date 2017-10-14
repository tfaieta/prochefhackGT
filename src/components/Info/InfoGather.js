import React from 'react';
import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import processData from './process'
import {Actions} from 'react-native-router-flux';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';

var data = require('./data.json');

export default class InfoGather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            ingredients: []
        };
        this.dict = processData(data);
    }
    render() {
        return (
            <View style={styles.break}>
                <Text style={styles.center}>What's in your pantry?</Text>
                <RkTextInput
                    autoFocus={true}
                    placeholder="Enter your ingredients"
                    onChangeText={(text) => this.setState({text})}/> 
                    {this.state.text.length < 2
                    ? null
                    : <FlatList
                        data={this.getData()}
                        keyExtractor = {(item, i) => item }
                        renderItem=
                        { ({item}) => <TouchableOpacity  onPress={() => this.handlePress(item)} ><Text style={styles.item}>{item}</Text></TouchableOpacity>}/>}
                {/* <FlatList data={this.showIngredients(this.ingredients)} onPress={this.handleSelect}/> */}
            </View>
        );
    };
    handlePress(e)
    {
        console.log(e);
    };
    getData() {
        var key = this
            .state
            .text
            .substring(0, 2)
            .toUpperCase();
        var arr = [];

        var results = this.dict[key];

        if (results != null) {
            for (var i = 0; i < results.length; i++) {
                arr.push(results[i]);
            }
        }
        return arr;
    };

};
var styles = StyleSheet.create({
    center: {
        textAlign: "center",
        justifyContent: 'center'
    },
    break: {
        top: 50
    },
    item: {
        padding: 18,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#333",
        margin: 2
    }
});