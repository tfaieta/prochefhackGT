import React from 'react';
import {StyleSheet, Text , FlatList} from 'react-native';

export default class Dropdown extends React.Component {
    render() {
        return <FlatList data={this.getData()} renderItem = {({item}) => <Text style={ss.item}>{item.key}</Text>}/>
    };
    getData()
    {
        //TODO
        //Will return an array that react can understand. Basically based
        //on the input the user has given, we will determine a list of 
        //autocompletes for them to choose from.
        //i.e. "br" becomes "bread" or "brie"
        return [{key:"1"},{key:"2"}];
    };
}

const ss = StyleSheet.create({
    item: {
        padding:18,
        margin:5,
        borderWidth: 1,
        borderRadius:7,
        borderColor: "#333"
    }
})