// ** Enums Imports
import ACTION_TYPES from 'config/enums/types'

const INITIAL_STATE = {
	detail: {},
	isLoading: false,
	error: null
}

export const guestReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case ACTION_TYPES.GUEST_DETAIL_START:
			return { ...state, isLoading: true, error: null }

		case ACTION_TYPES.GUEST_DETAIL_SUCCESS:
			return { ...state, isLoading: false, detail: payload, error: null }

		case ACTION_TYPES.GUEST_DETAIL_FAILED:
			return { ...state, isLoading: false, error: payload }

		default:
			return state
	}
}
