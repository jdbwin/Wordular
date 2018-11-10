import React from 'react'

import MyWordsList from '../../../components/MyWordsList'

const MyWords = ({ myWords, toggleVisibility, visibleItem, getDefinition, results }) => (
  <div className="container">
    <div className="columns is-centered">
      {myWords.length &&
          <MyWordsList
            myWords={myWords}
            toggleVisibility={toggleVisibility}
            visibleItem={visibleItem}
            getDefinition={getDefinition}
            results={results}
          />
      }
    </div>
  </div>
)

export default MyWords

