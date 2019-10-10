
const defaultState = {
  focused: false,
  mouseIn: false,
}

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
