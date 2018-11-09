import * as myWordsApi from '../utils/api/myWords'

const initialState = {
  myWords: [],
  isRequesting: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case MY_WORDS_REQUESTED:
      return {
        ...state,
        isRequesting: true
      }

    case MY_WORDS_COMPLETED:
      return {
        ...state,
        isRequesting: false,
        myWords: action.myWords.data
      }

    default:
      return state

  }
}

const MY_WORDS_REQUESTED = 'myWords/MY_WORDS_REQUESTED'

const MY_WORDS_COMPLETED = 'myWords/MY_WORDS_COMPLETED'

export const getMyWords = () => async dispatch => {
  dispatch({ type: MY_WORDS_REQUESTED})

  const myWords = await myWordsApi.getMyWords()

  dispatch({
    type: MY_WORDS_COMPLETED,
    myWords
  })
}
