import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { HiHome } from "react-icons/hi2";

export default function Success() {
  const navigate = useNavigate(); // Usa useNavigate para obtener la función de navegación

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Card className="bg-success-200 flex">
          <CardBody>
            <div>
              Gracias por tu compra!! Fue una compra exitosa. Esperamos que
              disfrutes de nuestros productos.
            </div>
            <div className="flex justify-center mt-3">
              <Button
                onClick={() => {
                  navigate("/"); // Utiliza la función navigate para cambiar la ruta
                }}
                color="success"
              >
                Home
                <HiHome className="text-xl" />
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
