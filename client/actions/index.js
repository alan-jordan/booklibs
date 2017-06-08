var request = require('superagent')

const receiveGif = (gif) => {
  console.log(gif)
  return {
    type: 'RECEIVE_GIF',
    image: gif
  }
}

const searchError = (message) => {
  return {
    type: 'SEARCH_ERROR',
    message
  }
}

function processGif(query, data) {
 let keyword = query
 let url  = data.data.images.fixed_width.url
 let gif = {keyword, url}
 return gif
}

function fetchGif (query) {
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
          let result = processGif(query, res.body)
          dispatch(receiveGif(result))

        }
      })
  }
}


module.exports = {
  fetchGif,
  receiveGif
}
