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

  handleKeyUp(e) {
    if (e.key == 'Enter') {
      this.props.dispatch(fetchGif(e.target.name, e.target.value))
    }
  }

  componentDidMount() {
}

  componentWillReceiveProps(nextProps) {
    this.setState({page: nextProps.page})
    console.log(nextProps);
    console.log("RECEIVED PROPS")
  }
    //update internal state of THIS Component to get new data from props


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
                <img className='gif' id='gif1' src={this.state.page.field0.image}/>
              </div>
              <div className='image'>
                <img className='gif' id='gif2'  src={this.state.page.field1.image}/>
              </div>
              <div className='image'>
                <img className='gif' id='gif3'  src={this.state.page.field2.image}/>
              </div>
              <div className='image'>
                <img className='gif' id='gif4'  src={this.state.page.field3.image}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    page: state.page,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Page)
