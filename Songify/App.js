
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
              backgroundColor="#1c313a"
              barStyle="light-content"
          />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
