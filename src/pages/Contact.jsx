import { Button } from "flowbite-react";
import { customButtonTheme } from "../customThemes/buttonTheme";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  return (
    <main className="min-h-screen bg-base">
      <div className=" max-w-6xl mx-auto sm:rounded-lg">
        <div className="pt-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Contact
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 py-10 pl-10 max-w-6xl">
          <div className="bg-secondaryNeutral md:col-span-4 p-10 text-base">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In Touch
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              We’d love to hear from you! Whether you have a question about our
              puppies, adoption process, or anything else, our team is ready to
              answer all your inquiries.
            </p>
          </div>
          <form className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="email@email.com"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3 mt-3">
                <div className="md:flex md:items-center"></div>
                <Button
                  theme={customButtonTheme}
                  color="button"
                  className="flex items-center justify-center"
                  type="submit"
                >
                  <BsSend size={20} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Contact;
