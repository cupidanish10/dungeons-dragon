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
    <div className="main bg-gradient">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <button
              onClick={handleAdd}
              className="btn btn-secondary btn-sm mb-2"
            >
              {" "}
              Add to Favourite{" "}
            </button>
            <p> {spellDetail?.desc && spellDetail.desc[0]} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellDetails;
