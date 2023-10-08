import React from "react";
import { Card, CardBody, CardFooter, Image, link } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CardProduct2() {
  const navigate = useNavigate();
  const baseImagePath = "src/assets/images";
  // const [redirectToProduct, setRedirectToProduct] = useState(false);
  const list = [
    {
      title: "Kiwi",
      img: `${baseImagePath}/perfume7.jpg`,
      price: "$5.50",
    },
    {
      title: "Perfume Rose",
      img: `${baseImagePath}/perfume10.jpg`,
      price: "$7.50",
    },
    {
      title: "Perfume Women",
      img: `${baseImagePath}/perfume1.jpg`,
      price: "$15.00",
    },
    {
      title: "Trebony",
      img: `${baseImagePath}/perfume2.jpg`,
      price: "$10.00",
    },
    {
      title: "Perfume Women 2",
      img: `${baseImagePath}/perfume4.jpg`,
      price: "$16.30",
    },
    {
      title: "Perfume Rose 2",
      img: `${baseImagePath}/perfume11.jpg`,
      price: "$14.00",
    },
    {
      title: "Shalimar",
      img: `${baseImagePath}/perfume5.jpg`,
      price: "$15.70",
    },
    {
      title: "Girgio Armani",
      img: `${baseImagePath}/perfume6.jpg`,
      price: "$8.00",
    },
    {
      title: "Perfume Men",
      img: `${baseImagePath}/perfume12.jpg`,
      price: "$8.00",
    },
    {
      title: "Sea Power",
      img: `${baseImagePath}/perfume8.jpg`,
      price: "$7.50",
    },
    {
      title: "Perfume Men 2",
      img: `${baseImagePath}/perfume13.jpg`,
      price: "$8.50",
    },
    {
      title: "Safe Perfume",
      img: `${baseImagePath}/perfume9.jpg`,
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
          isPressable={true}
          onClick={() => navigate("/product", item)}
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
