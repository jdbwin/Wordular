import React from "react"
import { Link } from "react-router-dom"

import ListButton from '../../components/buttons/ListButton'

import "./sidebar.css"

const SideBar = ({ toggleSideBar, isVisible }) => (
  <span>
    <button onClick={toggleSideBar} className={isVisible ? "is-hidden" : ""}>Show Menu</button>
    <div className={"column is-one-fifth " +  (isVisible ? "" : "is-invisible")} styleName="main">
      <button onClick={toggleSideBar}>Hide Menu</button>
      <nav>
        <Link className='is-paddingless' to='/'><h1 className='is-size-1 has-text-centered'>Wordular</h1></Link>
        <ul className="menu-list">
          <ListButton text="My Words" onClick={() => {}} />
          <ListButton text="Trending" />
          <ListButton text="Types" />
        </ul>
      </nav>
      <Link className='button is-medium' styleName='anchor' to='/about-us'>Settings</Link>
    </div>
  </span>
)

export default SideBar

