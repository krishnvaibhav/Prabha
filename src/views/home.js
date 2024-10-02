// src/pages/Home.js
import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Footer from "../components/footer";
import "./home.css";
import NewNavbar from "../components/newNav";
import IconGrid from "../components/CompaniesWorked";
import { WhatsApp } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

// Import motion utilities
import MotionWrapper from "../components/motionWrapper";
import { fadeInUp } from "../components/motionVarient";

const Home = () => {
  return (
    <div
      className="home-container"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL}/themes/surface-white-wall.jpg)`,
      // }}
    >
      <Helmet>
        <title>Prabha Printing and Stationary</title>
      </Helmet>

      <NewNavbar />

      {/* Wrapping Hero component with reusable MotionWrapper */}
      <MotionWrapper variants={fadeInUp}>
        <Hero />
      </MotionWrapper>

      {/* Wrapping OurServices component */}
      {/* <MotionWrapper variants={fadeInUp} viewportAmount={0.5}>
        <OurServices />
      </MotionWrapper> */}

      {/* Wrapping IconGrid component with delay */}
      <MotionWrapper variants={fadeInUp} viewportAmount={0.3} delay={0.3}>
        <IconGrid />
      </MotionWrapper>

      {/* Wrapping Testimonial component */}
      <MotionWrapper variants={fadeInUp} viewportAmount={0.4}>
        <Testimonial />
      </MotionWrapper>

      {/* Wrapping Contact component */}
      <MotionWrapper variants={fadeInUp} viewportAmount={0.6}>
        <Contact />
      </MotionWrapper>

      <Footer />

      {/* WhatsApp button */}
      <Link to={"https://wa.me/+918281694425"}>
        <button className="fixed-bottom-right">
          <Fab color="primary" aria-label="Contact">
            <WhatsApp />
          </Fab>
        </button>
      </Link>
    </div>
  );
};

export default Home;
