import React from 'react'

import './styles.scss'

const Button = ({ text, color, onClick, modifier, disabled = false, type = '' }) => (
  <span className="control">
    <button
      className={`button is-medium ${ color && color } ${ modifier && modifier }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  </span>
)

export default Button

