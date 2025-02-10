import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <main className="bg-base">
      <Helmet>
        <title>
          Privacy Policy | Timeless Rustic Acres – Your Data, Our Commitment
        </title>
        <meta
          name="description"
          content="Read the privacy policy of Timeless Rustic Acres to understand how we collect, use, and protect your personal information when you visit our website or contact us."
        />
        <link
          rel="canonical"
          href="https://timelessrusticacres.com/privacy-policy"
        />
      </Helmet>
      <div className="max-w-3xl mx-auto p-2 text-gray-800 bg-base pb-32 py-10">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Thank you for visiting our website. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you use
          our services. By accessing or using our service, you agree to the
          collection and use of your information in accordance with this policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect the following personal information through our contact form
          and other interactions:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>First and Last Name</li>
          <li>Email Address</li>
        </ul>

        <p className="mb-4">
          We use EmailJS (a third-party service) to handle and deliver email
          communications. The information you provide (first name, last name,
          and email address) is used solely for the purpose of facilitating
          contact and responding to inquiries.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Responding to your inquiries or requests.</li>
          <li>Providing and maintaining our services.</li>
          <li>
            Monitoring and analyzing usage of our services to improve
            functionality and user experience.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Disclosure of Your Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information. We may share
          information with third-party vendors or service providers (such as
          EmailJS) who perform services on our behalf. These parties are only
          provided access to information needed to perform their functions and
          are prohibited from using the information for any other purpose.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to secure your personal information.
          Please be aware that no security measures are perfect or impenetrable,
          and we cannot guarantee the absolute security of your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Retention of Your Information
        </h2>
        <p className="mb-4">
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy unless a longer
          retention period is required or permitted by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Your Rights and Choices
        </h2>
        <p className="mb-4">
          You have the right to access, correct, or delete the personal
          information we hold about you. To exercise these rights, please
          contact us using the information provided below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Children’s Privacy
        </h2>
        <p className="mb-4">
          Our services are not intended for individuals under the age of 13. We
          do not knowingly collect personal information from children under 13.
          If you become aware that a child has provided us with personal
          information, please contact us immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify users of any significant changes by posting
          the new policy on this page with an updated date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please fell free
          to{" "}
          <Link to="/contact">
            <span className="hover:underline text-blue-500 hover:text-blue-600">
              contact us
            </span>
          </Link>
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Last Updated: January 01, 2025
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
