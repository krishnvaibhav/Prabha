import React from "react";

import PropTypes from "prop-types";

import "./hero.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div
      className="hero-header78"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/themes/home-img4.jpg)`,
      }}
    >
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <Link to={"/products"}>
            <button className="thq-button-filled hero-button1">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </Link>
          <Link to={"/contact"}>
            <button className="thq-button-outline hero-button2">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={home1}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={home2}
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={home3}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={home4}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={home5}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={home1}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={home2}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={home3}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={home4}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={home5}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div> */}
      <div>
        <div className="hero-container2">
          {/* <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script> */}
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  image3Src:
    "https://images.unsplash.com/photo-1653135709745-17b3fd84a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  image2Src:
    "https://images.unsplash.com/photo-1538439782-313efe7e710a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4NHw&ixlib=rb-4.0.3&q=80&w=1080",
  image11Src:
    "https://images.unsplash.com/photo-1606942040878-9a852c5045a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4NXw&ixlib=rb-4.0.3&q=80&w=1080",
  image5Alt: "Hero Image",
  image1Alt: "Hero Image",
  image2Alt: "Hero Image",
  image3Alt: "Hero Image",
  action2: "Contact Us",
  action1: "Products",
  image5Src:
    "https://images.unsplash.com/photo-1577579389481-aad9b0e251c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4N3w&ixlib=rb-4.0.3&q=80&w=1080",
  image4Src:
    "https://images.unsplash.com/photo-1593012370132-c4390ff79e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4OHw&ixlib=rb-4.0.3&q=80&w=1080",
  image4Alt: "Hero Image",
  heading1: "Medium length hero headline goes here",
  content1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image1Src:
    "https://images.unsplash.com/photo-1563257567-242c0e4bef72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk3NTQ4OHw&ixlib=rb-4.0.3&q=80&w=1080",
};

Hero.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
};

export default Hero;
