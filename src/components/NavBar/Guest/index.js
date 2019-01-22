import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'components/buttons/Button'

import MODAL_TYPES from 'utils/constants/MODAL'

const Guest = ({
  popModal,
  token
}) => (
  <div className='navbar-end'>
    <div className='navbar-item'>
      <div className='buttons'>
        <Button
          text='Sign up'
          color='is-primary'
          modifier='m-r-md'
          onClick={() => popModal(MODAL_TYPES.SIGN_UP)}
        />
        <Button
          text='Login'
          color='is-light'
          onClick={() => popModal(MODAL_TYPES.LOGIN)}
        />
      </div>
    </div>
  </div>
)

export default Guest

