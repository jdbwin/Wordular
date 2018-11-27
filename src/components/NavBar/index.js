import React from "react"
import { NavLink } from "react-router-dom"

import ListButton from "../../components/buttons/ListButton"

import "./navbar.css"

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <NavLink className=" navbar-item" to="/">
        Wordular
      </NavLink>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">

      <div className="navbar-start">
        <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/my-words">My Words</NavLink>

        <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/vocabulary-builder">Vocabulary Builder</NavLink>
        <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/about">Trending</NavLink>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>

          <div className="navbar-dropdown">
            <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/about">Settings</NavLink>
          </div>

        </div>
      </div>

    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar

