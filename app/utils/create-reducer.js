'use strict'

export default function createReducer (initialState, actionHandlers) {
  return (state = initialState, action) => {
  	// console.log("fuck the state"+state);
    const reduceFn = actionHandlers[action.type]
    if (!reduceFn) return state
    // Looks it works like Object.assign
    return { ...state, ...reduceFn(state, action) }
  }
}
