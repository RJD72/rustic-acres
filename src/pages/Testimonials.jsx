import ModalComponent from "../components/ModalComponent";
import { testimonials } from "../constants/testimonials";
import { useState } from "react";

const Testimonials = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <div className="min-h-screen bg-base">
      <main className="min-h-screen bg-base">
        <h1 className="text-5xl font-bold px-3 py-10 text-center">
          Testimonials
        </h1>
        <div className="">
          <section className="max-w-6xl p-2 mx-auto  pb-32 flex flex-wrap gap-8 items-center justify-center">
            {testimonials.length > 0 &&
              testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="hover:shadow-lg transition rounded-2xl"
                >
                  <figure className="rounded-2xl bg-backgroundColor p-2 sm:p-4 shadow-xl shadow-slate-900/10 max-w-md">
                    <div className="overflow-hidden mb-8 rounded-lg">
                      <img
                        loading="lazy"
                        src={testimonial.src}
                        alt={testimonial.name}
                        className="rounded-lg "
                      />
                    </div>
                    <div className="relative">
                      <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute top-0 left-0 fill-base"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                      </svg>

                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900 line-clamp-6">
                          {testimonial.testimonial}
                        </p>
                        <a
                          href="#"
                          className="mt-2 inline-block text-blue-600 hover:underline"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedTestimonial(testimonial.testimonial);
                            setOpenModal(true);
                          }}
                        >
                          Read More
                        </a>
                      </blockquote>
                    </div>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          {testimonial.name}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg"></div>
                    </figcaption>
                  </figure>
                </div>
              ))}
          </section>
        </div>
      </main>
      <ModalComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
        testimonial={selectedTestimonial}
      />
    </div>
  );
};
export default Testimonials;
