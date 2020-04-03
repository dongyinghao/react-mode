import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.ONFOCUS:
      return state.set('focus', true);
    case constants.ONBLUR:
      return state.set('focus', false);
    default:
      return state
  }
};