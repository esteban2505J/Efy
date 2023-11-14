import React from "react";

// Componente de Entrada de Blog
const BlogPost = ({ title, date, description, image }) => (
  <div className="max-w-2xl mx-auto mt-10">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-gray-500 text-sm mb-2">Fecha de Publicación: {date}</p>
    <img
      src={image}
      alt="Imagen Representativa"
      className="mb-4 w-full rounded-md"
    />
    <p>{description}</p>
  </div>
);

// Componente de Blog Principal que contiene varias entradas
const Blog = () => (
  <div className="flex flex-col">
    <BlogPost
      title="Explorando el Fascinante Mundo de las Fragancias y Perfumes"
      date="15 de Noviembre de 2023"
      description="¿Te has preguntado alguna vez cómo las fragancias pueden evocar recuerdos y emociones? ¿O cómo se crean las diferentes notas que componen una fragancia? Si eres un amante de la perfumería y la belleza, ¡estás en el lugar correcto! En este blog, exploraremos el fascinante mundo de las fragancias y perfumes, desde la ciencia detrás de ellas hasta su impacto en nuestro entorno. Descubre cómo las notas superiores, medias y base interactúan con la química de la piel de cada persona, creando una experiencia única para cada individuo. Además, en Efy nos esforzamos por ser líderes en sostenibilidad en la industria de la perfumería, por lo que exploraremos cómo nuestras decisiones de fabricación y los ingredientes que elegimos pueden marcar la diferencia en la salud del planeta. ¡Acompáñanos en este viaje olfativo y descubre el arte de la fragancia!"
      image="https://tn.com.ar/resizer/5vS7UhjC9V_l1AoLTMJS6pAgtwE=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/525AKDWPQDSBFH3Z7WMMIONRUA.jpg"
    />

    <BlogPost
      title="La Ciencia Detrás de las Fragancias"
      date="20 de Noviembre de 2023"
      description="Antes de sumergirnos en el mundo de las fragancias, es importante entender la ciencia detrás de ellas. Las fragancias no son solo mezclas agradables de olores, sino composiciones cuidadosamente diseñadas de notas superiores, medias y base. Estas notas interactúan con la química de la piel de cada persona, creando una experiencia única para cada individuo. Además, el sentido del olfato es el más evocador de todos, ya que despierta recuerdos y emociones. Las señales odoríficas llegan primero al sistema límbico y al hipotálamo, secciones del cerebro que tienen que ver con los instintos, los recuerdos y las emociones. Esto explica por qué al percibir un olor, antes de identificarlo ya éste provocó una emoción o despertó un recuerdo remoto"
      image="https://cdn.pixabay.com/photo/2019/02/18/17/26/natural-cosmetics-4004908_960_720.jpg "
    />

    <BlogPost
      title="Impacto Ambiental y Sostenibilidad"
      date="25 de Noviembre de 2023"
      description="En Efy, nos esforzamos por ser líderes en sostenibilidad en la industria de la perfumería. Exploraremos cómo las decisiones de fabricación y los ingredientes que elegimos pueden marcar la diferencia en la salud del planeta. Desde envases reciclables hasta ingredientes éticamente obtenidos, cada elección cuenta."
      image="	https://stakeholders.com.pe/wp-content/uploads/2021/04/desarrollo-sostenible-arbaiza-principal.jpg"
    />

    {/* Agrega más entradas de blog según sea necesario */}
  </div>
);

export default Blog;
