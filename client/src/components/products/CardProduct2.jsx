import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function CardProduct2() {
  const baseImagePath = "src/assets/images";
  const list = [
    {
      title: "Orange",
      img: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: `${baseImagePath}/tangerine.jpg`,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: `${baseImagePath}/orange.jpg`,
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: `${baseImagePath}/lemons.jpg`,
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: `${baseImagePath}/avocados.jpg`,
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: `${baseImagePath}/lemons.jpg`,
      price: "$8.00",
    },
    {
      title: "Banana",
      img: `${baseImagePath}/bananas.jpg`,
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: `${baseImagePath}/watermelon.jpg`,
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          isBlurred="true"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
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
  );
}
