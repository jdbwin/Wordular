import React from 'react'

import './styles.css'

const MyWordsList = ({ myWords, toggleVisibility, visibleItems }) => (
  <div className="column is-half">
    {myWords && myWords.map((word, index) => {
      return (
        <div className="card" key={index}>
          <header className="card-header">
            <p className="card-header-title">
              {word}
            </p>
            <a href="#" className="card-header-icon" aria-label="more options" onClick={() => toggleVisibility(index)}>
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className={`${visibleItems.includes(index) ? '' : 'is-hidden'}`}>
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Edit</a>
              <a href="#" className="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      )
    })}
  </div>
)

export default MyWordsList


