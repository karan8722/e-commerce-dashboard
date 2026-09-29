import React from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

function Checkout({
  cart,
  onOrderComplete
}) {
  if (!cart || cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">
          
        </div>

        <h1>Your Cart is Empty</h1>

        <p>
          Add products to your cart before
          proceeding to checkout.
        </p>

        <Link
          to="/products"
          className="btn btn-primary"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;

  const total = subtotal + shipping;

  return (
    <div className="checkout-page">

      <div className="page-header">
        <div>
          <h1>Checkout</h1>

          <p>
            Complete your delivery and
            payment information.
          </p>
        </div>

        <Link
          to="/cart"
          className="btn btn-outline-secondary"
        >
          ← Back to Cart
        </Link>
      </div>

      <div className="checkout-layout">

        {/* FORM */}

        <CheckoutForm
          cart={cart}
          onOrderComplete={onOrderComplete}
        />

        {/* SUMMARY */}

        <div className="order-summary checkout-summary">

          <h2>Order Summary</h2>

          <div className="checkout-products">

            {cart.map((item) => (
              <div
                className="summary-product"
                key={item.id}
              >
                <div>
                  <strong>
                    {item.name}
                  </strong>

                  <small>
                    {item.quantity} × ₹
                    {item.price.toLocaleString(
                      "en-IN"
                    )}
                  </small>
                </div>

                <span>
                  ₹
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString("en-IN")}
                </span>
              </div>
            ))}

          </div>

          <hr />

          <div className="summary-row">
            <span>
              Total Items
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
              ₹
              {subtotal.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          <div className="summary-row">
            <span>
              Shipping
            </span>

            <span>
              ₹
              {shipping.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          <hr />

          <div className="summary-total">
            <span>
              Total
            </span>

            <strong>
              ₹
              {total.toLocaleString(
                "en-IN"
              )}
            </strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;