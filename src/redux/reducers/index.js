import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailsReducers from "./detailsReducers";

const rootReducer = combineReducers({
  game: gamesReducer,
  detail: detailsReducers,
});
export default rootReducer;
