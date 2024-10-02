import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer">
      <hr className="divider" />
      <div className="footer-content">
        <div className="copyright">
          <p className="thq-body-small">Copyright &copy; Prabha Press</p>
        </div>
        <div className="social">
          <Link to={"https://wa.me/+918281694425"}>
            <WhatsAppIcon />
          </Link>
          <InstagramIcon />
          <FacebookIcon />
          <XIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
