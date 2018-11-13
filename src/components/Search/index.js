import React from 'react'

import Button from '../../components/buttons/Button'
import Results from '../../components/Results'

import './styles.css'

const Search = ({ searchTerm, search, results, getRandomWord, saveWord, onChange, keyDownSearch }) => (
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

  {results &&
    <div className="m-t-md">
    <Button text="Save" color="is-primary" modifier="is-fullwidth" onClick={saveWord} />
    <div styleName="results-container" className="p-md">
      <Results
      results={results}
      word={searchTerm}
      />
    </div>
    </div>
  }

  <center styleName="word-buttons">
  <Button text='Search' onClick={search} color='is-light' />
  <Button text='Random' onClick={getRandomWord} color='is-light' />
  </center>

  </div>
)

export default Search

