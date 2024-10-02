import React, { useRef } from "react";
import { Button, TextField } from "@mui/material";
import GoogleMapReact from "google-map-react";
import PlaceIcon from "@mui/icons-material/Place";
import "../components/contactform.css";

const ContactForm = () => {
  const formData = useRef({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    formData.current[id] = value; // Update the ref value directly
  };

  const handleClick = () => {
    const phoneNumber = "+918075961210";
    const { name, email, subject, message } = formData.current; // Access ref value

    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Subject: ${subject}. Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  const key = "AIzaSyBJ-kdFOUUBPlKa2hYk4CQyF0leWaQ6eUQ";

  const locationLatLng = {
    lat: 10.003436498628917,
    lng: 76.30536400716846,
  };

  const location = {
    address: "Prabha Prints & Sales",
  };

  const openGoogleMaps = () => {
    const destinationAddress = encodeURIComponent(location.address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationAddress}`;
    window.open(googleMapsUrl, "_blank");
  };

  const LocationPin = () => (
    <div className="pin">
      <PlaceIcon />
    </div>
  );

  const Map = () => {
    return (
      <div className="google-map" onClick={openGoogleMaps}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={locationLatLng}
          defaultZoom={17}
        >
          <LocationPin lat={locationLatLng.lat} lng={locationLatLng.lng} />
        </GoogleMapReact>
      </div>
    );
  };

  return (
    <section className="contact-form">
      <div
        className="contact"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/themes/bg-texture2.jpg)`,
        }}
      >
        <div className="form">
          <h3 className="thq-heading-3 white-text">Contact Us</h3>
          <div className="form-1">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              sx={{ width: "45%", background: "white" }}
              defaultValue={formData.current.name}
              onChange={handleInputChange} // Handle change for name field
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              sx={{ width: "45%", background: "white" }}
              defaultValue={formData.current.email}
              onChange={handleInputChange} // Handle change for email field
            />
          </div>
          <div className="form-2">
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              sx={{ width: "100%", background: "white" }}
              defaultValue={formData.current.subject}
              onChange={handleInputChange} // Handle change for subject field
            />
          </div>
          <div className="form-3">
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              multiline
              maxRows={4}
              sx={{ width: "100%", background: "white" }}
              defaultValue={formData.current.message}
              onChange={handleInputChange} // Handle change for message field
            />
          </div>
          <div className="submit-btn">
            <button
              className="thq-button-filled hero-button1"
              onClick={handleClick}
            >
              <span className="thq-body-small">Submit</span>
            </button>
          </div>
        </div>
        <div className="maps">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
