import React from "react";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="">
      <div className="w-1/2 translate-x-1/2">
        <form action="" className="flex flex-col gap-y-3">
          <h1>Create Product</h1>
          <input type="text" className="bg-black" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
}
