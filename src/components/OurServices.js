import React from "react";
import "./OurServices.css"; // Importing the CSS file for styles
import PrintIcon from "@mui/icons-material/Print";

const services = [
  {
    icon: "🧠",
    title: "Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: "📢",
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: "💻",
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
  {
    icon: "🎨",
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <h2>Our Services</h2>
      <p>
        Consectetur adipiscing elit nullam nunc justo sagittis suscipit
        ultrices.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="icon">
              <PrintIcon />
            </div>
            <h2 className="thq-heading-2">{service.title}</h2>
            <p className="thq-body-small">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
