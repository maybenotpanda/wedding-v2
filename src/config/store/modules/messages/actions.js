// ** Enums Imports
import ACTION_TYPES from 'config/enums/types'
import API_URLS from 'config/enums/api-urls'

// ** API Imports
import apiGeneral from 'config/services/api-general'

// ** Utils Imports
import { failureAction, startAction, successAction } from 'config/utils/action'

// ! read
export const createMessage = (req) => {
  return async (dispatch) => {
    dispatch(startAction(ACTION_TYPES.MESSAGE_CREATE_START))

    try {
      const res = await apiGeneral.request({
        method: 'post',
        url: `${API_URLS.CREATE_MESSAGE}`,
        data: req
      })
      dispatch(successAction(ACTION_TYPES.CREATE_MESSAGE_SUCCESS, res.data))
    } catch (err) {
      const message = err || 'Unknown error occurred'
      console.log(message);
      dispatch(failureAction(ACTION_TYPES.MESSAGE_CREATE_FAILED, message))
    }
  }
}