import * as headerTypes from './actionTypes'

export const onFocus = () => ({
  type: headerTypes.SEARCH_FOCUS,
})

export const onBlur = () => ({
  type: headerTypes.SEARCH_BLUR,
})

export const onMoveEnter = () => ({
  type: headerTypes.SEARCH_ENTER,
})

export const onMoveOut = () => ({
  type: headerTypes.SEARCH_OUT,
})
