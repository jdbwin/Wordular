import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import MyWords from '../MyWords'
import SideBar from '../SideBar'

const App = () => (
  <div>
    <SideBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/my-words" component={MyWords} />
    <Route exact path="/about" component={About} />
  </div>
)

export default App
