import { CAST_VOTE } from "./types";

// Cast a vote for the selected item
export const castVote = id => {
  return {
    type: CAST_VOTE,
    payload: '2'
  }
}