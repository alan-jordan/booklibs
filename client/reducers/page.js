function page (state = [], action) {
  switch (action.type) {
    case 'SET_IMAGE':
      return [...action.page]
    default:
      return state
  }
}

export default page
