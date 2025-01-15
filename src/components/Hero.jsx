import { Button } from "flowbite-react";
import HeroImage from "../assets/images/hero-image.jpg";
import { customButtonTheme } from "../customThemes/buttonTheme";
import { IoIosContact } from "react-icons/io";
import { LuDog } from "react-icons/lu";

const Hero = () => {
  return (
    <section className=" text-primaryNeutral">
      <div className="bg-hero bg-no-repeat bg-cover">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 pt-5 mx-3 lg:px-6 mb-16 lg:max-w-6xl lg:mx-auto lg:pt-28">
          {/* Left Side */}
          <div className=" w-full flex flex-col justify-center mb-6">
            <h2 className="text-7xl font-bold mb-3">
              Timeless
              <br /> Rustic Acres
            </h2>

            <p className="mb-6 text-lg">
              Welcome to our family of Cavalier King Charles Spaniels. These
              loving and loyal dogs are ready to bring joy and companionship to
              your home.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <Button
                theme={customButtonTheme}
                outline
                color="button"
                className="flex items-center justify-center"
              >
                <LuDog size={20} className="mr-2" />
                Puppy Gallery
              </Button>
              <Button
                theme={customButtonTheme}
                color="button"
                className="flex items-center justify-center"
              >
                <IoIosContact size={20} className="mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full flex justify-center">
            <div className="shadow-2xl shadow-slate-600 rounded-lg">
              <img src={HeroImage} alt="Group Photo" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
