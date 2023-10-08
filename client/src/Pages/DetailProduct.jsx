import React from "react";
import { HeartIcon } from "../components/products/HeartIcon";
import { Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function DetailProduct({ product }) {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <section className="grid grid-cols-2 mt-6 container">
        <section>
          <div className="flex justify-center">
            <img
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
              alt=""
              width={240}
              className="rounded-lg"
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-4xl mb-3">Title</h1>

          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            tempora velit, modi deleniti quaerat laborum dolore ipsam quibusdam
            consequuntur ea veniam pariatur reprehenderit cumque non esse? Ut
            voluptates in laboriosam nulla quis, error illo molestias facere
            temporibus nam sed hic minima quas tempora accusamus a eaque
            blanditiis ducimus? Doloribus, ut!
          </p>
          <h2 className="font-semibold text-xl mb-3">70 000</h2>
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
