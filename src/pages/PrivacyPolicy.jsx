// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
        <Link to="/" className="back-button">
        <ArrowLeft size={20} />
        <span>Go Back</span>
      </Link>
      <div className="privacy-policy-card">
        <SectionTitle title="Privacy Policy" />
        <div className="privacy-content">
          <p><strong>Effective Date:</strong> September 2025</p>
          <p>
            This Privacy Policy describes how personal information is collected, used, and protected when you interact with this website. By using the contact form provided on this site, you agree to the practices outlined below.
          </p>

          <SectionTitle title="Information Collected" />
          <p>
            When you submit a message through the contact form, the following information may be collected:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message content</li>
          </ul>

          <SectionTitle title="Use of Information" />
          <p>
            The information you provide is used solely for the purpose of responding to your inquiry. It will not be used for unsolicited marketing, newsletters, or promotional purposes.
          </p>

          <SectionTitle title="Data Sharing & Disclosure" />
          <p>
            Your information will not be sold, rented, or shared with third parties. It may, however, be processed and temporarily stored through third-party services (such as Netlify), which are necessary to deliver form functionality.
          </p>

          <SectionTitle title="Data Security" />
          <p>
            Reasonable technical and organizational measures are implemented to protect your personal data. While every effort is made to safeguard your information, no method of electronic transmission or storage is completely secure.
          </p>

          <SectionTitle title="Data Retention & Your Rights" />
          <p>
            Submitted information is retained only as long as necessary to respond to your inquiry. You have the right to request deletion of your data at any time by contacting:
          </p>
          <p>📧 bonykoshy@gmail.com</p>

          <SectionTitle title="Updates to This Policy" />
          <p>
            This Privacy Policy may be updated periodically to reflect changes in practices or services. The “Effective Date” above will always indicate the latest version.
          </p>

          <SectionTitle title="Contact" />
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact:
          </p>
          <p>📧 bonykoshy@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;