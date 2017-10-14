import React from 'react';
import { Text , FlatList} from 'react-native';

export default class Suggest extends React.Component {
    render() {
        return <FlatList data={this.getData()} renderItem = {({item}) => <Text>{item.key}</Text>}/>
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