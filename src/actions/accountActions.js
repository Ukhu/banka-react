import axios from 'axios';
import * as types from './actionTypes';

export const createBankAccountSuccess = (accountDetails) => (
  { type: types.CREATE_BANK_ACCOUNT, accountDetails }
);

export const createBankAccount = (accountType) => ((dispatch) => (axios.post('https://osaukhu-banka.herokuapp.com/api/v1/accounts', {
  type: accountType,
}, { headers: { 'x-access-token': `${window.localStorage.token}` } }).then(({ data }) => {
  const { accountNumber, type, openingBalance } = data.data[0];
  const accountDetails = {
    accountNumber,
    type,
    openingBalance,
  };
  dispatch(createBankAccountSuccess(accountDetails));
}).catch((error) => {
  throw (error);
})));
