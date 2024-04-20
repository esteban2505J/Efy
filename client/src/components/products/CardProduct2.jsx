<<<<<<< HEAD
import React, { useEffect } from "react";
import { Card, CardBody, CardFooter, Image, link } from "@nextui-org/react";
import { Link } from "react-router-dom";
=======
import React from "react";
import { Card, CardBody, CardFooter} from "@nextui-org/react";
>>>>>>> 21e58ecda5969bd2254aebd4a1d61cf65b9cc0ee
import { useNavigate } from "react-router-dom";
import PaginationNav from "../tienda/PaginationNav";
import { useProduct } from "../../context/ProductContext";

import { productList } from "./productData";

export default function CardProduct2() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { products, updateProduct } = useProduct();
  const list = products;
=======
>>>>>>> 21e58ecda5969bd2254aebd4a1d61cf65b9cc0ee

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
<<<<<<< HEAD
        {list.map((item) => (
=======
        {productList.map((item, index) => (
>>>>>>> 21e58ecda5969bd2254aebd4a1d61cf65b9cc0ee
          <Card
            isBlurred="true"
            shadow="sm"
            key={item._id}
            isPressable={true}
            // En CardProduct2
<<<<<<< HEAD
            onPress={() => {
              try {
                navigate(`/product/${item._id}`);
              } catch (error) {
                console.log(error);
              }
            }}
=======
            onClick={() =>
              navigate(`/product/${item.title}`)
            }
>>>>>>> 21e58ecda5969bd2254aebd4a1d61cf65b9cc0ee
          >
            <CardBody className="overflow-visible p-0 ">
              <img
                src={item.referenceImage.secureUrl}
                alt={item.title}
                className="  rounded-xl shadow-md"
              />
            </CardBody>
            <CardFooter className="text-small justify-between ">
              <b>{item.title}</b>
              <p className="text-default-500">$ 40000</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <PaginationNav />
    </>
  );
}
