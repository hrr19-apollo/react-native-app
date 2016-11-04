import React, { Component } from 'react';

const firebase = require('firebase');
const getRef = require('../utils/firebaseApp');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  MapView,
  ListView
} from 'react-native';


import UserBarContainer from '../containers/UserBarContainer';
import Button from './Button';
import MapBottomBar from '../components/MapBottomBar';

class Helper extends Component {
  constructor(props) {
    super(props);
    this.helpee = {
      title: '',
      message: ''
    };
  }

  updateHelpee(title = '', message = '') {
    this.helpee = {
      title,
      message
    };
    this.forceUpdate(); //Note: super hacky but works fix later...
  }

  render() {
    return (
      <View style={styles.container}>
        <UserBarContainer
          openControlPanel={this.props.openControlPanel}
        />

        <MapView
          style={{height: 450, margin: 5}}
          showsUserLocation={true}
          followUserLocation={true}
          minDelta={.02}
          annotations={this.props.helpees.toArray().map((item) => {
            const superUpdate = this.updateHelpee.bind(this);
            return Object.assign(item, {onFocus: function() {
              superUpdate(this.title, this.message);
            }});
          })}
        />

        <MapBottomBar helpee={this.helpee} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default Helper;