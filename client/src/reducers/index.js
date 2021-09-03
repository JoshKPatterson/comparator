import { combineReducers } from "redux";
import sectionReducer from "./sectionReducer";
import boutReducer from "./boutReducer";

export default combineReducers({
  section: sectionReducer,
  bout: boutReducer,
});
