import React from "react";
import "./styles/header.css";
import "./styles/navbar.css";
import "./styles/banner.css";
import "./styles/footerr.css";
import "./styles/cart.css";
import "./styles/productsList.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import CartPage from "./pages/Cart/CartPage";
import ProductPage from "./pages/Product/ProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
