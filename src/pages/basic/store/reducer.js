import { fromJS } from 'immutable'
import * as contants from './constants'

const defaultState = fromJS({
  login: false
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case contants.LOGIN:
      return state.merge({
        login: true
      });
    case contants.LOGOUT:
      localStorage.clear();
      return state.merge({
        login: false
      });
    default:
      return state
  }
};