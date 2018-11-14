import React from 'react'

import Button from '../../components/buttons/Button'
import Results from '../../components/Results'

import './styles.css'

const Search = ({
  getRandomWord,
  keyDownSearch,
  onChange,
  results,
  saveWord,
  search,
  searchTerm
}) => (

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
      <div styleName="results-container" className="p-md">
        <div className="field is-grouped">
          <Button text="Save" color="is-primary" onClick={saveWord} />
          <Button text="Close" color="is-primary" onClick={saveWord} />
        </div>
        <Results
          results={results}
          word={searchTerm}
        />
      </div>
    </div>
    }

    <div className="field is-grouped" styleName="search-buttons">
      <Button text="Search" onClick={search} color="is-light" />
      <Button text="Random" onClick={getRandomWord} color="is-light" />
    </div>

  </div>
)

export default Search

