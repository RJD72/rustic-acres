import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";
import BenefitsSection from "../components/BenefitsSection";
import Images from "../components/Images";
import NewPuppies from "../assets/images/new_puppies.jpg";

const Home = () => {
  return (
    <main className="bg-base ">
      <Helmet>
        <title>
          Timeless Rustic Acres | Ethical Cavalier King Charles Spaniel Breeders
        </title>
        <meta
          name="description"
          content="Welcome to Timeless Rustic Acres, dedicated breeders of Cavalier King Charles Spaniels. Our puppies are vet-inspected, microchipped, and raised with love. Find your perfect companion today!"
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Hero />
      <div className="max-w-3xl px-3 pt-10 mx-auto ">
        <h2 className="text-5xl mb-5 font-bold">
          <span className="inline-block pb-2"> Welcome to</span> <br />
          <span>Timeless Rustic Acres</span>
        </h2>

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
          We are registered members of the{" "}
          <a
            href="https://www.ckc.ca/Choosing-a-Dog/PuppyList/Breeder.aspx?id=10145&breedcode=CKC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Canadian Kennel Club (CKC)
          </a>{" "}
          and our kennel is inspected regularly.
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
      <div className="max-w-3xl mx-auto mt-10">
        {/* <h2 className="text-4xl mb-2 font-bold">New arrivals!</h2>
        <p className="text-lg">
          These adorable puppies are ready to go May 4/25.
        </p> */}
        <img
          loading="lazy"
          src={NewPuppies}
          alt="Cavalier puppies"
          className="rounded-lg mt-3 shadow-lg shadow-slate-300  h-full w-full object-cover"
        />
      </div>
      <BenefitsSection />
      <Images />
    </main>
  );
};
export default Home;
