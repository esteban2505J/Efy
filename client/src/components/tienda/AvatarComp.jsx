import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Button,
} from "@nextui-org/react";
import React from "react";
import userAuth from "../../context/AuthContext";
import { BiLogOut } from "react-icons/bi";

export default function AvatarComp(profilePhoto) {
  const { user, logOut } = userAuth();
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            src: `"https://res.cloudinary.com/estebanr2505/image/upload/profileImage/${user.profilePhoto}.jpg"`,
          }}
          className="transition-transform"
          description={user.email}
          name={user?.fullName.split(" ")[0]}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-bold">Signed in as</p>
          <p className="font-bold text-red-400">{user.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger">
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
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
