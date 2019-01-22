import React from 'react'

import Search from 'containers/Words/Search'
import Hero from 'components/Hero'
import Card from 'components/Card'
import OrderedWordList from 'components/OrderedWordList'

const Home = ({
  getFeaturedWordDefinition,
  retrievingWords,
  words
}) => (
  <div className="column is-full">
    <Hero title='Wordular' subtitle='Find and remember your favourite words...' />
    <Search />
    <div className="container m-t-xl">
      {Object.keys(words).length > 0 &&
      <div className="columns">
        <div className="column">
          <Card title="Top">
            {!retrievingWords &&
            <OrderedWordList
              words={words.top}
              getFeaturedWordDefinition={getFeaturedWordDefinition}
            />
            }
          </Card>
        </div>
        <div className="column">
          <Card title="Random">
            {!retrievingWords &&
            <OrderedWordList
              words={words.random}
              getFeaturedWordDefinition={getFeaturedWordDefinition}
            />
            }
          </Card>
        </div>
        <div className="column">
          <Card title="Recent">
            {!retrievingWords &&
            <OrderedWordList
              words={words.recent}
              getFeaturedWordDefinition={getFeaturedWordDefinition}
            />
            }
          </Card>
        </div>
      </div>
      }
    </div>
  </div>
)

export default Home

