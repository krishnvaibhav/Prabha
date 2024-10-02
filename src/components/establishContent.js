import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { div } from "framer-motion/client";
import "../components/establishments.css";

export default function EstablishContent() {
  const lineStyle = {
    borderLeft: "2px solid black", // You can change the thickness and color here
    height: "100px", // Adjust the height of the line
    marginLeft: "20px", // Add margin to position it
  };
  return (
    <div className="establishment-container">
      <h2 className="thq-heading-2 center">Establishments</h2>
      <div className="card-holder">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image="" title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Prabha Industries is a comprehensive printing and manufacturing
              solutions provider, delivering high-quality products across a
              variety of sectors. Our core services include printing for hotel
              and restaurant establishments, corporate branding solutions, and
              packaging and promotional materials. We specialize in bulk
              printing and production, ensuring that every project meets the
              highest standards of quality and efficiency.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <div style={lineStyle}></div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image="" title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
