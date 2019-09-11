import * as types from '../actions/actionTypes';

const initialState = JSON.parse(window.localStorage.getItem('accountDetails')) || {};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_BANK_ACCOUNT:
      return { ...state, ...action.accountDetails };
    default:
      return state;
  }
};

export default accountReducer;
