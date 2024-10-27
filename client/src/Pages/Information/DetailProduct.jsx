import { HeartIcon } from "../../components/products/HeartIcon";
import {
  Dropdown,
  Button,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { useParams, useLocation } from "react-router-dom";
import { BsCart3, BsChevronCompactDown } from "react-icons/bs";
import useCart from "../../context/CartContext";
import useProduct from "../../context/ProductContext";
import "react-quill/dist/quill.snow.css";

export default function DetailProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const { loadProduct } = useProduct();

  // cargar el producto desde la base de datos
  useEffect(() => {
    async function getProductApi() {
      try {
        if (id) {
          const productData = await loadProduct(id);
          setProduct(productData.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        // Manejar errores de carga del producto
        toast.error("Error al cargar el producto");
      }
    }
    getProductApi();
    console.log(product);
    console.log(product.composition);
  }, []);

  const { addItem, addFavoriteItem } = useCart();

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["100 ML"]));
  const [selectdPrice, setSelectedPrice] = React.useState(new Set(["$40000"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const caclcPrice = (priceData) => {
    const { currentKey } = priceData;
    let price = "$40000";
    if (currentKey === "100 ML") {
      price = "$40000";
    }
    if (currentKey === "60 ML") {
      price = "$30000";
    }
    if (currentKey === "30 ML") {
      price = "$20000";
    }

    setSelectedPrice(price);
  };

  const notifyCart = () => {
    toast(` Añadido al carrito 🛒`, {
      position: "bottom-right",
      autoClose: 3000,
      type: "success",
    });
  };
  const notifyFavorite = () => {
    toast("❤️ Añadido a favoritos", {
      position: "bottom-right",
      autoClose: 3000,
      type: "error",
      icon: false,
    });
  };

  const addItemToCart = (product) => {
    try {
      addItem(product);
      notifyCart();
    } catch (error) {
      console.log(error);
    }
  };
  const addItemToFavorites = (product) => {
    try {
      addFavoriteItem(product);
      notifyFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    caclcPrice(selectedKeys);
  }, [selectedKeys]);

  return (
    <>
      {
        <section className="grid md:grid-cols-2  m-6 mb-16">
          <section>
            <div className="flex justify-center">
              <img
                src={product.referenceImage && product.referenceImage.secureUrl}
                alt=""
                width={270}
                className="rounded-lg "
              />
            </div>
          </section>

          <section>
            <h1 className="font-bold text-4xl mb-3">{product.title}</h1>
            <style jsx>{`
              .product-description ul {
                list-style-type: disc; /* Para listas desordenadas */
                margin-left: 1.25rem; /* Espaciado a la izquierda */
              }

              .product-description ol {
                list-style-type: decimal; /* Para listas ordenadas */
                margin-left: 1.25rem; /* Espaciado a la izquierda */
              }
            `}</style>
            <div
              className="product-description mb-6"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            {/* Tamaños para las lociones */}

            <div>
              {product.categories?.map((categorie, i) => (
                <div key={i}>
                  <p>{categorie}</p>
                </div>
              )) || <p>No categories available.</p>}
            </div>

            {/* <div className="flex gap-x-4">
              <h3 className="font-bold ">Tamaño:</h3>
              <h5>Seleccione</h5>
              <div>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize text-black font-semibold"
                      color="warning"
                      size="sm"
                      endContent={<BsChevronCompactDown />}
                    >
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>

                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="100 ML">100 ml</DropdownItem>
                    <DropdownItem key="60 ML">60 ml</DropdownItem>
                    <DropdownItem key="30 ML">30 ml</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div> */}

            {/* Precio */}
            <h2 className="font-semibold text-xl mb-3">{selectdPrice}</h2>

            {/* Botones de añadir al carrito y favoritos */}
            <div className="m-6 mt-8">
              <div className="flex ">
                <Button
                  variant="shadow"
                  size="md"
                  className="mr-5 text-white bg-black p-5"
                  onClick={() => {
                    addItemToCart({
                      ...product,
                      size: selectedValue,
                      price: selectdPrice,
                    });
                  }}
                  endContent={
                    <div className="text-lg">
                      <BsCart3 />
                    </div>
                  }
                >
                  Add to cart
                </Button>

                <ToastContainer />

                <Button
                  isIconOnly
                  color="danger"
                  aria-label="Like"
                  size="sm"
                  onPress={() => {
                    addItemToFavorites(product);
                  }}
                >
                  <HeartIcon />
                </Button>
              </div>
            </div>
          </section>
        </section>
      }
    </>
  );
}
