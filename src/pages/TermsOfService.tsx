import LegalPage from '../layouts/LegalPage';

export default function TermsOfService() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro={`By using SMSound India ("Service"), you agree to comply with and be bound by these Terms of Service.`}
    >
      <h2>1. Services</h2>
      <p>
        SMSound India provides digital music distribution services to various Digital Service Providers (DSPs), including
        Spotify, Apple Music, YouTube Music, Amazon Music, and other supported platforms. All releases are subject to
        manual review and approval.
      </p>

      <h2>2. Ownership</h2>
      <p>
        Artists retain 100% ownership of their Master Rights, Publishing Rights, and Intellectual Property. SMSound
        India receives only a non-exclusive license to distribute and manage the content on supported platforms.
      </p>

      <h2>3. Revenue & Payments</h2>
      <p>Revenue sharing depends on the distribution plan purchased by the Artist.</p>
      <p>Royalty payments are made via:</p>
      <ul>
        <li>Bank Transfer</li>
        <li>PayPal</li>
        <li>Payoneer</li>
      </ul>
      <p>
        The first royalty payout is generally available after 3 months, followed by monthly payments based on DSP
        reporting schedules.
      </p>

      <h2>4. Prohibited Content</h2>
      <p>The following content and activities are strictly prohibited:</p>
      <ul>
        <li>Copyright infringement</li>
        <li>Fake or artificial streams</li>
        <li>Fraudulent activity</li>
        <li>Hate speech</li>
        <li>Terrorist content</li>
        <li>Adult or sexually explicit content</li>
        <li>False ownership claims</li>
      </ul>

      <h2>5. Copyright Responsibility</h2>
      <p>Artists are solely responsible for ensuring they own or have proper authorization for all uploaded content.</p>
      <p>
        If any copyright claim, ownership dispute, or legal issue arises, the Artist shall be fully responsible for
        resolving the matter. SMSound India acts solely as a distribution service provider and shall not be liable for
        any copyright-related disputes, claims, damages, losses, or legal actions arising from content uploaded by the
        Artist.
      </p>

      <h2>6. Takedown Policy</h2>
      <p>
        If a copyright complaint is received, the Artist will be given up to 3 working days to provide valid proof of
        ownership.
      </p>
      <p>If the issue remains unresolved, SMSound India reserves the right to:</p>
      <ul>
        <li>Remove the content from all supported platforms</li>
        <li>Disable access to the release</li>
        <li>Withhold any associated royalties until the matter is resolved</li>
      </ul>

      <h2>7. Account Suspension & Termination</h2>
      <p>
        SMSound India may suspend or terminate any account at its sole discretion for violations including but not
        limited to:
      </p>
      <ul>
        <li>Copyright infringement</li>
        <li>Fake streams</li>
        <li>Fraudulent activity</li>
        <li>Submission of false information</li>
        <li>Violation of DSP policies and guidelines</li>
      </ul>
      <p>
        A Three-Strike Policy may be applied; however, severe violations may result in immediate account termination
        without prior notice.
      </p>

      <h2>8. Refund Policy</h2>
      <p>All subscription fees, distribution fees, setup fees, and service charges are non-refundable.</p>

      <h2>9. Limitation of Liability</h2>
      <p>SMSound India shall not be liable for:</p>
      <ul>
        <li>Actions taken by DSPs</li>
        <li>Content removals</li>
        <li>Royalty reporting delays</li>
        <li>Account suspensions</li>
        <li>Platform policy changes</li>
        <li>Any direct or indirect losses resulting from the Artist's content or violation of these Terms</li>
      </ul>

      <h2>10. Fraud & Artificial Streaming</h2>
      <p>
        SMSound India reserves the right to withhold royalties, remove releases, suspend accounts, or terminate services
        if artificial streaming, bot activity, stream manipulation, playlist fraud, or any suspicious activity is
        detected by DSPs or internal monitoring systems.
      </p>

      <h2>11. Metadata Accuracy</h2>
      <p>
        Artists are responsible for ensuring that all submitted metadata, including artist names, song titles, credits,
        ISRCs, UPCs, and contributor information, is accurate and complete.
      </p>

      <h2>12. DSP Policy Compliance</h2>
      <p>
        All releases must comply with the policies and guidelines of Spotify, Apple Music, YouTube Music, Amazon Music,
        Meta, TikTok, and other supported DSPs.
      </p>

      <h2>13. Royalty Hold</h2>
      <p>
        SMSound India reserves the right to temporarily hold royalties during investigations related to copyright
        disputes, fraud detection, DSP audits, or suspicious activity.
      </p>

      <h2>14. Service Modification</h2>
      <p>
        SMSound India reserves the right to modify, suspend, or discontinue any service, feature, pricing plan, or
        platform integration at any time without prior notice.
      </p>

      <h2>15. Governing Law</h2>
      <p>These Terms of Service shall be governed and interpreted in accordance with the laws of India.</p>
      <p>
        Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in
        Kolkata, West Bengal, India.
      </p>

      <h2>Contact Us</h2>
      <p>
        SMSound India
        <br />
        Website: <a href="https://smsoundindia.com">https://smsoundindia.com</a>
        <br />
        Email: <a href="mailto:support@smsoundindia.com">support@smsoundindia.com</a>
      </p>
      <p>
        By accessing or using SMSound India, you acknowledge that you have read, understood, and agreed to these Terms
        of Service.
      </p>
    </LegalPage>
  );
}
