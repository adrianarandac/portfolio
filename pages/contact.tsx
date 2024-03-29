import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../components/Navbar";
import linkedIn from "../public/logos/linkedin.png";
import github from "../public/logos/github.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdobqgyl");
  if (state.succeeded) {
    return (
      <div className="h-full rounded-xl p-10 bg-green-500 text-white font-vietnam text-lg text-center m-auto">
        <p>
          Thanks a lot for contacting me!
          <br /> I promise I'll try to reply asap!
        </p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Adrian Aranda - Contact</title>
        <meta
          name="description"
          content="Fill the form to contact with the software engineer Adrián Aranda."
          key="Software Engineer in Barcelona"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit} className="w-full rounded-xl p-10 bg-gray-200 text-white">
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
    </>
  );
}
function Contact() {
  return (
    <>
      <Head>
        <title>Adrian Aranda's Portfolio</title>
        <meta
          name="description"
          content="This is the portfolio of the Barcelona-based software engineer Adrián Aranda. Here you'll find his biography and portfolio."
          key="Adrian"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex h-[125vh] sm:h-screen pt-20  from-green-200 bg-green-600 bg-gradient-120">
        <div className="w-[80vw] sm:w-[60vw] animate-[fade-in-down_1s_ease-in-out] sm:flex rounded-xl bg-indigo-700 shadow-2xl text-white m-auto">
          <div className="m-5 flex flex-col justify-between gap-9">
            <div>
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
            <div className="flex justify-end gap-4 sm:gap-5">
              <Link href="https://www.youtube.com/watch?v=UTH1VNHLjng&list=PL8YH4mOwWryUMna911yJM2B52iIIzigKy">
                <a target="_blank">
                  <Image alt="seven-1" src={linkedIn} objectFit={"contain"} width={30} height={30} className="rounded-lg" />
                </a>
              </Link>
              <Link href="https://www.youtube.com/watch?v=UTH1VNHLjng&list=PL8YH4mOwWryUMna911yJM2B52iIIzigKy">
                <a target="_blank">
                  <Image alt="seven-1" src={github} objectFit={"contain"} width={30} height={30} className="rounded-lg" />
                </a>
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
export default Contact;
