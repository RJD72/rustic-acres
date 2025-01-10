const BenefitsSection = () => {
  const benefits = [
    {
      title: "Loyal Companions",
      description:
        "Cavalier King Charles Spaniels are incredibly affectionate and loyal, making them the perfect addition to any family.",
      icon: "❤️",
    },
    {
      title: "Great with Families",
      description:
        "These dogs are known for their gentle temperament and get along wonderfully with children and other pets.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Easy to Train",
      description:
        "With their eager-to-please nature, Cavaliers are highly trainable and adapt quickly to house rules.",
      icon: "🎓",
    },
    {
      title: "Perfect Size",
      description:
        "Small enough for apartments yet sturdy enough for outdoor adventures, Cavaliers fit into any lifestyle.",
      icon: "🐾",
    },
  ];

  return (
    <section className="py-12 bg-lightGrey">
      <div className="max-w-6xl mx-auto text-center px-3">
        <h2 className="text-4xl font-bold text-deepBurgundy mb-6">
          Why Choose a Cavalier King Charles Spaniel?
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          These delightful dogs are loved worldwide for their charming
          personalities and lovable traits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl text-softGold mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-deepBurgundy mb-3">
                {benefit.title}
              </h3>
              <p className="">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
