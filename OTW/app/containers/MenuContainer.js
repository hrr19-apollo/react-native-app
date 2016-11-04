import {connect} from 'react-redux';

import Menu from '../components/Menu';

const mapStateToProps = (state) => {
  return {
    user: state.userState
  };
};

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;