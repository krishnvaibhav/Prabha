import React from "react";
import NewNavbar from "../components/newNav";
import Footer from "../components/footer";
import "../views/home.css";
import EstablishContent from "../components/establishContent";

export default function Establishments() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/themes/surface-white-wall.jpg)`,
      }}
    >
      <NewNavbar />
      <EstablishContent />
      <Footer />
    </div>
  );
}
