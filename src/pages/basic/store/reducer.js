import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  token: ''
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return state.merge({
        token: action.token
      });
    case constants.LOGOUT:
      localStorage.clear();
      return state.merge({
        token: ''
      });
    default:
      return state
  }
};