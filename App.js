import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import login from './src/components/Login/login'

export default class App extends React.Component {
  render() {
    return (
        <login />
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
