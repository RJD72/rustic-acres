import { Link } from "react-router-dom";
import PuppyImage1 from "../assets/images/image1.jpg";

const About = () => {
  return (
    <section className="bg-base min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg">
              Timeless Rustic Acres is located just outside Palmerston Ontario.
              Our small hobby farm consists of not only raising our beautiful
              Cavaliers, but also our love for our vegetable gardens and small
              orchard. We could not ask for anything more.
            </p>
            <p className="mt-2">Mike and Angie Tokarcyzk</p>
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
