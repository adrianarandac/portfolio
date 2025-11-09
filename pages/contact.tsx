import { useForm, ValidationError } from "@formspree/react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdobqgyl");

  if (state.succeeded) {
    return <p className="muted">Thanks for reaching out. I’ll reply as soon as possible.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-grid">
        <div className="form-row">
          <label className="small-label" htmlFor="full-name">
            Full Name
          </label>
          <input className="input-minimal" name="full-name" id="full-name" type="text" placeholder="First and Last" />
        </div>
        <div className="form-row">
          <label className="small-label" htmlFor="email-address">
            Email Address
          </label>
          <input className="input-minimal" type="email" name="_replyto" id="email-address" placeholder="you@email.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-row form-row--full">
          <label htmlFor="message" className="small-label">
            Your message
          </label>
          <textarea name="message" id="message" rows={4} className="input-minimal" placeholder="Write it all" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
      </div>
      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
      <button type="submit" value="Submit" className="button-minimal">
        Send
      </button>
    </form>
  );
}

function Contact() {
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
      <Navbar />
      <main className="layout stack-lg">
        <section className="section-block contact-stack">
          <div className="contact-info">
            <p className="eyebrow">Email:</p>
            <a href="mailto:adrienaranda@gmail.com" className="contact-email">
              adrienaranda@gmail.com
            </a>
          </div>
          <span className="contact-divider" aria-hidden="true" />
          <ContactForm />
          <span className="contact-divider" aria-hidden="true" />
          <div className="contact-socials">
            <ul className="social-links">
              <li>
                <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/adrianarandac" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
