import PuppyImage9 from "../assets/images/puppy-image9.jpg";
import PuppyImage10 from "../assets/images/puppy-image10.jpg";
import PuppyImage11 from "../assets/images/puppy-image11.jpg";

const Images = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pb-32 px-3">
      <div className="rounded-lg h-[350px] ">
        <img
          src={PuppyImage9}
          alt="Puppy image"
          className="rounded-lg h-full w-full object-cover "
        />
      </div>
      <div className="rounded-lg h-[350px] ">
        <img
          src={PuppyImage10}
          alt="Puppy image"
          className="rounded-lg h-full w-full object-cover "
        />
      </div>
      <div className="rounded-lg h-[350px] ">
        <img
          src={PuppyImage11}
          alt="Puppy image"
          className="rounded-lg h-full w-full object-cover "
        />
      </div>
    </div>
  );
};
export default Images;
