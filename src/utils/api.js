import products from "./mockData";

// Simulate API delay
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Get all products
export const getProducts = async () => {
  await delay(800);

  return products;
};

// Get product by ID
export const getProductById = async (id) => {
  await delay(500);

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};