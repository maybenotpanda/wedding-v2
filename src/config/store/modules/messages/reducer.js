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
    case ACTION_TYPES.MESSAGE_LIST_START:
      return { ...state, isLoading: true, error: null, currentAction: 'list' }

    case ACTION_TYPES.MESSAGE_CREATE_SUCCESS:
      return { ...state, isLoading: false, create: payload, error: null }
    case ACTION_TYPES.MESSAGE_LIST_SUCCESS:
      return { ...state, isLoading: false, list: payload, error: null }

    case ACTION_TYPES.MESSAGE_CREATE_FAILED:
      return { ...state, isLoading: false, error: payload, currentAction: 'create' }
    case ACTION_TYPES.MESSAGE_LIST_FAILED:
      return { ...state, isLoading: false, error: payload, currentAction: 'list' }

    default:
      return state
  }
}
