import { EDIT_SECTION, TF2 } from "../actions/types";

const initState = {
  section: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case EDIT_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
