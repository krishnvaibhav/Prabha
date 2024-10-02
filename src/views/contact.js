import React from "react";
import NewNavbar from "../components/newNav";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
import Contact from "../components/contact";
import "../views/home.css";
const ContactPage = () => {
  return (
    <div
      className="home-container"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL}/themes/surface-white-wall.jpg)`,
      // }}
    >
      <NewNavbar />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
