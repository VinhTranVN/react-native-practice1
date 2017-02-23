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

import CircleImageView from 'components/CircleImageView/CircleImageView';
import CustomTextInput from 'components/CustomTextInput/CustomTextInput';
import * as SignUp from 'containers/SignUp';

export default class Practice1 extends Component {
  render() {
    return (
       <Image
          style={styles.background}
          source={require('assets/images/bg_signin.png')}>
          <View style={styles.halfHeight}>
            <CircleImageView height={120} imagelink={require('assets/images/check_red.png')}/>
          </View>
          <View style={styles.quarterHeight}>
            <CustomTextInput imageIcon={require('assets/images/user_name.png')} />
            <CustomTextInput imageIcon={require('assets/images/password.png')} />
          </View>
          <View style={[styles.quarterHeight, {backgroundColor: 'white'}]}>
          </View>
      </Image>
    );
  }
}

var styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null
    },
    halfHeight: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'red'
    },
    quarterHeight: {
        flex: .25,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    }
});

AppRegistry.registerComponent('Practice1', () => Practice1);
