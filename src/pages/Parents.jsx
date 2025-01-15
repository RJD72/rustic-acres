import { Card } from "flowbite-react";
import { parents } from "../parents-data/parents";

const Parents = () => {
  return (
    <main className="min-h-screen bg-base">
      <h1 className="text-3xl md:text-5xl font-bold py-10 text-center">
        Meet the Gang
      </h1>
      <div className=" flex items-center  ">
        <section className="max-w-6xl  px-3 mx-auto pt-4 pb-32 flex flex-wrap gap-8 items-center justify-center">
          {parents.length > 0 &&
            parents.map((parent) => (
              <div key={parent.id} className="hover:shadow-lg transition">
                <Card
                  className="max-w-xs"
                  imgAlt={parent.name}
                  imgSrc={parent.src}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {parent.name}
                  </h5>
                  <p className="">{parent.description}</p>
                </Card>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};
export default Parents;
