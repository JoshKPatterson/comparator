import { CAST_VOTE, VOTE_FAILED } from "../actions/types";

const initState = {
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case CAST_VOTE:
      console.log("vote succ");
      return {
        ...state,
      };
    case VOTE_FAILED:
      console.log("vote bad");
      return {
        ...state,
      };
    default:
      return state;
  }
}
