import React, { useState } from "react";

function CheckoutForm({ cart, onOrderComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "COD"
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newOrderId =
      "ORD-" + Date.now().toString().slice(-6);

    const order = {
      orderId: newOrderId,
      customer: formData,
      products: cart,
      subtotal,
      shipping,
      total,
      date: new Date().toLocaleString()
    };

    console.log("Order Created:", order);

    setOrderId(newOrderId);
    setOrderPlaced(true);

    onOrderComplete();
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-icon"></div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you, {formData.name}.
        </p>

        <p>
          Your order has been successfully placed.
        </p>

        <div className="order-number">
          Order ID: <strong>{orderId}</strong>
        </div>

        <div className="success-details">
          <p>
            <strong>Total Paid:</strong>{" "}
            ₹{total.toLocaleString("en-IN")}
          </p>

          <p>
            <strong>Payment:</strong>{" "}
            {formData.paymentMethod === "COD"
              ? "Cash on Delivery"
              : formData.paymentMethod === "UPI"
              ? "UPI"
              : "Credit / Debit Card"}
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <form
      className="checkout-form"
      onSubmit={handleSubmit}
    >
      <h2>Customer Information</h2>

      {/* Name */}
      <div className="mb-3">
        <label className="form-label">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          className={`form-control ${
            errors.name ? "is-invalid" : ""
          }`}
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        {errors.name && (
          <div className="invalid-feedback">
            {errors.name}
          </div>
        )}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          className={`form-control ${
            errors.email ? "is-invalid" : ""
          }`}
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />

        {errors.email && (
          <div className="invalid-feedback">
            {errors.email}
          </div>
        )}
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label className="form-label">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          className={`form-control ${
            errors.phone ? "is-invalid" : ""
          }`}
          value={formData.phone}
          onChange={handleChange}
          placeholder="10 digit mobile number"
          maxLength="10"
        />

        {errors.phone && (
          <div className="invalid-feedback">
            {errors.phone}
          </div>
        )}
      </div>

      {/* Address */}
      <div className="mb-3">
        <label className="form-label">
          Delivery Address
        </label>

        <textarea
          name="address"
          className={`form-control ${
            errors.address ? "is-invalid" : ""
          }`}
          rows="3"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your complete address"
        />

        {errors.address && (
          <div className="invalid-feedback">
            {errors.address}
          </div>
        )}
      </div>

      {/* City / State / Pincode */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">
            City
          </label>

          <input
            type="text"
            name="city"
            className={`form-control ${
              errors.city ? "is-invalid" : ""
            }`}
            value={formData.city}
            onChange={handleChange}
          />

          {errors.city && (
            <div className="invalid-feedback">
              {errors.city}
            </div>
          )}
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">
            State
          </label>

          <input
            type="text"
            name="state"
            className={`form-control ${
              errors.state ? "is-invalid" : ""
            }`}
            value={formData.state}
            onChange={handleChange}
          />

          {errors.state && (
            <div className="invalid-feedback">
              {errors.state}
            </div>
          )}
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">
            Pincode
          </label>

          <input
            type="text"
            name="pincode"
            className={`form-control ${
              errors.pincode ? "is-invalid" : ""
            }`}
            value={formData.pincode}
            onChange={handleChange}
            maxLength="6"
          />

          {errors.pincode && (
            <div className="invalid-feedback">
              {errors.pincode}
            </div>
          )}
        </div>
      </div>

      {/* Payment */}
      <h2 className="mt-4">
        Payment Method
      </h2>

      <div className="payment-options">

        <label className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="COD"
            checked={
              formData.paymentMethod === "COD"
            }
            onChange={handleChange}
          />

          <span>
             Cash on Delivery
          </span>
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="UPI"
            checked={
              formData.paymentMethod === "UPI"
            }
            onChange={handleChange}
          />

          <span>
            UPI
          </span>
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            value="CARD"
            checked={
              formData.paymentMethod === "CARD"
            }
            onChange={handleChange}
          />

          <span>
             Credit / Debit Card
          </span>
        </label>

      </div>

      {/* Place Order */}
      <button
        type="submit"
        className="btn btn-success btn-lg w-100 mt-4"
      >
        Place Order — ₹
        {total.toLocaleString("en-IN")}
      </button>
    </form>
  );
}

export default CheckoutForm;