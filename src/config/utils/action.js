const createAction = (type, payload) => ({ type, payload })
/**
 * Utility functions to create actions.
 *
 * @function startAction
 * @param {string} type - The action type.
 *
 * @function successAction
 * @param {string} type - The action type.
 * @param {any} res - The response data.
 *
 * @function failureAction
 * @param {string} type - The action type.
 * @param {any} payload - The error data.
 */
export const startAction = (type) => createAction(type)
export const successAction = (type, res) => createAction(type, res)
export const failureAction = (type, payload) => createAction(type, payload)