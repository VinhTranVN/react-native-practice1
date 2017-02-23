/* @flow */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

import applicationStyles from 'config/applicationStyle';

export default class CustomTextInput extends Component {
  render() {
    return (
      <View style={styles.inputWrap}>
        <Image source={this.props.imageIcon} style={applicationStyles.iconInputField} resizeMode="contain" />
        <TextInput
          placeholderTextColor="#FFF"
          placeholder="Password"
          style={applicationStyles.inputField}
          secureTextEntry={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 0.25,
    borderBottomColor: "#CCC",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
    backgroundColor: 'green'
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    backgroundColor: 'red'
  },
});
