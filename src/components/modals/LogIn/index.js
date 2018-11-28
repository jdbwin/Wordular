import React from 'react'

import LoginContainer from '../../../containers/Authentication/Login'

import './styles.css'

const LogIn = () => (
  <div className="modal-card">
    <header className="modal-card-head">
      <span className="is-centered">Login to access your words</span>
    </header>
    <section className="modal-card-body">

      <LoginContainer />

    </section>
    <footer className="modal-card-foot">
      <button className="button is-fullwidth is-success">Log In</button>
    </footer>
  </div>
)

export default LogIn

