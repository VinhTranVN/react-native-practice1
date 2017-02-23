import {
  StyleSheet
} from 'react-native';

import Metrics from './metrics';
import Colors from './colors';

const ApplicationStyles = {
  splashScreen: {
    flex: 1,
    width: null,
    height: null
  },
  button: {
    backgroundColor: Colors.buttonBackground,
    borderColor: Colors.buttonBackground,
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: Metrics.buttonRadius
  },
  inputField: {
    flex: 1,
    height: 40,
    padding: Metrics.padding,
    color: Colors.white,
    backgroundColor: Colors.transparent,
    borderRadius: Metrics.borderRadius
  },
  iconInputField: {
    padding: Metrics.padding,
    height: Metrics.icons.small,
    width: Metrics.icons.small,
    resizeMode: 'contain',
    backgroundColor: 'red'
  }
};

export default ApplicationStyles;
