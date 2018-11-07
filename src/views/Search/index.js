import React from 'react'

import Button from '../../components/buttons/Button'

import './styles.css'

const Search = ({ searchTerm, search, results, getRandomWord, onChange }) => (
  <div className='is-centered' styleName='main'>

    <div className="control">
      <input
        onKeyUp={search}
        value={searchTerm}
        onChange={onChange}
        className="input is-medium"
        type="search"
        placeholder="Search..."
      />
    </div>

    <center styleName="word-buttons">
      <Button text='Search' onClick={search} color='is-light' />
      <Button text='Random' onClick={getRandomWord} color='is-light' />
    </center>

    <div>
      {results && results.map((result, index) => {
        return (
          <p key={index}>{result.text}</p>
        )
      })}
    </div>

  </div>
)

export default Search

