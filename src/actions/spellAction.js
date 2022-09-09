import { ActionTypes } from "../constants/action-types";

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
