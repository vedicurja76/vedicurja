export const SITE_CONFIG = {
  name: 'AstroVastu Expert',
  domain: 'vedivastuurja.com',
  baseUrl: 'https://vedivastuurja.com',
  tagline: 'Ancient Wisdom. Modern Precision.',
  founder: 'KK Nagaich',
} as const;

export const CONTACT = {
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+916393570832',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
} as const;

export function getWhatsAppLink(message: string): string {
  const cleanPhone = CONTACT.whatsappPhone.replace(/[+\s]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
