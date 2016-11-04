import {connect} from 'react-redux';

import BottomBar from '../components/BottomBar';

const mapStateToProps = (state) => {
  return {
    location: state.locationState
  };
};

const BottomBarContainer = connect(mapStateToProps, null)(BottomBar);

export default BottomBarContainer;