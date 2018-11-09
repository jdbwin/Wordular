import React from 'react'

import MyWordsList from '../../../components/MyWordsList'

const MyWords = ({ myWords }) => (
  <div className="container">
    <div className="columns is-centered">
      {myWords.length &&
          <MyWordsList
            myWords={myWords}
          />
      }
    </div>
  </div>
)

export default MyWords


