import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
var data = require('./data.json')
export default class Dropdown extends React.Component {

    constructor(props)
    {
        super(props);
        this.dict = processData();
        console.log(this.dict);
    }

    render() {
        return <FlatList data={this.getData()} renderItem={({ item }) => <Text style={ss.item}>{item.key}</Text>} />
    };

    getData() {
        var key = this.props.text.substring(0,2).toUpperCase();
        console.log(key);
        var arr = [];
        
        var results = this.dict[key];

        if(results != null){
        for(var i = 0 ; i < results.length; i++)
        {
            arr.push({key:results[i]});
        }
    }

        //TODO
        //Will return an array that react can understand. Basically based
        //on the input the user has given, we will determine a list of 
        //autocompletes for them to choose from.
        //i.e. "br" becomes "bread" or "brie"
        return arr;
    };
}

function processData(){ //load array into map
    var dict = {};
    for(var i = 0 ; i < data.length; i++)
    {
        var key = data[i].substring(0,2).toUpperCase();
        if(dict[key] == null){
            dict[key] = [];
        }
        dict[key].push(data[i]);
    }
    return dict;
}

const ss = StyleSheet.create({
    item: {
        padding:18,
        borderWidth: 1,
        borderRadius:7,
        borderColor: "#333",
        marginBottom: 100
    }
})