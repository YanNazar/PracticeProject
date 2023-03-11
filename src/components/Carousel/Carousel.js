import React, { useState } from "react";
import pic1 from "../../images/pic1.png";


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = images.length - 1;

  const handleNext = () => {
    const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    setCurrentIndex(prevIndex);
  }

  return (
    <div className="carousel">
      <div className="carousel-items">
          <img key = {pic1} alt = ""/>
      </div>
      <button onClick={handlePrev}>&lt;</button>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default Carousel;
