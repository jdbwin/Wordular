import React from 'react'

import './styles.css'

const Card = ({ title }) => (
  <div className="card">
    <div className="card-header">
      <p className="card-header-title is-centered">
        {title}
      </p>
    </div>
    <div className="card-content">
      <div className="content">
      </div>
    </div>
  </div>

)

export default Card

