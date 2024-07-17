import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import {
  getProducts,
  getProduct,
  creteProduct,
  getSubCategories,
} from "../api/products";

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
  const [subCategories, setSubCategories] = useState([]);
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

  const createProductContext = async (product) => {
    try {
      const productCreated = await creteProduct(product);
      console.log(productCreated);
    } catch (error) {
      console.log(error);
    }
  };

  // Por medio de este useEffect se piden los productos la backend
  useEffect(
    () => {
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

      const fetchSubCategories = async () => {
        try {
          const dataSubcategories = await getSubCategories();

          setSubCategories(dataSubcategories.data);
          console.log(dataSubcategories.data);
          if (dataSubcategories.length === 0) {
            console.log("Ups!! No se encontraron las subCategorías");
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchProducts();
      fetchSubCategories();
    },
    [],
    [subCategories]
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        currentProduct,
        setCurrentProduct,
        updateProduct,
        loadProduct,
        createProductContext,
        subCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default useProduct;
