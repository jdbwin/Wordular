import React from 'react'

import './styles.css'

const Button = ({ text, color, onClick, modifier }) => (
  <button
    className={`button is-medium ${ color && color } ${ modifier && modifier }`}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button

