// ** Enums Imports
import ACTION_TYPES from 'config/enums/types'

const INITIAL_STATE = {
  create: {},
  list: {},
  isLoading: false,
  error: null,
  currentAction: null
}

export const messagesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTION_TYPES.MESSAGE_CREATE_START:
      return { ...state, isLoading: true, error: null, currentAction: 'create' }

    case ACTION_TYPES.MESSAGE_CREATE_SUCCESS:
      return { ...state, isLoading: false, detail: payload, error: null }

    case ACTION_TYPES.MESSAGE_CREATE_FAILED:
      return { ...state, isLoading: false, error: payload, currentAction: 'create' }

    default:
      return state
  }
}
