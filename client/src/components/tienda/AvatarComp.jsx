import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Button,
  Avatar,
} from "@nextui-org/react";

import React from "react";
import userAuth from "../../context/AuthContext";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { TbPackageImport } from "react-icons/tb";

export default function AvatarComp() {
  const { user, logOut } = userAuth();
  const firstName = user.fullName.split(" ")[0]; // Obtener el primer nombre
  const emailResumed = user.email.split("@")[0]; // Obtener los primeros 5 caracteres

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <div className="flex">
          <User
            as="button"
            className="transition-transform"
            avatarProps={{
              src: `${user.profilePicture}`,
            }}
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-bold">Signed in as</p>
          <p className="font-bold text-red-400">{user.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">
          <Link to="/returns">
            <div className="flex  items-center gap-x-3">
              {" "}
              <p>Returns</p>
              <TbPackageImport />
            </div>
          </Link>
        </DropdownItem>
        <DropdownItem key="help_and_feedback">
          {" "}
          <Link to="/pqrs">
            <div className="flex  items-center gap-x-3">
              {" "}
              <p>PQRS</p>
              <FaQuestion />
            </div>
          </Link>
        </DropdownItem>
        <DropdownItem key="my_orders">
          <Link to="/myOrders">
            <div className="flex  items-center gap-x-3">
              {" "}
              <p>My orders</p>
              <MdLocalShipping />
            </div>
          </Link>
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          <div className="flex justify-between items-center">
            <Button
              className="flex justify-between w-full"
              variant="light"
              endContent={
                <BiLogOut className="bg-red-500 rounded-md text-white py-1 text-2xl " />
              }
              onPress={logOut}
            >
              Log Out
            </Button>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
