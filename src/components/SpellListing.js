import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSpell } from "../actions/spellAction";
import SpellComponent from "./SpellComponent";

const SpellListing = () => {
  const spells = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    Axios({
      method: "GET",
      url: "https://www.dnd5eapi.co/api/spells",
    })
      .then(function (response) {
        // console.log("data", response.data.results)
        dispatch(getSpell(response.data.results));
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="subbanner spell-list-bg">
        <div className="hero-content">
          <h2> Spell List: Official Dungeons & Dragons Content!</h2>
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
            <SpellComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpellListing;
