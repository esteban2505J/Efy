import Carousel from "../components/tienda/Carousel";
import { Button } from "@nextui-org/react";
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
                { title: "Perfumes", color: "bg-blue-100" },
                { title: "Jabones", color: "bg-green-100" },
                { title: "Aceites", color: "bg-amber-100" },
              ].map((category, index) => (
                <Card
                  key={index}
                  className={` ${category.color} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader>
                    <h2>{category.title}</h2>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Descubre nuestra selección de{" "}
                      {category.title.toLowerCase()} artesanales.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button variant="ghost">Explorar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Nuestra Pasión Artesanal</h2>
                <p className="text-gray-600">
                  Cada producto es cuidadosamente elaborado a mano, utilizando
                  ingredientes naturales y técnicas tradicionales. Nuestra
                  pasión por la perfumería se refleja en cada aroma que creamos.
                </p>
                <Button variant="outline" className="mt-4">
                  Descubre Nuestro Proceso
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="./src/assets/perfume1.jpg"
                  alt="Proceso artesanal 1"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Proceso artesanal 2"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Proceso artesanal 3"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Proceso artesanal 4"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
