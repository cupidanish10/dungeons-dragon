import { ActionTypes } from "../constants/action-types";

let fav = JSON.parse(localStorage.getItem("favorite"));
// takes initial state and actions
const initialState = {
  spells: [],
  spell: {},
  favouriteSpell: [],
};

export const spellReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SPELL:
      return { ...state, spells: action.payload };
    case ActionTypes.GET_SPELL_DETAIL:
      console.log("get detail", action.payload);
      return { ...state, spell: action.payload };
    case ActionTypes.GET_FAVOURITES:
      return { ...state, favouriteSpell: fav || [] };
    case ActionTypes.ADD_FAVOURITE:
      let newFavList = [...state.favouriteSpell, action.payload];
      localStorage.setItem("favorite", JSON.stringify(newFavList));
      return {
        ...state,
        favouriteSpell: [...state.favouriteSpell, action.payload],
      };
    default:
      return state;
  }
};
