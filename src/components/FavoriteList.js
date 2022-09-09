import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavourite } from "../actions/spellAction";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.allSpells.favouriteSpell);
  useEffect(() => {
    dispatch(getFavourite());
  }, []);

  return (
    <div>
      <h1> Favorite List </h1>
      {favList &&
        favList.map((fav) => {
          return <li> {fav.name}</li>;
        })}
    </div>
  );
};

export default FavoriteList;
