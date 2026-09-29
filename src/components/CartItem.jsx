import React from "react";

function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) {
  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      {/* Product Information */}
      <div className="cart-item-info">

        <h3>{item.name}</h3>

        <p className="cart-category">
          {item.category}
        </p>

        <p className="cart-price">
          ₹{item.price.toLocaleString("en-IN")}
        </p>

      </div>

      {/* Quantity Controls */}
      <div className="quantity-control">

        <button
          className="quantity-btn"
          onClick={() => onDecrease(item.id)}
        >
          
        </button>

        <span className="quantity">
          {item.quantity}
        </span>

        <button
          className="quantity-btn"
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>

      </div>

      {/* Item Total */}
      <div className="cart-item-total">

        <strong>
          ₹{itemTotal.toLocaleString("en-IN")}
        </strong>

      </div>

      {/* Remove */}
      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
      >
        
      </button>

    </div>
  );
}

export default CartItem;