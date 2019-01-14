import React from 'react'

import './styles.css'

import Login from './Login'
import SignUp from './SignUp'
import Logout from './Logout'

import TYPES from 'utils/constants/MODAL'

const Modal = ({
  createUser,
  isVisible,
  modalType,
  toggleModal
}) => (
  <div className={`modal ${isVisible && 'is-active'}`}>
    <div className="modal-background"></div>
    {modalType === TYPES.LOGIN && <Login />}
    {modalType === TYPES.SIGN_UP && <SignUp createUser={createUser} />}
    {modalType === TYPES.LOGOUT && <Logout />}
    <button onClick={toggleModal} className="modal-close is-large" aria-label="close"></button>
  </div>
)

export default Modal

