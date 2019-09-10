import * as types from '../actions/actionTypes';

const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_BANK_ACCOUNT:
      return { ...state, ...action.accountDetails };
    default:
      return state;
  }
};

export default accountReducer;
