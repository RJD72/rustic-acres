import { Button } from "flowbite-react";
import { customButtonTheme } from "../customThemes/buttonTheme";
import { BsSend } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import DOMPurify from "dompurify"; // Import DOMPurify
import { useNavigate } from "react-router-dom";

const serviceId = "service_ua0yf3n";
const templateId = "emplate_h6fbeib";
const userId = "Jior_QbrDD4bwnVAg";
const recaptchaSiteKey = "6LcEj7sqAAAAAKZHjSYSMNHIDJSaAg17JglowJNb";

const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const form = useRef();
  const navigate = useNavigate();

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify the reCAPTCHA");
      return;
    }

    // Collect form data
    const formData = new FormData(form.current);

    // Sanitize input fields
    const sanitizedData = {
      firstName: DOMPurify.sanitize(formData.get("firstName")),
      lastName: DOMPurify.sanitize(formData.get("lastName")),
      email: DOMPurify.sanitize(formData.get("email")),
      message: DOMPurify.sanitize(formData.get("message")),
    };

    try {
      emailjs
        .send(
          serviceId,
          templateId,
          sanitizedData, // Send sanitized data
          userId
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Message sent!");
            form.current.reset();
            navigate("/");
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Failed to send message.");
          }
        );
    } catch (error) {
      console.error("Unexpected error:", error.message);
      alert("Unexpected error occurred.");
    }
  };

  return (
    <main className="min-h-screen bg-base px-2 pb-32">
      <div className="max-w-6xl mx-auto sm:rounded-lg">
        <div>
          <h2 className="text-5xl font-bold text-center py-10">Contact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 p-2 sm:p-4 max-w-6xl bg-backgroundColor rounded-lg">
          <div className="bg-secondaryNeutral md:col-span-4 p-10 rounded-lg">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In Touch
            </h3>
            <p className="mt-4 leading-7">
              We’d love to hear from you! Whether you have a question about our
              puppies, adoption process, or anything else, we are ready to
              answer all your inquiries.
            </p>
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="md:col-span-8 pt-16 md:pl-10"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div className="mt-5 flex justify-center items-center w-full">
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className="flex justify-center w-full px-3 mt-3">
                <Button
                  theme={customButtonTheme}
                  color="button"
                  className="flex items-center justify-center mt-3 w-full sm:max-w-fit"
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
