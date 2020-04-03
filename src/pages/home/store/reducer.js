import { fromJS } from 'immutable'
import * as contants from './constants'

const defaultState = fromJS({
  articleList: [],
  recommendList: []
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case contants.DATAINIT:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    default:
      return state
  }
};