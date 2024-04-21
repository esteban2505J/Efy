import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "@nextui-org/react";
import PaginationNav from "../../../components/tienda/PaginationNav";

import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import useProduct from "../../../context/ProductContext";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const columns = [
  { name: "Title", uid: "title", sortable: true },
  { name: "House", uid: "house", sortable: true },
  { name: "Type", uid: "type", sortable: true },
];

const categoriesType = [
  { name: "Perfume", uid: "perfume", sortable: true },
  { name: "Crema", uid: "Crema", sortable: true },
  { name: "Perfume para cabello", uid: "Perfume para cabello", sortable: true },
  { name: "Aromas", uid: "Aromas" },
  { name: "Fragancias", uid: "Fragancias", sortable: true },
];

const INITIAL_VISIBLE_COLUMNS = ["title", "house", "type"];

export default function AdministrativePanel() {
  // getProducts
  const { products } = useProduct();
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(products.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") {
      return columns;
    }
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredProducts = [...products];

    if (hasSearchFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== categoriesType.length
    ) {
      filteredProducts = filteredProducts.filter((product) =>
        Array.from(statusFilter).includes(product.typeProduct)
      );
    }
    return filteredProducts;
  }, [products, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = React.useCallback((product, columnKey) => {
    const cellValue = product[columnKey];

    switch (columnKey) {
      case "title":
        return (
          <>
            <div>
              <img
                src={product.referenceImage.secureUrl}
                alt={product.title}
                width={"100px"}
                height={"100px"}
              />
            </div>
          </>
        );
      case "type":
        return (
          <div>
            <p>{product.typeProduct}</p>
          </div>
        );
      case "house":
        return (
          <div>
            <p>{cellValue}</p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  //   top part of page cambiar las categorías
  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        {/* search */}
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<FiSearch />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<BsChevronDown className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Categories
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {categoriesType.map((categoria) => {
                  <DropdownItem key={categoria.uid} className="capitalize">
                    {capitalize(categoria.name)}
                  </DropdownItem>;
                })}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<BsChevronDown className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-foreground text-background"
              endContent={<AiOutlinePlus />}
              size="sm"
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {products.length} products
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    products.length,
    hasSearchFilter,
  ]);

  //   bootton part of page
  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <PaginationNav page={page} pages={pages} setPage={setPage} />
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No products found"} items={items}>
        {(item) => (
          <TableRow key={item.title}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
