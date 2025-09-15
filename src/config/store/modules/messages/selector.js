// ** Reselect Imports
import { createSelector } from 'reselect'

const selectDefault = (state) => state.messages

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

export const loadingListMessages = createSelector(
  [selectDefault],
  (slice) => slice.isLoading && slice.currentAction === 'list'
)

export const errorListMessages = createSelector(
  [selectDefault],
  (slice) => slice.error && slice.currentAction === 'list' ? slice.error : null
)

export const dataListMessages = createSelector(
  [selectDefault],
  (slice) => slice.list
)