import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  articleList: [],
  userInfo: {}
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.DATAINIT_USER:
      return state.merge({
        articleList: fromJS(action.articleList),
        userInfo: fromJS(action.userInfo)
      });
    default:
      return state
  }
};