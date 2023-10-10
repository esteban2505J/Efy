import React, { useContext } from "react";
import { HeartIcon } from "../components/products/HeartIcon";
import { Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useParams, useLocation } from "react-router-dom";
import { sendEmailBuy } from "../api/auth";
import userAuth from "../context/AuthContext";


export default function DetailProduct() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state.product;
  const { user } = userAuth();

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const handleAddToCartClick = async () => {
    try {
      // Envía una solicitud para enviar el correo electrónico al servidor
      const response = await sendEmailBuy({ user, product });

      // Maneja la respuesta si es necesario
      console.log("Correo electrónico enviado:", response.data);
    } catch (error) {
      // Maneja errores si ocurren
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  return (
    <>
      <section className="grid grid-cols-2 mt-6 container">
        <section>
          <div className="flex justify-center" style={{ width: "300px", height: "300px", marginLeft: "85px" }}>
             <img src={product.img} alt="" width={270} className="rounded-lg" />
          </div>
        </section>

        <section>
        <h1 className="font-bold text-4xl mb-3">{product.title}</h1>
        <p className="mb-2"> {product.description}</p>
        <h2 className="font-semibold text-xl mb-3">{product.price}</h2>
          <div>
            <div className="flex ">
              <Button
                color="primary"
                variant="shadow"
                size="sm"
                className="mr-5" 
                onClick={handleAddToCartClick}
              >
                Add to cart
              </Button>
              <Button isIconOnly color="danger" aria-label="Like" size="sm">
                <HeartIcon />
              </Button>
            </div>
          </div>
        </section>
        <div className="mb-5">
          <Accordion selectionMode="multiple">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
