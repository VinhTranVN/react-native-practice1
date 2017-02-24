/* @flow */

import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet,
  Text
} from 'react-native';

import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import routes, { listRoutes } from 'config/routes';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        initialRoute={listRoutes[0]}
        renderScene={this.renderScene} />
    );
  }

  renderScene(route, navigator){
    switch (route.id){
      case 'signin':
        return routes.getSignInRoute(navigator);
      case 'signup':
        return routes.getSignUpRoute(navigator);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
