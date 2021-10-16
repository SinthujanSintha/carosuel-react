import React from "react";

const SliderContent = ({ activeId, sliderImage }) => {
  return (
    <section>
      {sliderImage.map((image, index) => (
        <div
          key={index}
          className={index === activeId ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={image.urls} alt="SlideImage" />
          <h2 className="slide-title">{image.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
