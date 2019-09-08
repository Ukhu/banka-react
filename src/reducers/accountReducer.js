import * as types from '../actions/actionTypes';

const accountReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNTS:
      return [...state, action.account];
    default:
      return state;
  }
};

export default accountReducer;
