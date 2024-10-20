import Carousel from "../components/tienda/Carousel";
import { Button, Image } from "@nextui-org/react";
import { GiDelicatePerfume, GiSoap } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Carousel />
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Nuestras Categorías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Perfumes",
                  color: "bg-blue-100",
                  icon: <GiDelicatePerfume />,
                },
                { title: "Jabones", color: "bg-green-100", icon: <GiSoap /> },
                {
                  title: "Aceites",
                  color: "bg-amber-100",
                  icon: <TbPerfume />,
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className={` ${category.color} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader className="justify-center">
                    <div className="text-4xl p-4">{category.icon}</div>
                    <h2>{category.title}</h2>
                  </CardHeader>
                  <CardBody className="flex flex-row">
                    <div className="justify-center items-center">
                      <Image
                        isZoomed
                        width={400}
                        src={` src/assets/images/perfume${index + 4}.jpg`}
                        className="mb-10"
                      ></Image>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <p>
                      Descubre nuestra selección de{" "}
                      {category.title.toLowerCase()} artesanales.
                    </p>
                    <Button variant="bordered" color="primary">
                      Explorar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 ">
                <h2 className="text-3xl font-bold">Nuestra Pasión Artesanal</h2>
                <p className="text-gray-600">
                  Cada producto es cuidadosamente elaborado a mano, utilizando
                  ingredientes naturales y técnicas tradicionales. Nuestra
                  pasión por la perfumería se refleja en cada aroma que creamos.
                </p>
                <Button variant="bordered" color="warning" className="mt-4">
                  Descubre Nuestro Proceso
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4   ">
                <Image
                  isZoomed
                  src=" src/assets/images/perfume6.jpg"
                  alt="Proceso artesanal 1"
                  className="rounded-lg shadow-lg"
                />
                <Image
                  isZoomed
                  src="src/assets/images/perfume6.jpg"
                  alt="Proceso artesanal 2"
                  className="rounded-lg shadow-lg mt-8"
                />
                <Image
                  isZoomed
                  src="src/assets/images/perfume6.jpg"
                  alt="Proceso artesanal 3"
                  className="rounded-lg shadow-lg"
                />
                <Image
                  isZoomed
                  src="src/assets/images/perfume6.jpg"
                  alt="Proceso artesanal 4"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}
