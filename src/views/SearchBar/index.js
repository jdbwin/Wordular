import React from 'react'

import './searchbar.css'

const SearchBar = ({ onKeyUp }) => (
  <div className='is-centered' styleName='main'>
    <div className="control">
      <input onKeyUp={onKeyUp} className="input is-medium" type="search" placeholder="Search..." />
    </div>
  </div>
)

export default SearchBar

