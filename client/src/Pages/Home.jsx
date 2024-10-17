import Carousel from "../components/tienda/Carousel";
import { Button, Image } from "@nextui-org/react";

import { Button, Image } from "@nextui-org/react";

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

        <section className="my-10">
          <article>
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Plant a tree
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Contribute to the planet
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-3.jpeg"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Supercharged
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Creates beauty like a beast
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-2.jpeg"
                />
              </Card>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-5"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    New
                  </p>
                  <h4 className="text-black font-medium text-2xl">
                    Acme camera
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="https://nextui.org/images/card-example-6.jpeg"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-tiny">Available soon.</p>
                    <p className="text-black text-tiny">Get notified.</p>
                  </div>
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    Notify Me
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Your day your way
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    Your checklist for better sleep
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">Breathing App</p>
                      <p className="text-tiny text-white/60">
                        Get a good night's sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-4.jpeg"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Plant a tree
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Contribute to the planet
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-3.jpeg"
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Supercharged
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Creates beauty like a beast
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-2.jpeg"
                />
              </Card>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-5"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    New
                  </p>
                  <h4 className="text-black font-medium text-2xl">
                    Acme camera
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="https://nextui.org/images/card-example-6.jpeg"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-tiny">Available soon.</p>
                    <p className="text-black text-tiny">Get notified.</p>
                  </div>
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    Notify Me
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Your day your way
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    Your checklist for better sleep
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">Breathing App</p>
                      <p className="text-tiny text-white/60">
                        Get a good night's sleep.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    Get App
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
