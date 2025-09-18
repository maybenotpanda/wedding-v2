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

export const dataCreateMessage = createSelector([selectDefault], (slice) => slice.create)

// ! read
export const loadingListMessage = createSelector(
	[selectDefault],
	(slice) => slice.isLoading && slice.currentAction === 'list'
)

export const errorListMessage = createSelector(
  [selectDefault], 
  (slice) => slice.error && slice.currentAction === 'list' ? slice.error : null
)

export const dataListMessage = createSelector([selectDefault], (slice) => slice.list)
