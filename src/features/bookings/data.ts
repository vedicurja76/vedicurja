export interface PlanTier {
  id: string;
  name: string;
  priceLabel: string;
  amount: number | null;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface BookingService {
  id: string;
  slug: string;
  name: string;
  hindi: string;
  icon: string;
  blurb: string;
  plans: PlanTier[];
}

const SPACE_PLANS: PlanTier[] = [
  {
    id: 'silver',
    name: 'Silver',
    priceLabel: '₹7 / sq.ft.',
    amount: 1999,
    duration: '45–60 min',
    features: ['Computerised layout audit', 'Direction & zone analysis', '10 priority remedies', 'WhatsApp summary report'],
  },
  {
    id: 'gold',
    name: 'Gold',
    priceLabel: '₹10 / sq.ft.',
    amount: 2999,
    duration: '90 min',
    popular: true,
    features: ['Everything in Silver', 'Room-by-room deep audit', '25 remedies with priority map', '1 follow-up call (15 days)', 'Remedy execution guidance'],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    priceLabel: 'Custom',
    amount: null,
    duration: 'On-site / multi-session',
    features: ['Everything in Gold', 'On-site visit or video walkthrough', 'Complete 40+ page report', '3 months of follow-up support', 'Personal ritual execution (if needed)'],
  },
];

const CONSULT_PLANS: PlanTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    priceLabel: '₹1,999',
    amount: 1999,
    duration: '30–40 min',
    features: ['Personal consultation', 'Core analysis & remedies', 'WhatsApp summary'],
  },
  {
    id: 'premium',
    name: 'Premium',
    priceLabel: '₹4,999',
    amount: 4999,
    duration: '60–90 min',
    popular: true,
    features: ['Everything in Basic', 'Detailed report', 'Remedy execution plan', '1 follow-up call'],
  },
];

export const BOOKING_SERVICES: BookingService[] = [
  {
    id: 'residential',
    slug: 'residential',
    name: 'Residential Vastu',
    hindi: 'आवासीय वास्तु',
    icon: '🏠',
    blurb: 'Flats, apartments, houses & quarters',
    plans: SPACE_PLANS,
  },
  {
    id: 'commercial',
    slug: 'commercial',
    name: 'Commercial Vastu',
    hindi: 'व्यावसायिक वास्तु',
    icon: '🏢',
    blurb: 'Offices, shops, showrooms & cash counters',
    plans: SPACE_PLANS,
  },
  {
    id: 'industrial',
    slug: 'industrial',
    name: 'Industrial Vastu',
    hindi: 'औद्योगिक वास्तु',
    icon: '🏭',
    blurb: 'Factories, machinery & fire-safety alignment',
    plans: SPACE_PLANS,
  },
  {
    id: 'land',
    slug: 'land',
    name: 'Land Selection',
    hindi: 'भूमि चयन',
    icon: '🗺️',
    blurb: 'Plot analysis, slope, soil & shape evaluation',
    plans: SPACE_PLANS,
  },
  {
    id: 'kundali',
    slug: 'kundali',
    name: 'Kundali Analysis',
    hindi: 'कुंडली विश्लेषण',
    icon: '🌌',
    blurb: 'Shadbala, Dasha, gemstone & muhurat guidance',
    plans: [
      {
        id: 'report',
        name: '100-Page Report',
        priceLabel: '₹999',
        amount: 999,
        duration: 'Delivered in 5–7 days',
        features: ['Detailed 100-page kundali report', 'Shadbala & Vimshottari Dasha', 'Gemstone recommendations', 'PDF delivered on WhatsApp'],
      },
      ...CONSULT_PLANS,
    ],
  },
  {
    id: 'numerology',
    slug: 'numerology-namakaran',
    name: 'Numerology & Namakaran',
    hindi: 'अंक ज्योतिष व नामकरण',
    icon: '🔢',
    blurb: 'Auspicious names, mobile numbers & business naming',
    plans: CONSULT_PLANS,
  },
  {
    id: 'geopathic',
    slug: 'geopathic',
    name: 'Geopathic Stress',
    hindi: 'जियोपैथिक स्ट्रेस',
    icon: '📡',
    blurb: 'Earth-energy & electromagnetic stress correction',
    plans: CONSULT_PLANS,
  },
  {
    id: 'crystal',
    slug: 'crystal-color',
    name: 'Crystal & Color Therapy',
    hindi: 'क्रिस्टल व रंग चिकित्सा',
    icon: '💎',
    blurb: 'Crystal placement & colour balancing for zones',
    plans: CONSULT_PLANS,
  },
  {
    id: 'pyramid',
    slug: 'pyramidology',
    name: 'Pyramidology',
    hindi: 'पिरामिड विज्ञान',
    icon: '🔺',
    blurb: 'Pyramid energy grids for home & workplace',
    plans: CONSULT_PLANS,
  },
  {
    id: 'mercury',
    slug: 'mercury-parad',
    name: 'Mercury Parad',
    hindi: 'पारद शिवलिंग',
    icon: '🪷',
    blurb: 'Authentic parad shivling guidance & installation',
    plans: CONSULT_PLANS,
  },
  {
    id: 'rituals',
    slug: 'rituals',
    name: 'Rituals, Puja & Havan',
    hindi: 'अनुष्ठान, पूजा व हवन',
    icon: '🔥',
    blurb: 'Personalised puja, havan & shanti rituals',
    plans: CONSULT_PLANS,
  },
  {
    id: 'remedies',
    slug: 'remedies',
    name: 'Vastu Remedies',
    hindi: 'वास्तु उपाय',
    icon: '🛠️',
    blurb: 'Non-destructive remedies without demolition',
    plans: CONSULT_PLANS,
  },
  {
    id: 'spiritual',
    slug: 'spiritual',
    name: 'Spiritual Vastu',
    hindi: 'आध्यात्मिक वास्तु',
    icon: '🕉️',
    blurb: 'Pooja room, mandir & meditation space design',
    plans: CONSULT_PLANS,
  },
  {
    id: 'virtual',
    slug: 'virtual-consult',
    name: 'Virtual Consult',
    hindi: 'वर्चुअल परामर्श',
    icon: '🎥',
    blurb: '60-min video session with screen-shared floor plan',
    plans: [
      {
        id: 'session',
        name: '60-min Session',
        priceLabel: '₹2,999',
        amount: 2999,
        duration: '60 min video call',
        popular: true,
        features: ['Screen-share floor plan', 'Live directional audit', 'Instant remedies', 'Post-session written summary'],
      },
      {
        id: 'family',
        name: 'Family Pack (3 sessions)',
        priceLabel: '₹7,499',
        amount: 7499,
        duration: '3 × 60 min',
        features: ['3 sessions for home + office', 'Priority scheduling', 'Extended support'],
      },
    ],
  },
];

export function getServiceById(id: string): BookingService | undefined {
  return BOOKING_SERVICES.find(s => s.id === id);
}

export function getServiceBySlug(slug: string): BookingService | undefined {
  return BOOKING_SERVICES.find(s => s.slug === slug);
}
