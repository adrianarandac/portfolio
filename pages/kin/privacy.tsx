import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const KinPrivacy: NextPage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <>
      <Head>
        <title>Privacy Policy - KIN</title>
        <meta
          name="description"
          content="Privacy Policy for KIN — the mobile field journal app. Learn how we collect, use, and protect your data."
        />
        <link rel="canonical" href="https://www.adrianaranda.com/kin/privacy" />
      </Head>
      <Navbar />
      <main className="kin-page">
        <article className="kin-privacy">
          <Link href="/kin" className="kin-privacy-back">&larr; Back to KIN</Link>

          <h1>Privacy Policy</h1>
          <p className="kin-privacy-date">Effective Date: 3rd of June, 2026</p>

          <p>
            Kin (&ldquo;Kin&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) provides a mobile application for identifying
            wildlife, saving discoveries, and maintaining a personal wildlife
            journal. This Privacy Policy explains how we collect, use,
            disclose, and protect information when you use the Kin app.
          </p>
          <p>
            By using Kin, you agree to the practices described in this
            Privacy Policy.
          </p>

          <section>
            <h2>1. Information We Collect</h2>

            <h3>1.1 Information You Provide</h3>
            <p>We may collect information you provide directly to us, including:</p>
            <ul>
              <li>Email address</li>
              <li>Account credentials</li>
              <li>Profile information such as username, display name, home region, and avatar</li>
              <li>Wildlife journal content you create, including discovery notes and edits</li>
              <li>Photos you choose to capture or upload for wildlife identification</li>
              <li>Support or account-related communications you send us</li>
            </ul>

            <h3>1.2 Information Collected Automatically</h3>
            <p>When you use Kin, we may collect certain technical and usage-related information automatically, including:</p>
            <ul>
              <li>Authentication session data managed by Supabase</li>
              <li>Device and app metadata made available by the operating system or platform</li>
              <li>Approximate or precise location data if you grant location permission</li>
              <li>Photo metadata, including embedded EXIF location data if present in an uploaded image</li>
              <li>Timestamps associated with discoveries, encounters, and account updates</li>
              <li>IP address and request metadata processed by our infrastructure providers</li>
            </ul>
            <p>At the time of writing, the Kin codebase does not include a dedicated third-party analytics SDK or crash reporting SDK.</p>

            <h3>1.3 Information From Third Parties</h3>
            <p>We may receive information from third parties that support the app, including:</p>
            <ul>
              <li>Supabase for authentication, database, serverless functions, and file storage</li>
              <li>Google Gemini for wildlife image analysis performed through our backend workflow</li>
              <li>Mapbox for geocoding and reverse geocoding of locations</li>
              <li>MapTiler for map styling and map tile delivery</li>
              <li>Apple or Google platform services when you install or use the app through their ecosystems</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide, maintain, and operate Kin</li>
              <li>Create and manage user accounts</li>
              <li>Authenticate users and secure access to the app</li>
              <li>Process wildlife discovery submissions and generate identification results</li>
              <li>Store and sync profile information, discovery records, and related images</li>
              <li>Show location context for discoveries when location data is available</li>
              <li>Support journal functionality, including local device persistence and remote sync</li>
              <li>Respond to support requests and account actions</li>
              <li>Detect, prevent, and address abuse, misuse, or security issues</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2>3. Legal Basis for Processing</h2>
            <p>If you are in the European Economic Area, United Kingdom, or another jurisdiction with similar laws, we rely on one or more of the following legal bases:</p>
            <ul>
              <li>Performance of a contract, when processing is necessary to provide Kin</li>
              <li>Consent, when you choose to grant permissions such as camera, photos, or location access</li>
              <li>Legitimate interests, such as improving security, preventing abuse, and operating the service responsibly</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Sharing of Information</h2>
            <p>We do not sell your personal information.</p>
            <p>We may share information in the following circumstances:</p>

            <h3>4.1 Service Providers</h3>
            <p>We may share information with service providers that process data on our behalf, including:</p>
            <ul>
              <li>Supabase</li>
              <li>Google Gemini</li>
              <li>Mapbox</li>
              <li>MapTiler</li>
            </ul>
            <p>These providers help us operate authentication, storage, backend processing, mapping, and geocoding features.</p>

            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose information if required to do so by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect rights, safety, or property.</p>

            <h3>4.3 Business Transfers</h3>
            <p>If Kin is involved in a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, your information may be transferred as part of that process, subject to applicable law.</p>
          </section>

          <section>
            <h2>5. Data Retention</h2>
            <p>We retain personal information for as long as reasonably necessary to provide the app, maintain legitimate business records, resolve disputes, enforce agreements, and comply with legal obligations.</p>
            <p>Retention may vary depending on the type of data:</p>
            <ul>
              <li>Account and profile data may be retained while your account remains active</li>
              <li>Discovery records, uploaded images, and related metadata may be retained until you delete them or delete your account</li>
              <li>Some journal data may also be stored locally on your device using on-device storage until you delete the app data or remove it within the app</li>
              <li>Limited records may be retained after deletion where necessary for legal compliance, dispute resolution, fraud prevention, or security purposes</li>
            </ul>
          </section>

          <section>
            <h2>6. Data Security</h2>
            <p>We use reasonable technical and organizational measures designed to protect personal information from unauthorized access, loss, misuse, alteration, or disclosure. These measures may include authenticated access controls, database policies, and managed infrastructure services.</p>
            <p>However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul>
              <li>Access personal information we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information</li>
              <li>Restrict or object to certain processing</li>
              <li>Request portability of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>To exercise these rights, contact us at: <a href="mailto:adrianaranda@proton.me">adrianaranda@proton.me</a></p>
            <p>We may need to verify your identity before completing certain requests.</p>
          </section>

          <section>
            <h2>8. Children&apos;s Privacy</h2>
            <p>Kin is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided personal information to us, contact us at <a href="mailto:adrianaranda@proton.me">adrianaranda@proton.me</a>, and we will take appropriate steps to investigate and, where required, delete the information.</p>
            <p>If a different minimum age applies in your jurisdiction, please update this section accordingly before publishing.</p>
          </section>

          <section>
            <h2>9. International Data Transfers</h2>
            <p>Your information may be stored or processed in countries other than your own, including where our service providers operate. Those countries may have data protection laws that differ from the laws of your jurisdiction.</p>
            <p>Where required, we take steps intended to provide appropriate safeguards for cross-border transfers, such as relying on contractual protections or other lawful transfer mechanisms made available by our service providers.</p>
          </section>

          <section>
            <h2>10. Third-Party Services</h2>
            <p>Kin currently relies on third-party services that may process personal information, including:</p>
            <ul>
              <li>Supabase: authentication, database, storage, and edge functions</li>
              <li>Google Gemini: image analysis for wildlife identification</li>
              <li>Mapbox: geocoding and reverse geocoding</li>
              <li>MapTiler: map style and tile delivery</li>
              <li>Apple App Store and Google Play, as applicable to distribution and platform operations</li>
            </ul>
            <p>You should review the privacy policies of those third parties for more information about their practices.</p>
          </section>

          <section>
            <h2>11. Permissions and Device Access</h2>
            <p>Kin may request access to the following device features:</p>
            <ul>
              <li>Camera, so you can capture wildlife photos</li>
              <li>Photo library, so you can upload existing wildlife photos</li>
              <li>Location, so the app can associate discoveries with a place when you choose to allow it</li>
            </ul>
            <p>If location permission is denied, Kin may fall back to other available information, such as location data embedded in a photo or profile-based location details you previously provided.</p>
          </section>

          <section>
            <h2>12. Account Deletion</h2>
            <p>You can request account deletion through the app&apos;s account deletion flow.</p>
            <p>When you delete your account, we intend to delete:</p>
            <ul>
              <li>Your authentication account</li>
              <li>Your profile record</li>
              <li>Avatar files associated with your account</li>
              <li>Discovery image files associated with your account</li>
            </ul>
            <p>Some information may be retained where reasonably necessary for legal compliance, fraud prevention, security, or other legitimate business purposes.</p>
            <p>Locally stored data on your device may persist until removed by the app, the operating system, or you.</p>
          </section>

          <section>
            <h2>13. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. If we make material changes, we may provide notice by updating the effective date, posting the revised policy, or using other appropriate communication methods.</p>
            <p>Your continued use of Kin after an updated Privacy Policy becomes effective means the updated policy will apply to your use of the app, subject to applicable law.</p>
          </section>

          <section>
            <h2>14. Contact Information</h2>
            <p>If you have questions, requests, or concerns about this Privacy Policy or our data practices, contact:</p>
            <p>Email: <a href="mailto:adrianaranda@proton.me">adrianaranda@proton.me</a></p>
          </section>

          <footer className="kin-privacy-footer">
            <Link href="/kin">&larr; Back to KIN</Link>
          </footer>
        </article>
      </main>
    </>
  );
};

export default KinPrivacy;