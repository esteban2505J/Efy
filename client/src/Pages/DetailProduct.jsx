import React from "react";
import { HeartIcon } from "../components/products/HeartIcon";
import { Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useParams, useLocation } from "react-router-dom";

export default function DetailProduct({ product }) {
  const { id } = useParams();
  const location = useLocation();
  product = location.state.product;
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
  
  return (
    <>
      <section className="grid grid-cols-2 mt-6 container">
        <section>
         <div className="flex justify-center">
           <img src={product.img} alt="" width={240} className="rounded-lg" />
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
