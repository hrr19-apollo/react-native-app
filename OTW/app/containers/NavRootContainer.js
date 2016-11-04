import React from 'react';
import {connect} from 'react-redux';

import {push, pop} from '../actions/navActions';
import NavRoot from '../components/NavRoot';

const mapStateToProps = (state) => {
  return {
    navigation: state.navigationState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    updateUser: () => dispatch()
  };
};

const NavRootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavRoot);

export default NavRootContainer;