import { fromJS } from 'immutable'
import * as headerTypes from './actionTypes'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
})

export default function searchStatus(state = defaultState, action) {
  switch (action.type) {
    case headerTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case headerTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case headerTypes.SEARCH_ENTER:
      return state.set('mouseIn', true)
    case headerTypes.SEARCH_OUT:
      return state.set('mouseIn', false)
    default:
      return state
  }
}
