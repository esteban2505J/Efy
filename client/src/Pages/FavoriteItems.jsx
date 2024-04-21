import React from "react";

import useCart from "../context/CartContext";
import { Button } from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { BsCart3 } from "react-icons/bs";

export default function FavoriteItems() {
  const { favoriteItems, deleteFvoriteItem } = useCart();
  const { addItem } = useCart();

  const notifyCart = () => {
    toast(` Añadido al carrito 🛒`, {
      position: "bottom-right",
      autoClose: 3000,
      type: "success",
    });
  };
  const addItemToCart = (product) => {
    try {
      addItem(product);
      notifyCart();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col m-4">
        {favoriteItems.length === 0 ? (
          <p className="text-center text-gray-500 text-xl sm:text-3xl">
            No tienes elementos en favoritos. ¡Agrega algunos productos!
          </p>
        ) : (
          favoriteItems.map((item) => (
            <div className="flex-row" key={item.title}>
              <div className="flex justify-evenly">
                <div>
                  <img
                    src={item.referenceImage.secureUrl}
                    alt=""
                    className="w-44 h-44 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="m-4 ">
                  <h2 className="text-bold mb-2">{item.title}</h2>
                  <h2 className="mt-3">Price: {item.price}</h2>
                  <div className="flex items-center gap-x-3 ">
                    <Button
                      onPress={() => {
                        deleteFvoriteItem(item);
                      }}
                      className="mt-3 hover:text-red-500 hover:bg-black"
                    >
                      <FaTrashAlt />
                    </Button>
                    <Button
                      variant="shadow"
                      size="md"
                      className="mr-5 text-white bg-black p-5"
                      onPress={() => {
                        addItemToCart(item);
                      }}
                      endContent={
                        <div className="text-lg">
                          <BsCart3 />
                        </div>
                      }
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
              <hr className="m-3" />
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </>
  );
}
