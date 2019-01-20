import React from 'react'

const VocabularyBuilder = ({
  checkSelection,
  definitionForRound,
  isCorrect,
  isResultShown,
  next,
  optionsForRound
}) => (
  <div className="container">
    <div className="columns is-centered">
      <h1>Vocabulary Builder</h1>
    </div>
    <div>
      <p>{definitionForRound}</p>
      <ol>
        {optionsForRound && Object.keys(optionsForRound).map((option, key) => (
          <li key={key} onClick={() => checkSelection(key)}>{optionsForRound[option].word}</li>
        ))}
      </ol>
    </div>
    {isResultShown &&
        <div>
          <p>Correct?</p>
          <p>{isCorrect ? 'Yes' : 'No'}</p>
        </div>
    }
    <button onClick={() => next()}>Next</button>
  </div>
)

export default VocabularyBuilder

