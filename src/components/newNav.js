import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Fab,
  IconButton,
  InputAdornment,
  TextField,
  Drawer,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { WhatsApp } from "@mui/icons-material";

const NavigationBar = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1000px)").matches
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const handleSearch = () => {
    console.log("Search button clicked");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div className="drawerContent">
      <div className="item">
        <NavLink to={"/"}>
          <h3 className="thq-body-3">Home</h3>
        </NavLink>
      </div>
      <div className="item">
        <NavLink to={"/about"}>
          <h3 className="thq-body-3">About</h3>
        </NavLink>{" "}
      </div>
      <div className="item">
        <NavLink to={"/services"}>
          <h3 className="thq-body-3">Services</h3>
        </NavLink>{" "}
      </div>
      <div className="item">
        <NavLink to={"/contact"}>
          <h3 className="thq-body-3">Contact Us</h3>
        </NavLink>{" "}
      </div>
      <div className="item">
        <NavLink to={"/Establishments"}>
          <h3 className="thq-body-3">Establishments</h3>
        </NavLink>{" "}
      </div>
      <Link to={"https://wa.me/+918281694425"}>
        <button className="item">
          <Fab color="primary" aria-label="Contact">
            <WhatsApp />
          </Fab>
        </button>
      </Link>
    </div>
  );

  return (
    <div className="navcontainer">
      <div className="navbar-main">
        <h1>PRABHA</h1>
        {matches && (
          <div className="navbar-links">
            <span className="thq-link thq-body-small">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {props.link1}
              </NavLink>
            </span>
            <span className="thq-link thq-body-small">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {props.link2}
              </NavLink>
            </span>
            <span className="thq-link thq-body-small">
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {props.link3}
              </NavLink>
            </span>
            <span className="thq-link thq-body-small">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {props.link4}
              </NavLink>
            </span>
            <span className="thq-link thq-body-small">
              <NavLink
                to="/Establishments"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {props.link5}
              </NavLink>
            </span>
          </div>
        )}
        {matches && (
          <div className="searchbar">
            <TextField
              variant="outlined"
              placeholder="Search for services....."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearch} edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ width: 300, borderRadius: 20 }} // Set the width of the search bar as needed
            />
          </div>
        )}
        {!matches && (
          <IconButton
            aria-label="Menu"
            onClick={toggleDrawer(true)}
            sx={{ color: "#080A45" }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </div>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

NavigationBar.defaultProps = {
  link1: "Home",
  link2: "About",
  logoSrc:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original",
  logoAlt: "logo",
  link3: "Services",
  link5: "Establishments",
  link4: "Contact Us",
};

NavigationBar.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
};

export default NavigationBar;
