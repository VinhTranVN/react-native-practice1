/* @flow */
// export const a = 2;
// export const b = 3;
// const c = 4;
// export default c;

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SignUp screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
