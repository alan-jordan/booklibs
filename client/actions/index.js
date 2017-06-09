var request = require('superagent')

const receiveGif = (gif) => {

  let id = Object.keys(gif)[0]

  return {
    type: 'RECEIVE_GIF',
    id: id,
    keyword: gif[id].keyword,
    image: gif[id].url
  }
}

export const changeLoadState = (newLoadState) => {
  return newLoadState ?
    {type: 'TOGGLE_LOADING_ON'} :
    {type: 'TOGGLE_LOADING_OFF'}
}

export const changeErrorState = (newErrorState) => {
  return newErrorState ?
    {type: 'TOGGLE_ERROR_ON'} :
    {type: 'TOGGLE_ERROR_OFF'}
}


function processGif(imageID, query, data) {
 let keyword = query
 let url  = data.data.images.fixed_width.url
 let id = imageID
 let gif = {
   [id]: {
     keyword, url
   }
 }
 return gif
}

function fetchGif (imageID, query) {
  return (dispatch) => {
    request
      .get('http://api.giphy.com/v1/gifs/translate')
      .query({
        s: query,
        api_key: 'dc6zaTOxFJmzC'
      })
      .end((err, res) => {
        if (err) {
          dispatch(changeErrorState(true))
        } else {
          let result = processGif(imageID, query, res.body)
          dispatch(changeLoadState(false))
          dispatch(receiveGif(result))
        }
      })
  }
}

module.exports = {
  fetchGif,
  receiveGif,
  changeLoadState,
  changeErrorState
}
