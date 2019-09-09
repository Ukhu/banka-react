import * as types from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};

export default userReducer;
