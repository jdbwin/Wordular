import * as myWordsApi from '../utils/api/myWords'

const initialState = {
  myWords: [],
  isRequesting: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SAVE_WORD_REQUESTED:
      return {
        ...state,
        isSaving: true
      }

    case SAVE_WORD_COMPLETED:
      return {
        ...state,
        isSaving: false
      }

    case MY_WORDS_REQUESTED:
      return {
        ...state,
        isRequesting: true
      }

    case MY_WORDS_COMPLETED:
      return {
        ...state,
        isRequesting: false,
        myWords: action.myWords.words
      }

    default:
      return state

  }
}

const MY_WORDS_REQUESTED = 'myWords/MY_WORDS_REQUESTED'

const MY_WORDS_COMPLETED = 'myWords/MY_WORDS_COMPLETED'

const SAVE_WORD_REQUESTED = 'myWords/SAVE_WORD_REQUESTED'

const SAVE_WORD_COMPLETED = 'myWords/SAVE_WORD_COMPLETED'

export const saveWord = word => async dispatch => {
  dispatch({ type: SAVE_WORD_REQUESTED})

  await myWordsApi.saveWord(word)

  dispatch({
    type: MY_WORDS_COMPLETED
  })
}

export const getMyWords = () => async dispatch => {
  dispatch({ type: MY_WORDS_REQUESTED})

  const myWords = await myWordsApi.getMyWords()

  dispatch({
    type: MY_WORDS_COMPLETED,
    myWords
  })
}
