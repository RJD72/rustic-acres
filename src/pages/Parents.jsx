import { parents } from "../constants/parents";

const Parents = () => {
  return (
    <main className="min-h-screen bg-base">
      <h1 className="text-5xl font-bold px-3 py-10 text-center">
        Meet the Gang
      </h1>
      <div className=" flex items-center  ">
        <section className="max-w-6xl px-3 mx-auto pt-4 pb-32 flex flex-wrap gap-8 items-center justify-center">
          {parents.length > 0 &&
            parents.map((parent) => (
              <div
                key={parent.id}
                className="hover:shadow-lg transition rounded-2xl"
              >
                <figure className="rounded-2xl bg-backgroundColor p-4 shadow-xl shadow-slate-900/10 max-w-md">
                  <div className="overflow-hidden mb-8 rounded-lg">
                    <img
                      loading="lazy"
                      src={parent.src}
                      alt=""
                      className="rounded-lg "
                    />
                  </div>
                  <div className="relative">
                    <blockquote className="relative">
                      <p className="text-lg font-bold">{parent.name}</p>
                    </blockquote>
                  </div>

                  <div className="mt-5">
                    <div className="font-display text-base text-slate-900">
                      {parent.description}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg"></div>
                </figure>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
};
export default Parents;
