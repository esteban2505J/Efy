import React from "react";
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
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./icons.jsx";
import Login from "../auth/Login.jsx";
import SignUp from "../auth/SignUp.jsx";
import CartNav from "./CartNav.jsx";
import { userAuth } from "../../context/AuthContext.jsx";
import { BiLogOut } from "react-icons/bi";

export default function App() {
  const { isAuthenticated, logOut, user } = userAuth();

  // Iconos para el menú desplegable de categorías
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar>
      <NavbarBrand>
        <div>
          <img
            src="src/assets/images/logo.png"
            alt="Efy"
            className="text"
            width={60}
          />
        </div>
        <Link className="font-bold text-inherit text-3xl text-[#000]" href="/">
          Efy
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* Menú desplegable de categorías */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
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
            <DropdownItem
              key="Mens"
              description="Discover our collection of perfumes for men. Fresh aromas for the day and seductive fragrances for the night. Find your signature of elegance."
              startContent={icons.scale}
            >
              For men
            </DropdownItem>
            <DropdownItem
              key="For womens"
              description="Explore our collection of perfumes for women. From floral and fresh fragrances for the day to seductive and elegant aromas for the night. Find your unique essence and enhance your femininity with our exquisite perfumes."
              startContent={icons.activity}
            >
              For womens
            </DropdownItem>
            <DropdownItem
              key="For pets"
              description="
              Explore our line of pet fragrances. Fresh, mild scents to keep your furry companion smelling lovely. Give your pet a special touch of freshness."
              startContent={icons.flash}
            >
              For pets
            </DropdownItem>
            <DropdownItem
              key="Brands"
              description="
              Discover the best perfume brands. Quality and elegance in each bottle. Find your olfactory signature her."
              startContent={icons.server}
            >
              Brands
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="/blog" aria-current="page">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#e38d15]" href="/aboutus" underline="hover">
            About us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="my-5">
        {isAuthenticated ? (
          // Usuario autenticado
          <>
            <div className="flex">
              <span className="text-lg text-[#b25b76]">
                Welcome {user.fullName}
              </span>
            </div>
            <NavbarItem>
              <Link
                className="text-4xl"
                to={"/"}
                onClick={() => {
                  logOut();
                }}
              >
                {/* Icono de cierre de sesión */}
                <BiLogOut className="bg-red-500 rounded-md p-2 text-white" />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/shoppingcart">
                <CartNav />
              </Link>
            </NavbarItem>
          </>
        ) : (
          // Usuario no autenticado
          <>
            <NavbarItem className="hidden lg:flex">
              <Login />
            </NavbarItem>
            <NavbarItem>
              <SignUp />
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/shoppingcart">
                <CartNav />
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
