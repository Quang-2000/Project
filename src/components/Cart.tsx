import React from "react";
import NavBarr from "./layout/NavBarr";
import Footerr from "./layout/Footerr";

const Cart = () => {
  return (
    <div>
      <NavBarr />
      <div className="cart">
        <div className="cart-list">Giỏ hàng của bạn</div>
      </div>
      <Footerr />
    </div>
  );
};

export default Cart;
