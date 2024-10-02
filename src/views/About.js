import React from "react";
import NewNavbar from "../components/newNav";
import Footer from "../components/footer";
import AboutContent from "../components/aboutContent";
import "../views/home.css";

export default function About() {
  return (
    <div
      className="home-container"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL}/themes/bg-texture.jpg)`,
      // }}
    >
      <NewNavbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
