import {connect} from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    user: state.userState
  };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;