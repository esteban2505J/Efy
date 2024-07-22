import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import {
  getProducts,
  getProduct,
  creteProduct,
  getSubCategories,
  getCategories,
  getTags,
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
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
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
  useEffect(() => {
    // Pedida de los productos al backend
    const fetchProducts = async () => {
      try {
        const dataProducts = await getProducts();
        setLoading(false);
        setProducts(dataProducts.data);

        if (dataProducts.length === 0) {
          console.log("Ups!! No se encontraron productos");
        }
      } catch (error) {
        console.log(error);
      }
    };

    // pedida de las subcategorias las backend
    const fetchSubCategories = async () => {
      try {
        const dataSubcategories = await getSubCategories();

        setSubCategories(dataSubcategories.data);

        if (dataSubcategories.length === 0) {
          console.log("Ups!! No se encontraron las subCategorías");
        }
      } catch (error) {
        console.log(error);
      }
    };
    // pedida de las categorías al backend
    const fetchCategories = async () => {
      try {
        const dataCategories = await getCategories();

        setCategories(dataCategories.data);

        if (dataCategories.length === 0) {
          console.log("Ups!! No se encontraron las categorías");
        }
      } catch (error) {
        console.log(error);
      }
    };
    // pedida de las tags al backend
    const fetchTags = async () => {
      try {
        const dataTags = await getTags();

        setTags(dataTags.data);

        if (dataTags.length === 0) {
          console.log("Ups!! No se encontraron tags");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
    fetchCategories();
    fetchProducts();
    fetchSubCategories();
  }, []);

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
        categories,
        tags,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default useProduct;
