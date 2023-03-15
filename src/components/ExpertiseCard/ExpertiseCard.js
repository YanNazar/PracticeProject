import React from "react";
import "./ExpertiseCard.css"

const ExpertiseCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Card" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default ExpertiseCard;
