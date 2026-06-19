import { motion } from 'framer-motion';
import { BookOpen, LifeBuoy, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlowCard from '../components/GlowCard';
import SectionHeading from '../components/SectionHeading';
import { fadeUp, staggerContainer } from '../utils/animations';

type ChannelKind = 'internal' | 'external' | 'mail';

const WHATSAPP_URL = 'https://wa.me/918017802287';

const channels: Array<{
  icon: typeof Mail;
  title: string;
  description: string;
  action: string;
  href: string;
  kind: ChannelKind;
}> = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Detailed answers for release, royalty, and account questions.',
    action: 'support@smsoundindia.com',
    href: 'mailto:support@smsoundindia.com',
    kind: 'mail',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Talk to a distribution specialist in minutes, day or night.',
    action: 'Start a chat',
    href: WHATSAPP_URL,
    kind: 'external',
  },
  {
    icon: LifeBuoy,
    title: 'Help Center',
    description: 'Step-by-step guides for uploads, metadata, and payouts.',
    action: 'Browse guides',
    href: '/help-center',
    kind: 'internal',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Deep dives on Content ID, publishing, and store policies.',
    action: 'Read articles',
    href: '/knowledge-base',
    kind: 'internal',
  },
];

export default function Support() {
  return (
    <section id="support" className="relative bg-night-800/50 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Support"
          title="Real humans, around the clock"
          subtitle="Releases don't keep office hours — neither do we."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {channels.map((channel) => {
            const card = (
              <GlowCard className="h-full text-center transition-transform duration-300 hover:-translate-y-1">
                <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-glow/10 text-glow">
                  <channel.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{channel.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{channel.description}</p>
                <p className="mt-4 text-sm font-semibold text-glow">{channel.action}</p>
              </GlowCard>
            );
            return (
              <motion.div key={channel.title} variants={fadeUp}>
                {channel.kind === 'internal' ? (
                  <Link to={channel.href} className="block">
                    {card}
                  </Link>
                ) : (
                  <a
                    href={channel.href}
                    target={channel.kind === 'external' ? '_blank' : undefined}
                    rel={channel.kind === 'external' ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {card}
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
