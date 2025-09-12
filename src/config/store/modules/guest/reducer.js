// ** Enums Imports
import ACTION_TYPES from 'config/enums/types'

const INITIAL_STATE = {
  detail: {},
  isLoading: false,
  error: null,
  currentAction: null
}

export const guestReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTION_TYPES.GUEST_DETAIL_START:
      return { ...state, isLoading: true, error: null, currentAction: 'detail' }

    case ACTION_TYPES.GUEST_DETAIL_SUCCESS:
      return { ...state, isLoading: false, detail: payload, error: null }

    case ACTION_TYPES.GUEST_DETAIL_FAILED:
      return { ...state, isLoading: false, error: payload, currentAction: 'detail' }

    default:
      return state
  }
}
