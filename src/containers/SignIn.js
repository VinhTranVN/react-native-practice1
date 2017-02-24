/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Navigator
} from 'react-native';

import CircleImageView from 'components/CircleImageView/CircleImageView';
import CustomTextInput from 'components/CustomTextInput/CustomTextInput';
import applicationStyles from 'config/applicationStyle';
import Colors from 'config/colors';
import { listRoutes } from 'config/routes';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignIn() {
    //
    Alert.alert( 'Account Info', `username =${this.state.username} - password=${this.state.password}`);
  }

  handleSignUp() {
    //Using Navigator to push SignUp screen
    console.log(this.props);
    this.props.navigator.push(listRoutes[1]);
    // this.props.navigator.push({
    //   id: 'signup',
    //   title: 'Sign Up',
    //   pasProp: movie,
    // })
  }

  render() {
    return (
       <Image
          style={applicationStyles.splashScreen}
          source={require('assets/images/bg_signin.png')}>
          <View style={applicationStyles.halfHeight}>
            <CircleImageView
              height={120}
              imagelink={require('assets/images/check_red.png')}/>
          </View>
          <View style={applicationStyles.quarterHeight}>
            <CustomTextInput
              onChangeText={(text) => this.setState({username: text})}
              keyboardType={'email-address'}
              placeholder={'UserName'}
              imageIcon={require('assets/images/user_name.png')} />
            <CustomTextInput
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={true}
              placeholder={'Password'}
              imageIcon={require('assets/images/password.png')} />
            <TouchableOpacity
              activeOpacity={.5}>
                <Text style={styles.forgotPasswordText}>
                  Forgot Password?
                </Text>
            </TouchableOpacity>
          </View>
          <View style={[applicationStyles.quarterHeight, {justifyContent: 'flex-end'}]}>
            <TouchableOpacity activeOpacity={.5} onPress={this.handleSignIn}>
              <View style={styles.signinButton}>
                <Text style={styles.signinText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={.5} onPress={this.handleSignUp}>
                <Text style={styles.signupLinkText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Image>
    );
  }
}

SignIn.propTypes = {
  login: PropTypes.func
};

var styles = StyleSheet.create({
  forgotPasswordText: {
    color: Colors.Alto,
    backgroundColor: Colors.transparent,
    textAlign: 'right',
    paddingRight: 15,
    paddingTop: 10
  },
  signinButton: {
    height: 60,
    backgroundColor: Colors.radicalRed,
    alignItems: "center",
    justifyContent: "center"
  },
  signinText: {
    color: "#FFF",
    fontSize: 18
  },
  signupWrap: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountText: {
    color: "#D8D8D8",
    backgroundColor: Colors.transparent
  },
  signupLinkText: {
    color: "red",
    marginLeft: 5,
    backgroundColor: Colors.transparent
  }
});
