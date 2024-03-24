import CardProduct2 from "../components/products/CardProduct2";
import Carousel from "../components/tienda/Carousel";

export default function Products() {
  return (
    <>
      <Carousel />
      <section className="m-5 transition-all ">
        <CardProduct2 />
      </section>
    </>
  );
}
