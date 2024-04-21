import { Pagination, Button } from "@nextui-org/react";

import React from "react";

export default function PaginationNav({ pages, page, setPage }) {
  return (
    <div className="flex justify-center items-center m-8">
      <Pagination
        showControls
        isCompact
        size="sm"
        total={pages}
        page={page}
        onChange={setPage}
        classNames={{
          wrapper: "bg-black",
          cursor:
            "bg-[#E3A03F] shadow-lg  to-default-800  text-white font-bold",
        }}
      />
    </div>
  );
}
