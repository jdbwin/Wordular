import React from 'react'

import './styles.css'

const Button = ({ text, color, onClick }) => (
  <button
    className={`button is-medium ${ color && color }`}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button

