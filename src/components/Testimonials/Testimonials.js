import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css"

import Tal from "../../assets/Tal.png";
//import Azabeh from "../../assets/Azabeh.png";
//import Michel from "../../assets/Michel.png";

function Testimonials(){
    return(
        <div>
            <TestimonialCard 
                image = {Tal} 
                name = "Tal Gilad"
                enterprise = "Teach for America"
                text = {"AIR’s ideas are refreshing and out of the box. " 
                    + "Authentic team that focuses on the important path of the brand."}
            />
        </div>
    );
}

export default Testimonials;