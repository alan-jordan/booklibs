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

const searchError = (message) => {
  return {
    type: 'SEARCH_ERROR',
    message
  }
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
          dispatch(searchError(err.message))
        } else {
          let result = processGif(imageID, query, res.body)
          dispatch(receiveGif(result))
        }
      })
  }
}

module.exports = {
  fetchGif,
  receiveGif
}
