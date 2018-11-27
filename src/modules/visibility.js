const initialModalState = {
  isModalVisible: false,
  isToggling: false,
  modalType: null
}

export default (state = initialModalState, action) => {

  switch (action.type) {

    case TOGGLE_MODAL_REQUESTED:
      return {
        ...state,
        isToggling: true
      }

    case TOGGLE_MODAL:
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
        modalType: action.modalType || initialModalState.modalType,
        isToggling: false
      }

    default:
      return state

  }

}

// MODAL
const TOGGLE_MODAL_REQUESTED = 'visibility/TOGGLE_MODAL_REQUESTED'
const TOGGLE_MODAL = 'visibility/TOGGLE_MODAL'

export const toggleModal = modalType => {
  return dispatch => {
    dispatch({
      type: TOGGLE_MODAL_REQUESTED
    })

    dispatch({
      type: TOGGLE_MODAL,
      modalType
    })

  }
}

