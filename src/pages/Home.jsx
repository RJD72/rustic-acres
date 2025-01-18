import Hero from "../components/Hero";

import BenefitsSection from "../components/BenefitsSection";
import Images from "../components/Images";

const Home = () => {
  return (
    <main className="bg-base ">
      <Hero />
      <div className="max-w-3xl px-3 pt-10 mx-auto ">
        <h3 className="text-5xl mb-5 font-bold">
          <span className="inline-block pb-2"> Welcome to</span> <br />
          <span>Timeless Rustic Acres</span>
        </h3>

        <p className="mb-3 leading-loose">
          Our country property is the perfect place to raise our family of
          Cavalier King Charles Spaniels.
        </p>
        <p className="mb-3">
          We are passionate about our Cavaliers! We prioritize the health,
          temperament, and well being of our puppies, ensuring they grow up in a
          loving and caring environment.
        </p>
        <p className="mb-3">
          We have been raising Cavalier King Charles Spaniels for a number of
          years. The puppies are raised in our home with a lot of love and
          affection.
        </p>
        <p className="mb-3">
          We are registered members of the Canadian Kennel Club (CKC) and our
          kennel is inspected regularly.
        </p>
        <p className="mb-3">
          All of our puppies are vet checked, dewormed, vaccinated and given
          revolution flea control. They are also micro chipped and registered
          with the CKC.
        </p>
        <p className="mb-3">
          A puppy pack and written health guarantee accompany your puppy to
          their forever home at the minimum of 8 weeks old.
        </p>
      </div>
      <BenefitsSection />
      <Images />
    </main>
  );
};
export default Home;
