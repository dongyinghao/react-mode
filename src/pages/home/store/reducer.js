import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  articleList: [],
  recommendList: []
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.DATAINIT:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    default:
      return state
  }
};