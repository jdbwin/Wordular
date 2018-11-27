import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import MyWords from '../Words/MyWords'
import VocabularyBuilder from '../Words/VocabularyBuilder'
import NavBar from '../NavBar'

const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/my-words" component={MyWords} />
    <Route exact path="/vocabulary-builder" component={VocabularyBuilder} />
    <Route exact path="/about" component={About} />
  </div>
)

export default App
