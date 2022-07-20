import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../components/Navbar";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdobqgyl");
  if (state.succeeded) {
    return <p>Thanks for contacting me. I'll reply ASAP!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-h-max rounded-xl p-10 bg-gray-200 text-white">
      <fieldset id="fs-frm-inputs" className="flex flex-col align-center">
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="full-name">
            Full Name
          </label>
          <input
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="full-name"
            id="full-name"
            type="text"
            placeholder="First and Last"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email-address">
            Email Address
          </label>
          <input
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="Your email"
            required={true}
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="mb-4">
          <label htmlFor="message" className="block text-black text-sm font-bold mb-2">
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
      </fieldset>
      <button
        type="submit"
        value="Submit"
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center font-bold"
      >
        SUBMIT
      </button>
    </form>
  );
}
function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen pt-24 from-red-300 bg-red-700 bg-gradient-120">
        <div className="w-[80vw] sm:w-[60vw] animate-fade-in-down sm:flex rounded-xl bg-red-700 shadow-2xl text-white m-auto">
          <div className="m-5">
            <p className="text-4xl font-vietnam mb-5">
              Questions?
              <br />
              Comments?
              <br />
              I'd love to hear about them!
            </p>
            <p>
              Also, I'm aware that you might hate forms (because, who doesn't?), so please, feel free to contact me at <u>adrienaranda@gmail.com</u>!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
export default Contact;
