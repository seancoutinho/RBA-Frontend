import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("https://backend-service-n90w.onrender.com/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`https://backend-service-n90w.onrender.com/products/${productId}`);
    getProducts();
  };
  const viewProduct = async (productId) => {
    await axios.get(`https://backend-service-n90w.onrender.com/products/${productId}`);
    getProducts();
  };

  return (
    <div>
      <h1 className="title">Clients</h1>
      <h2 className="subtitle">List of Clients</h2>
      <Link to="/products/add" className="button is-primary mb-2">
        Add New
      </Link>
      <ul>
        <li>{products.name}</li>
      </ul>
    </div>
  );
};

export default ProductList;
