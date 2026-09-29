import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="rating">
           {product.rating}
        </p>

        <h4>
          ₹{product.price.toLocaleString("en-IN")}
        </h4>

        <p className="stock">
          Stock: {product.stock}
        </p>

        <button
          className="btn btn-primary w-100"
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
        >
          {product.stock > 0
            ? "Add to Cart"
            : "Out of Stock"}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;