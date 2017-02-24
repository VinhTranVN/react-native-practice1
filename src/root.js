/* @flow */

import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';
import routes, { listRoutes } from 'config/routes';
import applicationStyles from 'config/applicationStyle';

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    console.log('### navState = ' + navState + ' index = ' + index);
    if (index > 0) {
      return (
        <TouchableHighlight underlayColor='transparent'
          onPress={() => {navigator.pop();}}>
          <Image
            style={applicationStyles.iconNavigationItem}
            source={require('assets/images/back.png')}
            resizeMode={'contain'} />
        </TouchableHighlight>
      )
    }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) {
      return (
        <TouchableHighlight
          onPress={ () => route.onPress() }>
          <Text style={ styles.rightNavButtonText }>
              { route.rightText || 'Right Button' }
          </Text>
        </TouchableHighlight>
      )
    }
  },
  Title(route, navigator, index, navState) {
    return null
  }
};

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        initialRoute={listRoutes[0]}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar style={styles.navbar}
              routeMapper={NavigationBarRouteMapper}
              navigationStyles={Navigator.NavigationBar.StylesIOS}/>
        }
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
