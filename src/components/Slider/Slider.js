import React, { useEffect, useState } from "react";
import SliderContent from "./Content/Content";
import Dot from "./Dot/Dot";
import Arrow from "./Arrow/Arrow";
import { SliderImages } from "./SliderImage/SliderImages";
import "./Slider.css";

const imagesLength = SliderImages.length - 1;
const Slider = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  useEffect(() => {
    const breakTime = setInterval(() => {
      setActiveSlider(activeSlider === imagesLength ? 0 : activeSlider + 1);
    }, 4000);
    return () => clearInterval(breakTime);
  }, [activeSlider]);

  return (
    <div className="slider-container">
      <SliderContent activeId={activeSlider} sliderImage={SliderImages} />
      <Arrow
        prevSlide={() =>
          setActiveSlider(activeSlider < 1 ? imagesLength : activeSlider - 1)
        }
        nextSlide={() =>
          setActiveSlider(activeSlider === imagesLength ? 0 : activeSlider + 1)
        }
      />
      <Dot
        activeIndex={activeSlider}
        sliderImage={SliderImages}
        onclick={(activeIndex) => setActiveSlider(activeIndex)}
      />
    </div>
  );
};

export default Slider;
