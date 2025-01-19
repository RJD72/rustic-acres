import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { customFooterTheme } from "../customThemes/footerTheme";
import logo from "../assets/images/logo.png";

const FooterComponent = () => {
  return (
    <Footer theme={customFooterTheme} container className="bg-primaryNeutral">
      <div className="w-full text-center text-white">
        <div className="w-full  justify-center flex sm:items-center sm:justify-between">
          <Footer.Brand
            className="h-12 hidden sm:block"
            src={logo}
            alt="Timeless Rustic Acres logo"
            name="Timeless Rustic Acres"
          />
          <Footer.LinkGroup className="text-white">
            <Footer.Link as={Link} to="/about">
              About
            </Footer.Link>
            <Footer.Link as={Link} to="/privacy-policy">
              Privacy Policy
            </Footer.Link>
            <Footer.Link as={Link} to="/contact">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Timeless Rustic Acres"
          year={new Date().getFullYear()}
          className="text-white"
        />
      </div>
    </Footer>
  );
};
export default FooterComponent;
