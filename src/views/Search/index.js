import React from 'react'

import './styles.css'

const Search = ({ onKeyUp, results }) => (
  <div className='is-centered' styleName='main'>

    <div className="control">
      <input onKeyUp={onKeyUp} className="input is-medium" type="search" placeholder="Search..." />
    </div>

    <center>
      <div styleName="random-button">
        <button className="button is-medium is-primary">Random</button>
      </div>
    </center>

    <div>
      {results && results.map(result => {
        return (
          <p>{result.text}</p>
        )
      })}
    </div>

  </div>
)

export default Search

