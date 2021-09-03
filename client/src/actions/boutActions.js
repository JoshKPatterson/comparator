import { CHANGE_BOUT, INIT_BOUT, REPLENISH_BOUT  } from "./types"

// Change current bout
export const changeBout = (newBout) => {
  return {
    type: CHANGE_BOUT,
    payload: newBout
  }
}

// Initialize bout queue
export const initBout = (bouts) => {
  return {
    type: INIT_BOUT,
    payload: bouts
  }
}

// Replenish bout queue
export const replenishBout = (newBout) => {
  return {
    type: REPLENISH_BOUT,
    payload: newBout
  }
}