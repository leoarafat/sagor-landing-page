import LegalPage from '../layouts/LegalPage';

const topics = [
  'Music Distribution & Release Management',
  'Royalties & Revenue Collection',
  'YouTube Content ID & Social Media Monetization',
  'Publishing Rights & Copyright Protection',
  'ISRC, UPC & Metadata Standards',
  'Spotify, Apple Music & Artist Profiles',
  'Playlist Promotion & Audience Growth',
  'Release Requirements & Platform Guidelines',
  'Collaboration & Revenue Splits',
  'Industry Updates & Best Practices',
];

export default function KnowledgeBase() {
  return (
    <LegalPage
      eyebrow="Knowledge Base"
      title="Welcome to the SMSound India Knowledge Base"
      intro="Your trusted resource for understanding the music distribution ecosystem."
    >
      <p>
        Access professionally curated articles, industry insights, and step-by-step guides covering every aspect of
        digital music distribution. Learn how to release music globally, collect royalties, protect your copyrights,
        monetize your content across streaming platforms, and optimize your artist presence in today's digital music
        landscape.
      </p>
      <p>
        Whether you're an independent artist, producer, songwriter, label owner, or content creator, our knowledge base
        provides the information and best practices needed to successfully distribute, manage, and grow your music
        catalog worldwide.
      </p>

      <h2>Topics Include</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      <p>
        Stay informed, maximize your earnings, and build a sustainable music career with expert guidance from SMSound
        India.
      </p>
    </LegalPage>
  );
}
