import {UPDATE_USER, REMOVE_USER} from './actionTypes';

const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

export { updateUser, removeUser };