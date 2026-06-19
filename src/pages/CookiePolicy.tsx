import LegalPage from '../layouts/LegalPage';

export default function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro={`This Cookie Policy explains how SMSound India ("we," "our," or "us") uses cookies and similar technologies when you visit our website and use our services. By continuing to use our website, you consent to the use of cookies in accordance with this Policy.`}
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your computer, smartphone, tablet, or other device when you
        visit a website.
      </p>
      <p>
        They help websites function properly, improve user experience, remember user preferences, and collect
        information about website usage and performance.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>SMSound India may use cookies for the following purposes:</p>
      <ul>
        <li>To maintain user login sessions</li>
        <li>To improve website functionality and performance</li>
        <li>To enhance website security</li>
        <li>To remember user preferences and settings</li>
        <li>To analyze website traffic and visitor behavior</li>
        <li>To improve user experience and service quality</li>
      </ul>

      <h2>3. Types of Cookies We Use</h2>
      <h3>Essential Cookies</h3>
      <p>These cookies are necessary for the operation of our website and services. Examples include:</p>
      <ul>
        <li>User Authentication</li>
        <li>Account Login Sessions</li>
        <li>Security and Fraud Prevention</li>
        <li>Core Website Functionality</li>
      </ul>
      <h3>Analytics Cookies</h3>
      <p>These cookies help us understand how visitors interact with our website. Examples include:</p>
      <ul>
        <li>Page Views</li>
        <li>Visitor Statistics</li>
        <li>Website Performance Monitoring</li>
        <li>Traffic Analysis</li>
      </ul>
      <h3>Functional Cookies</h3>
      <p>These cookies remember your preferences and improve your experience. Examples include:</p>
      <ul>
        <li>Language Preferences</li>
        <li>Account Settings</li>
        <li>Dashboard Preferences</li>
      </ul>

      <h2>4. Third-Party Cookies</h2>
      <p>SMSound India may use trusted third-party services that place cookies on your device, including:</p>
      <ul>
        <li>Analytics Providers</li>
        <li>Payment Processors</li>
        <li>Security Services</li>
        <li>Social Media Integrations</li>
      </ul>
      <p>These third parties may collect information in accordance with their own privacy policies and terms.</p>

      <h2>5. Managing Cookies</h2>
      <p>Most web browsers allow users to control, disable, or delete cookies through browser settings.</p>
      <p>
        Please note that disabling certain cookies may affect the functionality, performance, and user experience of
        our website.
      </p>

      <h2>6. Changes to This Cookie Policy</h2>
      <p>SMSound India reserves the right to update, modify, or replace this Cookie Policy at any time.</p>
      <p>
        Any changes will become effective immediately upon publication on this page. Continued use of our website after
        updates constitutes acceptance of the revised Cookie Policy.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        SMSound India
        <br />
        Website: <a href="https://smsoundindia.com">https://smsoundindia.com</a>
        <br />
        Email: <a href="mailto:support@smsoundindia.com">support@smsoundindia.com</a>
      </p>
    </LegalPage>
  );
}
