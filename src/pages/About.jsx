import { Link } from "react-router-dom";
import PuppyImage1 from "../assets/images/image1.jpg";

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et
              magna quis elit efficitur consequat. Mauris eleifend velit a
              pretium iaculis. Donec sagittis velit et magna euismod, vel
              aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
              arcu volutpat vel.
            </p>
            <div className="mt-8">
              <Link
                to={"/contact"}
                className="text-blue-500 hover:text-blue-600 font-medium hover:underline"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </Link>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={PuppyImage1}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
