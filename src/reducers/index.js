import { combineReducers } from 'redux';
import accounts from './accountReducer';

const rootReducer = combineReducers({
  accounts,
});

export default rootReducer;
