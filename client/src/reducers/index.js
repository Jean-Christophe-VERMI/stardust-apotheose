import { combineReducers } from 'redux';
import register from './register';
import nav from './nav';
import login from './login';
import auth from './auth';
import threads from './threads';

export default combineReducers({
  threads,
  nav,
  login,
  auth,
  register,
});
