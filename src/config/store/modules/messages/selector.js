// ** Reselect Imports
import { createSelector } from 'reselect'

const selectDefault = (state) => state.message

// ! create
export const loadingCreateMessage = createSelector(
  [selectDefault],
  (slice) => slice.isLoading && slice.currentAction === 'create'
)

export const errorCreateMessage = createSelector(
  [selectDefault],
  (slice) => slice.error && slice.currentAction === 'create' ? slice.error : null
)

export const dataCreateMessage = createSelector(
  [selectDefault],
  (slice) => slice.create
)