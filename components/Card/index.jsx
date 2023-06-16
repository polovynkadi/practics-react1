import React from "react";
import "./Card.css";

function Card(props) {
  const { className } = props;

  return (
    <div className={`card ${className || ""}`}>
      <div className="frame-5">
        <img className="vector-5" src="/img/vector-1.svg" alt="Vector" />
      </div>
    </div>
  );
}

export default Card;
