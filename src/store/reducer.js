
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from './moduels/header'

const reducer = combineReducers({
  header: headerReducer,
})

export default reducer
