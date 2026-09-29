import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ cartCount }) {

  return (
    <nav className="navigation">

      <NavLink to="/">
         Home
      </NavLink>

      <NavLink to="/products">
         Products
      </NavLink>

      <NavLink to="/cart">
         Cart

        {cartCount > 0 && (
          <span className="cart-badge">
            {cartCount}
          </span>
        )}

      </NavLink>

      <NavLink to="/checkout">
         Checkout
      </NavLink>

    </nav>
  );
}

export default Navigation;