import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  CardFooter,
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

const stripePromise = loadStripe(
  "pk_test_51OBOwoFXqJV00ZOvsddxtFdzAUaoV65IZatAMT7VUCzZnClcZp6OUQyPac5X8dh218DSCMdxdRBVTEYKkdJ2rSsE0065dDIVHv"
);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const { data } = await payRequest({ id });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    // Handle the result, e.g., show an error message or proceed with the payment
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl">Shipping address</h2>
      <Input label="Address"></Input>
      <div className="flex gap-x-2">
        <Input label="City"></Input>
        <Input label="Departament"></Input>
      </div>
      <div className="mt-4 ">
        <h2 className="text-xl mb-3">Payment details</h2>
        <CardElement className="bg-[#ECEDEE] p-3 rounded-lg hover:bg-[#E4E4E7] transition-all" />
      </div>
      <div className="justify-center flex">
        <Button type="submit" className="bg-black text-white">
          Pay
        </Button>
      </div>
    </form>
  );
};

// ... Otras importaciones ...

const ShoppingCart = () => {
  const { addItem, shoppingCart, deleteItem, calculateTotal } = useCart();

  return (
    <Elements stripe={stripePromise}>
      <div className="container ">
        cart
        <div className="flex flex-row  gap-x-3">
          <section
            id="form"
            className="flex-col w-1/2 bg-orange-200 p-3 rounded-lg"
          >
            <CheckOutForm />
          </section>
          <section className="flex-col  w-1/2">
            <Card className="h-full ">
              <CardHeader className="flex justify-center items-center">
                <h1 className="text-3xl text-yellow-700">Order summary</h1>
              </CardHeader>
              <CardBody className="overflow-scroll max-h-[500px]">
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
                <h2 className="mt-1 text-xl">
                  Total: {calculateTotal(shoppingCart)}
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
