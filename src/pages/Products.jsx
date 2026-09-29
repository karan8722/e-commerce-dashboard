import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { getProducts } from "../utils/api";

function Products({ onAddToCart }) {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const loadProducts = async () => {

      try {

        setLoading(true);

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        console.error(error);

        setError("Unable to load products.");

      } finally {

        setLoading(false);

      }
    };

    loadProducts();

  }, []);

  return (
    <div>

      <div className="page-header">

        <div>
          <h1>Products</h1>

          <p>
            Manage and view all available products.
          </p>
        </div>

        <button className="btn btn-success">
          + Add Product
        </button>

      </div>

      {loading && (
        <div className="text-center mt-5">

          <div
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>

          <p className="mt-2">
            Loading products...
          </p>

        </div>
      )}

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {!loading && !error && (
        <ProductList
          products={products}
          onAddToCart={onAddToCart}
        />
      )}

    </div>
  );
}

export default Products;