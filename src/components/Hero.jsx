import { Button } from "flowbite-react";
import GroupPhoto from "../assets/images/group-photo.jpg";
import { customButtonTheme } from "./customThemes/buttonTheme";

const Hero = () => {
  return (
    <section className=" text-primaryNeutral">
      <div className="bg-hero bg-no-repeat bg-cover">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-5 mx-2 mb-16 lg:max-w-6xl lg:mx-auto lg:pt-28">
          {/* Left Side */}
          <div className=" w-full flex flex-col justify-center">
            <h2 className="text-6xl lg:text-6xl xl:text-7xl font-bold mb-3">
              Timeless
              <br /> Rustic Acres
            </h2>

            <p className="mb-6 ">
              Welcome to our family of Cavalier King Charles Spaniels. These
              loving and loyal dogs are ready to bring joy and companionship to
              your home.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <Button
                theme={customButtonTheme}
                outline
                color="button"
                className=""
              >
                Puppy Gallery
              </Button>
              <Button theme={customButtonTheme} color="button" className="">
                Contact Us
              </Button>
            </div>
          </div>
          {/* Right Side */}
          <div className=" w-full flex justify-center">
            <div className="shadow-2xl shadow-slate-600 rounded-lg">
              <img src={GroupPhoto} alt="Group Photo" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
