import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button';
import Badge from './Badge';

const Menu = ({_handleForwardAction, closeControlPanel, logout, user}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => _handleForwardAction('help')}
        label='Help'
      />
      <Button
        onPress={closeControlPanel}
        label="Close Panel"
        style={{backgroundColor: 'red'}}
      />
      <Button
        onPress={() => _handleForwardAction('logout')}
        label="Log Out"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 30,
  }
});

export default Menu;