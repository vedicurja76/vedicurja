import { getWhatsAppLink } from '@/lib/constants/config';

export function openWhatsApp(message: string): void {
  window.open(getWhatsAppLink(message), '_blank');
}
