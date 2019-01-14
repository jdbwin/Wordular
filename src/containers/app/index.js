import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'containers/Home'
import About from 'containers/About'
import MyWords from 'containers/Authenticated/MyWords'
import VocabularyBuilder from 'containers//Words/VocabularyBuilder'
import NavBar from 'containers/NavBar'
import Modal from 'containers/Modal'

const App = () => (
  <div>
    <Modal />
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/my-words" component={MyWords} />
    <Route exact path="/vocabulary-builder" component={VocabularyBuilder} />
    <Route exact path="/about" component={About} />
  </div>
)

export default App
