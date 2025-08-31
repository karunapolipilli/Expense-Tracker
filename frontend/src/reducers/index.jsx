import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import income from './income';
import expense from './expense';

export default combineReducers({
  alert,
  auth,
  income,
  expense
});
