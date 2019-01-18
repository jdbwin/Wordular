import React from 'react'

import './styles.scss'

const Card = ({ title, children }) => (
  <div className="card">
    <div className="card-header">
      <p className="card-header-title is-centered">
        {title}
      </p>
    </div>
    <div className="card-content">
      <div className="content">
        {children}
      </div>
    </div>
  </div>

)

export default Card

