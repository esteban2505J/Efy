import React from "react";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = new FormData();

  const handleProductImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setProductImage(selectedFile);
    console.log(selectedFile);
  };


  // function for the submit request
  const onSubmit = handleSubmit(async (values) => {
    formData.append("title", values.title);
    formData.append("house", values.house);
    formData.append("description", values.description);
    formData.append(
      "composition",
      JSON.stringify({
        notasAltas: values.notasAltas,
        notasMedias: values.notasMedias,
        notasBajas: values.notasBajas,
      })
    );
    formData.append("typeProduct", values.type);
   

    console.log("FormData Entries:");
    for (const entry of formData.entries()) {
      console.log(entry);
    }

    createProductContext(formData);
  });

  // useEffect(() => {
  //   console.log(productImage);
  // }, [productImage]);


  return (
    <>
    <div className="flex flex-col h-screen container">

      <aside className="flex h-full flex-col bg-red-700 w-1/6 m-10">
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"> hola como vas hace tiempo que no se de ti</div>
        <div className="flex-row"></div>
        <div className="flex-row"></div>
        <div className="flex-row"></div>
        <div className="flex-row"></div>

      </aside>

      <section className="flex flex-col h-full"></section>

    </div>

    
    </>
  );
}
