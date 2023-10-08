import React from "react";
import { Badge } from "@nextui-org/react";
import { CartIcon } from "./CartIcon";

export default function CartNav() {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Badge
          color="danger"
          content={10}
          isInvisible={isInvisible}
          shape="circle"
        >
          <CartIcon size={30} />
        </Badge>
      </div>
    </div>
  );
}
