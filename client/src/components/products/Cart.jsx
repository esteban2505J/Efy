import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React from "react";

export default function Cart() {
  return (
    <>
      <div>cart</div>

      <div className="flex flex-row h-full">
        <section className="flex-col">
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </section>
        <section className="flex-col">
          <Card>
            <CardHeader></CardHeader>
            <CardBody></CardBody>
          </Card>
        </section>
      </div>
    </>
  );
}
