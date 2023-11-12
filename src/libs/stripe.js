import Stripe from "stripe";

const stripe = new Stripe(process.env.KEY);

export const payStripe = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    console.log("-----------------");
  } catch (error) {
    console.log(error);
  }
  res.send({ message: "Succesfull payment" });
};
