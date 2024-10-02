import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { div } from "framer-motion/client";
import "../components/establishments.css";
import img1 from "../assets/images/home-img1.jpg";
import img2 from "../assets/images/home-img2.jpg";

export default function EstablishContent() {
  const lineStyle = {
    borderLeft: "2px solid black",
    height: "300px",
    marginLeft: "20px",
  };
  return (
    <div className="establishment-container">
      <h2 className="thq-heading-2 center">Establishments</h2>
      <div className="card-holder">
        <div className="Estcard card card1">
          <img src={img1} alt="" />
          <h2 className="thq-heading2">Prabha Press</h2>
          <p className="thq-heading-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nemo sapiente aliquid, aliquam a modi eius ut animi voluptate
            quisquam sed dicta sint error. Magnam perspiciatis esse cumque quod
            tempora enim consequatur! Consectetur fugiat velit iusto nobis
            corporis dignissimos quaerat est aspernatur sint maiores magni ab
            porro minus, commodi nostrum?
          </p>
        </div>
        <div className="verticleline" style={lineStyle}></div>
        <div className="Estcard card card2">
          <img src={img1} alt="" />
          <h2 className="thq-heading2">Prabha Industries</h2>
          <p className="thq-heading-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nemo sapiente aliquid, aliquam a modi eius ut animi voluptate
            quisquam sed dicta sint error. Magnam perspiciatis esse cumque quod
            tempora enim consequatur! Consectetur fugiat velit iusto nobis
            corporis dignissimos quaerat est aspernatur sint maiores magni ab
            porro minus, commodi nostrum?
          </p>
        </div>
      </div>
    </div>
  );
}
