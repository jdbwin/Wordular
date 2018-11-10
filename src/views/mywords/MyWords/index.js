import React from 'react'

import MyWordsList from '../../../components/MyWordsList'

const MyWords = ({ myWords, toggleVisibility, visibleItems }) => (
  <div className="container">
    <div className="columns is-centered">
      {myWords.length &&
          <MyWordsList
            myWords={myWords}
            toggleVisibility={toggleVisibility}
            visibleItems={visibleItems}
          />
      }
    </div>
  </div>
)

export default MyWords


