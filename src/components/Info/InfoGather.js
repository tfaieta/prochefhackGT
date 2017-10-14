import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    TouchableOpacity
} from 'react-native';
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
    };
    render() {
        return (
            <View style={styles.break}>
                <Text style={styles.center}>What's in your pantry?</Text>
                <RkTextInput
                    autocomplete={false}
                    autoFocus={true}
                    ref={i => this.userInput = i}
                    placeholder="Enter your ingredients"
                    onChangeText={(text) => this.setState({text})}/>{this.state.text.length < 2
                    ? null
                    : <FlatList
                        data={this.getData()}
                        keyExtractor=
                        {(item, i) => item }
                        renderItem=
                        { ({item}) => <TouchableOpacity onPress={(e) => this.handlePress(e,item)} ><Text style={styles.item}>{item}</Text></TouchableOpacity>}/>}
                <View style={{
                    paddingTop: 50
                }}>
                    <Text>Selection:</Text>
                </View>
                {this.state.ingredients.length > 0
                    ? <FlatList
                            data={this.state.ingredients}
                            keyExtractor=
                            {(item, i) => item}
                            renderItem=
                            { ({item}) => <TouchableOpacity onPress={()=>this.deselect(item)}><Text style={styles.item}>{item}</Text></TouchableOpacity>}/>
                    : null}
            </View>
        )
    };

    handlePress(e,item)
    {
        this.setState({
            ingredients: this
                .state
                .ingredients
                .concat([item])
        ,text:''});
        // this.refs.userInput.value = '';
    };
    deselect(e)
    {
        this.setState({
            ingredients: this
                .state
                .ingredients
                .filter(i => e != i)
        });
    }
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
                if (this.state.ingredients.indexOf(results[i]) == -1) {
                    arr.push(results[i]);
                }
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