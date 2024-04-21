import React, { useEffect } from "react";
import { Card, CardBody, CardFooter, Image, link } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PaginationNav from "../tienda/PaginationNav";
import { useProduct } from "../../context/ProductContext";

export default function CardProduct2() {
  const navigate = useNavigate();

  const { products, updateProduct } = useProduct();
  const list = products;

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item) => (
          <Card
            isBlurred="true"
            shadow="sm"
            key={item._id}
            isPressable={true}
            // En CardProduct2

            onPress={() => {
              try {
                navigate(`/product/${item._id}`);
              } catch (error) {
                console.log(error);
              }
            }}
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
