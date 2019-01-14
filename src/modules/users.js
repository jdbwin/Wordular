import * as usersApi from 'utils/api/users'

const initialState = {
  isCreating: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_USER_REQUESTED:
      return {
        ...state,
        isCreating: true
      }

    case CREATE_USER_COMPLETED:
      return {
        ...state,
        isCreating: false
      }

    default:
      return state

  }
}

const CREATE_USER_REQUESTED = 'users/CREATE_USER_REQUESTED'

const CREATE_USER_COMPLETED = 'users/CREATE_USER_COMPLETED'

export const createUser = user => async dispatch => {
  dispatch({ type: CREATE_USER_REQUESTED})

  await usersApi.createUser(user)

  dispatch({
    type: CREATE_USER_COMPLETED
  })
}

