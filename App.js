import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import InfoGather from './src/components/Info/InfoGather';
import {Scene,Router,Stack,Actions} from 'react-native-router-flux';
import firebase from 'firebase';

export default class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDdgxbQXzhK6zkcHZ_CgM3CX9XEQYxIuOk',
            authDomain: 'prochef-77136.firebaseapp.com',
            databaseURL: 'https://prochef-77136.firebaseio.com',
            projectId: 'prochef-77136',
            storageBucket: 'prochef-77136.appspot.com',
            messagingSenderId: '855756863823'
        });
    }
  render() {
    return (
      <Router>
        <Stack key = "root">
          <Scene key = "login" component={Login}/>
          <Scene key = "infoGather" component={InfoGather}/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
