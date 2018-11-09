import React from 'react'

import './styles.css'

const MyWordsList = ({ myWords }) => (
  <div className="column is-half">
    {myWords && myWords.map(word => {
      return (
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {word}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
      )
    })}
  </div>
)

export default MyWordsList


