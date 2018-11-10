import React from 'react'

import MyWordsList from '../../../components/MyWordsList'

const MyWords = ({ myWords, visibleItem, showWord, results }) => (
  <div className="container">
    <div className="columns is-centered">
      {myWords.length &&
          <MyWordsList
            myWords={myWords}
            visibleItem={visibleItem}
            showWord={showWord}
            results={results}
          />
      }
    </div>
  </div>
)

export default MyWords

