import React from "react";
import { Card, CardBody, CardFooter, Image, link } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CardProduct2() {
  const navigate = useNavigate();
  const baseImagePath = "/src/assets/images";
  // const [redirectToProduct, setRedirectToProduct] = useState(false);
  const list = [
    {
      title: "Kiwi",
      img: `${baseImagePath}/perfume7.jpg`,
      description: "Kiwi es una fragancia fresca y vivaz que captura la esencia energética y jugosa de la fruta kiwi. Esta fragancia combina notas cítricas y afrutadas para crear una experiencia refrescante y revitalizante que te transportará a un exuberante huerto de kiwis en plena madurez. Perfecta para quienes buscan una fragancia ligera y revitalizante para el día a día.",
      price: "$5.50",
    },
    {
      title: "Perfume Rose",
      img: `${baseImagePath}/perfume10.jpg`,
      description: "Perfume Rose es una fragancia romántica y sofisticada que rinde homenaje a la belleza atemporal de la rosa. Esta fragancia cautivadora evoca la frescura de las rosas en plena floración, con una mezcla equilibrada de notas florales y afrutadas. Su aroma suave y envolvente es ideal para quienes buscan una fragancia elegante y femenina que complemente su estilo con un toque floral y romántico.",
      price: "$7.50",
    },
    {
      title: "Perfume Women",
      img: `${baseImagePath}/perfume1.jpg`,
      description: "Perfume Women es una fragancia diseñada especialmente para mujeres que desean expresar su feminidad y elegancia de una manera única. Esta cautivadora fragancia combina notas florales suaves con toques de sensualidad y misterio. Su aroma sofisticado y duradero es perfecto para resaltar la belleza y la confianza de cada mujer, convirtiéndola en una elección ideal para ocasiones especiales y el uso diario.",
      price: "$15.00",
    },
    {
      title: "Trebony",
      img: `${baseImagePath}/perfume2.jpg`,
      description: "Trebony es una fragancia intrigante y cautivadora que desafía las expectativas. Esta fragancia única combina notas de madera, especias y aromas exóticos para crear una experiencia olfativa profunda y misteriosa. Su aroma es perfecto para aquellos que buscan una fragancia distintiva y sofisticada que les ayude a destacar en cualquier ocasión, dejando una impresión memorable y duradera.",
      price: "$10.00",
    },
    {
      title: "Perfume Women 2",
      img: `${baseImagePath}/perfume4.jpg`,
      description: "Perfume Women 2 es una fragancia que reinterpreta la feminidad de una manera moderna y empoderada. Esta fragancia cautivadora combina notas florales y frutales con un toque de sensualidad y frescura. Su aroma equilibrado y versátil es perfecto para mujeres que desean expresar su individualidad y confianza, ya sea en el trabajo, en una cita romántica o en cualquier ocasión especial. Una elección ideal para aquellas que buscan una fragancia elegante y contemporánea.",
      price: "$16.30",
    },
    {
      title: "Perfume Rose 2",
      img: `${baseImagePath}/perfume11.jpg`,
      description: "Perfume Rose 2 es una fragancia que rinde homenaje a la elegancia y el encanto de la rosa, pero con un giro contemporáneo. Esta fragancia evoca la frescura de las rosas en plena floración, complementada con notas modernas y vibrantes que la hacen única. Su aroma es una combinación de lo clásico y lo moderno, ideal para quienes desean una fragancia romántica pero con un toque fresco y sofisticado. Perfecta para cualquier ocasión en la que desees destacar con un aroma encantador y atemporal.",
      price: "$14.00",
    },
    {
      title: "Shalimar",
      img: `${baseImagePath}/perfume5.jpg`,
      description: "Shalimar es una icónica fragancia que ha cautivado a generaciones con su sofisticación y seducción. Esta fragancia atemporal es una mezcla de notas orientales y florales que la convierten en una experiencia olfativa rica y envolvente. Shalimar es un clásico que evoca un aura de lujo y misterio, perfecto para aquellas personas que buscan una fragancia elegante y duradera que deje una impresión inolvidable en cualquier ocasión especial.",
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
      description: "Giorgio Armani es una fragancia que personifica la elegancia y el estilo italiano en su máxima expresión. Esta icónica fragancia combina notas frescas y cálidas con un toque de sofisticación. El aroma de Giorgio Armani es una declaración de lujo y confianza, perfecta para quienes desean destacar con un perfume que refleja una personalidad distinguida y refinada. Una elección clásica que nunca pasa de moda y que se adapta a cualquier ocasión.",
      price: "$8.00",
    },
    {
      title: "Sea Power",
      img: `${baseImagePath}/perfume8.jpg`,
      description: "Sea Power es una fragancia que captura la frescura y la vitalidad del océano. Esta fragancia refrescante combina notas marinas con toques de brisa salina y maderas suaves, creando una experiencia olfativa que evoca la sensación de estar junto al mar. Sea Power es perfecto para quienes buscan una fragancia que les transporte a la costa y les haga sentir revitalizados y enérgicos. Una elección ideal para el uso diario y para aquellos que aprecian los aromas frescos y acuáticos.",
      price: "$7.50",
    },
    {
      title: "Perfume Men 2",
      img: `${baseImagePath}/perfume13.jpg`,
      description: "Perfume Men 2 es una fragancia masculina que refleja la confianza y el carisma del hombre moderno. Esta fragancia combina notas frescas y amaderadas con un toque de especias, creando un aroma equilibrado y atractivo. Perfume Men 2 es ideal para aquellos hombres que desean una fragancia versátil que los acompañe en todas las facetas de la vida, desde el trabajo hasta las ocasiones especiales. Su aroma distintivo y duradero es una elección perfecta para destacar y dejar una impresión memorable.",
      price: "$8.50",
    },
    {
      title: "Safe Perfume",
      img: `${baseImagePath}/perfume9.jpg`,
      description: "Safe Perfume es una fragancia que ofrece una sensación de comodidad y seguridad. Esta fragancia ha sido diseñada para transmitir una sensación de bienestar y tranquilidad. Sus notas suaves y reconfortantes crean un aroma cálido y acogedor, perfecto para el uso diario y para momentos en los que deseas sentirte en calma y relajado. Safe Perfume es una elección ideal para aquellos que buscan una fragancia que les haga sentir cómodos y en armonía consigo mismos.",
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
         // En CardProduct2
          onClick={() => navigate(`/product/${item.title}`, { state: { product: item } })}
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
