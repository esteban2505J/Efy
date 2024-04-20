import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import { getProducts, getProduct } from "../api/products";

export const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentProduct, setCurrentProduct] = useState(
    localStorage.getItem("currentProduct") || []
  );

  const updateProduct = (item) => {
    setCurrentProduct(item);
    localStorage.setItem("currentProduct", item);
  };

  const loadProduct = async (id) => {
    try {
      const res = await getProduct(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  // Por medio de este useEffect se piden los productos la backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dataProducts = await getProducts();
        setLoading(false);
        setProducts(dataProducts.data);
        console.log(dataProducts.data);
        if (dataProducts.length === 0) {
          console.log("Ups!! No se encontraron productos");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        currentProduct,
        setCurrentProduct,
        updateProduct,
        loadProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default useProduct;
