import { combineReducers } from 'redux-immutable'
import { reducer as header } from '../components/header/store'
import { reducer as home } from '../pages/home/store'
import { reducer as basic } from '../pages/basic/store'
import { reducer as search } from '../pages/search/store'

const reducer = combineReducers ({
  header, home, basic, search
});

export default reducer
