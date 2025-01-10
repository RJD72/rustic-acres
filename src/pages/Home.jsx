import Hero from "../components/Hero";
import PuppyImage2 from "../assets/images/image2.jpg";

const Home = () => {
  return (
    <div className="bg-base ">
      <Hero />
      <div className="max-w-3xl px-3 mx-auto ">
        <h3 className="text-3xl mb-3">Welcome to Rustic Acres</h3>
        <h4 className="text-2xl mb-3">
          Your Trusted Source for King Charles Spaniels
        </h4>
        <p className="mb-3">
          Welcome to Timeless Rustic Acres, your premier destination for finding
          the perfect Cavalier King Charles Spaniel. Our mission is to connect
          loving families with healthy, happy Cavalier puppies, ensuring a
          lifetime of joy and companionship.
        </p>
        <p className="mb-3">
          At Timeless Rustic Acres, we are passionate about Cavaliers. Our team
          consists of experienced breeders and dog lovers dedicated to raising
          and nurturing these charming dogs. We prioritize the health,
          temperament, and well-being of our puppies, ensuring they grow up in a
          loving and caring environment.
        </p>
        <p className="mb-3">
          We follow rigorous breeding standards to ensure our puppies are
          healthy and well-adjusted. All our puppies receive thorough veterinary
          care, vaccinations, and health screenings before going to their new
          homes.
        </p>
        <p className="">
          We are committed to ethical breeding practices. Our breeding dogs are
          carefully selected for their health, temperament, and conformation to
          breed standards. We ensure our dogs are well-cared for and raised in a
          loving environment.
        </p>
        <div className="mt-16">
          <img
            src={PuppyImage2}
            alt="Puppy in grass"
            className=" object-cover pb-10"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
