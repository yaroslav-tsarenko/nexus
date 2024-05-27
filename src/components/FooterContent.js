import WelcomeToSwiftSIMWaveThese from "./WelcomeToSwiftSIMWaveThese";
import PropTypes from "prop-types";
import "./FooterContent.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={`footer-content ${className}`}>
      <WelcomeToSwiftSIMWaveThese />
      <div className="footer-links">
        <b className="acceptance-of-terms-container">
          <ol className="acceptance-of-terms">
            <li>Acceptance of Terms</li>
          </ol>
        </b>
        <p className="please-read-these">
          Please read these Terms carefully before using our services. Your use
          of our services indicates your acceptance of these Terms and your
          agreement to comply with them. If you do not agree with any part of
          these Terms, you may not use our services.
        </p>
      </div>
      <div className="footer-links1">
        <b className="use-of-services-container">
          <ol className="use-of-services">
            <li>Use of Services</li>
          </ol>
        </b>
        <p className="please-read-these1">
          Please read these Terms carefully before using our services. Your use
          of our services indicates your acceptance of these Terms and your
          agreement to comply with them. If you do not agree with any part of
          these Terms, you may not use our services.
        </p>
        <div className="frame-parent33">
          <div className="eligibility-parent">
            <b className="eligibility">2.1 Eligibility</b>
            <p className="to-use-our">
              To use our services, you must be at least 18 years old and capable
              of forming a binding contract. By using our services, you
              represent and warrant that you meet these eligibility
              requirements.
            </p>
          </div>
          <div className="account-creation-parent">
            <b className="account-creation">2.2 Account Creation</b>
            <p className="some-of-our">
              Some of our services may require you to create an account. You are
              responsible for maintaining the confidentiality of your account
              information and for all activities that occur under your account.
              You agree to notify us immediately of any unauthorized use of your
              account.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-links2">
        <b className="privacy-policy">
          <ol className="privacy-policy1">
            <li>Privacy Policy</li>
          </ol>
        </b>
        <p className="our-privacy-policy">
          Our Privacy Policy governs the collection, use, and sharing of your
          personal information when you use our services. By using our services,
          you consent to the practices described in our Privacy Policy.
        </p>
      </div>
      <div className="footer-links3">
        <b className="intellectual-property">
          <ol className="intellectual-property1">
            <li>Intellectual Property</li>
          </ol>
        </b>
        <p className="please-read-these2">
          Please read these Terms carefully before using our services. Your use
          of our services indicates your acceptance of these Terms and your
          agreement to comply with them. If you do not agree with any part of
          these Terms, you may not use our services.
        </p>
        <div className="frame-parent34">
          <div className="ownership-parent">
            <b className="ownership">4.1 Ownership</b>
            <p className="all-content-materials">
              All content, materials, and intellectual property on our website
              and within our services are owned or licensed by NexusConnectNet
              You may not use, reproduce, or distribute any of our content
              without our express written permission.
            </p>
          </div>
          <div className="trademarks-parent">
            <b className="trademarks">4.2 Trademarks</b>
            <p className="any-trademarks-logos">
              {" "}
              Any trademarks, logos, or service marks displayed on our website
              are the property of NexusConnectNet or their respective owners.
              You may not use these marks without our prior written consent or
              the consent of the respective owners.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-links4">
        <b className="service-availability">
          <ol className="service-availability1">
            <li>Service Availability</li>
          </ol>
        </b>
        <p className="we-strive-to">
          We strive to provide reliable services, but we do not guarantee
          uninterrupted or error-free operation of our website or services. We
          reserve the right to modify or discontinue our services at any time
          without notice.
        </p>
      </div>
      <div className="footer-links5">
        <b className="user-conduct">
          <ol className="user-conduct1">
            <li>User Conduct</li>
          </ol>
        </b>
        <p className="you-agree-to">
          You agree to use our services for lawful purposes and in compliance
          with these Terms. You may not engage in any activity that violates
          applicable laws or infringes on the rights of others.
        </p>
      </div>
      <div className="footer-links6">
        <b className="termination">
          <ol className="termination1">
            <li>Termination</li>
          </ol>
        </b>
        <p className="we-reserve-the">
          We reserve the right to terminate or suspend your access to our
          services at our discretion, without prior notice, for any violation of
          these Terms or for any other reason.
        </p>
      </div>
      <div className="footer-links7">
        <b className="limitation-of-liability-container">
          <ol className="limitation-of-liability">
            <li>Limitation of Liability</li>
          </ol>
        </b>
        <p className="to-the-fullest">
          To the fullest extent permitted by law, NexusConnectNet and its
          affiliates shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising from your use of our
          services.
        </p>
      </div>
      <div className="footer-links8">
        <b className="governing-law">
          <ol className="governing-law1">
            <li>Governing Law</li>
          </ol>
        </b>
        <p className="these-terms-are">
          These Terms are governed by and construed in accordance with the laws
          of [Your Jurisdiction]. Any disputes arising from these Terms or your
          use of our services shall be subject to the exclusive jurisdiction of
          the courts of law.
        </p>
      </div>
      <div className="footer-links9">
        <b className="contact-us">
          <span className="contact-us-txt-container">
            <ol className="contact-us1">
              <li>Contact Us</li>
            </ol>
          </span>
        </b>
        <p className="if-you-have-container">
          <span className="if-you-have">
            If you have any questions or concerns about these Terms or our
            services, please contact us at hello@cryptoclouds.com.
          </span>
          <span className="blank-line">&nbsp;</span>
          <span className="thank-you-for">{`Thank you for choosing NexusConnectNet `}</span>
          <span className="we-hope-you">
            {" "}
            We hope you enjoy our services and find them valuable for your
            crypto endeavors.
          </span>
        </p>
      </div>
    </div>
  );
};


export default FooterContent;
