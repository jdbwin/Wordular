import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import SideBar from '../../containers/SideBar'

const App = () => (
  <div className='columns'>
    <SideBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
)

export default App
