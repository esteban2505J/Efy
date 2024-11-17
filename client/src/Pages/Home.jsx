import Carousel from "../components/tienda/Carousel";
import { Button, Image } from "@nextui-org/react";
import { GiDelicatePerfume, GiSoap } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbPerfume } from "react-icons/tb";
import { useState } from "react";
import "animate.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
const testimonials = [
  {
    id: 1,
    name: "María García",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "¡Increíble experiencia! El perfume que compré aquí se ha convertido en mi firma personal. La atención al cliente fue excepcional.",
    perfume: "Aroma Celestial",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Excelente selección de fragancias. Encontré el regalo perfecto para mi pareja. Definitivamente volveré.",
    perfume: "Esencia de Rosas",
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "La calidad de los perfumes es insuperable. Me encanta cómo el aroma perdura todo el día. ¡Totalmente recomendado!",
    perfume: "Misterio Nocturno",
  },
  {
    id: 4,
    name: "Javier López",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "El servicio de asesoramiento personalizado me ayudó a encontrar el perfume perfecto para mí. Una experiencia de compra única.",
    perfume: "Brisa Marina",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Declaración del estado `animating`
  const [animating, setAnimating] = useState(false);

  const prevTestimonial = () => {
    if (animating) return; // Evitar múltiples clics durante la animación
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500); // Duración de la animación
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    if (animating) return; // Evitar múltiples clics durante la animación
    setAnimating(true);
    setTimeout(() => setAnimating(false), 10); // Duración de la animación
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <main className="">
        <section>
          <Carousel />
        </section>

        <body className="">
          <section className="py-12 ">
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
                      <p className="p-3">
                        Descubre nuestra selección de{" "}
                        {category.title.toLowerCase()} artesanales.
                      </p>
                      <div className="flex items-center justify-center gap-x-3">
                        <FaArrowRightLong className="text-yellow-500" />
                        <Button variant="bordered" color="warning" className="">
                          Explorar
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 ">
            <div className="container mx-auto px-4 md:px-6 ">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 ">
                  <h2 className="text-3xl font-bold">
                    Nuestra Pasión Artesanal
                  </h2>
                  <p className="text-gray-600">
                    Cada producto es cuidadosamente elaborado a mano, utilizando
                    ingredientes naturales y técnicas tradicionales. Nuestra
                    pasión por la perfumería se refleja en cada aroma que
                    creamos.
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

          <article>
            <section className="py-20 bg-gradient-to-b from-gray-50 ">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                  Lo que dicen nuestros clientes
                </h2>
                <div className="relative">
                  <div className="testimonio-container">
                    {/* Tarjeta de Testimonio con transición */}
                    <div
                      key={currentIndex}
                      className={` shadow-lg p-8 transition-opacity  duration-500 ease-in-out 
              ${
                animating
                  ? "opacity-0 translate-x-10"
                  : "animate__animated animate__backInLeft"
              }`}
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="h-12 w-12 mr-4 rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">
                            {testimonials[currentIndex].name}
                          </h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-5 w-5 ${
                                  i < testimonials[currentIndex].rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.297h4.517c.959 0 1.356 1.23.588 1.81l-3.66 2.655 1.4 4.296c.3.92-.755 1.688-1.538 1.11l-3.66-2.655-3.66 2.655c-.783.578-1.838-.19-1.538-1.11l1.4-4.296-3.66-2.655c-.768-.579-.371-1.81.588-1.81h4.517l1.4-4.297z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {testimonials[currentIndex].text}
                      </p>
                      <p className="text-sm text-gray-500">
                        Perfume: {testimonials[currentIndex].perfume}
                      </p>
                    </div>
                  </div>

                  {/* Botones para cambiar el testimonio */}
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={prevTestimonial}
                      className="flex items-center py-2 px-4 border-2 border-gray-300 text-gray-600 hover:bg-gray-300 hover:text-black transition-colors duration-300 rounded-lg mr-4"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Anterior
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="flex items-center py-2 px-4 border-2 border-gray-300 text-gray-600 hover:bg-gray-300 hover:text-black transition-colors duration-300 rounded-lg"
                    >
                      Siguiente
                      <svg
                        className="h-4 w-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </article>

          <article>
            <h2>sección de recomendados</h2>
            <Card>
              <CardHeader>Nombre del perfume</CardHeader>
            </Card>
          </article>
        </body>
      </main>
    </>
  );
}
