import { combineReducers } from 'redux';
import accountDetails from './accountReducer';
import currentUser from './userReducer';

const rootReducer = combineReducers({
  accountDetails,
  currentUser,
});

export default rootReducer;
