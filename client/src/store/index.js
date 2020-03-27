// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import combineReducers from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import registerMiddleware from '../middleware/registerMiddleware';
import authMiddleware from '../middleware/authMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, registerMiddleware, authMiddleware)
);

// == Store
const store = createStore(
  combineReducers,
  // preloadedState,
  enhancers
);

// == Export
export default store;
