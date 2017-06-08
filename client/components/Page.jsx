import React from 'react'
import {connect} from 'react-redux'
import {fetchGif} from '../actions'

class Page extends React.Component {

  handleClick(){

    this.props.dispatch(fetchGif('superman'))

  }

render() {
  return  (
   <div className='story'>
      <div className='cover'>
         <div className='spine'>
            </div>
         <div className='page'>
          <button className='search' onClick={this.handleClick.bind(this)}>Go</button>

            <p>Our story begins with a _______ called '*****'.
            </p>
            <p>Nothing that '*****' did made any sense to sensible people. Things like _______.
            </p>
            <p>This made all the grown ups-feel _______.
            </p>
            <p>Because the grown-ups were _________.
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
            <p>This was because _______.
            </p>
            <p>The grown-ups all thought this was very _______.
            </p>
            <p>They decided to _________ and it made '*****' feel _________.
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
            <p>So together they all _______________.
            </p>
            <p>They used _________ and ____________.
            </p>
            <p>This helped '*****' and all the grown-ups become friends again.
            </p>
            <p>And they all lived ____________ ever after.
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
Page = connect()(Page)
export default Page
