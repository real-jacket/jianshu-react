import * as headerTypes from './actionTypes'

export const onFoucus = () => ({
  type: headerTypes.SEARCH_FOCOUS,
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
