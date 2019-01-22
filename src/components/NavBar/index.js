import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'components/buttons/Button'

import MODAL_TYPES from 'utils/constants/MODAL'

import Authed from './Authed'
import Guest from './Guest'

import './styles.scss'

const NavBar = ({
  popModal,
  token
}) => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <NavLink className=' navbar-item' to='/'>
        Wordular
      </NavLink>
    </div>

    {token ? <Authed popModal={popModal} /> : <Guest popModal={popModal} />}

  </nav>
)

export default NavBar

