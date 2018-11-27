import React from 'react'

import './styles.css'

import LogIn from './LogIn'
import SignUp from './SignUp'

import TYPES from '../../utils/constants/MODAL'

const Modal = ({ isVisible, modalType, toggleModal }) => (
  <div className={`modal ${isVisible && 'is-active'}`}>
    <div className="modal-background"></div>
    {modalType === TYPES.LOG_IN && <LogIn />}
    {modalType === TYPES.SIGN_UP && <SignUp />}
    <button onClick={toggleModal} className="modal-close is-large" aria-label="close"></button>
  </div>
)

export default Modal

