import React, { useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import userAuth from "../context/AuthContext";
import useCart from "../context/CartContext";

export default function MyOrders() {
  const { user } = userAuth();
  const { getOrders } = useCart();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      <div className="flex justify-center"></div>
    </>
  );
}
