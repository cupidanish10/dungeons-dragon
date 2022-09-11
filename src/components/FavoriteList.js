import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFavourite } from "../actions/spellAction";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.allSpells.favouriteSpell);
  useEffect(() => {
    dispatch(getFavourite());
  }, []);

  return (
    <>
      <div className="subbanner fav-list-bg">
        <div className="hero-content">
          <h2> Favourites: Official Dungeons & Dragons Content!</h2>
          <p>
            {" "}
            Connect with your friends around the world and play D&D with some of
            the best Dungeon Masters anywhere!{" "}
          </p>
        </div>
      </div>
      <div className="main bg-gradient">
        <div className="container">
          <div className="row">
            {favList &&
              favList.map((fav) => {
                return (
                  <div className="col-md-4">
                    <div class="card custom-card glass-ui p-2 mb-3">
                      <div className="content">
                        {" "}
                        <Link to={"/spell/" + fav.index}>{fav.name}</Link>{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteList;
