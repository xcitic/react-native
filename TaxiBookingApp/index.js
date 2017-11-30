import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Root from './src/Main';

export default class TaxiBooking extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('TaxiBooking', () => TaxiBooking);
