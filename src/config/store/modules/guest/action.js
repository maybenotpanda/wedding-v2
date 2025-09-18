// ** Enums Imports
import ACTION_TYPES from 'config/enums/types'
import API_URLS from 'config/enums/api-urls'

// ** API Imports
import apiGeneral from 'config/services/api-general'

// ** Utils Imports
import { failureAction, startAction, successAction } from 'config/utils/action'

// ! read
export const detailGuest = (slug) => {
	return async (dispatch) => {
		dispatch(startAction(ACTION_TYPES.GUEST_DETAIL_START))

		try {
			const res = await apiGeneral.request({
				method: 'get',
				url: `${API_URLS.GUEST}/${slug}`
			})
			dispatch(successAction(ACTION_TYPES.GUEST_DETAIL_SUCCESS, res.data.data))
		} catch (err) {
			const message = err || 'Unknown error occurred'
			dispatch(failureAction(ACTION_TYPES.GUEST_DETAIL_FAILED, message))
		}
	}
}
