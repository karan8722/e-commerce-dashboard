import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove
}) {

  // Calculate total number of items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Shipping charge
  const shipping = subtotal > 0 ? 50 : 0;

  // Final total
  const total = subtotal + shipping;


  // =====================================
  // EMPTY CART
  // =====================================

  if (cart.length === 0) {
    return (
      <div className="empty-cart">

        <div className="empty-cart-icon">
          
        </div>

        <h1>Your Cart is Empty</h1>

        <p>
          You haven't added any products to your cart yet.
        </p>

        <Link
          to="/products"
          className="btn btn-primary"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }


  // =====================================
  // CART WITH PRODUCTS
  // =====================================

  return (
    <div className="cart-page">

      {/* Header */}

      <div className="page-header">

        <div>

          <h1>Shopping Cart</h1>

          <p>
            {totalItems} item
            {totalItems !== 1 ? "s" : ""} in your cart
          </p>

        </div>

        <Link
          to="/products"
          className="btn btn-outline-primary"
        >
          ← Continue Shopping
        </Link>

      </div>


      {/* Cart Layout */}

      <div className="cart-layout">


        {/* =================================
            CART ITEMS
        ================================= */}

        <div className="cart-items">

          {cart.map((item) => (

            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />

          ))}

        </div>


        {/* =================================
            ORDER SUMMARY
        ================================= */}

        <div className="order-summary">

          <h2>Order Summary</h2>


          <div className="summary-row">

            <span>
              Items
            </span>

            <span>
              {totalItems}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹{subtotal.toLocaleString("en-IN")}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Shipping
            </span>

            <span>
              ₹{shipping.toLocaleString("en-IN")}
            </span>

          </div>


          <hr />


          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>

          </div>


          <Link
            to="/checkout"
            className="btn btn-success checkout-btn"
          >
            Proceed to Checkout →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Cart;