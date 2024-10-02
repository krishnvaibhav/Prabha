import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";
import NotFound1, { NotFound } from "./views/not-found.js";
import Home from "./views/home";
import About from "./views/About.js";
import ContactPage from "./views/contact.js";
import Products from "./views/products.js";
import Establishments from "./views/Establishments.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Products />} />
        <Route path="/Establishments" element={<Establishments />} />
        <Route path="/not-found" element={<NotFound1 />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
