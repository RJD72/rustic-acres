import { Link } from "react-router-dom";
import PuppyImage1 from "../assets/images/puppy-image1.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <section className="bg-base min-h-screen px-2">
      <Helmet>
        <title>
          About Us | Timeless Rustic Acres – Trusted Cavalier King Charles
          Breeders
        </title>
        <meta
          name="description"
          content="Learn more about Timeless Rustic Acres, our passion for Cavalier King Charles Spaniels, and our commitment to ethical, vet-inspected, and microchipped puppy breeding."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <h1 className="text-5xl font-bold py-10 text-center">About Us</h1>
      <div className="max-w-7xl mx-auto p-2 sm:p-4 rounded-lg bg-backgroundColor">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="max-w-lg xl:pl-10">
            <p className="mt-4 text-lg">
              Timeless Rustic Acres is located just outside Palmerston Ontario.
              Our small hobby farm consists of not only raising our beautiful
              Cavaliers, but also our love for our vegetable gardens and small
              orchard. We could not ask for anything more.
            </p>
            <p className="mt-6 font-sassy text-4xl md:text-5xl">
              Mike and Angie Tokarcyzk
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="text-blue-500 hover:text-blue-600 font-medium hover:underline"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </Link>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              loading="lazy"
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
