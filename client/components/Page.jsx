import React from 'react'
import {connect} from 'react-redux'
import {setImage} from '../actions/pageActions'
import {fetchGif} from '../actions'

class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: props.page
    }
  }

// Remove console logs throughout.

  handleKeyUp(e) {
    if (e.key == 'Enter') {
      this.props.dispatch(fetchGif(e.target.name, e.target.value))
    }
  }

  componentDidMount() {} // remove or use.

  componentWillReceiveProps(nextProps) {
    this.setState({page: nextProps.page})
  }

  render() {
    console.log("rending")
    return (
      <div className='story'>
        <div className='cover'>
          <div className='spine'><img src="/images/spine.jpg" /></div>
          <div className='page'>

            <p>Our story begins with a
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field0' type='text'/>
              called
              <input type='text'/>.
            </p>
            <p>Nothing that
              <input type='text'/>
              did made any sense to sensible people. Things like <input onKeyUp={(e) => this.handleKeyUp(e)} name='field1' type='text'/>.
            </p>
            <p>This made all the grown ups-feel
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field2' type='text'/>.
            </p>
            <p>Because the grown-ups were
              <input onKeyUp={(e) => this.handleKeyUp(e)} name='field3' type='text'/>.
            </p>
            <div className='images'>
              <div className='image'>
                {console.log(this.state.page)}
                <img className='gif' src={this.state.page.field0.image}/>
              </div>
              <div className='image'>
                <img className='gif' src={this.state.page.field1.image}/>
              </div>
              <div className='image'>
                <img className='gif' src={this.state.page.field2.image}/>
              </div>
              <div className='image'>
                <img className='gif' src={this.state.page.field3.image}/>
              </div>
            </div>
          </div>


        </div>
        <div id="next-page">
          <a href="#/end">Next page</a>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  console.log("mapping")
  return {page: state.page}
}

export default connect(mapStateToProps)(Page)
