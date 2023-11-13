import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

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

  const addItem = (item) => {
    setShoppingCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItemIndex === -1) {
        // Si el artículo no existe, agrégalo con una cantidad de 1
        return [...prevCart, { ...item, quantity: 1 }];
      } else {
        // Si el artículo ya existe, actualiza su cantidad
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity =
          updatedCart[existingItemIndex].quantity + 1;
        return updatedCart;
      }
    });

    // Mueve el localStorage.setItem fuera del callback de setShoppingCart
    // para que use el estado de shoppingCart actualizado.
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify([...shoppingCart, item])
    );
    console.log(shoppingCart);
  };

  const deleteItem = (item) => {
    const { id } = item;
    const updatedCart = shoppingCart.filter((cartItem) => cartItem.id !== id);
    setShoppingCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default useCart;
