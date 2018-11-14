import React from "react"
import { Link } from "react-router-dom"

import ListButton from '../../components/buttons/ListButton'

import "./sidebar.css"

const SideBar = ({ toggleSideBar, isVisible }) => (
  <span>

    <button
      onClick={toggleSideBar}
      className={`button ${isVisible ? "is-hidden" : ""}`}
      styleName="toggle-button"
    >
      Show Menu
    </button>

    <div className={"column is-one-fifth " +  (isVisible ? "" : "is-hidden")} styleName="main">
      <button className='button' onClick={toggleSideBar}>Hide Menu</button>
      <nav>
        <Link className='is-paddingless' to='/'>
          <h1 className='is-size-1 has-text-centered'>Wordular</h1>
        </Link>
        <ul className="menu-list">
          <Link className="button is-medium m-b-md" to="/my-words">My Words</Link>
          <Link className="button is-medium m-b-md" to="/vocabulary-builder">Vocabulary Builder</Link>
          <Link className="button is-medium m-b-md" to="/my-words">Trending</Link>
        </ul>
      </nav>
      <Link className='button is-medium' styleName='anchor' to='/about'>Settings</Link>
    </div>

  </span>
)

export default SideBar

