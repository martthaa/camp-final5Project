import { Button } from "../../utils/Button/Button";
import React from "react";

export const AboutUs = () => {
  const aboutUsItems = [
    {
      title: "Organic Foods Only",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      title: "Quality Standards",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];
  return (
    <div className="about-us" id="about-us">
      <div className="container">
        <div className="about-us__content">
          <h3 className="about-us__subtitle">About Us</h3>
          <h2 className="about-us__title">
            We Believe in Working Accredited Farmers
          </h2>
          <div className="about-us__description">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </div>
          <div className="about-us__items">
            {aboutUsItems.map((item, index) => (
              <div className="about-us__item" key={index}>
                <div className="about-us__item-image"></div>
                <div className="about-us__content-wrapper">
                  <h4 className="about-us__item-title">{item.title}</h4>
                  <div className="about-us__item-description">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button text="Shop Now" color="darkBlue" />
        </div>
      </div>
    </div>
  );
};
