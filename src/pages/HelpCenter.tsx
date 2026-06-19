import LegalPage from '../layouts/LegalPage';

const releaseInfo = [
  'Release Title',
  'Version / Subtitle (if applicable)',
  'Primary Artist(s)',
  'Genre & Subgenre',
  'Record Label',
  'Release Format',
  'Release Date',
  'Production Year',
  'P-Line & C-Line Copyright Information',
  'Catalog Number (Optional)',
];

const coverArt = [
  'JPG Format Only',
  'Minimum 3000 × 3000 Pixels',
  'High-Resolution Image',
  'No Blurry, Copyrighted, or Misleading Content',
];

const audio = [
  'WAV Format Recommended',
  'High-Quality Master Audio',
  'No Distortion, Clipping, or Unwanted Noise',
];

const trackMetadata = [
  'Track Title',
  'Track Type',
  'Instrumental or Vocal',
  'Author / Lyricist',
  'Composer',
  'Producer',
  'Sound Engineer',
  'Publisher',
  'ISRC (If Available)',
  'UPC (If Available)',
  'Preview Start Time',
  'Explicit Content Status',
  'Track Title Language',
  'Lyrics Language',
  'Full Lyrics (Or Mark as Instrumental)',
];

const verifyItems = [
  'Release Details',
  'Artist Information',
  'Audio Files',
  'Cover Artwork',
  'Metadata',
  'Copyright Information',
  'Distribution Settings',
];

export default function HelpCenter() {
  return (
    <LegalPage
      eyebrow="Help Center"
      title="How to Release Your Music on SMSound India"
      intro="A step-by-step guide to taking your release from creation to every major streaming platform."
    >
      <h2>Step 1: Create a New Release</h2>
      <p>
        Start by selecting <strong>"Create Release"</strong> from your dashboard. Choose the type of release you want to
        distribute, such as a Single, EP, Album, or Video Release.
      </p>
      <p>Enter the required release information:</p>
      <ul>
        {releaseInfo.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Ensure all information is accurate before proceeding to the next step.</p>

      <h2>Step 2: Upload Artwork & Audio</h2>
      <h3>Cover Art Requirements</h3>
      <ul>
        {coverArt.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Audio Requirements</h3>
      <ul>
        {audio.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Review the upload guidelines before submitting your files.</p>

      <h2>Step 3: Complete Track Metadata</h2>
      <p>Provide detailed information about your track to ensure proper delivery to streaming platforms.</p>
      <h3>Required Metadata Includes</h3>
      <ul>
        {trackMetadata.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Accurate metadata helps maximize discoverability and royalty reporting across all stores.</p>

      <h2>Step 4: Review & Submit</h2>
      <p>Carefully review all release information before submission.</p>
      <h3>Verify</h3>
      <ul>
        {verifyItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Once everything is complete, submit your release for review.</p>
      <p>
        Our Quality Control Team will review your submission and process it for delivery to selected streaming and
        download platforms.
      </p>

      <h2>After Submission</h2>
      <p>
        Track your release status directly from your dashboard. Once approved, your music will be delivered to major
        digital platforms worldwide, and royalty reporting will become available as stores begin reporting streams and
        sales.
      </p>
    </LegalPage>
  );
}
