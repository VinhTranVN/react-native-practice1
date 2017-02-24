/* @flow */

import React, { Component, PropTypes } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Platform
} from 'react-native';

import applicationStyles from 'config/applicationStyle';
import Metrics from 'config/metrics';
import Colors from 'config/colors';

export default class CustomTextInput extends Component {
  render() {
    return (
      <View style={styles.inputWrap}>
        <View style={styles.iconWrap}>
          <Image
            source={this.props.imageIcon}
            style={applicationStyles.iconInputField} />
        </View>
        <TextInput
          placeholderTextColor={this.props.placeholderTextColor ? this.props.placeholderTextColor: Colors.Alto}
          placeholder={this.props.placeholder}
          style={applicationStyles.inputField}
          secureTextEntry={this.props.secureTextEntry}
          underlineColorAndroid={Colors.transparent}
        />
      </View>
    );
  }
}

CustomTextInput.propTypes = {
  imageIcon: PropTypes.number.isRequired,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string
};

const styles = StyleSheet.create({
  inputWrap: {
    paddingLeft: Metrics.paddingLeft,
    height: Metrics.inputFieldHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'green',
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCC",
  },
  iconWrap: {
    padding: Metrics.padding,
    marginLeft: 2*Metrics.marginHorizontal,
    // backgroundColor: 'red'
  }
});
