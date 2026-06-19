import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/918017802287';

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.5)] transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full border border-[#25D366]/60" />
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
