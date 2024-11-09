import React from "react";
import Headerr from "../../components/layout/Headerr";
import NavBarr from "../../components/layout/NavBarr";
import Banner from "../../components/layout/Banner";
import Footerr from "../../components/layout/Footerr";
import ProductsList from "../../components/ProductsList";

const HomePage = () => {
  return (
    <div>
      <Headerr />
      <NavBarr />
      <Banner />
      <ProductsList />
      <Footerr />
    </div>
  );
};

export default HomePage;
