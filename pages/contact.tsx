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
    <form onSubmit={handleSubmit} className="contact-card">
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
        <div className="form-row">
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
        <section className="section-block contact-grid">
          <div className="stack contact-card">
            <p className="eyebrow">Say hello</p>
            <h1>Questions? Comments? Let’s talk.</h1>
            <p className="muted">
              I keep communication lightweight and honest. Email me directly at{' '}
              <a href="mailto:adrienaranda@gmail.com" className="link-underline accent">
                adrienaranda@gmail.com
              </a>{' '}
              or drop your note below.
            </p>
            <div className="stack">
              <Link href="adrian_aranda_resume.pdf" download="adrian_aranda_resume" className="accent-row">
                <span className="small-label">Download CV</span>
                <span className="accent">PDF</span>
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="accent-row">
                <span className="small-label">LinkedIn</span>
                <span className="accent">/in/adrianaranda</span>
              </Link>
              <Link href="https://github.com/adrianarandac" target="_blank" rel="noreferrer" className="accent-row">
                <span className="small-label">GitHub</span>
                <span className="accent">@adrianarandac</span>
              </Link>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
}

export default Contact;
