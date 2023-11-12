import { Card, CardBody, CardHeader, Input, Button } from "@nextui-org/react";
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

const stripePromise = loadStripe(
  "pk_test_51OBOwoFXqJV00ZOvsddxtFdzAUaoV65IZatAMT7VUCzZnClcZp6OUQyPac5X8dh218DSCMdxdRBVTEYKkdJ2rSsE0065dDIVHv"
);

const CheckOutForm = () => {
  const { sendPay } = userAuth();

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
        <Button type="submit" color="success">
          Pay
        </Button>
      </div>
    </form>
  );
};

const ShoppingCart = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="container ">
        cart
        <div className="flex flex-row  gap-x-3">
          <section id="form" className="flex-col w-1/2 bg-orange-200 p-3">
            <CheckOutForm />
          </section>
          <section className="flex-col  w-1/2">
            <Card className="h-full ">
              <CardHeader></CardHeader>
              <CardBody></CardBody>
            </Card>
          </section>
        </div>
      </div>
    </Elements>
  );
};

export default ShoppingCart;
