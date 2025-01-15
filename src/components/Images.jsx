import PuppyImage9 from "../assets/images/puppy-image9.jpg";
import PuppyImage10 from "../assets/images/puppy-image10.jpg";
import PuppyImage11 from "../assets/images/puppy-image11.jpg";

const Images = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[55rem] mx-auto pt-10 pb-32 px-3">
      <div className="rounded-lg">
        <img src={PuppyImage9} alt="" className="h-full rounded-lg" />
      </div>
      <div className="rounded-lg">
        <img src={PuppyImage10} alt="" className="h-full rounded-lg" />
      </div>
      <div className="rounded-lg">
        <img src={PuppyImage11} alt="" className="h-full rounded-lg" />
      </div>
    </div>
  );
};
export default Images;
