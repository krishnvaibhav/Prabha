import React from "react";
import "./IconGrid.css"; // Import your CSS styles
import GoogleIcon from "@mui/icons-material/Google";

const icons = [
  { id: 1, name: "Icon 1", icon: <GoogleIcon /> }, // Placeholder emoji, replace with your own icons
  { id: 2, name: "Icon 2", icon: <GoogleIcon /> },
  { id: 3, name: "Icon 3", icon: <GoogleIcon /> },
  { id: 4, name: "Icon 4", icon: <GoogleIcon /> },
  { id: 5, name: "Icon 5", icon: <GoogleIcon /> },
  { id: 6, name: "Icon 6", icon: <GoogleIcon /> },
  { id: 7, name: "Icon 7", icon: <GoogleIcon /> },
  { id: 8, name: "Icon 8", icon: <GoogleIcon /> },
];

const IconGrid = () => {
  return (
    <div className="full-width">
      <h2 className="thq-heading-2 center">Our Clients</h2>
      <div className="icon-grid-container">
        <div className="icon-grid">
          {icons.map((icon) => (
            <div key={icon.id} className="icon-item">
              <div className="icon-image">{icon.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconGrid;
