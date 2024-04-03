import { HeartIcon } from "../components/products/HeartIcon";
import {
  Dropdown,
  Button,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import React, { useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";
import { BsCart3, BsChevronCompactDown } from "react-icons/bs";

import useCart from "../context/CartContext";

export default function DetailProduct() {
  const { addItem, addFavoriteItem } = useCart();
  const { id } = useParams();
  const location = useLocation();
  const product = location.state.product;

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["100 ML"]));
  const [selectdPrice, setSelectedPrice] = React.useState(new Set(["$40000"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const caclcPrice = (priceData) => {
    const { anchorKey, currentKey } = priceData;
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

  useEffect(() => {
    caclcPrice(selectedKeys);
  }, [selectedKeys]);

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

          <div className="flex gap-x-4">
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
          </div>

          {/* Precio */}

          <h2 className="font-semibold text-xl mb-3">{selectdPrice}</h2>

          {/* Sección de la composición */}
          <div className="mb-4">
            <h3 className="font-bold pb-3">Composición:</h3>
            <div className="overflow-x-hidden">
              <div className="translate-x-12 transform">
                <ul className="list-disc   ">
                  <li>Notas ALTAS: mandarina, bergamota y notas verdes.</li>
                  <li>Notas Medias: mandarina, bergamota y notas verdes.</li>
                  <li>Notas Bajas: mandarina, bergamota y notas verdes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Botones de añadir al carrito y favoritos */}
          <div>
            <div className="flex ">
              <Button
                variant="shadow"
                size="md"
                className="mr-5 text-white bg-black p-5"
                onPress={() => {
                  try {
                    addItem(product);
                  } catch (error) {
                    console.log(error);
                  }
                }}
                endContent={
                  <div className="text-lg">
                    <BsCart3 />
                  </div>
                }
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
