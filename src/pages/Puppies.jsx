import { useEffect } from "react";
import { imageArr } from "../assets/images/imageArr";

const Puppies = () => {
  useEffect(() => {
    console.log(imageArr.length);
  }, []);
  return (
    <div className="min-h-screen bg-base">
      <h2 className="text-3xl md:text-5xl font-bold py-10 text-center">
        Puppies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
        {imageArr.length > 0 ? (
          imageArr.map((img, index) => (
            <div className="group cursor-pointer relative" key={index}>
              <img
                src={img}
                alt="Image 1"
                className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          ))
        ) : (
          <p className="text-2xl text-center py-10">No images found</p>
        )}

        {/* <!-- Repeat this div for each image --> */}
      </div>
    </div>
  );
};
export default Puppies;
