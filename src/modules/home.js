import * as homeApi from '../utils/api/home'

const initialState = {
  retrievingWords: false,
  words: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

    case RETRIEVE_WORDS_REQUESTED:
      return {
        ...state,
        retrievingWords: true
      }

    case RETRIEVE_WORDS_COMPLETED:
      return {
        ...state,
        retrievingWords: false,
        words: action.words
      }

    default:
      return state

  }
}

const RETRIEVE_WORDS_REQUESTED = 'home/RETRIEVE_WORDS_REQUESTED'

const RETRIEVE_WORDS_COMPLETED = 'home/RETRIEVE_WORDS_COMPLETED'

export const retrieveWords = () => async dispatch => {
  dispatch({ type: RETRIEVE_WORDS_REQUESTED})

  const words = await homeApi.getWords()

  dispatch({
    type: RETRIEVE_WORDS_COMPLETED,
    words
  })
}


