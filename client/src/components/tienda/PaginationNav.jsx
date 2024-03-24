import { Pagination, Button } from "@nextui-org/react";

import React from "react";

export default function PaginationNav() {
  return (
    <div className="flex justify-center items-center m-8">
      <Pagination
        total={10}
        classNames={{
          wrapper: "gap-0 overflow-visible h-8 rounded border bg-black   ",
          item: "w-8 h-8 text-small rounded-none bg-transparent text-[#E3A03F]",
          cursor: "bg-[#E3A03F] shadow-lg  font-bold",
        }}
      />
    </div>
  );
}
