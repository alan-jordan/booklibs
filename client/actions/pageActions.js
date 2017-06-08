import request from 'superagent'

export const setNewImage = (text, imgUrl) => {
  console.log('hitting the action')
  return {
    type: 'SET_IMAGE',
    imgUrl,
    text
  }
}

// Needs to use the getGif stuff that S+B are writing
// Have that return another dispatch which will add
// To the page state

export function setImage () {
  return (dispatch) => {
    request
      .get(`/api/greetings`) // this will be search giphy business
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(res.body)
        dispatch(setNewImage(res.body))
      })
  }
}

// Alan, here's what I think we might be going for with state\
// state.page = [
//   {
//     id: 0,
//     img: {
//       img-id: 0,
//       url: 'http://google.com',
//       on: true,
//       text: 'wordforimage'
//     },
//     {
//       img-id: 1,
//       url: 'http://google.com',
//       on: true,
//       text: 'wordforimage'
//     },
//     {
//       img-id: 2,
//       url: 'http://google.com',
//       on: true,
//       text: 'wordforimage'
//     },
//     {
//       img-id: 3,
//       url: 'http://google.com',
//       on: false,
//       text: 'wordforimage'
//     },
//
//     pageVisible: true,
//     allImagesOn: false
//   }
// ]
