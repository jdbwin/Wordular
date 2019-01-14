import * as wordnik from 'utils/api/wordnik'

const initialState = {
  results: [],
  isSearching: false,
  randomWord: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_REQUESTED:
      return {
        ...state,
        isSearching: true
      }

    case SEARCH_COMPLETED:
      return {
        ...state,
        isSearching: false,
        results: action.results.data
      }

     case RANDOM_WORD_COMPLETED:
      return {
        ...state,
        isSearching: false,
        randomWord: action.randomWord.data
      }

    case CLEAR_RESULTS_REQUESTED:
      return {
        ...state,
        isClearingResults: true
      }

    case CLEAR_RESULTS_COMPLETED:
      return {
        ...state,
        results: initialState.results,
        isClearingResults: false
      }

    default:
      return state

  }
}

const SEARCH_REQUESTED = 'wordnik/SEARCH_REQUESTED'

const SEARCH_COMPLETED = 'wordnik/SEARCH_COMPLETED'

const RANDOM_WORD_COMPLETED = 'wordnik/RANDOM_WORD_COMPLETED'

const CLEAR_RESULTS_REQUESTED = 'wordnik/CLEAR_RESULTS_REQUESTED'

const CLEAR_RESULTS_COMPLETED = 'wordnik/CLEAR_RESULTS_COMPLETED'

export const getDefinitions = word => async dispatch => {
  dispatch({ type: SEARCH_REQUESTED})

  const results = await wordnik.getDefinitions(word)

  dispatch({
    type: SEARCH_COMPLETED,
    results
  })
}

export const getRandomWord = () => async dispatch => {
  dispatch({ type: SEARCH_REQUESTED })

  const randomWord = await wordnik.getRandomWord()

  dispatch({
    type: RANDOM_WORD_COMPLETED,
    randomWord
  })
}

export const clearResults = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_RESULTS_REQUESTED
    })

    dispatch({
      type: CLEAR_RESULTS_COMPLETED
    })
  }
}
