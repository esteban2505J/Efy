import React, { useState, useEffect } from "react";
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
import { ChevronDown, TagUser } from "./icon/icons.jsx";
import { userAuth } from "../../context/AuthContext.jsx";
import { BiLogOut } from "react-icons/bi";
import Login from "../auth/Login.jsx";
import SignUp from "../auth/SignUp.jsx";
import CartNav from "./CartNav.jsx";
import Avatar from "./AvatarComp.jsx";

export default function App() {
  const { isAuthenticated, user } = userAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
    setShowLogin(false);
  };

  const handleButtonClick = () => {
    setShowLogin(!showLogin);
    setShowSignUp(!showSignUp);
    console.log("fun");
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <>
      <Navbar shouldHideOnScroll={true} height={"6rem"}>
        <NavbarBrand>
          <div>
            <img
              src="src/assets/images/logo.png"
              alt="Efy"
              className="text"
              width={80}
            />
          </div>
          <Link
            className="font-bold text-inherit text-3xl text-[#000]"
            href="/"
          >
            EFY
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {/* Menú desplegable de categorías */}
          <Dropdown className="hidden md:flex">
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

          <NavbarItem isActive className="hidden md:flex">
            <Link
              href="/blog"
              aria-current="page"
              underline="hover"
              className="text-black"
            >
              Blog
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              className="text-[#e38d15]"
              href="/favorites"
              underline="hover"
            >
              Favorites
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="my-5">
          {isAuthenticated ? (
            <>
              <NavbarItem>
                <Avatar />
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/shoppingcart">
                  <CartNav />
                </Link>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Login />
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <SignUp />
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/shoppingcart">
                  <CartNav />
                </Link>
              </NavbarItem>

              <Button
                onClick={handleButtonClick}
                variant="light"
                radius="sm"
                className={`md:hidden ${
                  isScrolled ? "bg-white md:hidden shadow-md" : ""
                }`}
              >
                <TagUser></TagUser>
              </Button>
            </>
          )}
        </NavbarContent>
      </Navbar>

      <div className="flex z-50 justify-evenly md:hidden mt-3">
        {/* Botones de inicio de sesión y registro */}
        {!isAuthenticated && showLogin === true && (
          <Login
            className={`fixed top-16 right-4 z-50 md:hidden ${
              isScrolled ? "bg-white shadow-md" : ""
            }`}
            onClose={() => setShowLogin(false)}
          />
        )}
        {!isAuthenticated && showSignUp && (
          <SignUp
            className={`fixed top-16 right-2 md:hidden ${
              isScrolled ? "bg-white shadow-md" : ""
            }`}
            onClose={() => setShowSignUp(false)}
          />
        )}
      </div>
    </>
  );
}
