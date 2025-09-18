// ** Enums Imports
import ACTION_TYPES from 'config/enums/types'
import API_URLS from 'config/enums/api-urls'

// ** API Imports
import apiGeneral from 'config/services/api-general'

// ** Utils Imports
import { failureAction, startAction, successAction } from 'config/utils/action'

// ! create
export const createMessage = (req) => {
  return async (dispatch) => {
    dispatch(startAction(ACTION_TYPES.MESSAGE_CREATE_START))

    try {
      const res = await apiGeneral.request({
        method: 'post',
        url: `${API_URLS.CREATE_MESSAGE}`,
        data: req
      })
      dispatch(successAction(ACTION_TYPES.MESSAGE_CREATE_SUCCESS, res))
    } catch (err) {
      const message = err || 'Unknown error occurred'
      dispatch(failureAction(ACTION_TYPES.MESSAGE_CREATE_FAILED, message))
    }
  }
}

// ! read
export const listMessage = ({ page, limit }) => {
  return async (dispatch) => {
    dispatch(startAction(ACTION_TYPES.MESSAGE_LIST_START))

    try {
      const res = await apiGeneral.request({
        method: 'get',
        url: `${API_URLS.LIST_MESSAGE}?page=${page}&limit=${limit}`
      })
      dispatch(successAction(ACTION_TYPES.MESSAGE_LIST_SUCCESS, res.data.data))
    } catch (err) {
      const message = err.response?.data || 'Unknown error occurred'
      dispatch(failureAction(ACTION_TYPES.MESSAGE_LIST_FAILED, message.message))
    }
  }
}
