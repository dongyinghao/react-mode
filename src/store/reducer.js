import { combineReducers } from 'redux-immutable'
import { reducer as header } from '../components/header/store'
import { reducer as home } from '../pages/home/store'
import { reducer as basic } from '../pages/basic/store'

const reducer = combineReducers ({
  header, home, basic
});

export default reducer
