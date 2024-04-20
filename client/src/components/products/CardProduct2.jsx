import React from "react";
import { Card, CardBody, CardFooter} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import PaginationNav from "../tienda/PaginationNav";

import { productList } from "./productData";

export default function CardProduct2() {
  const navigate = useNavigate();

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {productList.map((item, index) => (
          <Card
            isBlurred="true"
            shadow="sm"
            key={index}
            isPressable={true}
            // En CardProduct2
            onClick={() =>
              navigate(`/product/${item.title}`)
            }
          >
            <CardBody className="overflow-visible p-0 ">
              <img
                src={item.img}
                alt={item.title}
                className="  rounded-xl shadow-md"
              />
            </CardBody>
            <CardFooter className="text-small justify-between ">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <PaginationNav />
    </>
  );
}
