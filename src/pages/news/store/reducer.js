import { constants } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  searchHistoryList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INITSEARCHHISTORY:
      return state.merge({
          searchHistoryList: fromJS(action.data)
      });
    case constants.DELETESEARCHHISTORY:
      const list = action.id ? state.get('searchHistoryList').filter(item => item.get('id') !== action.id) : fromJS([]);
      return state.merge({
        searchHistoryList: list
      });
    default:
      return state
  }
};