import Axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addFavourite, getSpellDetail } from "../actions/spellAction";

const SpellDetails = () => {
  const dispatch = useDispatch();
  let { index } = useParams();

  const spellDetail = useSelector((state) => state.allSpells.spell);

  const handleAdd = () => {
    dispatch(addFavourite(spellDetail));
  };
  useEffect(() => {
    Axios({
      method: "GET",
      url: `https://www.dnd5eapi.co/api/spells/${index}`,
    })
      .then(function (response) {
        console.log("res", response.data);
        dispatch(getSpellDetail(response.data));
      })
      .catch(function (err) {});
  }, []);

  return (
    <div>
      <h1> Product Details </h1>
      <p> {spellDetail?.desc && spellDetail.desc[0]} </p>
      <button onClick={handleAdd}> Add to Favourite </button>
    </div>
  );
};

export default SpellDetails;
