import React from 'react'

import Hero from 'components/Hero'
import MyWordsList from 'components/MyWordsList'

const MyWords = ({
  myWords,
  visibleItem,
  showWord,
  results
}) => (
  <div className='column is-full'>
    <Hero title='My Words' subtitle='Saved words' />
    <div className='container m-t-lg'>
      <div className='columns is-centered'>
        {myWords && myWords.length &&
        <MyWordsList
          myWords={myWords}
          visibleItem={visibleItem}
          showWord={showWord}
          results={results}
        />
        }
      </div>
    </div>
  </div>
)

export default MyWords

