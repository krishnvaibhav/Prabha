import React, { useState } from "react";

import PropTypes from "prop-types";

import "./features1.css";

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="service-box">
        <h2 className="thq-heading-2 ">Our Services</h2>
        <p className="thq-heading-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt .
        </p>
      </div>
      <div className="thq-section-padding">
        <div className="features1-container2 thq-section-max-width">
          <div className="features1-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features1-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features1-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features1-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features1-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features1-tab-horizontal1"
            >
              <div className="features1-divider-container1">
                {activeTab === 0 && (
                  <div className="features1-container3"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features1-tab-horizontal2"
            >
              <div className="features1-divider-container2">
                {activeTab === 1 && (
                  <div className="features1-container4"></div>
                )}
              </div>
              <div className="features1-content2">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Features1.defaultProps = {
  feature1ImgAlt: "Printing Services",
  feature3Description: "High-quality printing services tailored to your needs.",
  feature3Title: "Customized Solutions",
  feature3ImgSrc:
    "https://images.unsplash.com/photo-1588529926840-640711e974fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4M3w&ixlib=rb-4.0.3&q=80&w=1080",
  feature1ImgSrc:
    "https://images.unsplash.com/photo-1496166319048-6293b12c6cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4NHw&ixlib=rb-4.0.3&q=80&w=1080",
  feature2Description:
    "Fast and reliable delivery options for your convenience.",
  feature1Title: "Professional Printing",
  feature3ImgAlt: "Customized Solutions",
  feature1Description:
    "Experience top-notch printing services with attention to detail.",
  feature2ImgSrc:
    "https://images.unsplash.com/photo-1601488844130-d43ad826b912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4NXw&ixlib=rb-4.0.3&q=80&w=1080",
  feature2ImgAlt: "Fast Delivery",
  feature2Title: "Quick Turnaround",
};

Features1.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
};

export default Features1;
