import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Image style={styles.container}
        style={styles.logo}
        source={require('../img/logo.png')}
      />
        <Text style={styles.logoText}>Welcome To Songify</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 40,
    height: 90,
  },
  logoText: {
    marginVertical: 15,
    fontSize: 22,
    color: 'rgba(255,255,255, 0.7)',
  },
});
