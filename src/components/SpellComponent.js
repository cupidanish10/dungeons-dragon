import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SpellComponent = () => {
  const spells = useSelector((state) => state.allSpells.spells);

  console.log(spells);

  const renderList = spells.map((item) => {
    console.log(item);
    return (
      <div className="col-md-4">
        <div class="card custom-card glass-ui p-2 mb-3">
          <div className="content">
            {" "}
            <Link to={"/spell/" + item.index}>{item.name}</Link>{" "}
          </div>
        </div>
      </div>
    );
  });

  return <> {renderList} </>;
};

export default SpellComponent;
