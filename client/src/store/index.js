// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import combineReducers from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import registerMiddleware from '../middleware/registerMiddleware';
import authMiddleware from '../middleware/authMiddleware';
import constellationMiddleware from '../middleware/constellationMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    registerMiddleware,
    authMiddleware,
    constellationMiddleware
  )
);

// == Store
const store = createStore(
  combineReducers,
  // preloadedState,
  enhancers
);

// == Export
export default store;
