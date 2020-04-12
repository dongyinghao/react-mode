import { constants } from './index'

export const login = (token) => ({
  type: constants.LOGIN,
  token
});

export const logout = () => ({
  type: constants.LOGOUT
});
