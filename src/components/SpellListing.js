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
    <div className="ui grid container">
      <h1> Spell Listing </h1>
      <SpellComponent />
    </div>
  );
};

export default SpellListing;
