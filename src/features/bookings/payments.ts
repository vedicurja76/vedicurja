import type { BookingService, PlanTier } from './data';

export interface PaymentSession {
  service: BookingService;
  plan: PlanTier;
  amount: number;
  customer: { name: string; phone: string; email: string };
}

export type PaymentResult =
  | { status: 'success'; txId: string; mode: 'mock' | 'razorpay' }
  | { status: 'pending'; message: string }
  | { status: 'failed'; message: string };

export interface PaymentProvider {
  readonly name: string;
  readonly testMode: boolean;
  startPayment(session: PaymentSession): Promise<PaymentResult>;
}

const RAZORPAY_ENABLED =
  (process.env.NEXT_PUBLIC_RAZORPAY_ENABLED || 'false') === 'true';

export class MockPaymentProvider implements PaymentProvider {
  readonly name = 'mock';
  readonly testMode = true;

  async startPayment(session: PaymentSession): Promise<PaymentResult> {
    await new Promise(res => setTimeout(res, 1400));
    return { status: 'success', txId: `MOCK-${Date.now().toString(36).toUpperCase()}`, mode: 'mock' };
  }
}

// Next.js only inlines process.env.X for *literal* member access at build
// time — a dynamic `process.env[key]` would be undefined in the browser.
const RAZORPAY_LINKS: Record<string, string | undefined> = {
  BASIC: process.env.NEXT_PUBLIC_RAZORPAY_LINK_BASIC,
  SILVER: process.env.NEXT_PUBLIC_RAZORPAY_LINK_SILVER,
  GOLD: process.env.NEXT_PUBLIC_RAZORPAY_LINK_GOLD,
  LUXURY: process.env.NEXT_PUBLIC_RAZORPAY_LINK_LUXURY,
  PREMIUM: process.env.NEXT_PUBLIC_RAZORPAY_LINK_PREMIUM,
  REPORT: process.env.NEXT_PUBLIC_RAZORPAY_LINK_REPORT,
  SESSION: process.env.NEXT_PUBLIC_RAZORPAY_LINK_SESSION,
  FAMILY: process.env.NEXT_PUBLIC_RAZORPAY_LINK_FAMILY,
};

export class RazorpayPaymentLinksProvider implements PaymentProvider {
  readonly name = 'razorpay';
  readonly testMode = false;

  async startPayment(session: PaymentSession): Promise<PaymentResult> {
    const link = RAZORPAY_LINKS[session.plan.id.toUpperCase()];
    if (!link) {
      return {
        status: 'failed',
        message: `Razorpay payment link for plan "${session.plan.name}" is not configured yet. Please book via WhatsApp instead.`,
      };
    }
    window.open(`${link}?prefill[name]=${encodeURIComponent(session.customer.name)}&prefill[contact]=${encodeURIComponent(session.customer.phone)}&prefill[email]=${encodeURIComponent(session.customer.email)}`, '_blank', 'noopener');
    return { status: 'pending', message: 'Payment page opened in a new tab. Complete the payment, then return here and tap "I have paid".' };
  }
}

export function getPaymentProvider(): PaymentProvider {
  return RAZORPAY_ENABLED ? new RazorpayPaymentLinksProvider() : new MockPaymentProvider();
}

export function formatAmount(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
