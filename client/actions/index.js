var request = require('superagent')

const receiveGiphy = (gif) => {
  return {
    type: 'RECEIVE_GIPHY',
    image: gif
  }
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

          dispatch(receiveGif(res.body))
        }
      })
  }
}
