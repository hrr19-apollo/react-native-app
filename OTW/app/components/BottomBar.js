import React from 'react';
import _addHelpie from '../utils/firebaseApp';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from './Button';

const BottomBar = ({location}) => (
  <View style={[styles.shadow, styles.bar]}>
    <Text>Lat: {location && location.get('lat')}</Text>
    <Text>Long: {location && location.get('long')}</Text>
    <Button
      label='Request Help'
      onPress={()=> _addHelpie()}
    />
  </View>
);

const styles = {
  shadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: -3,
      width: 1
    }
  },
  bar: {
    flexDirection: 'column',
    backgroundColor: '#FFF5EE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  }
};

export default BottomBar;