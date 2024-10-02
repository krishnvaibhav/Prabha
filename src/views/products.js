import React from "react";
import NewNavbar from "../components/newNav";
import Footer from "../components/footer";
import ProductList from "../components/productsList";

export default function Products() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/themes/surface-white-wall.jpg)`,
      }}
    >
      <NewNavbar />
      <ProductList />
      <Footer />
    </div>
  );
}
