import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Cover from './Cover'
import Library from './Library'
import Page from './Page'
import TheEnd from './TheEnd'

const App = () => (
   <Router>
      <div className='app-container'>
         <Header />
         <Route path="/cover" component= {Cover} />
         //<Route path='/' component={Cover} /> So that we see cover on homepage
         <Route path="/library" component= {Library} />
         //Finish the library path and make the link to the first story go to the new home page that contains the cover.
         <Route path="/page" component= {Page} />
         <Route path="/end" component= {TheEnd} />
      </div>
   </Router>
)

//Use the header on the home page to link back to the start so the user can select a new story if they wanted to.

// good to see you created the majority of the work for more stories and headed towards auth.

export default App
