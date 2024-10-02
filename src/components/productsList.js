import React from "react";
import { CardMedia, Grid } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "../components/productList.css";

const products = [
  {
    id: 1,
    category: "Electronics",
    name: "Laptop",
    price: "$999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    category: "Electronics",
    name: "Phone",
    price: "$799",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    category: "Electronics",
    name: "Headphones",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    category: "Electronics",
    name: "Monitor",
    price: "$299",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    category: "Electronics",
    name: "Keyboard",
    price: "$99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    category: "Electronics",
    name: "Keyboard",
    price: "$99",
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 className="thq-heading-2 center">Our Products</h2>
      <div className="product-list-container">
        {products.map((product) => (
          <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src={product.image}
                  srcSet={product.image}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="body-xs">{product.category}</Typography>
              <Link
                href="#product-card"
                color="neutral"
                textColor="text.primary"
                overlay
                sx={{ fontWeight: "md" }}
              >
                {product.name}
              </Link>
              <Typography level="body-xs">{product.price}</Typography>
            </CardContent>
            <CardOverflow>
              <Button
                sx={{
                  backgroundColor: "#080A45",
                  "&:hover": {
                    backgroundColor: "#23297F",
                  },
                }}
                variant="solid"
                className="enquirebtn"
                size="lg"
              >
                Enquire Now
              </Button>
            </CardOverflow>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
