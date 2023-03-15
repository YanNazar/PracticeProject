import React from "react";
import "./OurExpertise.css"

import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";

import Branding from "../../assets/Branding.png";
import Communication from "../../assets/Communication.png";
import Strategy from "../../assets/Strategy.png";

const OurExpertise = () => {
  return (
    <div className="ourExpertise">
      <h1>Our expertise</h1>
      <div className="cardBox">
        <ExpertiseCard
          image={Branding}
          title="Branding"
          text="We create additional value for companies, products, services as well as verbal and visual ways to deliver it to the audience."
          />
        <ExpertiseCard
          image={Communication}
          title="Communication"
          text="We strive to create communications that can increase media performance. We use everything — words, meanings, stories, art, movies."
          />
        <ExpertiseCard
          image={Strategy}
          title="Strategy"
          text="We create business growth strategies, from the moment of its birth to the achievement of the necessary business indicators."
          />
      </div>
    </div>
  );
};

export default OurExpertise;
