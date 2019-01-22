import React from 'react'

import './styles.scss'

const Button = ({
  color = '',
  disabled = false,
  modifier = '',
  onClick,
  text = '',
  type = ''
}) => (
  <span className="control">
    <button
      className={`button is-medium ${color} ${modifier}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  </span>
)

export default Button

