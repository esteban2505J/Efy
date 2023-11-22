import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();
import { getShoppingList } from "../api/auth";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("shoppingCart")) || []
  );
  const [favoriteItems, setFavoriteItems] = useState(
    JSON.parse(localStorage.getItem("favoriteItems")) || []
  );

  const [shoppingOrders, setShoppingOrders] = useState();

  const addItem = (item) => {
    setShoppingCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItemIndex === -1) {
        // Si el artículo no existe, agrégalo con una cantidad de 1
        const updatedCart = [...prevCart, { ...item, quantity: 1 }];

        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
        return updatedCart; // Cambiado a 'updatedCart' en lugar de 'cart'
      } else {
        // Si el artículo ya existe, actualiza su cantidad
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity =
          updatedCart[existingItemIndex].quantity + 1;

        localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
        return updatedCart; // Cambiado a 'updatedCart' en lugar de 'cart'
      }
    });
  };

  // Función para calcular el total del carrito
  const calculateTotal = (cart) => {
    let valorTotal = 0;
    cart.forEach((item) => {
      const precioSinFormato = parseInt(item.price.replace(/[$.]/g, ""), 10);
      valorTotal += precioSinFormato * item.quantity;
    });
    return valorTotal.toFixed(2);
  };
  const deleteItem = async (item) => {
    const { title, quantity } = item;

    if (quantity > 1) {
      // Si la cantidad es mayor que 1, disminuye la cantidad en 1
      const updatedCart = shoppingCart.map((cartItem) =>
        cartItem.title === title
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      setShoppingCart(updatedCart);
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    } else {
      // Si la cantidad es 1, elimina el artículo del carrito
      const updatedCart = shoppingCart.filter(
        (cartItem) => cartItem.title !== title
      );

      setShoppingCart(updatedCart);
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    }
  };

  const addFavoriteItem = (item) => {
    setFavoriteItems((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItemIndex === -1) {
        // Si el artículo no existe, agrégalo con una cantidad de 1
        const updateFavorites = [...prevCart, { ...item, quantity: 1 }];

        localStorage.setItem("favoriteItems", JSON.stringify(updateFavorites));
        return updateFavorites; // Cambiado a 'updatedCart' en lugar de 'cart'
      } else {
        // Si el artículo ya existe, actualiza su cantidad
        const updateFavorites = [...prevCart];
        updateFavorites[existingItemIndex].quantity =
          updateFavorites[existingItemIndex].quantity + 1;

        localStorage.setItem("favoriteItems", JSON.stringify(updateFavorites));
        return updateFavorites; // Cambiado a 'updatedCart' en lugar de 'cart'
      }
    });
  };

  const deleteFvoriteItem = async (item) => {
    const { title } = item;

    const updatedFavorites = favoriteItems.filter(
      (cartItem) => cartItem.title !== title
    );

    setFavoriteItems(updatedFavorites);
    localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));
  };

  const getOrders = async (user) => {
    const orders = await getShoppingList(user);

    console.log(orders.data);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        addItem,
        deleteItem,
        calculateTotal,
        favoriteItems,
        addFavoriteItem,
        deleteFvoriteItem,
        getOrders,
        shoppingOrders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default useCart;
