import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Button from './Button';
import SignIn from './SignIn';

const LandingPage = ({_handleForwardAction}) => (
  <View style={styles.fullPageView}>
    <Image source={require('../assets/LoginBG.jpg')} style={styles.background}></Image>
    <View style={styles.imageContainer}>
      <Image source={require('../assets/CompassWordmark.png')} style={styles.header}></Image>
    </View>
      
      <Button
        customStyles={{button: styles.loginButton, buttonText: styles.loginButtonText}}
        label='Sign In'
        onPress={() => _handleForwardAction('signIn')}
      />
  </View>
);

const styles = {
  fullPageView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',

    position: 'absolute',
    top: 0,
    left: 0,
  },
  header: {
    flex: 1,
    width: Dimensions.get('window').width - 100,
    height: undefined,
    resizeMode: 'contain',
  },
  imageContainer: {
    height: 100,
  },
  loginButton: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 140,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
};

export default LandingPage;