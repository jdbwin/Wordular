import { getDefinition } from '../utils/api/wordnik'

const initialState = {
  results: [],
  isSearching: false
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

    default:
      return state

  }
}

const SEARCH_REQUESTED = 'wordnik/SEARCH_REQUESTED'
const SEARCH_COMPLETED = 'wordnik/SEARCH_COMPLETED'

export const searchWordnik = word => async dispatch => {
  dispatch({ type: SEARCH_REQUESTED})

  const results = await getDefinition(word)

  dispatch({
    type: SEARCH_COMPLETED,
    results
  })
}

