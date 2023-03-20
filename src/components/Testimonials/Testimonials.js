import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css"

import Tal from "../../assets/Tal.png";
import Azabeh from "../../assets/Azabeh.png";
import Michel from "../../assets/Michel.png";

function Testimonials(){
    return(
        <div className="testmonialsContainer">
            <div className="testmonials">
                <div className="testmonialsTitle">
                    <h2>Testimonials</h2>
                    <h1>What <br/> people say</h1>
                </div>
                <div className="testmonialCardsContainer">
                    <TestimonialCard 
                        image = {Tal} 
                        name = "Tal Gilad"
                        enterprise = "Teach for America"
                        text = {"AIR’s ideas are refreshing and out of the box. " 
                        + "Authentic team that focuses on the important path of the brand."}
                        color = {"blue"}
                        />
                    <TestimonialCard 
                        image = {Azabeh} 
                        name = "Azadeh Hawkins"
                        enterprise = "Hawkins Consulting"
                        text = {"AIR is an exceptional agency that leads with creative talent,"
                        + " first-class account servicing."}
                        color = {"yellow"}
                        />
                    <TestimonialCard 
                        image = {Michel} 
                        name = "Michel Grover"
                        enterprise = "Hulu"
                        text = {"AIR raises the agency bar to stratospheric heights "
                        + "on both creative output and client service."}
                        color = {"red"}
                        />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;