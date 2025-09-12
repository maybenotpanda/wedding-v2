// ** Reselect Imports
import { createSelector } from 'reselect'

const selectDefault = (state) => state.guest

// ! read
export const loadingDetailGuest = createSelector(
  [selectDefault],
  (slice) => slice.isLoading && slice.currentAction === 'detail'
)

export const errorDetailGuest = createSelector(
  [selectDefault],
  (slice) => slice.error && slice.currentAction === 'detail' ? slice.error : null
)

export const dataDetailGuest = createSelector(
  [selectDefault],
  (slice) => slice.detail
)