import React from 'react';
import './terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms & Conditions</h1>
      
      <p className="terms-text">
        By using this website, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <ul className="terms-list">
        <li>This website is for educational purposes only, mainly focused on practicing HC Verma Physics questions.</li>
        <li>Do not copy or distribute content without permission.</li>
        <li>We are not responsible for any incorrect answers or interpretations. Always refer to official resources for final confirmation.</li>
        <li>Your use of this site means you accept our terms and agree to use the platform respectfully.</li>
        <li>We may update these terms at any time without prior notice.</li>
      </ul>

      <p className="terms-footer">
        Last updated: April 2025
      </p>
    </div>
  );
};

export default Terms;