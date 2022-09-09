import { combineReducers } from "redux";
import { spellReducer } from "./spellReducer";

const reducers = combineReducers({
  allSpells: spellReducer,
});

export default reducers;
