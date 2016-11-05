import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import Button from './Button';

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

const styles = StyleSheet.create({
  background: {
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
  footer: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 1
    }
  }
});

export default LandingPage;