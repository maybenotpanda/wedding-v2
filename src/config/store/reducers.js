// ** Redux Imports
import { combineReducers } from 'redux'

// ** Modules Imports
import { guestReducer } from './modules/guest/reducer'
// import { messagesReducer } from './modules/messages/reducer'

export const rootReducer = combineReducers({
  guest: guestReducer,
  // messages: messagesReducer
})
