import * as types from './actionTypes';

const createAccount = (account) => ({ type: types.CREATE_ACCOUNTS, account });

export default createAccount;
