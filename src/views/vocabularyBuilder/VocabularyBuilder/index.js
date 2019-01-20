import React from 'react'

const VocabularyBuilder = ({ currentWord }) => (
  <div className="container">
    <div className="columns is-centered">
      <h1>Vocabulary Builder</h1>
          <p>{currentWord}</p>
    </div>
  </div>
)

export default VocabularyBuilder

