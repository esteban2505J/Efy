import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ChevronDown } from "./icon/icons.jsx";
import { userAuth } from "../../context/AuthContext.jsx";
import { BiLogOut } from "react-icons/bi";
import Login from "../auth/Login.jsx";
import SignUp from "../auth/SignUp.jsx";
import CartNav from "./CartNav.jsx";
import Avatar from "./AvatarComp.jsx";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

export default function App() {
  const { isAuthenticated, logOut } = userAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        shouldHideOnScroll={true}
        height={"6rem"}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="flex justify-evenly"
      >
        {/* Logo  section 1*/}
        <NavbarBrand>
          <div>
            <img
              src="src/assets/images/logo.png"
              alt="Efy"
              width={80}
              className="flex"
            />
          </div>
          <Link
            className="font-bold text-inherit  text-lg sm:text-3xl text-[#000]"
            href="/#"
          >
            EFY
          </Link>
        </NavbarBrand>

        {/* section 2 */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/#/product">Catálogo</Link>
          </NavbarItem>

          <NavbarItem isActive className="hidden md:flex">
            <Link
              href="/#/blog"
              aria-current="page"
              underline="hover"
              className="text-black"
            >
              Blog
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              className="text-[#e38d15] gap-x-1"
              href="/#/favorites"
              underline="hover"
            >
              <p>Favorites</p>
              <AiOutlineHeart />
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* section 3 */}
        <NavbarContent className="my-5 gap-x-7">
          {/* Shopping Cart */}
          <NavbarContent justify="end">
            <Link color="foreground" href="/#/shoppingcart">
              <CartNav />
            </Link>
          </NavbarContent>

          <NavbarItem className="sm:hidden">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent :bg-transparent"
                    endContent={<ChevronDown fill="currentColor" size={16} />}
                    radius="sm"
                    variant="light"
                  >
                    Categories
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem>
                  <Link>Hombre</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Mujer</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Mascota</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Hogar</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <div className="gap-x-5 flex">
            {!isAuthenticated && (
              <>
                <NavbarItem className="hidden lg:flex">
                  <Login />
                </NavbarItem>
                {/* Register */}
                <NavbarItem className="hidden lg:flex">
                  <SignUp />
                </NavbarItem>
              </>
            )}
            {isAuthenticated && (
              <>
                <div className="flex sm:gap-x-5 ">
                  <div>
                    <Avatar />
                  </div>
                  <div>
                    <Button
                      onClick={logOut}
                      className="bg-red-500 w-3 hidden sm:flex text-2xl text-white ml-8 "
                    >
                      <BiLogOut />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Icono de menu desplegable  */}
          <NavbarContent className="sm:hidden ">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          {/* lista de menu desplegable */}
          <NavbarMenu>
            {/* Login */}
            <NavbarMenuItem>
              <Login />
            </NavbarMenuItem>

            {/* Sigup */}
            <NavbarMenuItem>
              <SignUp />
            </NavbarMenuItem>
            {/* Favorites */}
            <NavbarMenuItem>
              <Link
                className="text-[#e38d15] bg-white w-full p-1 rounded-xl justify-center text-xl font-semibold gap-x-1"
                href="/#/favorites"
                underline="hover"
              >
                <p>Favorites</p>
                <AiOutlineHeart />
              </Link>
            </NavbarMenuItem>
            {/* Blog */}
            <NavbarMenuItem>
              <Link
                href="/#/blog"
                aria-current="page"
                underline="hover"
                className="text-black bg-white w-full p-1 rounded-xl justify-center text-xl font-semibold"
              >
                <p>Blog</p>
              </Link>
            </NavbarMenuItem>

            {/* Log out */}
            <NavbarMenuItem>
              <Button
                onPress={() => logOut()}
                className={`bg-red-400 w-full ${
                  !isAuthenticated ? "hidden" : ""
                }`}
              >
                <p>Log Out</p>
                <BiLogOut />
              </Button>
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
    </>
  );
}
