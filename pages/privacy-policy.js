import React from "react";
import Link from "next/link";

import { Meta } from "@/components";

export default function disclaimer() {
  return (
    <>
      <Meta
        title="Privacy Policy - Rice Purity Testing"
        description=" At Rice Purity Testing, we value
            the privacy of our website visitors and have developed this Privacy
            Policy to provide you with transparency regarding the types of
            information we collect and how we use it."
      />
      <div className="site-wrap">
        <article>
          <h1>Privacy Policy</h1>
          <p>
            At Rice Purity Testing(https://www.ricepuritytesting.com), we value
            the privacy of our website visitors and have developed this Privacy
            Policy to provide you with transparency regarding the types of
            information we collect and how we use it.
          </p>
          <h2>Consent</h2>
          <p>
            By using our website, you consent to this Privacy Policy and agree
            to its terms.
          </p>
          <h2>Information Collection</h2>
          <p>
            When you provide us with personal information, we will make it clear
            to you why we need it. If you contact us directly, we may receive
            additional information about you, such as your name, email address,
            phone number, and the contents of your message.
            <br />
            When you register for an account, we may ask for your contact
            information, including your name, company name, address, email
            address, and telephone number.
          </p>
          <h2>Usage of Information</h2>
          <p>
            We collect information to provide, operate, and maintain our
            website, improve and personalize our website, understand how
            visitors use our website, develop new products and services,
            communicate with you directly or through our partners, and prevent
            fraud.
          </p>
          <h2>Log Files</h2>
          <p>
            We use log files to collect information about visitors, such as
            internet protocol (IP) addresses, browser types, Internet Service
            Providers (ISP), date and time stamps, referring/exit pages, and the
            number of clicks. This information is not linked to any personally
            identifiable information and is used to analyze trends, administer
            the site, track user movements, and gather demographic information.
          </p>
          <h2>Cookies and Web Beacons</h2>
          <p>
            We use cookies to store information about visitors' preferences and
            the pages they accessed or visited to optimize the user experience.
            We may also use third-party vendors, like Google, who may use
            cookies, such as the DoubleClick DART cookie, to serve ads based on
            a visitor's previous visits to our site.
          </p>
          <h2>Advertising Partners Privacy Policies</h2>
          <p>
            Third-party ad servers or ad networks may use cookies, JavaScript,
            or web beacons in their respective advertisements and links that
            appear on our website. We have no access or control over these
            cookies used by third-party advertisers and advise you to consult
            their respective privacy policies.
          </p>
          <h2>Third-Party Privacy Policies</h2>
          <p>
            Our Privacy Policy does not apply to other advertisers or websites.
            We advise you to consult the respective Privacy Policies of these
            third-party ad servers for more detailed information.
          </p>
          <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the CCPA, California consumers have the right to request
            disclosure of collected personal data, request the deletion of
            collected personal data, and request that a business not sell their
            personal data.
          </p>
          <h2>GDPR Data Protection Rights</h2>
          <p>
            Every user is entitled to the right to access, rectification,
            erasure, restriction of processing, objection to processing, and
            data portability of their personal data.
            <br />
            If you have any questions or would like to exercise any of these
            rights, please contact us.
          </p>
          <Link href="/" alt="Rice Purity Test">
            {" "}
            <button>TAKE RICE PURITY TEST</button>
          </Link>
        </article>
      </div>
    </>
  );
}
