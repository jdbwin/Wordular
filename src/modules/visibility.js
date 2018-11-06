const initialSideBarState = {
  isVisible: true,
  isToggling: false
}

export default (state = initialSideBarState, action) => {
  switch (action.type) {

    case TOGGLE_SIDEBAR_REQUESTED:
      return {
        ...state,
        isToggling: true
      }

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isVisible: !state.isVisible
      }

    default:
      return state

  }
}

// SIDEBAR
const TOGGLE_SIDEBAR_REQUESTED = 'visibility/TOGGLE_SIDEBAR_REQUESTED'
const TOGGLE_SIDEBAR = 'visibility/TOGGLE_SIDEBAR'

export const toggleSidebar = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SIDEBAR_REQUESTED
    })

    dispatch({
      type: TOGGLE_SIDEBAR
    })
  }
}
