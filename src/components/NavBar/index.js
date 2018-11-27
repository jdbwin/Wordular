import React from "react"
import { NavLink } from "react-router-dom"

import Button from "../../components/buttons/Button"

import MODAL_TYPES from '../../utils/constants/MODAL'

import "./navbar.css"

const NavBar = ({ popModal  }) => (
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
          <span className="navbar-link">
            More
          </span>

          <div className="navbar-dropdown">
            <NavLink className="navbar-item is-tab" activeClassName="is-active" to="/about">Settings</NavLink>
          </div>

        </div>
      </div>

    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Button
            text="Sign up"
            color="is-primary"
            modifier="m-r-md"
            onClick={() => popModal(MODAL_TYPES.SIGN_UP)}
          />
          <Button
            text="Log in"
            color="is-light"
            onClick={() => popModal(MODAL_TYPES.LOG_IN)}
          />
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar

