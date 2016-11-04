import {UPDATE_LOCATION} from './actionTypes';

const updateLocation = ({lat, long}) => {
  return {
    type: UPDATE_LOCATION,
    loc: { lat, long }
  };
};

export { updateLocation };