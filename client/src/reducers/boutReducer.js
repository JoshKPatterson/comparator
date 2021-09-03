import { CHANGE_BOUT, INIT_BOUT, REPLENISH_BOUT } from "../actions/types";

const initState = {
  boutCurrent: null,
  boutQueue: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case CHANGE_BOUT:
      return {
        ...state,
        boutCurrent: action.payload.newCurrent,
        boutQueue: action.payload.newQueue
      };
    case INIT_BOUT:
      return {
        ...state,
        boutQueue: action.payload,
        boutCurrent: action.payload[0]
      };
    case REPLENISH_BOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
