import {PUSH_ROUTE, POP_ROUTE} from './actionTypes.js';

const push = (route) => {
  return {
    type: PUSH_ROUTE,
    route
  };
};

const pop = () => {
  return {
    type: POP_ROUTE
  };
};

export { pop, push };