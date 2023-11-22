import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { dataPqrs } from "../components/reviews/dataPqrs";

export default function Pqrs() {
  return (
    <>
      <div className="container m-4">
        <div className="text-center text-red-600 text-2xl">
          {" "}
          Frequent questions
        </div>
        <Accordion selectionMode="multiple">
          {dataPqrs.map((item) => {
            return (
              <AccordionItem
                aria-label={item.question}
                key={item.question}
                title={item.question}
              >
                {item.answer}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}
