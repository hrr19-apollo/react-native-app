import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button';
import Badge from './Badge';
import RemoveUser from '../actions/userActions';
import REMOVE_USER from '../actions/actionTypes';
import SignIn from './SignIn';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {updateUser, removeUser} from '../actions/userActions';

const Menu = ({_handleForwardAction, closeControlPanel, user}) => {
  function logout() {
    GoogleSignin.revokeAccess()
    .then(() => GoogleSignin.signOut())
    .then(this.props.removeUser.bind(this))
    .done();
  }

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
      <Button
        onPress={logout}
        label="Log Out"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d8764',
  },
  logout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d8764',
  }
});

export default Menu;