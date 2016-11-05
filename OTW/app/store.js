import {createStore} from 'redux';

import rootReducer from './reducers/rootReducer';

const configureStore = () => { 
  const store = createStore(rootReducer);

  //configure for hot module reloading in dev environmet;
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

const store = configureStore();

export default store;