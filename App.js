import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';
import InfoGather from './src/components/Info/InfoGather';
import {Scene,Router,Stack,Actions} from 'react-native-router-flux';

export default class App extends React.Component {
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
