import React from "react";
import { Card, CardBody, CardFooter, Image, link } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PaginationNav from "../tienda/PaginationNav";

export default function CardProduct2() {
  const navigate = useNavigate();
  const baseImagePath = "/src/assets/images";
  // const [redirectToProduct, setRedirectToProduct] = useState(false);
  const list = [
    {
      title: "Kiwi",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899158/productsImages/perfume7_buwdaj.jpg`,
      description:
        "Kiwi es una fragancia fresca y vivaz que captura la esencia energética y jugosa de la fruta kiwi. Esta fragancia combina notas cítricas y afrutadas para crear una experiencia refrescante y revitalizante que te transportará a un exuberante huerto de kiwis en plena madurez. Perfecta para quienes buscan una fragancia ligera y revitalizante para el día a día.",
      price: "$15.000",
    },
    {
      title: "Perfume Rose",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899155/productsImages/perfume10_ppvfxs.jpg`,
      description:
        "Perfume Rose es una fragancia romántica y sofisticada que rinde homenaje a la belleza atemporal de la rosa. Esta fragancia cautivadora evoca la frescura de las rosas en plena floración, con una mezcla equilibrada de notas florales y afrutadas. Su aroma suave y envolvente es ideal para quienes buscan una fragancia elegante y femenina que complemente su estilo con un toque floral y romántico.",
      price: "$40.000",
    },
    {
      title: "Perfume Women",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899156/productsImages/perfume1_hjvkfh.jpg`,
      description:
        "Perfume Women es una fragancia diseñada especialmente para mujeres que desean expresar su feminidad y elegancia de una manera única. Esta cautivadora fragancia combina notas florales suaves con toques de sensualidad y misterio. Su aroma sofisticado y duradero es perfecto para resaltar la belleza y la confianza de cada mujer, convirtiéndola en una elección ideal para ocasiones especiales y el uso diario.",
      price: "$40.000",
    },
    {
      title: "Trebony",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899156/productsImages/perfume2_odvo02.jpg`,
      description:
        "Trebony es una fragancia intrigante y cautivadora que desafía las expectativas. Esta fragancia única combina notas de madera, especias y aromas exóticos para crear una experiencia olfativa profunda y misteriosa. Su aroma es perfecto para aquellos que buscan una fragancia distintiva y sofisticada que les ayude a destacar en cualquier ocasión, dejando una impresión memorable y duradera.",
      price: "$60.000",
    },
    {
      title: "Perfume Women 2",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899156/productsImages/perfume4_ytozbo.jpg`,
      description:
        "Perfume Women 2 es una fragancia que reinterpreta la feminidad de una manera moderna y empoderada. Esta fragancia cautivadora combina notas florales y frutales con un toque de sensualidad y frescura. Su aroma equilibrado y versátil es perfecto para mujeres que desean expresar su individualidad y confianza, ya sea en el trabajo, en una cita romántica o en cualquier ocasión especial. Una elección ideal para aquellas que buscan una fragancia elegante y contemporánea.",
      price: "$15.000",
    },
    {
      title: "Perfume Rose 2",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899155/productsImages/perfume11_grkkmh.jpg`,
      description:
        "Perfume Rose 2 es una fragancia que rinde homenaje a la elegancia y el encanto de la rosa, pero con un giro contemporáneo. Esta fragancia evoca la frescura de las rosas en plena floración, complementada con notas modernas y vibrantes que la hacen única. Su aroma es una combinación de lo clásico y lo moderno, ideal para quienes desean una fragancia romántica pero con un toque fresco y sofisticado. Perfecta para cualquier ocasión en la que desees destacar con un aroma encantador y atemporal.",
      price: "$60.000",
    },
    {
      title: "Shalimar",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899156/productsImages/perfume5_lbpvb7.jpg`,
      description:
        "Shalimar es una icónica fragancia que ha cautivado a generaciones con su sofisticación y seducción. Esta fragancia atemporal es una mezcla de notas orientales y florales que la convierten en una experiencia olfativa rica y envolvente. Shalimar es un clásico que evoca un aura de lujo y misterio, perfecto para aquellas personas que buscan una fragancia elegante y duradera que deje una impresión inolvidable en cualquier ocasión especial.",
      price: "$40.000",
    },
    {
      title: "Girgio Armani",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899157/productsImages/perfume6_tzg3eg.jpg`,
      description:
        "Giorgio Armani es una fragancia que personifica la elegancia y el estilo italiano en su máxima expresión. Esta icónica fragancia combina notas frescas y cálidas con un toque de sofisticación. El aroma de Giorgio Armani es una declaración de lujo y confianza, perfecta para quienes desean destacar con un perfume que refleja una personalidad distinguida y refinada. Una elección clásica que nunca pasa de moda y que se adapta a cualquier ocasión.",
      price: "$60.000",
    },
    {
      title: "Perfume Men",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899155/productsImages/perfume12_lfje8k.jpg`,
      description:
        "Perfume Men es una fragancia cautivadora diseñada especialmente para el hombre moderno y sofisticado. Con notas frescas y amaderadas, este perfume evoca una sensación de confianza y elegancia. Su aroma equilibrado combina a la perfección la frescura de las notas cítricas con la calidez de las maderas, creando una experiencia olfativa única que te acompañará a lo largo del día. Descubre la esencia de la masculinidad en cada pulverización de Perfume Men.",
      price: "$15.000",
    },
    {
      title: "Sea Power",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899155/productsImages/perfume8_j9jost.jpg`,
      description:
        "Sea Power es una fragancia que captura la frescura y la vitalidad del océano. Esta fragancia refrescante combina notas marinas con toques de brisa salina y maderas suaves, creando una experiencia olfativa que evoca la sensación de estar junto al mar. Sea Power es perfecto para quienes buscan una fragancia que les transporte a la costa y les haga sentir revitalizados y enérgicos. Una elección ideal para el uso diario y para aquellos que aprecian los aromas frescos y acuáticos.",
      price: "$30.000",
    },
    {
      title: "Perfume Men 2",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899155/productsImages/perfume12_lfje8k.jpg`,
      description:
        "Perfume Men 2 es una fragancia masculina que refleja la confianza y el carisma del hombre moderno. Esta fragancia combina notas frescas y amaderadas con un toque de especias, creando un aroma equilibrado y atractivo. Perfume Men 2 es ideal para aquellos hombres que desean una fragancia versátil que los acompañe en todas las facetas de la vida, desde el trabajo hasta las ocasiones especiales. Su aroma distintivo y duradero es una elección perfecta para destacar y dejar una impresión memorable.",
      price: "$40.000",
    },
    {
      title: "Safe Perfume",
      img: `https://res.cloudinary.com/dapsakqbt/image/upload/v1699899155/productsImages/perfume9_qqtiyt.jpg`,
      description:
        "Safe Perfume es una fragancia que ofrece una sensación de comodidad y seguridad. Esta fragancia ha sido diseñada para transmitir una sensación de bienestar y tranquilidad. Sus notas suaves y reconfortantes crean un aroma cálido y acogedor, perfecto para el uso diario y para momentos en los que deseas sentirte en calma y relajado. Safe Perfume es una elección ideal para aquellos que buscan una fragancia que les haga sentir cómodos y en armonía consigo mismos.",
      price: "$60.000",
    },
  ];

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card
            isBlurred="true"
            shadow="sm"
            key={index}
            isPressable={true}
            // En CardProduct2
            onClick={() =>
              navigate(`/product/${item.title}`, { state: { product: item } })
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
