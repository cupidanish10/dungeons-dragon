import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1 className="animate__animated animate__bounce">
            {" "}
            Dungeons & Dragons:Virtual Play Weekends
          </h1>
          <p>
            {" "}
            A thrilling space-based adventure setting for the world’s greatest
            roleplaying game.{" "}
          </p>

          <Link
            to="/dungeons-dragon/spell"
            class="btn btn-danger btn-lg btn-brand"
          >
            {" "}
            Learn Spell{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
