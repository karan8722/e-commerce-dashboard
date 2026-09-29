import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import "./styles/App.css";

function App() {

  const [cart, setCart] = useState([]);

  // ==========================================
  // ADD PRODUCT TO CART
  // ==========================================

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      // Product already exists
      if (existingProduct) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      // New product
      return [
        ...currentCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });

    alert(`${product.name} added to cart!`);
  };


  // ==========================================
  // INCREASE QUANTITY
  // ==========================================

  const increaseQuantity = (productId) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };


  // ==========================================
  // DECREASE QUANTITY
  // ==========================================

  const decreaseQuantity = (productId) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // ==========================================
  // REMOVE PRODUCT
  // ==========================================

  const removeFromCart = (productId) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );

  };


  return (
    <BrowserRouter>

      <div className="app">

        <Header />

        <Navigation
          cartCount={cart.reduce(
            (total, item) =>
              total + item.quantity,
            0
          )}
        />

        <main className="main-content">

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* PRODUCTS */}
            <Route
              path="/products"
              element={
                <Products
                  onAddToCart={addToCart}
                />
              }
            />

            {/* CART */}
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                />
              }
            />

            {/* CHECKOUT */}
            <Route
              path="/checkout"
              element={<Checkout />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;