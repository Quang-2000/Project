import React from "react";
import "./styles/header.css";
import "./styles/navbar.css";
import "./styles/banner.css";
import "./styles/product.css";
import "./styles/footerr.css";
import Banner from "../layout/Banner";
import NavBarr from "../layout/NavBarr";
import Headerr from "../layout/Headerr";
import Footerr from "../layout/Footerr";

const HomePage = () => {
  return (
    <div>
      <Headerr />
      <Banner />
      <NavBarr />
      <Footerr />
    </div>
  );
};

export default HomePage;
