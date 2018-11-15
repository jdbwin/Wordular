import React from 'react'

import Search from '../../../containers/Words/Search'
import Hero from '../Hero'
import Card from '../../../components/Card'

const Home = () => (
  <div className="column is-full">
    <Hero />
    <Search />
    <div className="container m-t-xl">
      <div className="columns">
        <div className="column">
          <Card title="Top" />
        </div>
        <div className="column">
          <Card title="Random" />
        </div>
        <div className="column">
          <Card title="Recent" />
        </div>
      </div>
    </div>
  </div>
)

export default Home

