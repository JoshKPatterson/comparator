import { EDIT_SECTION, TF2 } from './types'

export const editSelection = (section) => {
  return {
    type: EDIT_SECTION,
    payload: section
  }
}