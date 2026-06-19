export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 10000, suffix: '+', label: 'Artists' },
  { value: 150, suffix: '+', label: 'Platforms' },
  { value: 120, suffix: '+', label: 'Countries' },
  { value: 300, suffix: ' Million+', label: 'Streams' },
];
