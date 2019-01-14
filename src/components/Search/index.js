import React from 'react'

import Button from 'components/buttons/Button'
import Results from 'components/Results'

import './styles.css'

const Search = ({
  clear,
  getRandomWord,
  keyDownSearch,
  onChange,
  results,
  saveWord,
  search,
  searchTerm,
  token
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
      <div styleName="results-container" className="p-md p-t-none">
        <div className="field is-grouped is-grouped-right">
          {token &&
            <Button text="Save" color="is-info" onClick={saveWord} />
          }
          <Button text="Close" color="is-danger" onClick={clear} />
        </div>
        <Results
          results={results}
          word={searchTerm}
        />
      </div>
    </div>
    }

    <div className="field is-grouped is-grouped-centered m-t-md">
      <Button text="Search" onClick={search} color="is-light" />
      <Button text="Random" onClick={getRandomWord} color="is-light" />
    </div>

  </div>
)

export default Search

