import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { customButtonTheme } from "../customThemes/buttonTheme";
import { customNavbarTheme } from "../customThemes/navBarTheme";
import { IoIosContact } from "react-icons/io";

import logo from "../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar
      theme={customNavbarTheme}
      fluid
      rounded
      className="px-0 bg-base text-primaryNeutral sticky top-0 z-10 shadow-md"
    >
      {/* Brand / Logo */}
      <Navbar.Brand>
        <Link to="/">
          <img
            src={logo}
            className="sm:mr-3 h-24"
            alt="Timeless Rustic Acres Logo"
          />
        </Link>
        <span className="text-xl font-semibold hidden custom:inline">
          Timeless Rustic Acres
        </span>
      </Navbar.Brand>

      {/* Right Section */}
      <div className="flex md:order-2">
        <Link to="/contact">
          <Button
            theme={customButtonTheme}
            color="button"
            className="hidden lg:block"
          >
            <IoIosContact size={20} className="mr-2" />
            Contact Us
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      {/* Nav Links */}
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/puppies" active={path === "/puppies"}>
          Puppy Gallery
        </Navbar.Link>
        <Navbar.Link as={Link} to="/parents" active={path === "/parents"}>
          Meet The Gang
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/testimonials"
          active={path === "/testimonials"}
        >
          Testimonials
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" active={path === "/about"}>
          About Us
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact" active={path === "/contact"}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
