import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const KinTerms: NextPage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <>
      <Head>
        <title>Terms of Use - KIN</title>
        <meta
          name="description"
          content="Terms of Use for KIN — the wildlife journaling and identification app."
        />
        <link rel="canonical" href="https://www.adrianaranda.com/kin/terms" />
      </Head>
      <Navbar />
      <main className="kin-page">
        <article className="kin-privacy">
          <Link href="/kin" className="kin-privacy-back">
            &larr; Back to KIN
          </Link>

          <h1>Terms of Use</h1>
          <p className="kin-privacy-date">Effective Date: June 18, 2026</p>

          <p>
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and
            use of the KIN mobile application, website, and related services
            (collectively, the &ldquo;Service&rdquo;). By downloading,
            accessing, or using the Service, you agree to these Terms. If you do
            not agree, do not use the Service.
          </p>

          <section>
            <h2>1. Who We Are</h2>
            <p>
              KIN (&ldquo;KIN&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) provides a wildlife journaling and
              identification app that lets you capture or upload photos,
              identify wildlife, save discoveries, and manage a personal
              journal.
            </p>
          </section>

          <section>
            <h2>2. Eligibility</h2>
            <p>
              You may use the Service only if you can form a binding contract
              with us and are legally permitted to use the Service in your
              jurisdiction.
            </p>
            <p>
              If you are under the age of 13, you may not use the Service. If a
              higher minimum age applies where you live, you must meet that
              minimum age as well.
            </p>
            <p>
              If you use the Service on behalf of an organization, you represent
              that you have authority to bind that organization to these Terms.
            </p>
          </section>

          <section>
            <h2>3. Your Account</h2>
            <p>To use some features, you may need to create an account.</p>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Keep your login credentials secure</li>
              <li>
                Notify us promptly of any unauthorized use of your account
              </li>
              <li>
                Be responsible for activity that occurs through your account
              </li>
            </ul>
            <p>
              We may suspend or terminate accounts if we reasonably believe
              these Terms have been violated or the Service is being misused.
            </p>
          </section>

          <section>
            <h2>4. The Service</h2>
            <p>KIN may include features such as:</p>
            <ul>
              <li>Wildlife photo capture and upload</li>
              <li>Image-based wildlife identification</li>
              <li>A personal wildlife journal</li>
              <li>Location tagging and map-related features</li>
              <li>Profile customization, including avatar and home region</li>
              <li>Free and paid subscription features</li>
              <li>Account deletion and data management tools</li>
            </ul>
            <p>
              We may change, add, remove, or discontinue features at any time.
            </p>
          </section>

          <section>
            <h2>5. Subscriptions and Paid Features</h2>
            <p>Some features may require a paid subscription, such as KIN+.</p>
            <p>If you purchase a subscription:</p>
            <ul>
              <li>
                The subscription may auto-renew unless you cancel it before the
                renewal date
              </li>
              <li>
                Payment will be charged through the applicable app store or
                payment provider
              </li>
              <li>
                Pricing, billing intervals, and renewal terms will be shown at
                the time of purchase
              </li>
              <li>
                You are responsible for managing and canceling subscriptions
                through the relevant platform account settings
              </li>
            </ul>
            <p>
              Except where required by law or stated otherwise by the app store
              provider, subscription fees are non-refundable.
            </p>
            <p>
              If a paid feature is unavailable, interrupted, or modified, that
              does not automatically entitle you to a refund unless required by
              applicable law or the applicable app store&apos;s policies.
            </p>
          </section>

          <section>
            <h2>6. User Content</h2>
            <p>
              You may be able to create, upload, store, or share content through
              the Service, including:
            </p>
            <ul>
              <li>Photos</li>
              <li>Notes</li>
              <li>Discovery entries</li>
              <li>Profile information</li>
              <li>Other journal or account content</li>
            </ul>
            <p>
              You retain ownership of your content, subject to the rights you
              grant us under these Terms.
            </p>
            <p>
              You grant KIN a non-exclusive, worldwide, royalty-free,
              transferable, sublicensable license to host, store, process,
              reproduce, modify, adapt, display, and otherwise use your content
              only as needed to operate, improve, secure, and provide the
              Service.
            </p>
            <p>You represent and warrant that:</p>
            <ul>
              <li>You own or have the rights needed to submit your content</li>
              <li>
                Your content does not infringe another person&apos;s rights
              </li>
              <li>Your content complies with these Terms and applicable law</li>
            </ul>
            <p>
              We are not responsible for content you create, submit, or store
              through the Service.
            </p>
          </section>

          <section>
            <h2>7. AI and Identification Results</h2>
            <p>
              KIN may use automated or AI-assisted systems to help identify
              wildlife or generate related insights.
            </p>
            <p>You understand and agree that:</p>
            <ul>
              <li>
                Identification results may be incomplete, inaccurate, or
                outdated
              </li>
              <li>The Service is for informational and personal use only</li>
              <li>
                You should not rely on identification results as a substitute
                for expert advice, safety guidance, conservation rules, or
                emergency assistance
              </li>
              <li>
                You are responsible for independently verifying any information
                before acting on it
              </li>
            </ul>
            <p>
              We do not guarantee that any result, label, suggestion, or
              classification will be correct.
            </p>
          </section>

          <section>
            <h2>8. Location and Device Permissions</h2>
            <p>Certain features may request access to:</p>
            <ul>
              <li>Camera</li>
              <li>Photo library</li>
              <li>Location data</li>
            </ul>
            <p>
              If you grant permission, you authorize us to use that data to
              provide the requested functionality. If you deny permission, some
              features may not work or may work with reduced functionality.
            </p>
            <p>
              You are responsible for the accuracy of any location or metadata
              you choose to provide.
            </p>
          </section>

          <section>
            <h2>9. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Service for unlawful, harmful, fraudulent, or deceptive
                activity
              </li>
              <li>
                Attempt to gain unauthorized access to the Service or related
                systems
              </li>
              <li>
                Reverse engineer, scrape, or interfere with the Service except
                where prohibited by law from limiting such rights
              </li>
              <li>Upload malware, spam, or other harmful code</li>
              <li>
                Use the Service to infringe intellectual property, privacy,
                publicity, or other rights
              </li>
              <li>
                Misrepresent the origin of content or your affiliation with any
                person or entity
              </li>
              <li>
                Interfere with the operation, security, or integrity of the
                Service
              </li>
              <li>
                Use the Service in a way that could cause harm to wildlife,
                people, or protected environments
              </li>
            </ul>
            <p>
              We may investigate and take appropriate action for violations,
              including removing content, limiting access, or terminating
              accounts.
            </p>
          </section>

          <section>
            <h2>10. Intellectual Property</h2>
            <p>
              The Service, including its software, design, branding, logos,
              text, graphics, and other materials, is owned by KIN or its
              licensors and is protected by intellectual property laws.
            </p>
            <p>
              Except for the limited rights expressly granted to you in these
              Terms, we reserve all rights in and to the Service.
            </p>
            <p>
              You may not use KIN branding, logos, or other trademarks without
              our prior written permission.
            </p>
          </section>

          <section>
            <h2>11. Third-Party Services</h2>
            <p>
              The Service may depend on or integrate with third-party products
              or services, including app stores, cloud hosting, mapping
              services, authentication providers, AI providers, and error
              monitoring services such as Sentry.
            </p>
            <p>
              Third-party services are governed by their own terms and policies.
              We are not responsible for third-party services, content, or
              practices.
            </p>
          </section>

          <section>
            <h2>12. Privacy</h2>
            <p>
              Our collection and use of personal information is described in our
              Privacy Policy, which is incorporated into these Terms by
              reference.
            </p>
            <p>
              By using the Service, you acknowledge that you have read and
              understood the Privacy Policy.
            </p>
          </section>

          <section>
            <h2>13. Termination</h2>
            <p>You may stop using the Service at any time.</p>
            <p>
              We may suspend or terminate your access to all or part of the
              Service at any time if:
            </p>
            <ul>
              <li>You violate these Terms</li>
              <li>We are required to do so for legal or security reasons</li>
              <li>We discontinue the Service or a feature</li>
              <li>
                We believe termination is necessary to protect users, the
                Service, or third parties
              </li>
            </ul>
            <p>
              Upon termination, sections that by their nature should survive
              will continue to apply, including sections relating to
              intellectual property, disclaimers, limitations of liability,
              dispute resolution, and indemnity.
            </p>
          </section>

          <section>
            <h2>14. Disclaimers</h2>
            <p className="kin-terms-uppercase">
              To the maximum extent permitted by law, the Service is provided on
              an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            </p>
            <p className="kin-terms-uppercase">
              We disclaim all warranties, express or implied, including implied
              warranties of merchantability, fitness for a particular purpose,
              title, and non-infringement.
            </p>
            <p className="kin-terms-uppercase">We do not warrant that:</p>
            <ul>
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>Identification results will be accurate or reliable</li>
              <li>Any data will be stored without loss or corruption</li>
              <li>The Service will meet your expectations or needs</li>
            </ul>
            <p>
              Some jurisdictions do not allow certain disclaimers, so some of
              the above may not apply to you.
            </p>
          </section>

          <section>
            <h2>15. Limitation of Liability</h2>
            <p className="kin-terms-uppercase">
              To the maximum extent permitted by law, KIN and its officers,
              directors, employees, contractors, affiliates, and licensors will
              not be liable for any indirect, incidental, special,
              consequential, exemplary, or punitive damages, or for any loss of
              data, profits, revenue, goodwill, or business interruption.
            </p>
            <p className="kin-terms-uppercase">
              To the maximum extent permitted by law, our total liability for
              any claim arising out of or relating to the Service or these Terms
              will not exceed the greater of:
            </p>
            <ul>
              <li>
                The amount you paid us for the Service in the 12 months before
                the event giving rise to the claim.
              </li>
            </ul>
            <p>
              Some jurisdictions do not allow limitations of liability, so some
              of the above may not apply to you.
            </p>
          </section>

          <section>
            <h2>16. Indemnity</h2>
            <p>
              You agree to indemnify, defend, and hold harmless KIN and its
              affiliates, officers, directors, employees, contractors, and
              agents from and against any claims, liabilities, damages, losses,
              and expenses, including reasonable attorneys&apos; fees, arising
              out of or related to:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your content</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or third-party right</li>
            </ul>
          </section>

          <section>
            <h2>17. Changes to the Service or Terms</h2>
            <p>We may update the Service or these Terms from time to time.</p>
            <p>
              If we make material changes to these Terms, we may notify you by
              posting the updated Terms, updating the effective date, or using
              another reasonable method. Your continued use of the Service after
              the changes take effect means you accept the updated Terms, to the
              extent allowed by law.
            </p>
          </section>

          <section>
            <h2>18. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Spain, without regard to
              conflict of law rules.
            </p>
            <p>
              If you are a consumer residing in the European Union, you may also
              benefit from any mandatory provisions of the laws of your country
              of residence.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or the
              Service shall be subject to the exclusive jurisdiction of the
              courts of Barcelona, Spain, except where applicable consumer
              protection laws provide otherwise.
            </p>
          </section>

          <section>
            <h2>19. Contact</h2>
            <p>If you have any questions about these Terms, contact us at:</p>
            <p>Email: adrianaranda@proton.me</p>
          </section>

          <footer className="kin-privacy-footer">
            <Link href="/kin">&larr; Back to KIN</Link>
          </footer>
        </article>
      </main>
    </>
  );
};

export default KinTerms;
