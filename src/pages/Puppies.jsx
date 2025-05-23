import { useState } from "react";
import { imageArr } from "../assets/images/imageArr";
import { Helmet } from "react-helmet-async";

const Puppies = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openCarousel = (index) => {
    setActiveIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageArr.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageArr.length) % imageArr.length
    );
  };

  return (
    <main className="min-h-screen bg-base px-2 pb-32">
      <Helmet>
        <title>
          Cavalier King Charles Puppy Gallery | Timeless Rustic Acres
        </title>
        <meta
          name="description"
          content="Browse our adorable Cavalier King Charles Spaniel puppies! All puppies are vet-inspected, microchipped, and raised with love at Timeless Rustic Acres."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <h1 className="text-5xl font-bold py-10 text-center">Puppies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 sm:p-4 max-w-6xl mx-auto bg-backgroundColor rounded-lg ">
        {imageArr.length > 0 ? (
          imageArr.map((img, index) => (
            <div
              className="group cursor-pointer relative"
              key={index}
              onClick={() => openCarousel(index)}
            >
              <img
                loading="lazy"
                src={img}
                alt={`Puppy ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          ))
        ) : (
          <p className="text-2xl text-center py-10">No images found</p>
        )}
      </div>

      {/* Carousel Modal */}
      {isCarouselOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeCarousel}
          >
            &times;
          </button>
          <div className="relative">
            <img
              src={imageArr[activeIndex]}
              alt={`Puppy ${activeIndex + 1}`}
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full"
              onClick={prevImage}
            >
              &#8249;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full"
              onClick={nextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Puppies;
