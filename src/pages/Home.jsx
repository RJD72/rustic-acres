import Hero from "../components/Hero";
import Image2 from "../assets/images/image2.jpg";
import Image6 from "../assets/images/image6.jpg";

import BenefitsSection from "../components/BenifitsSection";

const Home = () => {
  return (
    <main className="bg-base ">
      <Hero />
      <div className="max-w-3xl px-3 mx-auto ">
        <h3 className="text-5xl mb-5 font-bold">Welcome to Rustic Acres</h3>

        <p className="mb-3">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto my-10 px-3">
        <div className="rounded-lg">
          <img src={Image2} alt="" className="h-full rounded-lg" />
        </div>
        <div className="rounded-lg">
          <img src={Image6} alt="" className="h-full rounded-lg" />
        </div>
      </div>
    </main>
  );
};
export default Home;
