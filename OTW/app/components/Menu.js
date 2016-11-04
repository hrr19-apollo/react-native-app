import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button';
import Badge from './Badge';

const Menu = ({_handleForwardAction, closeControlPanel, user}) => {
  return (
    <View style={styles.container}>
      <Badge user={user} />
      <Button
        onPress={() => _handleForwardAction('help')}
        label='Help'
      />
      <Button
        onPress = {() => _handleForwardAction('helper')}
        label="Helper"
      />
      <Button
        onPress={() => _handleForwardAction('groupChat')}
        label="Group Chat"
      />
      <Button
        onPress={() => _handleForwardAction('inviteFriends')}
        label="Invite Friends"
      />
      <Button
        onPress={closeControlPanel}
        label="Close Panel"
        style={{backgroundColor: 'red'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d8764',
  }
});

export default Menu;