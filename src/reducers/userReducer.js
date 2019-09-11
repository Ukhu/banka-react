import * as types from '../actions/actionTypes';

const initialState = JSON.parse(window.localStorage.getItem('user')) || {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
};

export default userReducer;
