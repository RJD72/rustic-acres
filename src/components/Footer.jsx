import { Footer } from "flowbite-react";
import logo from "../assets/images/logo.png";

const FooterComponent = () => {
  return (
    <Footer container className="bg-primaryNeutral">
      <div className="w-full text-center text-white">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            className="text-white h-12"
            src={logo}
            alt="Flowbite Logo"
            name="Timeless Rustic Acres"
          />
          <Footer.LinkGroup className="text-white">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
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
