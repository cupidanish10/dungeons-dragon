import { combineReducers } from "redux";
import { spellReducer } from "./spellReducer";

// we might have multiple reducers so we are going to combine all those reducers

// saving all combined reducers to one variable
// combine reducers takes an object
const reducers = combineReducers({
  allSpells: spellReducer,
});

export default reducers;
