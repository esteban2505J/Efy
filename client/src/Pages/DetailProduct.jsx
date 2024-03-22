import { HeartIcon } from "../components/products/HeartIcon";
import { Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useParams, useLocation } from "react-router-dom";
// import { sendEmailBuy } from "../api/auth";
import useCart from "../context/CartContext";

export default function DetailProduct() {
  const { addItem, addFavoriteItem } = useCart();
  const { id } = useParams();
  const location = useLocation();
  const product = location.state.product;

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <>
      <section className="grid md:grid-cols-2  m-6">
        <section>
          <div className="flex justify-center">
            <img src={product.img} alt="" width={270} className="rounded-lg " />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-4xl mb-3">{product.title}</h1>
          <p className="mb-2"> {product.description}</p>
          <h2 className="font-semibold text-xl mb-3">{product.price}</h2>
          <div>
            <div className="flex ">
              <Button
                color="primary"
                variant="shadow"
                size="sm"
                className="mr-5"
                onPress={() => {
                  try {
                    addItem(product);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Add to cart
              </Button>
              <Button
                isIconOnly
                color="danger"
                aria-label="Like"
                size="sm"
                onPress={() => {
                  try {
                    addFavoriteItem(product);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <HeartIcon />
              </Button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
