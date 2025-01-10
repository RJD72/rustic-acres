import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { customButtonTheme } from "./customThemes/buttonTheme";

import logo from "../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Navbar
      fluid
      rounded
      className="px-0 bg-base text-primaryNeutral sticky top-0 z-10 shadow-md shadow-slate-6500"
    >
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-1  sm:mr-3 h-16 sm:h-24"
          alt="Rustic Acres Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Rustic Acres
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button theme={customButtonTheme} color="button" className="">
          Contact Us
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/puppies"}>
          <Link to={"/puppies"}>Puppy Gallery</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/parents"}>
          <Link to={"/parents"}>Meet The Parents</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
          <Link to={"/about"}>About Us</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/faq"}>
          <Link to={"/testimonials"}>Testimonials</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link to={"/contact"}>Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
