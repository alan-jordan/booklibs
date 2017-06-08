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
         <Route path="/library" component= {Library} />
         <Route path="/page" component= {Page} />
         <Route path="/end" component= {TheEnd} />
      </div>
   </Router>
)

export default App
