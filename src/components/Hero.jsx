import { Button } from "flowbite-react";
import GroupPhoto from "../assets/group-photo.jpg";

const Hero = () => {
  return (
    <section className=" text-primaryNeutral">
      <div className="bg-hero bg-no-repeat bg-cover min-h-screen xl:min-h-dvh">
        <div className="flex flex-col md:flex-row gap-6 mx-3 xl:mx-auto max-w-7xl pt-10 md:pt-36 lg:gap-24">
          {/* Left Side */}
          <div className=" w-full flex flex-col justify-center">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-3">
              Rustic Acres
            </h2>
            <h3 className="text-3xl mb-3">Your Perfect Companion</h3>
            <p className="mb-6">
              Welcome to our family of Cavalier King Charles Spaniels. These
              loving and loyal dogs are ready to bring joy and companionship to
              your home.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <Button outline>Meet the Puppies</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
          {/* Right Side */}
          <div className=" w-full flex justify-center">
            <div className="shadow-2xl shadow-slate-600">
              <img src={GroupPhoto} alt="Group Photo" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
