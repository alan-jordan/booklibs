import React from 'react'
import {connect} from 'react-redux'

import {setImage} from '../actions/pageActions'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleKeyUp(e) {
    if (e.key == 'Enter') {
      console.log(e.target.name)
      this.props.dispatch(setImage(e.target.name, e.target.value, 'http://google.com'))
    }
  }


  render() {
    return (
      <div className='cover'>
        <div className='spine'></div>
        <div className='page'>
          <p>This is a story
            <input onKeyUp={(e) => this.handleKeyUp(e)} name='field0' type='text'/>. Someone did
            <input onKeyUp={(e) => this.handleKeyUp(e)} name='field1' type='text'/>
            and then
            <input onKeyUp={(e) => this.handleKeyUp(e)} name='field2' type='text'/>. Because
            <input onKeyUp={(e) => this.handleKeyUp(e)} name='field3' type='text'/>.
          </p>
          <div className='images'>
            <div className='image'>
              <img className='gif' src='http://placekitten.com/g/200/200'/>
            </div>
            <div className='image'>
              <img className='gif' src='http://placekitten.com/g/200/200'/>
            </div>
            <div className='image'>
              <img className='gif' src='http://placekitten.com/g/200/200'/>
            </div>
            <div className='image'>
              <img className='gif' src='http://placekitten.com/g/200/200'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.page}
}

export default connect(mapStateToProps)(Page)
