import React from "react";
import Link from "next/link";

import { Meta } from "@/components";

export default function PrivacyPolicy() {
  return (
    <>
      <Meta
        title="Privacy Policy - TheWordMixer"
        description=" At TheWordMixer, we value your privacy and are committed to protecting any information you provide to us. This Privacy Policy outlines the types of information we may collect from you and how we will and will not use that information."
      />
      <div className="site-wrap">
        <article>
          <h1>Privacy Policy</h1>
          <p>
            At TheWordMixer, we value your privacy and are committed to
            protecting any information you provide to us. This Privacy Policy
            outlines the types of information we may collect from you and how we
            will and will not use that information.
          </p>
          <h2>Information Collected During Site Access</h2>
          <p>
            When you visit TheWordMixer, we may collect data that includes your
            IP address and page URLs for session management and compiling
            traffic and usage statistics. This information helps us analyze user
            patterns and popular sections of our site, which we may use to
            enhance the user experience. We may also utilize cookies stored in
            your browser to establish user sessions and identify unique or
            returning visitors. Rest assured that any actual data related to
            your user session is not stored on your browser or local computer,
            but rather in our system temporarily while the session is active.
          </p>
          <h2>Personal Information</h2>
          <p>
            In some cases, we may request personal information such as your name
            or email address in order to provide you with access to certain
            features of our site or to send you newsletters and other
            promotional materials. Please note that we will never disclose, sell
            or trade any personal information collected to any third parties,
            except as required by law, or if the information is necessary or
            appropriate to address an unlawful or harmful activity.
          </p>
          <h2>Third-Party Services</h2>
          <p>
            At times, we may use third-party services to help us provide a
            better experience for our users. These services may include
            advertising or monetization technologies. Please note that we have
            no control over the privacy practices of these third-party services
            and are not responsible for their actions. We encourage you to
            review their privacy and cookie policies if you have any concerns.
          </p>
          <h2>Security</h2>
          <p>
            We take the security of your information seriously and use
            industry-standard methods to protect it from unauthorized access,
            disclosure, or alteration. However, please note that no method of
            transmission over the internet, or method of electronic storage, is
            100% secure, and we cannot guarantee the absolute security of your
            information.
          </p>
          <h2>Cookies and Web Beacons</h2>
          <p>
            We use cookies to store information about visitors preferences and
            the pages they accessed or visited to optimize the user experience.
            We may also use third-party vendors, like Google, who may use
            cookies, such as the DoubleClick DART cookie, to serve ads based on
            a visitors previous visits to our site.
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
        </article>
      </div>
    </>
  );
}
