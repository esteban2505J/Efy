import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { payRequest } from "../api/auth";
import userAuth from "../context/AuthContext";
import useCart from "../context/CartContext";
import axios from "../api/axios";
import { useState } from "react";
const stripePromise = loadStripe(
  "pk_test_51OBOwoFXqJV00ZOvsddxtFdzAUaoV65IZatAMT7VUCzZnClcZp6OUQyPac5X8dh218DSCMdxdRBVTEYKkdJ2rSsE0065dDIVHv"
);

const CheckOutForm = () => {
  const { addItem, shoppingCart, deleteItem, calculateTotal } = useCart();
  const { isAuthenticated, user } = userAuth();
  const stripe = useStripe();
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    department: "",
  });
  const handleSubmit = async (e) => {
    try {
      // Realiza la solicitud de pago al backend
      console.log(shoppingCart);

      const response = await axios.post("/pay", {
        shoppingCart,
        user,
        shippingAddress,
      });

      console.log(response.data);
      console.log("--------");

      // Obtiene la sessionId desde la respuesta
      const { sessionId, userF } = response.data;
      console.log(userF);

      // Redirige al usuario a la página de pago de Stripe
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        console.error(
          "Error al redirigir a la página de pago de Stripe:",
          stripeError
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle the result, e.g., show an error message or proceed with the payment

  return (
    <form className="flex flex-col gap-4">
      <h2 className="text-xl">Dirección de envío</h2>
      <Input
        label="Dirección"
        value={shippingAddress.address}
        onChange={(e) =>
          setShippingAddress({ ...shippingAddress, address: e.target.value })
        }
      />
      <div className="flex gap-x-2">
        <Input
          label="Ciudad"
          value={shippingAddress.city}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, city: e.target.value })
          }
        />
        <Input
          label="Departamento"
          value={shippingAddress.department}
          onChange={(e) =>
            setShippingAddress({
              ...shippingAddress,
              department: e.target.value,
            })
          }
        />
      </div>
      <div className="mt-4 ">
        <h2 className="text-xl mb-3">Detalles del pago</h2>
        {/* <CardElement className="bg-[#ECEDEE] p-3 rounded-lg hover:bg-[#E4E4E7] transition-all" /> */}
      </div>
      <div className="justify-center flex">
        <Button
          className="bg-black text-white"
          isDisabled={!isAuthenticated}
          onClick={handleSubmit}
        >
          Pagar
        </Button>
      </div>
      <div className="text-center">
        {!isAuthenticated ? (
          <Chip variant="flat" color="danger">
            {" "}
            Please register or log in to perform this action
          </Chip>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

// ... Otras importaciones ...

const ShoppingCart = () => {
  const { addItem, shoppingCart, deleteItem, calculateTotal } = useCart();

  return (
    <Elements stripe={stripePromise}>
      <div className="container md:m-4 my-4 md:my-0">
        <div className="flex md:flex-row flex-col-reverse md:gap-x-3 gap-3">
          <section
            id="form"
            className="flex-col md:w-1/2 bg-orange-200 p-3 rounded-lg "
          >
            <CheckOutForm />
          </section>
          <section className="flex-col  md:w-1/2">
            <Card className="h-full ">
              <CardHeader className="flex justify-center items-center">
                <h1 className="text-3xl text-yellow-700">Order summary</h1>
              </CardHeader>
              <CardBody className="overflow-y-auto scroll-smooth max-h-[500px]">
                <div className="flex flex-col gap-3">
                  {shoppingCart.map((item) => {
                    return (
                      <div className="flex-row" key={item.title}>
                        <div className="flex justify-evenly">
                          <img
                            src={item.img}
                            alt=""
                            className="w-44 h-44 object-cover rounded-lg shadow-lg"
                          />

                          <div className="m-4 ">
                            <h2 className="text-bold mb-2">{item.title}</h2>
                            <p>Amount: {item.quantity}</p>
                            <div className="my-2">
                              <Button
                                className="text-2xl px-3  bg-black text-white   rounded-none "
                                size="sm"
                                onClick={() => {
                                  addItem(item);
                                }}
                              >
                                +
                              </Button>
                              <Button
                                className="text-2xl px-3  rounded-none bg-transparent border-1  border-yellow-600 outline-offset-0 hover:bg-red-400"
                                size="sm"
                                onClick={() => {
                                  deleteItem(item);
                                }}
                              >
                                -
                              </Button>
                            </div>
                            <h2 className="mt-3">Price: {item.price}</h2>
                          </div>
                        </div>

                        <hr className="m-3" />
                      </div>
                    );
                  })}
                </div>
              </CardBody>
              <CardFooter>
                <h2 className="mt-1 text-xl font-semibold">
                  Total: {calculateTotal(shoppingCart)} COP
                </h2>
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
    </Elements>
  );
};

export default ShoppingCart;
