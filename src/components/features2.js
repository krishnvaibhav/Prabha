import React, { useState } from "react";

import PropTypes from "prop-types";

import "./features2.css";

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  );
};

Features2.defaultProps = {
  feature3Description:
    "Tailored printing solutions to meet your specific needs and requirements.",
  feature1ImgAlt: "High-Quality Printing Image",
  feature1Description:
    "We offer top-notch printing services using the latest technology and premium materials.",
  feature3ImgAlt: "Custom Solutions Image",
  feature2Title: "Fast Turnaround",
  feature1Title: "High-Quality Printing",
  feature1ImgSrc:
    "https://images.unsplash.com/photo-1594841244404-44707e4d58a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4NHw&ixlib=rb-4.0.3&q=80&w=1080",
  feature3ImgSrc:
    "https://images.unsplash.com/photo-1649717761463-73a3b93d9596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4NHw&ixlib=rb-4.0.3&q=80&w=1080",
  feature2Description:
    "Get your projects completed quickly with our efficient printing process.",
  feature3Title: "Custom Solutions",
  feature2ImgAlt: "Fast Turnaround Image",
  feature2ImgSrc:
    "https://images.unsplash.com/photo-1649717761463-73a3b93d9596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4NXw&ixlib=rb-4.0.3&q=80&w=1080",
};

Features2.propTypes = {
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
};

export default Features2;
