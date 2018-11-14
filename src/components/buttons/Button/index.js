import React from 'react'

import './styles.css'

const Button = ({ text, color, onClick, modifier }) => (
  <span className="control">
    <button
      className={`button is-medium ${ color && color } ${ modifier && modifier }`}
      onClick={onClick}
    >
      {text}
    </button>
  </span>
)

export default Button

