export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Soumya Mukherjee',
    role: 'Singer-Songwriter',
    initials: 'SM',
    quote:
      'My first single went live on Spotify and Apple Music in two days. The royalty dashboard finally shows me what every store actually pays.',
    rating: 5,
    gradient: 'from-emerald-400 to-cyan-500',
  },
  {
    name: 'Amiyo Sarkar',
    role: 'Independent Artist',
    initials: 'AS',
    quote:
      'The Vevo delivery alone is worth it. My music videos look official now, and the YouTube monetization picked up claims I never knew existed.',
    rating: 5,
    gradient: 'from-fuchsia-400 to-purple-500',
  },
  {
    name: 'DSK Music World',
    role: 'Label Owner',
    initials: 'DM',
    quote:
      'We moved a 400-track catalog over without losing a single stream count. Label payouts that used to take a week now take minutes.',
    rating: 5,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Piya Haldar',
    role: 'Playback Singer',
    initials: 'PH',
    quote:
      'Playlist pitching actually worked — two editorial placements in my first quarter. The analytics told me exactly which cities to tour.',
    rating: 5,
    gradient: 'from-sky-400 to-blue-500',
  },
];
