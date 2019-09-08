import { combineReducers } from 'redux';
import accounts from './accountReducer';
import currentUser from './userReducers';

const rootReducer = combineReducers({
  accounts,
  currentUser,
});

export default rootReducer;
