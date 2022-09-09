import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SpellComponent = () => {
  const spells = useSelector((state) => state.allSpells.spells);

  console.log(spells);

  const renderList = spells.map((item) => {
    console.log(item);
    return (
      <div class="cards">
        {" "}
        <Link to={"/spell/" + item.index}>{item.name}</Link>{" "}
      </div>
    );
  });

  return <> {renderList} </>;
};

export default SpellComponent;
