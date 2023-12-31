import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import Hero from "./Hero";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hero />
    <Main />
    <Footer />
  </React.StrictMode>
);
