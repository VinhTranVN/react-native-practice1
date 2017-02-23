/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import SignIn from 'containers/SignIn';

export default class Practice1 extends Component {
  render() {
    return (
       <SignIn />
    );
  }
}

AppRegistry.registerComponent('Practice1', () => Practice1);
