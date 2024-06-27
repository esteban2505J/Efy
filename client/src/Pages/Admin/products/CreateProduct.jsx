import React from "react";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import useProduct from "../../../context/ProductContext";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createProductContext } = useProduct();

  // function for the submit request
  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();

    // Asegurarse de que attributes sea un objeto y convertirlo a JSON
    const attributes = { marca: "oakley" };

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("typeProduct", values.typeProduct);
    const categories = values.categories.split(",").map((categorie) => {
      return categorie.trim();
    });
    formData.append("categories", categories);
    formData.append("price", values.price);
    formData.append("attributes", JSON.stringify(attributes));
    const imageFile = values.image[0];
    if (imageFile) {
      formData.append("image", imageFile);
    }

    createProductContext(formData);
  });

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 ">
        <h1 className="font-semibold text-xl text-center mb-8">
          Crear Productos
        </h1>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
          <Input
            {...register("title", { required: true })}
            type="text"
            label="Title"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("description", { required: true })}
            type="text"
            label="Description"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("categories", { required: true })}
            type="text"
            label="Categories"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("typeProduct", { required: true })}
            type="text"
            label="Type"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("price", { required: true })}
            type="text"
            label="Price"
            variant="underlined"
            color="warning"
          />
          <Input
            {...register("attributes", { required: true })}
            type="text"
            label="Attributes"
            variant="underlined"
            color="warning"
          />
          <div className="col-span-2">
            <Input
              type="file"
              name="image"
              accept="image/*"
              {...register("image", { required: true })}
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <Button type="submit" className="bg-black text-white">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
