import { Button, Navbar } from "flowbite-react";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar fluid rounded className="px-0 bg-base text-primaryNeutral">
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
        <Button>Contact Us</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
