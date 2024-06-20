import { ActionTypes } from "../constants/action-types";

// a) contains all the actions
// 	b) set actions that we created types in "constants"
// 	c) actions always returns plain js object

export const getSpell = (spells) => {
  return {
    type: ActionTypes.GET_SPELL,
    payload: spells,
  };
};
export const getSpellDetail = (spell) => {
  return {
    type: ActionTypes.GET_SPELL_DETAIL,
    payload: spell,
  };
};
export const getFavourite = () => {
  return {
    type: ActionTypes.GET_FAVOURITES,
  };
};
export const addFavourite = (spell) => {
  return {
    type: ActionTypes.ADD_FAVOURITE,
    payload: spell,
  };
};
