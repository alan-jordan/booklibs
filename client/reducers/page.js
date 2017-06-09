let clone = require('clone')

function page (state =
    {
      field0: {
        image:'http://placekitten.com/g/200/200'
      },
      field1: {
        image:'http://placekitten.com/g/200/200'
      },
      field2: {
        image:'http://placekitten.com/g/200/200'
      },
      field3: {
        image:'http://placekitten.com/g/200/200'
      }
    }, action) {
  let newState = clone(state)
  switch (action.type) {
    case 'RECEIVE_GIF':
    Object.keys(newState).forEach((field) => {
      if (field === action.id) {
        newState[field] = {
          image: action.image,
          id: action.id
        }
      }
    })
    return newState

    default:
      return state
  }
}

export default page
