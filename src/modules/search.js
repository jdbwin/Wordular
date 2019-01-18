const initialState = {
  searchTerm: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    }

    default:
      return state
  }
}

const SET_SEARCH_TERM = 'myWords/SET_SEARCH_TERM'

export const setSearchTerm = searchTerm => async dispatch => {
  dispatch({
    type: SET_SEARCH_TERM,
    searchTerm
  })
}

