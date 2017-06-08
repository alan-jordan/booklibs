function pages (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_PAGE_VISIBLE':
      return true
    default:
      return state
  }
}

export default pages
