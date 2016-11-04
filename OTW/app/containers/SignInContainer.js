import React from 'react';
import {connect} from 'react-redux';

import {updateUser, removeUser} from '../actions/userActions';
import SignIn from '../components/SignIn';

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    user: state.userState
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    removeUser: () => dispatch(removeUser())
  };
}

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;