import React from "react";
import { Badge } from "@nextui-org/react";
import { CartIcon } from "./icon/CartIcon";
import useCart from "../../context/CartContext";

export default function CartNav() {
  const [isInvisible, setIsInvisible] = React.useState(false);
  const { shoppingCart } = useCart();
  const count = <div>{shoppingCart.length} </div>;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Badge
          color="danger"
          content={count}
          isInvisible={isInvisible}
          shape="circle"
        >
          <CartIcon size={30} />
        </Badge>
      </div>
    </div>
  );
}
