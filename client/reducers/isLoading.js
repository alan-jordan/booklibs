function isLoading (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_LOADING_ON':
      return true
    case 'TOGGLE_LOADING_OFF':
      return false
    default:
      return state
  }
}

export default isLoading
