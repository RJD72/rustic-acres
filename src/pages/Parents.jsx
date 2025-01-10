import { Card } from "flowbite-react";

const Parents = () => {
  const parents = [
    {
      id: 1,
      name: "John Doe",
      image: "https://placehold.co/200",
    },
    {
      id: 2,
      name: "Jane Doe",
      image: "https://placehold.co/200",
    },
    {
      id: 3,
      name: "Bob Smith",
      image: "https://placehold.co/200",
    },
    {
      id: 4,
      name: "Alice Johnson",
      image: "https://placehold.co/200",
    },
    {
      id: 5,
      name: "Mike Brown",
      image: "https://placehold.co/200",
    },
  ];

  return (
    <main className="min-h-screen bg-base">
      <h1 className="text-3xl md:text-5xl font-bold py-10 text-center">
        Parents
      </h1>
      <div className=" flex items-center  ">
        <section className="max-w-6xl px-3 mx-auto pt-4 pb-32 flex flex-wrap gap-8 items-center justify-center">
          {parents.length > 0 &&
            parents.map((parent) => (
              <div key={parent.id} className="">
                <Card
                  className="max-w-xs"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={parent.image}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {parent.name}
                  </h5>
                  <p className="">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};
export default Parents;
