import axios from 'axios';
import * as types from './actionTypes';

export const signupSuccess = (user) => ({ type: types.SIGNUP_USER, user });

export const signupUser = (user) => ((dispatch) => (axios.post('https://osaukhu-banka.herokuapp.com/api/v1/auth/signup', {
  ...user,
}).then(({ data }) => {
  dispatch(signupSuccess(data.data[0]));
  const [currentUser] = data.data;
  window.localStorage.setItem('user', JSON.stringify(currentUser));
}).catch((error) => {
  throw (error);
})));
