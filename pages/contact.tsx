import { useForm, ValidationError } from "@formspree/react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2ZM8.4 18H6V9.6h2.4V18ZM7.2 8.4A1.4 1.4 0 1 1 7.2 5.6a1.4 1.4 0 0 1 0 2.8ZM18 18h-2.4v-4.5c0-1.1-.4-1.8-1.4-1.8-.76 0-1.2.5-1.4 1-.07.2-.1.47-.1.75V18H10.4V9.6h2.3v1.2h.03c.32-.57 1.1-1.32 2.37-1.32 1.6 0 2.9 1.04 2.9 3.3V18Z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/adrianarandac",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.13-1.48-1.13-1.48-.92-.64.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.37 1.1 2.95.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-4.98 0-1.1.39-2 .1-2.7 0 0 .83-.26 2.72 1.02A9.44 9.44 0 0 1 12 7.8a9.4 9.4 0 0 1 2.48.33c1.89-1.28 2.72-1.02 2.72-1.02.55 1.38.19 2.4.09 2.7.62.67 1 1.58 1 2.67 0 3.88-2.35 4.72-4.59 4.97.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    ),
  },
] as const;

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
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
