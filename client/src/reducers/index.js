import { combineReducers } from 'redux';
import register from './register';
import nav from './nav';
import login from './login';
import auth from './auth';

export default combineReducers({
  nav,
  login,
  auth,
  register,
});
