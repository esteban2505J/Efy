import React from "react";

import useCart from "../context/CartContext";
import { Button } from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
export default function FavoriteItems() {
  const { favoriteItems, deleteFvoriteItem } = useCart();
  return (
    <>
      <div className="flex flex-col m-4">
        {favoriteItems.map((item) => {
          return (
            <div className="flex-row" key={item.title}>
              <div className="flex justify-evenly">
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-44 h-44 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="m-4 ">
                  <h2 className="text-bold mb-2">{item.title}</h2>
                  <h2 className="mt-3">Price: {item.price}</h2>
                  <Button
                    onPress={() => {
                      deleteFvoriteItem(item);
                    }}
                    className="mt-3 hover:text-red-500 hover:bg-black"
                  >
                    <FaTrashAlt />
                  </Button>
                </div>
              </div>
              <hr className="m-3" />
            </div>
          );
        })}
      </div>
    </>
  );
}
