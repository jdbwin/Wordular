import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'containers/Home'
import Modal from 'containers/Modal'
import MyWords from 'containers/Words/MyWords'
import NavBar from 'containers/NavBar'
import Settings from 'containers/Settings'
import Stats from 'containers/Stats'
import VocabularyBuilder from 'containers/Words/VocabularyBuilder'

const App = () => (
  <div>
    <Modal />
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/my-words" component={MyWords} />
    <Route exact path="/vocabulary-builder" component={VocabularyBuilder} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/stats" component={Stats} />
  </div>
)

export default App

