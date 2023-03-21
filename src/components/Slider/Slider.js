import "./Slider.css";
import SliderFirst from "../../assets/SliderFirst.png";
import SliderSecond from "../../assets/SliderSecond.png";
import React, { useState } from "react";

function Slider(){
    const photo = [SliderFirst, SliderSecond];

    const [count, setCount] = useState(0);
    const maxValue = photo.length-1;
  
    const increment = () => {
      if (count < maxValue) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setCount(maxValue);
      }
    };
    
    var SliderPhoto = photo[count];

    return (
        <div className="sliderContainer">
            <img src = {SliderPhoto} alt="slider"/>
            <div className="sliderButtons">
                <button onClick={decrement}>&#60;</button>
                <button onClick={increment}>&#62;</button>
                <div className="sliderText">
                    <h1>Intro</h1>
                    <p>
                        By the same illusion which lifts the horizon.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Slider;