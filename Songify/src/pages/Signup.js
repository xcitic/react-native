import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <LoginForm type="Signup"/>
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}> Already have an account?</Text>
          <Text style={styles.signupButton}> Login </Text>
        </View>
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
  signupTextContainer:  {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});
