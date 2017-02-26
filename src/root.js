/* @flow */

import React, { Component } from 'react';
import {
  View,
  Navigator,
  Text,
  TouchableHighlight,
  Image,
  Alert,
  StyleSheet
} from 'react-native';

import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import routes, { listRoutes } from 'config/routes';
import applicationStyles from 'config/applicationStyle';

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    console.log('### navState = ' + navState + ' index = ' + index);
    if (index > 0) {
      return (
        <TouchableHighlight underlayColor='transparent'
          onPress={() => {navigator.pop();}}>
          <Image
            style={[applicationStyles.iconNavigationItem, applicationStyles.leftNavigationItem]}
            source={require('assets/images/back.png')}
            resizeMode={'contain'} />
        </TouchableHighlight>
      );
    }
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return null;
  }
};

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        initialRoute={listRoutes[0]}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar style={styles.navbar}
              routeMapper={NavigationBarRouteMapper}
              navigationStyles={Navigator.NavigationBar.StylesIOS}
          />
        }
        configureScene={this.configureScene}
      />
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
  navbar:{
    backgroundColor: 'transparent',
    alignItems: 'center'
  }
});
