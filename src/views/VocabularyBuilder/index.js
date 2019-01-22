import React from 'react'

import Hero from 'components/Hero'
import Button from 'components/buttons/Button'

import './styles.scss'

const VocabularyBuilder = ({
  checkSelection,
  definitionForRound,
  isCorrect,
  isResultShown,
  next,
  optionsForRound
}) => (
  <div className='column'>
    <Hero title='Vocabulary Builder' subtitle='Test your memory!' />
    <div className='columns is-centered'>
      <div className='column is-half'>
        <div className='box'>
          <div className='content'>
            <div className='has-text-centered'>
              <h2>{definitionForRound}</h2>
            </div>
            <div styleName='options' className='buttons is-centered m-t-xl'>
              {optionsForRound && Object.keys(optionsForRound).map((option, key) => (
              <Button
                key={key}
                onClick={() => checkSelection(key)}
                text={optionsForRound[option].word}
                modifier='lower'
                disabled={isResultShown}
              />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isResultShown &&
      <div className='columns'>
        <div className='column'>
          <div>
            <p>Correct?</p>
            <p>{isCorrect ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
      }
      <div className='columns is-centered'>
        <div className='column is-one-quarter'>
          <Button
            text='Next'
            modifier='is-fullwidth'
            onClick={() => next()}
          />
            </div>
          </div>
        </div>
)

export default VocabularyBuilder

