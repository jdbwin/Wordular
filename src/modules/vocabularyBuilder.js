import * as vocabularyBuilderApi from 'utils/api/vocabularyBuilder'
import { shuffleArray, randomIndexFromArray } from 'utils/helpers'

const initialModalState = {
  isSettingCurrentWord: false,
  wordForMatch: '',
  wordsInPlay: [],
  previousWordsForMatch: []
}

export default (state = initialModalState, action) => {

  switch (action.type) {

    case SETTING_WORDS_IN_PLAY:
      return {
        ...state,
        isSettingWordsInPlay: true
      }

    case SET_WORDS_IN_PLAY:
      return {
        ...state,
        isSettingWordsInPlay: false,
        wordsInPlay: action.wordsInPlay
      }

    case SETTING_WORD_FOR_MATCH:
      return {
        ...state,
        isSettingWordForMatch: true
      }

    case SET_WORD_FOR_MATCH:
      return {
        ...state,
        isSettingWordForMatch: false,
        wordForMatch: action.wordForMatch
      }

    case SETTING_PREVIOUS_WORDS:
      return {
        ...state,
        isSettingPreviousWords: true
      }

    case SET_PREVIOUS_WORDS:
      return {
        ...state,
        isSettingPreviousWords: false,
        previousWords: [...previousWords, action.previousWord]
      }


    default:
      return state

  }

}

const SETTING_WORDS_IN_PLAY = 'vocabularyBuilder/SETTING_WORDS_IN_PLAY'
const SET_WORDS_IN_PLAY = 'vocabularyBuilder/SET_WORDS_IN_PLAY'
const SETTING_WORD_FOR_MATCH = 'vocabularyBuilder/SETTING_WORD_FOR_MATCH'
const SET_WORD_FOR_MATCH = 'vocabularyBuilder/SET_WORD_FOR_MATCH'
const SETTING_PREVIOUS_WORDS = 'vocabularyBuilder/SETTING_PREVIOUS_WORDS'
const SET_PREVIOUS_WORDS = 'vocabularyBuilder/SET_PREVIOUS_WORDS'

export const selectWordsForRound = words => async dispatch => {
  dispatch ({ type: SETTING_WORDS_IN_PLAY })

  const wordsInPlay = shuffleArray(words).slice(0, 3)

  dispatch ({
    type: SET_WORDS_IN_PLAY,
    wordsInPlay: wordsInPlay
  })

  dispatch({ type: SETTING_WORD_FOR_MATCH })

  const wordForMatch = wordsInPlay[randomIndexFromArray(wordsInPlay)]

  dispatch({
    type: SET_WORD_FOR_MATCH,
    wordForMatch
  })
}

