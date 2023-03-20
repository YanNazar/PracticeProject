import "./Approach.css"
import React from "react";

import Photo from "../../assets/ApproachPhoto.png";
import horn from "../../assets/horn.svg";
import calendar from "../../assets/calendar.svg";
import document from "../../assets/document.svg";

function Approach(){
    return(
        <div className="approach">

            <div className="photoContainer">
                <img className="photo"  src={Photo} alt="approach"/>
            </div>

            <div className="approachText">
                <h2>Approach</h2>
                <h1>We strive to create meaningful projects</h1>
                <div className="approachItem">
                    <div className="approachIcon">
                        <img src = {horn} alt="horn"/>
                    </div>
                    <p>We are sure that the brands built on a strong strategy, 
                        big ideas and simple human values always win. 
                        Only such brands change the game.</p>
                </div>

                <div className="approachItem">
                    <div className="approachIcon">
                        <img src = {calendar} alt="calendar"/>
                    </div>
                    <p>No one can realize the idea as its creators. 
                        Therefore, we set up agency-based photo and video production departments.</p>
                </div>

                <div className="approachItem">
                    <div className="approachIcon">
                        <img src = {document} alt="document"/>
                    </div>
                    <p>We strive to create meaningful projects that make brands valuable, 
                        and the world around us more aesthetic.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Approach;