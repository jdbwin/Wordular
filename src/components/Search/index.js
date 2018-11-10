import React from 'react'

import Button from '../../components/buttons/Button'
import Results from '../../components/Results'

import './styles.css'

const Search = ({ searchTerm, search, results, getRandomWord, onChange, keyDownSearch }) => (
  <div className='is-centered m-t-xl' styleName='main'>

    <div className="control">
      <input
        onKeyDown={keyDownSearch}
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

    {results && <Results results={results} word={searchTerm} />}

  </div>
)

export default Search

