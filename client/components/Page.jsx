import React from 'react'
import {connect} from 'react-redux'
import {setImage} from '../actions/pageActions'
import {fetchGif} from '../actions'

class Page extends React.Component {

  handleKeyUp(e) {
    if (e.key == 'Enter') {
      console.log(e.target.name)
      this.props.dispatch(fetchGif(e.target.name, e.target.value, 'http://google.com'))
    }
  }

  render() {
    return (
      <div className='story'>
        <div className='cover'>
          <div className='spine'></div>
          <div className='page'>

            <p>Our story begins with a
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field0' type='text'/>
              called '*****'.
            </p>
            <p>Nothing that '*****' did made any sense to sensible people. Things like
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field1' type='text'/>.
            </p>
            <p>This made all the grown ups-feel
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field2' type='text'/>.
            </p>
            <p>Because the grown-ups were
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

          <div className='page'>
            <p>One day '***** ' didn't come out to hang with his grown-up friends.
            </p>
            <p>This was because
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field0' type='text'/>.
            </p>
            <p>The grown-ups all thought this was very
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field1' type='text'/>.
            </p>
            <p>They decided to
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field2' type='text'/>
              and it made '*****' feel
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

          <div className='page'>
            <p>So together they all
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field0' type='text'/>.
            </p>
            <p>They used
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field1' type='text'/>
              and
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field2' type='text'/>.
            </p>
            <p>This helped '*****' and all the grown-ups become friends again.
            </p>
            <p>And they all lived
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field3' type='text'/>
              ever after.
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
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {state: state.page}
}

export default connect(mapStateToProps)(Page)
