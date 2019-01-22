import React,  { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'components/buttons/Button'

import MODAL_TYPES from 'utils/constants/MODAL'

const Authed = ({
  popModal
}) => (
  <Fragment>
    <div className='navbar-menu'>
      <div className='navbar-start'>

        <NavLink
          className='navbar-item is-tab'
          activeClassName='is-active'
          to='/my-words'
        >
          My Words
        </NavLink>

        <NavLink
          className='navbar-item is-tab'
          activeClassName='is-active'
          to='/vocabulary-builder'
        >
          Vocabulary Builder
        </NavLink>

        <div className='navbar-item has-dropdown is-hoverable'>
          <span className='navbar-link'>
            More
          </span>

          <div className='navbar-dropdown'>
            <NavLink
              className='navbar-item'
              to='/stats'
            >
              Stats
            </NavLink>

            <NavLink
              className='navbar-item'
              to='/settings'
            >
              Settings
            </NavLink>

          </div>
        </div>
      </div>
    </div>

    <div className='navbar-end'>
      <div className='navbar-item'>
        <div className='buttons'>
          <Button
            text='Logout'
            color='is-danger'
            modifier='m-r-md'
            onClick={() => popModal(MODAL_TYPES.LOGOUT)}
          />
        </div>
      </div>
    </div>
  </Fragment>
)

export default Authed


