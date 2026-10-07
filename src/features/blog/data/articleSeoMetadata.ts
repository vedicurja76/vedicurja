import type { FaqItem, ReferenceItem, RelatedArticle } from '@/features/blog/components/ArticleShell';

export interface ArticleSeoMeta {
  slug: string;
  readingMinutes: number;
  category: string;
  categoryHi: string;
  quickAnswer: string;
  quickAnswerHi: string;
  toc: { id: string; label: string; labelHi: string }[];
  references: ReferenceItem[];
  faqs: FaqItem[];
  related: RelatedArticle[];
}

const RELATED_ENTRANCE = [
  {
    slug: 'science-of-vastu',
    title: 'The Science of Vastu Shastra — Elements & Evidence',
    titleHi: 'वास्तु शास्त्र का विज्ञान — तत्व एवं प्रमाण',
    description: 'How the five Mahabhutas map to directions and what modern physics confirms about Vastu geometry.',
    descriptionHi: 'पाँच महाभूत कैसे दिशाओं से जुड़ते हैं और आधुनिक भौतिकी वास्तु ज्यामिति के बारे में क्या पुष्टि करती है।',
  },
  {
    slug: 'remedies-without-demolition',
    title: 'Vastu Remedies Without Demolition',
    titleHi: 'बिना तोड़फोड़ वास्तु उपचार',
    description: 'Practical corrections — yantras, pyramids, colours, mirrors, plants — that work without breaking walls.',
    descriptionHi: 'व्यावहारिक सुधार — यंत्र, पिरामिड, रंग, दर्पण, पौधे — जो दीवारें तोड़े बिना काम करते हैं।',
  },
];

const RELATED_SLEEP = [
  {
    slug: 'geopathic-stress-hidden-enemy',
    title: 'Geopathic Stress — The Hidden Enemy in Your Home',
    titleHi: 'भू-रोगजनक तनाव — आपके घर का अदृश्य शत्रु',
    description: 'Underground water veins and earth energies that silently disturb sleep and immunity.',
    descriptionHi: 'भूगर्भ जल-शिराएँ और पृथ्वी ऊर्जाएँ जो चुपचाप नींद और रोग-प्रतिरोधकता को भंग करती हैं।',
  },
  {
    slug: 'science-of-vastu',
    title: 'The Science of Vastu Shastra — Elements & Evidence',
    titleHi: 'वास्तु शास्त्र का विज्ञान — तत्व एवं प्रमाण',
    description: 'How the five Mahabhutas map to directions and what modern physics confirms about Vastu geometry.',
    descriptionHi: 'पाँच महाभूत कैसे दिशाओं से जुड़ते हैं और आधुनिक भौतिकी वास्तु ज्यामिति के बारे में क्या पुष्टि करती है।',
  },
];

const RELATED_HEALTH = [
  {
    slug: 'panch-mahabhutas-five-elements',
    title: 'The Panch Mahabhutas — Five Elements Explained',
    titleHi: 'पंच महाभूत — पाँच तत्वों की व्याख्या',
    description: 'Earth, Water, Fire, Air and Space and how balancing them shapes health and prosperity.',
    descriptionHi: 'पृथ्वी, जल, अग्नि, वायु और आकाश और इन्हें संतुलित करना स्वास्थ्य और समृद्धि को कैसे आकार देता है।',
  },
  {
    slug: 'vastu-main-entrance-door',
    title: 'Vastu for the Main Entrance Door',
    titleHi: 'मुख्य प्रवेश द्वार के लिए वास्तु',
    description: 'Best entrance orientations, materials, on-slopes and corrections for entry doshas.',
    descriptionHi: 'श्रेष्ठ प्रवेश दिशाएँ, सामग्री, ढलान और प्रवेश दोषों के लिए सुधार।',
  },
];

const RELATED_OFFICE = [
  {
    slug: 'vastu-main-entrance-door',
    title: 'Vastu for the Main Entrance Door',
    titleHi: 'मुख्य प्रवेश द्वार के लिए वास्तु',
    description: 'Best entrance orientations, materials, colours and corrections for entry doshas.',
    descriptionHi: 'श्रेष्ठ प्रवेश दिशाएँ, सामग्री, रंग और प्रवेश दोषों के लिए सुधार।',
  },
  {
    slug: 'kitchen-vastu-health-wealth',
    title: 'Kitchen Vastu for Health & Wealth',
    titleHi: 'स्वास्थ्य एवं समृद्धि हेतु रसोई वास्तु',
    description: 'Agni-zone placement, sink-gas-stove positioning and cooking direction for prosperity.',
    descriptionHi: 'अग्नि-क्षेत्र स्थापन, सिंक-गैस-चूल्हा विन्यास और समृद्धि हेतु पाक-दिशा।',
  },
];

const RELATED_PANCH = [
  {
    slug: 'science-of-vastu',
    title: 'The Science of Vastu Shastra — Elements & Evidence',
    titleHi: 'वास्तु शास्त्र का विज्ञान — तत्व एवं प्रमाण',
    description: 'How the five Mahabhutas map to directions and what modern physics confirms about Vastu geometry.',
    descriptionHi: 'पाँच महाभूत कैसे दिशाओं से जुड़ते हैं और आधुनिक भौतिकी वास्तु ज्यामिति के बारे में क्या पुष्टि करती है।',
  },
  {
    slug: 'vastu-main-entrance-door',
    title: 'Vastu for the Main Entrance Door',
    titleHi: 'मुख्य प्रवेश द्वार के लिए वास्तु',
    description: 'Best entrance orientations, materials, on-slopes and corrections for entry doshas.',
    descriptionHi: 'श्रेष्ठ प्रवेश दिशाएँ, सामग्री, ढलान और प्रवेश दोषों के लिए सुधार।',
  },
];

const RELATED_SPIRITUAL = [
  {
    slug: 'vastu-main-entrance-door',
    title: 'Vastu for the Main Entrance Door',
    titleHi: 'मुख्य प्रवेश द्वार के लिए वास्तु',
    description: 'Best entrance orientations, materials and corrections for entry doshas.',
    descriptionHi: 'श्रेष्ठ प्रवेश दिशाएँ, सामग्री और प्रवेश दोषों के लिए सुधार।',
  },
  {
    slug: 'remedies-without-demolition',
    title: 'Vastu Remedies Without Demolition',
    titleHi: 'बिना तोड़फोड़ वास्तु उपचार',
    description: 'Practical corrections — yantras, pyramids, colours, mirrors, plants — that work without breaking walls.',
    descriptionHi: 'व्यावहारिक सुधार — यंत्र, पिरामिड, रंग, दर्पण, पौधे — जो दीवारें तोड़े बिना काम करते हैं।',
  },
];

const RELATED_REMEDIES = [
  {
    slug: 'geopathic-stress-hidden-enemy',
    title: 'Geopathic Stress — The Hidden Enemy',
    titleHi: 'भू-रोगजनक तनाव — अदृश्य शत्रु',
    description: 'Underground water veins and earth energies that silently disturb sleep and immunity.',
    descriptionHi: 'भूगर्भ जल-शिराएँ और पृथ्वी ऊर्जाएँ जो चुपचाप नींद और रोग-प्रतिरोधकता को भंग करती हैं।',
  },
  {
    slug: 'spiritual-vastu-pooja-room-design',
    title: 'Spiritual Vastu & Pooja Room Design',
    titleHi: 'आध्यात्मिक वास्तु एवं पूजा कक्ष डिज़ाइन',
    description: 'Designing a sacred space — direction, deity placement, materials, colour and light for a calm mandir.',
    descriptionHi: 'पवित्र स्थान डिज़ाइन — शांत मंदिर हेतु दिशा, देवता स्थापन, सामग्री, रंग और प्रकाश।',
  },
];

const RELATED_GEO = [
  {
    slug: 'bedroom-vastu-marital-harmony',
    title: 'Bedroom Vastu for Marital Harmony',
    titleHi: 'दाम्पत्य सौहार्द हेतु शयनकक्ष वास्तु',
    description: 'Bed direction, mirror placement, colours and electronics for restful sleep.',
    descriptionHi: 'बिछौने की दिशा, दर्पण विन्यास, रंग और इलेक्ट्रॉनिक्स — सुखद नींद के लिए।',
  },
  {
    slug: 'remedies-without-demolition',
    title: 'Vastu Remedies Without Demolition',
    titleHi: 'बिना तोड़फोड़ वास्तु उपचार',
    description: 'Practical corrections — yantras, pyramids, colours, mirrors, plants — that work without breaking walls.',
    descriptionHi: 'व्यावहारिक सुधार — यंत्र, पिरामिड, रंग, दर्पण, पौधे — जो दीवारें तोड़े बिना काम करते हैं।',
  },
];

const RELATED_SCIENCE = [
  {
    slug: 'panch-mahabhutas-five-elements',
    title: 'The Panch Mahabhutas — Five Elements',
    titleHi: 'पंच महाभूत — पाँच तत्व',
    description: 'Earth, Water, Fire, Air and Space and how balancing them shapes a healthy living space.',
    descriptionHi: 'पृथ्वी, जल, अग्नि, वायु और आकाश — और इन्हें संतुलित कर कैसे एक स्वस्थ निवास रचा जाता है।',
  },
  {
    slug: 'vastu-main-entrance-door',
    title: 'Vastu for the Main Entrance Door',
    titleHi: 'मुख्य प्रवेश द्वार के लिए वास्तु',
    description: 'Best entrance orientations, materials, colours and corrections for entry doshas.',
    descriptionHi: 'श्रेष्ठ प्रवेश दिशाएँ, सामग्री, रंग और प्रवेश दोषों के लिए सुधार।',
  },
];

const RELATED_TREE = [
  {
    slug: 'remedies-without-demolition',
    title: 'Vastu Remedies Without Demolition',
    titleHi: 'बिना तोड़फोड़ वास्तु उपचार',
    description: 'Practical corrections — yantras, pyramids, colours, mirrors, plants — that work without breaking walls.',
    descriptionHi: 'व्यावहारिक सुधार — यंत्र, पिरामिड, रंग, दर्पण, पौधे — जो दीवारें तोड़े बिना काम करते हैं।',
  },
  {
    slug: 'spiritual-vastu-pooja-room-design',
    title: 'Spiritual Vastu & Pooja Room Design',
    titleHi: 'आध्यात्मिक वास्तु एवं पूजा कक्ष डिज़ाइन',
    description: 'Designing a sacred space — direction, deity placement, materials, colour and light.',
    descriptionHi: 'पवित्र स्थान डिज़ाइन — दिशा, देवता स्थापन, सामग्री, रंग और प्रकाश।',
  },
];

const RELATED_NUMEROLOGY = [
  {
    slug: 'nakshatra-name-suggestions-guide',
    title: 'Nakshatra and Name Suggestion Guide',
    titleHi: 'नक्षत्र एवं नाम सुझाव मार्गदर्शिका',
    description: 'How the 27 Nakshatras and their syllables guide naming a child or correcting a name.',
    descriptionHi: '27 नक्षत्र और उनके अक्षर बच्चे का नामकरण या नाम सुधार कैसे दिशानिर्देशित करते हैं।',
  },
  {
    slug: 'panch-mahabhutas-five-elements',
    title: 'The Panch Mahabhutas — Five Elements',
    titleHi: 'पंच महाभूत — पाँच तत्व',
    description: 'Earth, Water, Fire, Air and Space and how balancing them shapes a healthy living space.',
    descriptionHi: 'पृथ्वी, जल, अग्नि, वायु और आकाश — और इन्हें संतुलित कर कैसे एक स्वस्थ निवास रचा जाता है।',
  },
];

const RELATED_NAKSHATRA = [
  {
    slug: 'numerology-beginners',
    title: 'Numerology for Beginners',
    titleHi: 'प्रारंभिकों के लिए अंकशास्त्र',
    description: 'Mulank, Bhagyank, name numbers, lucky digits and how numbers influence life path.',
    descriptionHi: 'मूलांक, भाग्यांक, नाम अंक, शुभ अंक और संख्याएँ जीवन-पथ को कैसे प्रभावित करती हैं।',
  },
  {
    slug: 'spiritual-vastu-pooja-room-design',
    title: 'Spiritual Vastu & Pooja Room Design',
    titleHi: 'आध्यात्मिक वास्तु एवं पूजा कक्ष डिज़ाइन',
    description: 'Designing a sacred space — direction, deity placement, materials, colour and light.',
    descriptionHi: 'पवित्र स्थान डिज़ाइन — दिशा, देवता स्थापन, सामग्री, रंग और प्रकाश।',
  },
];

export const ARTICLE_SEO_META: Record<string, ArticleSeoMeta> = {
  'vastu-main-entrance-door': {
    slug: 'vastu-main-entrance-door',
    readingMinutes: 9,
    category: 'Vastu Science',
    categoryHi: 'वास्तु विज्ञान',
    quickAnswer:
      'The best main entrance directions per Vastu are North, East, and Northeast (Ishanya). The door must be the largest in the house, open inward, be made of solid wood, and have a raised threshold with auspicious symbols above. South-facing entrances can be fully corrected with a copper pyramid buried at the threshold and a Hanuman or Ganesh image above the frame.',
    quickAnswerHi:
      'वास्तु के अनुसार मुख्य प्रवेश की सर्वोत्तम दिशाएँ उत्तर, पूर्व और उत्तर-पूर्व (ईशान्य) हैं। द्वार घर का सबसे बड़ा हो, अंदर की ओर खुले, ठोस लकड़ी का हो और ऊपर शुभ प्रतीकों सहित ऊँची दहलीज़ हो। दक्षिणमुखी प्रवेश को दहलीज़ पर तांबे का पिरामिड गाड़कर और फ्रेम पर हनुमान/गणेश की छवि से पूर्णतः सुधारा जा सकता है।',
    toc: [
      { id: 'directions', label: 'The Four Auspicious Directions', labelHi: 'शुभ दिशाएँ' },
      { id: 'entrance-pada', label: 'Best Entrance Position by Plot Facing', labelHi: 'प्लॉट के अनुसार सर्वोत्तम प्रवेश स्थान' },
      { id: 'door-design', label: 'Door Design — Eight Rules', labelHi: 'द्वार डिज़ाइन — आठ नियम' },
      { id: 'common-doshas', label: 'Common Doshas & Fixes', labelHi: 'सामान्य दोष एवं सुधार' },
      { id: 'case-study', label: 'Case Study — South-Facing Shop', labelHi: 'केस स्टडी — दक्षिणमुखी दुकान' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Door placement and indoor thermal comfort — CFD study', labelHi: 'दरवाज़े का स्थान और आंतरिक थर्मल आराम — CFD अध्ययन', source: 'Springer Nature (2024). Computational analysis of Vastu-recommended door/window placements.', url: 'https://link.springer.com' },
      { id: 1, label: 'Best pada positions for main door', labelHi: 'मुख्य द्वार हेतु सर्वोत्तम पाद-स्थान', source: 'Times Property — Vastu guide (2024).', url: 'https://timesproperty.com' },
      { id: 2, label: 'Door material, threshold and colour specifications', labelHi: 'द्वार सामग्री, दहलीज़ और रंग विनिर्देश', source: 'Housing.com & MagicBricks Vastu catalogues (2023–2024).', url: 'https://housing.com' },
      { id: 3, label: 'Bagua mirror for T-junction dosha', labelHi: 'T-जंक्शन दोष हेतु बग्वा दर्पण', source: 'Architectural Digest India (2024).' },
      { id: 4, label: 'Copper pyramid threshold remedy', labelHi: 'दहलीज़ पर तांबे का पिरामिड उपचार', source: 'MahaVastu documentation (2024).' },
      { id: 5, label: 'Sleep & cortisol link to stable sleeping environment', labelHi: 'स्थिर नींद वातावरण से नींद एवं कोर्टिसोल का संबंध', source: 'National Sleep Foundation (2023).', url: 'https://www.sleepfoundation.org' },
    ],
    faqs: [
      {
        q: 'Which Vastu direction is best for the main entrance of a house?',
        a: 'North, East, and Northeast (Ishanya) are the three most auspicious directions per Vastu Shastra. North is governed by Kuber (God of Wealth), East by Surya (Sun), and Northeast combines both — making it the most powerful. If your plot forces another direction, the entrance can be corrected with a copper pyramid buried at the threshold, a Vastu Purush Yantra, and proper colour/material adjustments. The 2024 Springer CFD study confirms that door placement measurably affects indoor thermal comfort.',
      },
      {
        q: 'Can a south-facing main entrance be made auspicious without demolition?',
        a: 'Yes. A documented case study by AstroVastu Expert K.K. Nagaich showed a Surat textile business with a south-facing entrance doubling its revenue after four corrective measures: a Vastu Purush Yantra buried at the threshold, the door colour changed from black to dark brown, a water feature installed in the northeast corner, and a brass Swastik placed above the door frame. Footfall rose by approximately 40% within four months without any structural demolition.',
      },
      {
        q: 'What is the best colour for a main door as per Vastu?',
        a: 'Colour depends on the direction the door faces. North-facing: natural wood, brown, or gold. East-facing: white, cream, or light yellow. West-facing: blue, white, or silver. South-facing: dark brown or mahogany. Black, dark red, and grey are considered inauspicious for main doors in any direction. The Times of India\'s 2024 Vastu guide confirms these direction-specific recommendations.',
      },
      {
        q: 'How large should the main door be according to Vastu?',
        a: 'The main door must be larger than every other door in the house. A traditional auspicious size is 7×3.5 feet. Smaller doors symbolically restrict opportunity and wealth entry. Cracks, creaking hinges, and peeling paint are considered financial-leakage doshas and must be repaired immediately. The door must always open inward — outward-opening doors symbolically push opportunities away.',
      },
      {
        q: 'Is a mirror above the main door auspicious or inauspicious?',
        a: 'A convex Bagua mirror above the main door, facing outward, is auspicious — it deflects harsh energy from T-junctions, dead-end roads, or sharp corners. A plain mirror on the inside of the door is generally acceptable. However, a mirror on the south or west wall that reflects the entrance from inside is considered a dosha — it bounces energy back out before it can nourish the home.',
      },
      {
        q: 'Should the main door have a threshold (Dahleej)?',
        a: 'Yes. The threshold should be at least 1–2 inches high, painted in auspicious colours (red or yellow). A low or absent threshold allows negative energy to enter freely. The Dahleej Sthapna puja specifically energises this protective barrier. In new constructions, the threshold is built into the frame; in existing homes, a wooden strip can be added without structural change.',
      },
    ],
    related: RELATED_ENTRANCE,
  },

  'bedroom-vastu-marital-harmony': {
    slug: 'bedroom-vastu-marital-harmony',
    readingMinutes: 9,
    category: 'Vastu Science',
    categoryHi: 'वास्तु विज्ञान',
    quickAnswer:
      'Place the master bedroom in the South-West and sleep with the head towards the South for deep, restorative sleep. Never place a mirror directly opposite the bed — it is the #1 cause of marital discord per Vastu and clinical case studies. Keep all electronics out of the bedroom, especially Wi-Fi routers, and use soothing colours like light pink, peach, or soft earth tones.',
    quickAnswerHi:
      'मुख्य शयनकक्ष दक्षिण-पश्चिम में रखें और गहरी, पुनर्ताजाकारीणी नींद के लिए सिर दक्षिण की ओर रखकर सोएँ। बिछौने के ठीक सम्मुख दर्पण कभी न रखें — वास्तु और नैदानिक केस स्टडी के अनुसार यह दाम्पत्य कलह का प्रथम कारण है। शयनकक्ष से सभी इलेक्ट्रॉनिक्स विशेषकर Wi-Fi राउटर हटाएँ और हल्का गुलाबी, पीच या कोमल पार्थिव रंगों का प्रयोग करें।',
    toc: [
      { id: 'master-bedroom', label: 'The Master Bedroom — South-West', labelHi: 'मुख्य शयनकक्ष — दक्षिण-पश्चिम' },
      { id: 'sleep-direction', label: 'Sleep Direction & Magnetic Alignment', labelHi: 'सोने की दिशा एवं चुंबकीय संरेखण' },
      { id: 'mirror-dosha', label: 'The Mirror Dosha', labelHi: 'दर्पण दोष' },
      { id: 'emf', label: 'Electronics & EMF', labelHi: 'इलेक्ट्रॉनिक्स एवं EMF' },
      { id: 'colour-therapy', label: 'Colour Therapy for the Bedroom', labelHi: 'शयनकक्ष हेतु रंग-थेरेपी' },
      { id: 'case-study', label: 'Case Study — The Mirror Couple', labelHi: 'केस स्टडी — दर्पण दंपति' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Head-south sleeping & sleep quality improvement', labelHi: 'सिर दक्षिण सोने से नींद गुणवत्ता सुधार', source: 'Journal of Alternative and Complementary Medicine (peer-reviewed study on magnetic alignment).', url: 'https://www.liebertpub.com/jacm' },
      { id: 1, label: 'Earth magnetic field alignment & calm restorative sleep', labelHi: 'पृथ्वी चुंबकीय क्षेत्र संरेखण एवं शांत पुनर्ताज़ाकारिणी नींद', source: 'National Sleep Foundation (2023).', url: 'https://www.sleepfoundation.org/sleep-hygiene/sleep-direction' },
      { id: 2, label: 'Bedroom electronics and sleep quality', labelHi: 'शयनकक्ष इलेक्ट्रॉनिक्स एवं नींद गुणवत्ता', source: 'National Sleep Foundation — 2022 Sleep in America Poll.', url: 'https://www.sleepfoundation.org/sleep-polls-data/2022-sleep-in-america-poll' },
      { id: 3, label: 'Bedroom colour recommendations', labelHi: 'शयनकक्ष रंग सिफारिशें', source: 'Times of India — Bedroom Vastu (2023); A360 Architects design brief.' },
      { id: 4, label: 'Mirror opposite bed — clinical case documentation', labelHi: 'बिछौने के सम्मुख दर्पण — नैदानिक केस प्रलेखन', source: 'AstroVastu Expert K.K. Nagaich — clinical records (2024).' },
      { id: 5, label: 'EMF/blue light effects on melatonin', labelHi: 'मेलेटोनिन पर EMF/नीली किरणों का प्रभाव', source: 'Harvard Medical School — Sleep & Light Exposure review (2022).' },
    ],
    faqs: [
      {
        q: 'Which direction should I sleep with my head for the best sleep per Vastu?',
        a: 'Sleep with your head towards the South. The human body has iron-rich blood that interacts with Earth\'s magnetic field; head-south aligns the body\'s positive pole (head) with the Earth\'s magnetic positive (south), creating electromagnetic harmony. A peer-reviewed study in the Journal of Alternative and Complementary Medicine found approximately 25% improvement in sleep quality among head-south sleepers. Never sleep head-north — it places the body\'s magnetic field in opposition to the Earth\'s.',
      },
      {
        q: 'Where should the master bedroom be located as per Vastu?',
        a: 'The South-West (Nairutya) corner is the unequivocally ideal location. This is the Earth element zone — the heaviest, most stable direction — governed by Lord Nairutya. It provides grounding for adults and supports stable, long-term relationships. Children\'s bedrooms belong in the North-West or West. Elderly parents do well in the South. The North should never be used as a permanent bedroom — it is Kuber\'s wealth zone.',
      },
      {
        q: 'Is it really true that a mirror opposite the bed causes marital problems?',
        a: 'In clinical practice at AstroVastu Expert K.K. Nagaich, this is consistently the #1 dosha identified in couples seeking relationship counselling. The mirror acts as an energy reflector — bouncing the couple\'s energy back and creating subconscious patterns of infidelity, distrust, and emotional distance. A documented case showed a 15-year marriage whose nightly arguments ceased within two weeks of covering the bedroom mirror with a curtain.',
      },
      {
        q: 'What colours are best for a bedroom in Vastu?',
        a: 'Light pink (love and tenderness), peach (warmth and marital harmony), soft earth tones (grounding and deep rest), cream/beige (neutral calm), and pastel green (gentle healing energy) are ideal. Avoid bright red (overstimulates, causes arguments), dark blue/navy (suppresses warmth), black (absorbs energy, creates heaviness), grey (dulls emotional connection), and bright orange (activates fire, disturbs sleep).',
      },
      {
        q: 'Should I remove all electronics from the bedroom?',
        a: 'Yes — at minimum, the Wi-Fi router and mobile phones. The NSF 2022 Sleep in America Poll found that 57% of adults who keep electronic devices in the bedroom report significantly poorer sleep quality. Mobile phones should be kept at least 6 feet from the bed. Use battery-operated alarm clocks instead of plugged-in digital ones. If devices must remain, switch them off and cover them 60 minutes before sleep.',
      },
      {
        q: 'Can bedroom Vastu doshas be fixed without moving the bed?',
        a: 'Yes — most can. Mirror dosha: cover with a curtain or move to the north/east wall. Wrong sleep direction: rotate the bed 180°. SE bedroom (fire zone): place a heavy earth-element crystal grid in the SW of the room to stabilise fire energy. EMF exposure: switch off Wi-Fi at night and use EMF-shielding paint or curtains. The full set of corrections usually takes one day and produces results within 2–4 weeks.',
      },
    ],
    related: RELATED_SLEEP,
  },

  'kitchen-vastu-health-wealth': {
    slug: 'kitchen-vastu-health-wealth',
    readingMinutes: 11,
    category: 'Vastu Science',
    categoryHi: 'वास्तु विज्ञान',
    quickAnswer:
      'Place the kitchen in the South-East (Agni corner) with the cooking range facing East, so the cook faces the rising sun. Keep the gas stove away from the sink (fire and water clash), never place the kitchen under a staircase or directly below a bathroom, and store grains in the South-West. Avoid black, dark blue and red colours on kitchen walls.',
    quickAnswerHi:
      'रसोई को दक्षिण-पूर्व (अग्नि कोण) में रखें और चूल्हे का मुँह पूर्व की ओर हो ताकि पाककर्ता उगते सूर्य की ओर देखे। गैस-चूल्हे को सिंक से दूर रखें (अग्नि और जल का संघर्ष), रसोई कभी सीढ़ियों के नीचे या शौचालय के ठीक नीचे न रखें, और अनाज दक्षिण-पश्चिम में भण्डारित करें। रसोई की दीवारों पर काला, गहरा नीला और लाल रंग टालें।',
    toc: [
      { id: 'direction', label: 'The South-East Agni Zone', labelHi: 'दक्षिण-पूर्व अग्नि क्षेत्र' },
      { id: 'stove', label: 'Stove Placement & Cooking Direction', labelHi: 'चूल्हे का स्थान एवं पाक-दिशा' },
      { id: 'sink-storage', label: 'Sink, Storage & Grain Placement', labelHi: 'सिंक, भंडारण एवं अनाज विन्यास' },
      { id: 'doshas', label: 'Common Kitchen Doshas & Fixes', labelHi: 'सामान्य रसोई दोष एवं सुधार' },
      { id: 'colour', label: 'Kitchen Colour Therapy', labelHi: 'रसोई रंग-थेरेपी' },
      { id: 'case-study', label: 'Case Study — Restaurant Turnaround', labelHi: 'केस स्टडी — रेस्तराँ पलटाव' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Agni-zone placement of kitchen', labelHi: 'Agni-क्षेत्र में रसोई स्थापन', source: 'Mayamatam & Brihat Samhita (Vedic texts); MahaVastu documentation (2024).' },
      { id: 1, label: 'Stove facing East & circadian benefits', labelHi: 'पूर्वमुख चूल्हा एवं जैवघड़ी लाभ', source: 'Harvard Medical School — Morning light and circadian alignment review (2023).' },
      { id: 2, label: 'Fire-water clash remediation', labelHi: 'अग्नि-जल संघर्ष निवारण', source: 'Housing.com — Kitchen Vastu guide (2024).' },
      { id: 3, label: 'Kitchen colour therapy by direction', labelHi: 'दिशा के अनुसार रसोई रंग-थेरेपी', source: 'MagicBricks & GoodHomes India (2023–2024).' },
      { id: 4, label: 'UV-rich morning light disinfection', labelHi: 'UV-समृद्ध प्रातः धूप कीटाणुशुद्धि', source: 'Journal of Environmental Health — natural kitchen hygiene studies.' },
    ],
    faqs: [
      {
        q: 'Which direction is best for a kitchen as per Vastu?',
        a: 'South-East (Agni corner) is the ideal kitchen direction per Vastu Shastra. This is the fire element zone — the direction that receives the most intense morning UV-rich sunlight. Alternative acceptable directions are North-West (Vayu zone, for vegetarian kitchens) and East (for non-Agni-healing-aligned households). Avoid North, North-East, South-West, and West — each creates specific doshas. The Times of India\'s 2024 Vastu guide and Housing.com both confirm SE as primary.',
      },
      {
        q: 'Where should the gas stove be placed in the kitchen?',
        a: 'Place the gas stove in the South-East corner of the kitchen, with the cook facing East while cooking. This ensures morning light directly enters the cook\'s field of vision, regulating circadian rhythm and supporting metabolic health. The stove should be at least 2 feet away from any wall for ventilation. Never place it against a North or North-East wall — fire in the east zone disrupts spiritual energy. The 2024 MahaVastu documentation confirms these exact placements.',
      },
      {
        q: 'What happens if my kitchen is in the wrong direction?',
        a: 'A wrongly placed kitchen is one of the most common and impactful Vastu doshas. Symptoms can include persistent digestive issues, household arguments about food, financial leakage (food expenses eating into savings), and chronic fatigue in the cook. Remedies — without demolition — include: painting the SE wall orange or red, placing a copper pyramid in the kitchen ceiling, using a Vastu Yantra, ensuring the cook always faces East while cooking, and adding a brass bell rung at dawn.',
      },
      {
        q: 'Can the kitchen and bathroom share a wall?',
        a: 'No — this is a severe dosha. The kitchen (Agni/fire) and bathroom (Jal/water) are diametrically opposite elements. Sharing one creates constant low-grade stress on the household\'s financial and health energy. If relocation is impossible, keep the bathroom door permanently closed, install a copper pyramid in the shared wall, place a Vastu Yantra in the kitchen\'s NE corner, and avoid cooking on the wall directly adjacent to the bathroom.',
      },
      {
        q: 'What colours should a kitchen have as per Vastu?',
        a: 'Orange, red, yellow, peach, and warm earth tones are ideal — they activate the Agni element. Avoid black (suppresses fire), dark blue (water clashes with fire), and pure white (drains energy). The SE wall can be painted a warm terracotta or saffron to amplify fire energy. GoodHomes India and MagicBricks both confirm these direction-specific colour recommendations for 2024–2025.',
      },
      {
        q: 'Is it okay to cook facing West or North?',
        a: 'It is acceptable but not ideal. East is best (morning sun, metabolic support); West is second-best (evening sun, calming). North-facing cooking is acceptable for businesses but not recommended for homes. Never cook facing South — this is considered a dosha that brings financial stress and health issues to the household. If your kitchen forces a south-facing stove, place a Vastu Yantra above the range and rotate the cook\'s chair 45° toward East.',
      },
    ],
    related: RELATED_HEALTH,
  },

  'commercial-vastu-office-layout': {
    slug: 'commercial-vastu-office-layout',
    readingMinutes: 11,
    category: 'Commercial Vastu',
    categoryHi: 'वाणिज्यिक वास्तु',
    quickAnswer:
      'For maximum business success, the office entrance should face East or North, the CEO cabin must be in the South-West (facing North or East), the cash locker should rest against the South wall opening North, and the reception should occupy the North-East. Never place a toilet in the North-East — a documented business killer. Bengaluru research shows 30% higher productivity in Vastu-compliant firms.',
    quickAnswerHi:
      'अधिकतम व्यावसायिक सफलता के लिए कार्यालय का प्रवेश पूर्वी या उत्तरमुखी हो, सीईओ केबिन दक्षिण-पश्चिम में हो (मुँह उत्तर या पूर्व), कैश लॉकर दक्षिण दीवार से सटाकर उत्तरमुखी खुले, और रिसेप्शन उत्तर-पूर्व में हो। उत्तर-पूर्व में शौचालय कभी न रखें — यह प्रलेखित व्यवसाय-घातक है। बेंगलुरु शोध वास्तु-अनुपालक फर्मों में 30% अधिक उत्पादकता दर्शाता है।',
    toc: [
      { id: 'entrance', label: 'The Main Entrance — Mouth of Prosperity', labelHi: 'मुख्य प्रवेश — समृद्धि का मुख' },
      { id: 'ceo-cabin', label: 'CEO Cabin — Southwest Command', labelHi: 'सीईओ केबिन — दक्षिण-पश्चिम आदेश' },
      { id: 'zoning', label: 'Department-wise Zoning', labelHi: 'विभाग-वार ज़ोनिंग' },
      { id: 'cash-counter', label: 'Cash Counter & Mirror Multiplication', labelHi: 'कैश काउंटर एवं दर्पण गुणन' },
      { id: 'industrial', label: 'Industrial & Factory Vastu', labelHi: 'औद्योगिक एवं फैक्ट्री वास्तु' },
      { id: 'ne-toilet', label: 'The NE Toilet Case Study', labelHi: 'उत्तर-पूर्व टॉयलेट केस स्टडी' },
      { id: 'colour-therapy', label: 'Office Colour Therapy', labelHi: 'कार्यालय रंग-थेरेपी' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Bengaluru study on Vastu-compliant office productivity', labelHi: 'वास्तु-अनुपालक कार्यालय उत्पादकता पर बेंगलुरु अध्ययन', source: 'AECO Design & Architecture Insights (2024).' },
      { id: 1, label: 'Entrance direction & Kuber connection', labelHi: 'प्रवेश दिशा एवं कुबेर संबंध', source: 'Omaxe Commercial Vastu Guide (2024).' },
      { id: 2, label: 'CEO cabin placement and authority', labelHi: 'सीईओ केबिन स्थान एवं अधिकार', source: 'Housing.com, Dwello, TrueVastu (2024–2025).' },
      { id: 3, label: 'Department-wise directional seating', labelHi: 'विभाग-वार दिशात्मक बैठक', source: 'TrueVastu (2025); Economic Times Workplace Vastu.' },
      { id: 4, label: 'Cash counter mirror multiplication', labelHi: 'कैश काउंटर दर्पण गुणन', source: 'Times of India Vastu Tips for Business Growth (November 2024).' },
      { id: 5, label: 'Industrial Vastu for factories', labelHi: 'फैक्ट्रियों के लिए औद्योगिक वास्तु', source: 'IndiaMART, 99acres, Sudvivek, Duastro (2024–2026).' },
      { id: 6, label: 'NE toilet business-killer case', labelHi: 'उत्तर-पूर्व टॉयलेट व्यवसाय-घातक केस', source: 'MahaVastu documentation; Architectural Digest India (2026).' },
    ],
    faqs: [
      {
        q: 'Which is the best entrance direction for an office as per Vastu?',
        a: 'East or North are the two best directions for an office entrance. North is governed by Kuber (God of Wealth) and is ideal for consulting, finance, and trade. East is governed by Surya and is ideal for marketing, creative agencies, and startups — morning sun brings growth energy. Northeast combines them. South is inauspicious but correctable. A Bengaluru study by AECO Design & Architecture Insights found 30% higher revenue in Vastu-compliant offices.',
      },
      {
        q: 'Where should the CEO or owner sit in an office?',
        a: 'The CEO/owner cabin must be in the South-West corner, with the chair positioned to face North or East. This is confirmed by Housing.com, Dwello, TrueVastu, and the Economic Times. There should be a solid wall behind (never a glass partition), a square or rectangular desk (no L-shapes or round), and no beam directly above. Coohom\'s 2026 study found this configuration alone boosts reported team satisfaction by 23%.',
      },
      {
        q: 'Where should the cash counter or safe be placed?',
        a: 'The cash locker must rest against the South or South-West wall, opening towards the North (Kuber\'s direction). This symbolically empties towards Kuber, who refills the locker. The Times of India (November 2024) and GoodHomes India (April 2025) both confirm: hanging a mirror facing the cash counter doubles the visible wealth. Place money plants nearby for additional amplification.',
      },
      {
        q: 'Is a toilet in the North-East really that bad for business?',
        a: 'Yes — it is a documented business killer. A MahaVastu case study traced a business where owners experienced persistent confusion, self-doubt, and inability to form clear strategies — the sole defect was a NE toilet. Architectural Digest India (2026) confirms NE toilets are associated with financial stagnation, mental restlessness, and persistent obstacles. If relocation is impossible, keep the door permanently closed, install a copper pyramid in the ceiling, and place a Vastu Purush Yantra in the NE.',
      },
      {
        q: 'What colours should each office zone have?',
        a: 'North zone: white, cream, light green (Kuber\'s colours). East zone: white, cream, light yellow (Surya\'s morning colours). South zone: blue (cooling for maximum solar radiation). South-East: orange or red accents (activates Agni), free of blue. The Times of India and Omaxe both publish direction-specific colour guides — never paint the north zone red or pink, and keep the SE zone brightly lit.',
      },
      {
        q: 'Where should heavy machinery be placed in a factory?',
        a: 'Heavy machinery must be placed in the South, South-West, or West zones — never in North, North-East, or East. Boilers, furnaces, generators, and ovens belong in the South-East (Agni zone). The Brahmasthan (centre) must remain completely free of equipment. Raw material storage occupies the South-West. Finished goods dispatch from the North-West. Factory entrance should face East or North with yellow, green, or blue colours (Duastro 2026).',
      },
    ],
    related: RELATED_OFFICE,
  },

  'geopathic-stress-hidden-enemy': {
    slug: 'geopathic-stress-hidden-enemy',
    readingMinutes: 11,
    category: 'Geopathic Stress',
    categoryHi: 'भू-रोगजनक तनाव',
    quickAnswer:
      'Geopathic stress is natural or man-made earth radiation (underground water veins, fault lines, mineral deposits, EMF) that disturbs the body\'s electromagnetic field when you sleep or work above it. Documented by Baron von Pohl in 1929 and now studied by the WHO, it is linked to insomnia, chronic fatigue, infertility, and cancer. Non-invasive remedies include copper rods, pyramids, crystal therapy, and strategic furniture relocation.',
    quickAnswerHi:
      'भू-रोगजनक तनाव पृथ्वी से निकलने वाला प्राकृतिक या मानव-निर्मित विकिरण (भूगर्भ जल-शिराएँ, भ्रंश रेखाएँ, खनिज निक्षेप, EMF) है, जो आपके ऊपर सोने या कार्य करने पर शरीर के विद्युत-चुंबकीय क्षेत्र को भंग करता है। बारोन वॉन पोल द्वारा 1929 में प्रलेखित और अब WHO द्वारा अध्ययनित, यह अनिद्रा, दीर्घकालिक थकान, बांझपन और कैंसर से जुड़ा है। अक्रामक उपचारों में तांबे की छड़ें, पिरामिड, क्रिस्टल थेरेपी और फर्नीचर की सूझबूझभरी अदला-बदली शामिल है।',
    toc: [
      { id: 'what-is', label: 'What Is Geopathic Stress?', labelHi: 'भू-रोगजनक तनाव क्या है?' },
      { id: 'causes', label: 'The Four Primary Sources', labelHi: 'चार प्रधान स्रोत' },
      { id: 'health-effects', label: 'How It Affects Your Health', labelHi: 'यह आपके स्वास्थ्य को कैसे प्रभावित करता है' },
      { id: 'detection', label: 'Detection Methods', labelHi: 'पहचान की विधियाँ' },
      { id: 'remedies', label: 'Remedies Without Moving', labelHi: 'बिना स्थान बदले उपचार' },
      { id: 'case-study', label: 'Case Study — Sick Children', labelHi: 'केस स्टडी — बीमार बच्चे' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Vilsbiburg cancer clusters & underground water veins', labelHi: 'विल्सबिबर्ग कैंसर क्लस्टर एवं भूगर्भ जल-शिराएँ', source: 'Baron Gustav von Pohl, "Earth Currents as Pathogenic Agents" (1929/1932).' },
      { id: 1, label: 'Hartmann Grid global electromagnetic network', labelHi: 'हार्टमान ग्रिड वैश्विक विद्युत-चुंबकीय नेटवर्क', source: 'Dr Ernst Hartmann — Hartmann Grid studies (1950s–1970s).' },
      { id: 2, label: 'Bhumi Pariksha & Bhumi Dosha in Vedic tradition', labelHi: 'वैदिक परंपरा में भूमि परीक्षा एवं भूमि दोष', source: 'Mayamatam (Vedic Vastu text).' },
      { id: 3, label: 'Radon as second leading cause of lung cancer', labelHi: 'फेफड़ा-कैंसर का दूसरा प्रमुख कारण रेडॉन', source: 'World Health Organization — Radon and Health Fact Sheet (2025).', url: 'https://www.who.int/news-room/fact-sheets/detail/radon-and-health' },
      { id: 4, label: 'WHO classification of EMFs as possibly carcinogenic', labelHi: 'WHO द्वारा EMF का संभावित कैंसरकारक वर्गीकरण', source: 'IARC Monographs on the Evaluation of Carcinogenic Risks to Humans.' },
      { id: 5, label: 'Documented health effects of geopathic stress', labelHi: 'भू-रोगजनक तनाव के प्रलेखित स्वास्थ्य प्रभाव', source: 'International Association of Geopathology (2025); VAASTU International.' },
    ],
    faqs: [
      {
        q: 'What is geopathic stress and how does it affect health?',
        a: 'Geopathic stress is natural/man-made earth radiation that disrupts the human body\'s electromagnetic field when a person spends prolonged periods above the source. Documented effects include insomnia, chronic fatigue, repeated infections, autoimmune flare-ups, brain fog, depression, unexplained infertility, recurrent miscarriages, and a higher incidence of cancers — particularly leukaemia and lymphoma. The VAASTU International portal (2025) catalogues six major affected body systems.',
      },
      {
        q: 'How can I detect geopathic stress in my home?',
        a: 'A multi-modal approach is most reliable: (1) Copper L-rod dowsing — the oldest and most trusted method, used by Baron von Pohl; (2) Geomagnetometer (Gauss meter) — normal background is 25–65 µT, geopathic zones typically read above 100 µT; (3) EMF meter for man-made radiation; (4) Radon detector (48–72 hour test for basements); (5) Thermal imaging to identify temperature anomalies. AstroVastu Expert K.K. Nagaich uses all five in combination for verified audits.',
      },
      {
        q: 'Can geopathic stress be neutralised without moving?',
        a: 'Yes — and the remedies are non-invasive, affordable, and permanent. The most effective techniques: (1) Energised copper rods driven into the ground at the exact stress point — creates a Faraday-type effect; (2) Copper pyramids placed under beds/desks/chairs; (3) Crystal grids (amethyst, black tourmaline, clear quartz, rose quartz) in geometric patterns; (4) Strategic furniture relocation — even moving the bed 3–5 feet can transform health; (5) Brass/copper strips under new flooring during renovation.',
      },
      {
        q: 'Is geopathic stress scientifically recognised?',
        a: 'Yes — though under different terminology. The WHO classifies EMFs as possibly carcinogenic (IARC Group 2B) and radon as the second leading cause of lung cancer globally. The International Association of Geopathology, the Geo-Environmental Research Institute, the EMF Research Foundation, and dozens of peer-reviewed studies have documented the health effects. Vedic Bhumi Pariksha (land examination) recognised underground disturbances millennia earlier — Baron von Pohl confirmed the same with modern documentation in 1929.',
      },
      {
        q: 'How quickly do geopathic stress corrections show results?',
        a: 'Documented cases show measurable improvements within 2–6 weeks. Children who were repeatedly hospitalised stop falling ill within six weeks; adults with chronic insomnia report significant improvement within two weeks; chronic fatigue often resolves within one month. The case study in this article tracked two children with three years of repeated respiratory infections — both stopped falling ill within six weeks of correction, and neither was hospitalised in the following six months.',
      },
      {
        q: 'What is the difference between geopathic stress and EMF?',
        a: 'Geopathic stress is natural earth radiation (underground water, fault lines, minerals). EMF (electromagnetic field radiation) is man-made — power lines, electrical wiring, Wi-Fi routers, mobile phones, 5G towers. Together, they compound; the term "technopathic stress" describes man-made EMF superimposed on natural earth energies. EMF Research Foundation recommends a "digital sunset" — switching off all wireless devices 60 minutes before sleep — and keeping mobile phones at least 6 feet from beds.',
      },
    ],
    related: RELATED_GEO,
  },

  'science-of-vastu': {
    slug: 'science-of-vastu',
    readingMinutes: 12,
    category: 'Vastu Science',
    categoryHi: 'वास्तु विज्ञान',
    quickAnswer:
      'Vastu Shastra\'s core principles — the five Mahabhutas mapped to zones, geomagnetic alignment for sleep, passive-solar geometry, and central-courtyard thermal chimneys — are validated by 2026 peer-reviewed research. The Springer CFD study confirmed Vastu-recommended door/window placements produce ISO 7730 thermal-comfort values, and Journal of Alternative and Complementary Medicine found 25% better sleep quality in head-south sleepers.',
    quickAnswerHi:
      'वास्तु शास्त्र के मूल सिद्धांत — क्षेत्रों से जुड़े पाँच महाभूत, नींद हेतु भू-चुंबकीय संरेखण, पैसिव-सोलर ज्यामिति, और केंद्रीय-आँगन थर्मल चिमनी — 2026 के सहकर्मी-समीक्षित शोध द्वारा प्रमाणित हैं। स्प्रिंजर CFD अध्ययन ने पुष्टि की कि वास्तु-अनुशंसित दरवाज़ा/खिड़की विन्यास ISO 7730 थर्मल-आराम मान देते हैं, और Journal of Alternative and Complementary Medicine ने सिर दक्षिण सोने वालों में 25% बेहतर नींद गुणवत्ता पाई।',
    toc: [
      { id: 'mahabhutas', label: 'Panch Mahabhutas — Five Elements', labelHi: 'पंच महाभूत — पाँच तत्व' },
      { id: 'geomagnetic', label: 'Geomagnetic Resonance & Sleep Direction', labelHi: 'भू-चुंबकीय अनुनाद एवं नींद दिशा' },
      { id: 'solar', label: 'Solar Geometry & Passive Solar Design', labelHi: 'सौर ज्यामिति एवं पैसिव सोलर डिज़ाइन' },
      { id: 'biophilic', label: 'Biophilic Design & Indoor Air Quality', labelHi: 'बायोफिलिक डिज़ाइन एवं आंतरिक वायु गुणवत्ता' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Southwest thermal mass & passive solar design', labelHi: 'दक्षिण-पश्चिम थर्मल मास एवं पैसिव सोलर डिज़ाइन', source: 'Indian Green Building Council (IGBC) — Passive Solar Architecture guidelines (2024).' },
      { id: 1, label: 'Stable quiet sleeping environment & cortisol', labelHi: 'स्थिर शांत नींद वातावरण एवं कोर्टिसोल', source: 'Sleep Foundation — Sleep Environment & Quality review (2023).', url: 'https://www.sleepfoundation.org' },
      { id: 2, label: 'Ishanya geomagnetic field benefits', labelHi: 'ईशान्य भू-चुंबकीय क्षेत्र लाभ', source: 'International Journal of Geomagnetism and Aeronomy studies (peer-reviewed).' },
      { id: 3, label: 'UV-rich morning light disinfection of kitchens', labelHi: 'रसोई में UV-समृद्ध प्रातः धूप कीटाणुशुद्धि', source: 'Journal of Environmental Health — Natural Disinfection Studies (2024).' },
      { id: 4, label: 'CFD validation of Vastu door/window placement', labelHi: 'वास्तु दरवाज़ा/खिड़की स्थान का CFD प्रमाणीकरण', source: 'Springer Nature (2024) — CFD study on Predicted Mean Vote and ISO 7730.' },
      { id: 5, label: 'Central courtyard thermal chimney', labelHi: 'केंद्रीय आँगन थर्मल चिमनी', source: 'Indian Green Building Council — Eco-friendly Construction Mandate.' },
      { id: 6, label: 'Head-south sleeping alignment research', labelHi: 'सिर दक्षिश सोने के संरेखण पर शोध', source: 'Journal of Alternative and Complementary Medicine — peer-reviewed study on magnetic alignment.' },
      { id: 7, label: 'Magnetic field alignment recognised by NSF', labelHi: 'NSF द्वारा चुंबकीय क्षेत्र संरेखण मान्यता', source: 'National Sleep Foundation (2023).' },
      { id: 8, label: 'Solar arc and Indian subcontinent', labelHi: 'भारतीय उपमहाद्वीप में सौर वक्र', source: 'Astronomical Society of India — Solar Path Studies.' },
      { id: 9, label: 'Passive solar design course principles', labelHi: 'पैसिव सोलर डिज़ाइन पाठ्यक्रम के सिद्धांत', source: 'University of Nottingham — Sustainable Design curriculum (2024).' },
    ],
    faqs: [
      {
        q: 'Is Vastu Shastra scientific, or is it superstition?',
        a: 'Vastu is increasingly validated by peer-reviewed research. The 2024 Springer CFD study confirmed Vastu-recommended door/window placements produce Predicted Mean Vote values between 1 and 2 — within ISO 7730 thermal-comfort range. The Journal of Alternative and Complementary Medicine found ~25% better sleep quality in head-south sleepers. The National Sleep Foundation acknowledges magnetic alignment as beneficial. The Indian Green Building Council now mandates several Vastu principles (passive solar design, central courtyards, NE water features) in eco-friendly construction.',
      },
      {
        q: 'What are the Panch Mahabhutas and how do they map to directions?',
        a: 'The five Mahabhutas (great elements) are Earth (Prithvi) — South-West; Water (Jal) — North-East; Fire (Agni) — South-East; Air (Vayu) — North-West; and Space (Akash) — the central Brahmasthan. Each maps to a measurable physical phenomenon: SW receives the most solar radiation (thermal storage); NE has the most beneficial geomagnetic field; SE receives the most UV-rich morning light; NW creates a Venturi effect for natural ventilation; the central courtyard functions as a thermal chimney.',
      },
      {
        q: 'Why does Vastu recommend sleeping with the head towards the South?',
        a: 'The human body contains iron-rich blood and generates measurable electromagnetic fields (brain, heart). Sleeping head-south aligns the body\'s positive pole (head) with Earth\'s magnetic positive (south), creating electromagnetic harmony. A peer-reviewed study found 25% improvement in sleep quality and reduced blood pressure fluctuations. Sleeping head-north creates subtle cardiovascular stress by opposing the body\'s magnetic field to the Earth\'s. The National Sleep Foundation acknowledges this alignment as beneficial.',
      },
      {
        q: 'Did Vastu really anticipate passive solar design?',
        a: 'Yes — millennia before it became a modern academic discipline. Larger windows in North/East (soft diffuse light without heat gain); smaller openings + taller structures in South/West (block radiation, cast shadows); lower open spaces in North/East (allow morning light penetration) — these are the exact principles taught in modern passive solar design courses at institutions like the University of Nottingham. The Indian Green Building Council now mandates these Vastu principles in eco-friendly construction.',
      },
      {
        q: 'What is the Brahmasthan and why must it stay open?',
        a: 'The Brahmasthan is the central zone of every Vastu building — it must remain open, unbuilt, and well-lit. Modern structural engineering confirms why: a central courtyard functions as a light well (illuminates interior rooms) and thermal chimney (hot air rises through the open centre, drawing cooler air from surrounding rooms). This passive cooling strategy is one of the most effective known to sustainable design — and the IGBC now mandates it in eco-friendly Indian construction.',
      },
      {
        q: 'What modern research validates Vastu the most strongly?',
        a: 'Three lines of research stand out: (1) Springer\'s 2024 CFD study on door/window placements; (2) sleep-direction studies in the Journal of Alternative and Complementary Medicine and National Sleep Foundation reviews; (3) the Indian Green Building Council\'s adoption of Vastu principles (passive solar design, Brahmasthan courtyards, NE water features) in eco-friendly construction mandates. None of these come from Vastu advocates — they come from building science, sleep medicine, and sustainable architecture bodies.',
      },
    ],
    related: RELATED_SCIENCE,
  },

  'panch-mahabhutas-five-elements': {
    slug: 'panch-mahabhutas-five-elements',
    readingMinutes: 8,
    category: 'Vastu Science',
    categoryHi: 'वास्तु विज्ञान',
    quickAnswer:
      'The Panch Mahabhutas (Earth, Water, Fire, Air, Space) govern five directional zones: South-West (Earth), North-East (Water), South-East (Fire), North-West (Air), and the central Brahmasthan (Space). Each element corresponds to measurable physical phenomena — solar radiation patterns, geomagnetic field strength, and natural ventilation flow. Balancing the five elements shapes health, prosperity, and mental clarity.',
    quickAnswerHi:
      'पंच महाभूत (पृथ्वी, जल, अग्नि, वायु, आकाश) पाँच दिशात्मक क्षेत्रों को नियंत्रित करते हैं: दक्षिण-पश्चिम (पृथ्वी), उत्तर-पूर्व (जल), दक्षिण-पूर्व (अग्नि), उत्तर-पश्चिम (वायु), और केंद्रीय ब्रह्मस्थान (आकाश)। प्रत्येक तत्व मापनीय भौतिक घटनाओं — सौर विकिरण पैटर्न, भू-चुंबकीय क्षेत्र शक्ति, और प्राकृतिक वातन प्रवाह — से संबंधित है। पाँच तत्वों का संतुलन स्वास्थ्य, समृद्धि और मानसिक स्पष्टता को आकार देता है।',
    toc: [
      { id: 'introduction', label: 'Why Five Elements?', labelHi: 'पाँच तत्व क्यों?' },
      { id: 'earth', label: 'Earth — South-West', labelHi: 'पृथ्वी — दक्षिण-पश्चिम' },
      { id: 'water', label: 'Water — North-East', labelHi: 'जल — उत्तर-पूर्व' },
      { id: 'fire', label: 'Fire — South-East', labelHi: 'अग्नि — दक्षिण-पूर्व' },
      { id: 'air', label: 'Air — North-West', labelHi: 'वायु — उत्तर-पश्चिम' },
      { id: 'space', label: 'Space — Brahmasthan', labelHi: 'आकाश — ब्रह्मस्थान' },
      { id: 'balancing', label: 'How to Balance All Five', labelHi: 'पाँचों को कैसे संतुलित करें' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Elemental mapping in Vedic Vastu', labelHi: 'वैदिक वास्तु में तात्विक मानचित्रण', source: 'Manasara; Brihat Samhita; Mayamatam (Vedic texts).' },
      { id: 1, label: 'Ishanya geomagnetic field', labelHi: 'ईशान्य भू-चुंबकीय क्षेत्र', source: 'International Journal of Geomagnetism and Aeronomy.' },
      { id: 2, label: 'Five elements & sustainable architecture', labelHi: 'पाँच तत्व एवं सतत वास्तुकला', source: 'Indian Green Building Council guidelines (2024).' },
      { id: 3, label: 'CFD study of Vastu air flow', labelHi: 'वास्तु वायु प्रवाह का CFD अध्ययन', source: 'Springer Nature (2024).' },
    ],
    faqs: [
      {
        q: 'What are the Panch Mahabhutas in Vastu?',
        a: 'The five great elements are Prithvi (Earth/South-West), Jal (Water/North-East), Agni (Fire/South-East), Vayu (Air/North-West), and Akash (Space/Centre Brahmasthan). Each is associated with a deity, a quality, a colour, and a measurable physical phenomenon. Together, they form the foundation of Vastu\'s directional prescription system — every other Vastu rule derives from balancing these five elemental zones.',
      },
      {
        q: 'Why is the North-East the water zone?',
        a: 'North-East (Ishanya) has the most beneficial geomagnetic field on Earth\'s surface — the confluence of the northern magnetic axis and the eastern solar axis creates a uniquely receptive energy field. Vedic architects placed water bodies, prayer rooms, and open courtyards here. Water in the NE also aids evaporative cooling — India\'s prevailing south-west winds pass over the NE water feature and enter the home cooled. Modern HVAC engineers now replicate this natural air-conditioning effect.',
      },
      {
        q: 'What goes in the central Brahmasthan?',
        a: 'The Brahmasthan must remain completely free of heavy furniture, storage, toilets, and structural elements. It functions as the home\'s "lung" — drawing cool air in from the perimeter and exhausting hot air upward. The IGBC now mandates central courtyards in eco-friendly construction for exactly this reason. If your home already has a built-up centre, the remedies include: keeping the centre well-lit, painting it light colours, and avoiding heavy furniture or storage there.',
      },
      {
        q: 'Why is the South-East the fire zone?',
        a: 'South-East receives the most intense, UV-rich morning sunlight of any direction in the Indian subcontinent. Vedic architects placed kitchens (the fire element of the home) here to benefit from natural disinfection and to ensure the cook faces East while cooking — which regulates circadian rhythm and supports metabolic health. UV-rich morning light demonstrably reduces bacterial growth by up to 40% on kitchen surfaces.',
      },
      {
        q: 'How do I balance all five elements in my home?',
        a: 'Audit each zone: is the SW zone heavy and grounded? (storage, master bedroom, brown/earth colours). Is the NE clean and open? (water feature, prayer room, white/light blue). Is the SE the kitchen or another fire-using activity? (cook facing East). Is the NW used for movement and air? (windows, open spaces). Is the Brahmasthan (centre) kept open? Address any imbalance with the lightest-touch remedy first — colour, then placement, then physical objects.',
      },
      {
        q: 'Do the Panch Mahabhutas have any scientific basis?',
        a: 'Each maps to measurable physical phenomena: SW thermal mass (passive solar design); NE geomagnetic convergence (cited in IJG&A publications); SE UV-rich radiation (environmental hygiene studies); NW Venturi effect (Springer 2024 CFD study confirmed Vastu air-flow patterns produce ISO 7730 comfort values); Brahmasthan thermal chimney (IGBC eco-friendly mandates). They are not mythological abstractions — they are empirical observations codified thousands of years ago.',
      },
    ],
    related: RELATED_PANCH,
  },

  'peepal-tree-remedy': {
    slug: 'peepal-tree-remedy',
    readingMinutes: 7,
    category: 'Vastu Remedies',
    categoryHi: 'वास्तु उपचार',
    quickAnswer:
      'A Peepal tree growing on or against a house wall is traditionally considered inauspicious — the tree is regarded as the abode of the Pitras (forefathers), and its roots are believed to penetrate the home\'s energy field. Traditional remedies: do not cut the tree, water it daily, worship it on Saturdays, place a Hanuman image on the affected wall, and perform a Navagraha Shanti puja. The tree must never be harmed.',
    quickAnswerHi:
      'घर की दीवार पर या उसके सहारे उगा पीपल का वृक्ष पारंपरिक रूप से अशुभ माना जाता है — वृक्ष को पितरों का निवास माना जाता है, और इसकी जड़ें घर के ऊर्जा क्षेत्र में प्रवेश कर जाती हैं। पारंपरिक उपचार: वृक्ष को न काटें, प्रतिदिन जल दें, शनिवार को उसकी पूजा करें, प्रभावित दीवार पर हनुमान की छवि रखें, और नवग्रह शांति पूजा कराएँ। वृक्ष को कभी हानि नहीं पहुँचानी चाहिए।',
    toc: [
      { id: 'why-peepal', label: 'Why the Peepal Tree Is Sacred', labelHi: 'पीपल क्यों पवित्र है' },
      { id: 'signs', label: 'Signs to Notice', labelHi: 'देखने योग्य संकेत' },
      { id: 'remedies', label: 'Traditional Remedies', labelHi: 'पारंपरिक उपचार' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Peepal tree & Pitras in Vedic tradition', labelHi: 'वैदिक परंपरा में पीपल एवं पितर', source: 'Garuda Purana; Skanda Purana (Vedic texts).' },
      { id: 1, label: 'Peepal tree oxygen release research', labelHi: 'पीपल के ऑक्सीजन उत्सर्जन पर शोध', source: 'Indian Journal of Forestry (peer-reviewed study).' },
      { id: 2, label: 'Tree-root damage to building foundations', labelHi: 'भवन नींव पर वृक्ष-जड़ क्षति', source: 'National Building Code of India — vegetation impact studies.' },
    ],
    faqs: [
      {
        q: 'Is a Peepal tree growing on a house wall really inauspicious?',
        a: 'In Vedic tradition, yes. The Peepal (Ficus religiosa) is regarded as the abode of Lord Vishnu and the Pitras (forefathers). When it grows on or against a house wall, its roots are believed to penetrate the home\'s energy field. Beyond the spiritual dimension, practical concerns include root damage to the foundation, blocked sunlight, and dampness in the wall. The remedies below address both the spiritual and practical dimensions without harming the sacred tree.',
      },
      {
        q: 'Can I cut the Peepal tree?',
        a: 'No — never cut a Peepal tree. It is a sacred tree protected by ancient tradition, and cutting one is believed to bring Pitra Dosha — ancestral affliction. Even legally, many Indian states have tree-protection acts that prohibit cutting Peepal trees without special permission. The remedies below assume the tree will remain; they focus on harmonising the home\'s relationship with it.',
      },
      {
        q: 'What are the most effective remedies?',
        a: 'Five traditional remedies, applied together, are considered most effective: (1) Water the Peepal tree daily with a small brass or copper vessel; (2) Worship the tree on Saturdays by circling it seven times clockwise with vermillion and rice; (3) Place a brass Hanuman image on the affected wall inside the home; (5) Perform a Navagraha Shanti puja with a qualified Brahmin; (6) Tie a red thread around the trunk after reciting the Pitra Sukta.',
      },
      {
        q: 'How quickly do the remedies show effects?',
        a: 'Most practitioners report noticeable shifts in household atmosphere within 40 days of beginning daily remedies. The full effect, per Vedic tradition, manifests over a year of consistent practice. The Navagraha Shanti puja, performed once, often produces the most immediate shift — many families report improved sleep and reduced household tension within 2–3 weeks.',
      },
      {
        q: 'Is the Peepal tree considered scientifically beneficial?',
        a: 'Yes — beyond its spiritual significance, the Peepal tree is scientifically remarkable. It releases oxygen 24 hours a day (unlike most trees, which only release oxygen during photosynthesis). Indian Journal of Forestry peer-reviewed studies have documented its air-purification qualities. Its broad canopy provides cooling that can reduce ambient temperature by 3–5°C in its immediate vicinity — a natural cooling effect for the home it grows near.',
      },
      {
        q: 'What if the Peepal is far away from the wall, just leaning against it?',
        a: 'Even a leaning Peepal is considered inauspicious — the lean direction is believed to project Pitra energy toward the home. In this case, the remedies are the same, but additional care: do not allow children to climb the tree; avoid sleeping with a window directly facing the trunk; and consider planting a Tulsi plant on the inner side of the affected wall as a counter-balancing sacred plant.',
      },
    ],
    related: RELATED_TREE,
  },

  'remedies-without-demolition': {
    slug: 'remedies-without-demolition',
    readingMinutes: 12,
    category: 'Vastu Remedies',
    categoryHi: 'वास्तु उपचार',
    quickAnswer:
      'Most Vastu doshas can be corrected without breaking a single wall. The lightest remedies — colours, placement shifts, mirrors, plants, and crystals — handle 70–80% of common cases. For deeper corrections, copper pyramids, energised yantras, buried copper rods, and Vastu Purush Yantras at the threshold are highly effective. AstroVastu Expert K.K. Nagaich has documented over 200 cases of dosha correction without structural demolition.',
    quickAnswerHi:
      'अधिकांश वास्तु दोषों को एक भी दीवार तोड़े बिना सुधारा जा सकता है। सबसे हल्के उपाय — रंग, स्थान परिवर्तन, दर्पण, पौधे और क्रिस्टल — 70–80% सामान्य मामलों को संभालते हैं। गहरे सुधारों के लिए तांबे के पिरामिड, ऊर्जांकित यंत्र, भूमित तांबे की छड़ें, और दहलीज़ पर वास्तु पुरुष यंत्र अत्यंत प्रभावी हैं। एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच ने संरचनात्मक तोड़फोड़ के बिना 200+ दोष-सुधार के मामले प्रलेखित किए हैं।',
    toc: [
      { id: 'philosophy', label: 'Why Non-Demolition First', labelHi: 'पहले गैर-तोड़फोड़ क्यों?' },
      { id: 'colours', label: 'Colour Therapy', labelHi: 'रंग-थेरेपी' },
      { id: 'mirrors', label: 'Mirrors & Placement Shifts', labelHi: 'दर्पण एवं स्थान परिवर्तन' },
      { id: 'plants', label: 'Sacred Plants & Crystals', labelHi: 'पवित्र पौधे एवं क्रिस्टल' },
      { id: 'yantras', label: 'Yantras & Pyramids', labelHi: 'यंत्र एवं पिरामिड' },
      { id: 'copper-rods', label: 'Copper Rods & Threshold Remedies', labelHi: 'तांबे की छड़ें एवं दहलीज़ उपचार' },
      { id: 'case-study', label: 'Case Study — Reversed Luck', labelHi: 'केस स्टडी — उलटा भाग्य' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Vastu Yantra energisation', labelHi: 'वास्तु यंत्र ऊर्जांकन', source: 'Vedic Yantra Shastra texts; MahaVastu documentation.' },
      { id: 1, label: 'Copper pyramid energy amplification', labelHi: 'तांबे के पिरामिड ऊर्जा वर्धन', source: 'Institute of Pyramid Sciences (international research).' },
      { id: 2, label: 'Tulsi & sacred plants air purification', labelHi: 'तुलसी एवं पवित्र पौधे वायु शोधुरकरण', source: 'Indian Journal of Ayurveda & Integrative Medicine.' },
      { id: 3, label: 'Mirror placement dosha corrections', labelHi: 'दर्पण स्थान दोष सुधार', source: 'Housing.com & GoodHomes India Vastu guides (2023–2024).' },
    ],
    faqs: [
      {
        q: 'What percentage of Vastu doshas can be fixed without demolition?',
        a: 'Approximately 80% of common Vastu doshas can be fully corrected without any structural demolition. The lightest-touch remedies — colours, placement, mirrors, plants, crystals — handle the most common cases. Medium-depth remedies — copper pyramids, yantras, energised pictures — handle another 15%. Only a small minority of severe structural defects (e.g., a toilet built in the Brahmasthan of a large commercial building) genuinely require reconstruction.',
      },
      {
        q: 'What is the lightest, most affordable Vastu remedy?',
        a: 'Colour therapy. Painting the correct wall the correct colour is often the single most cost-effective remedy. A 10×12 wall costs roughly ₹3,000–5,000 to repaint — yet can shift a room\'s energy measurably. Direction-specific colour rules: SW earth tones, NE white/light blue, SE orange/red, NW light green, Centre white/cream. Many documented case studies show measurable improvements within weeks of a strategic colour correction alone.',
      },
      {
        q: 'Are Vastu yantras and pyramids really effective?',
        a: 'Yes — when properly energised through specific mantras by a qualified practitioner. Vastu yantras are geometric diagrams engraved on copper or brass plates, which concentrate and redirect subtle energies. Copper pyramids work on similar principles — the pyramid shape itself is a proven energy-amplification structure studied by institutions worldwide. Energised by a qualified Guru, both are powerful non-invasive remedies that have been documented to produce results within weeks in clinical practice.',
      },
      {
        q: 'How does a mirror correct a Vastu dosha?',
        a: 'Mirrors are used to (1) expand visually small or dark spaces, (2) deflect harsh energy from T-junctions or sharp corners (Bagua mirror), (3) double visible wealth when placed near cash counters, (4) symbolically redirect the flow of energy from inauspicious directions. The Times of India (November 2024) confirms mirror placement is one of the most underutilised yet effective non-invasive remedies in commercial Vastu.',
      },
      {
        q: 'What is a Vastu Purush Yantra and where is it placed?',
        a: 'The Vastu Purush Yantra is the most sacred of all Vastu yantras — it represents the cosmic energy grid underlying every building. It is engraved on a copper plate, energised through specific mantras, and traditionally buried at the threshold of the main entrance, 18 inches below ground level. It is considered the foundational correction for any building — when properly placed, it harmonises the entire energy field. Many commercial buildings without correct Vastu report remarkable transformations within months of having a Vastu Purush Yantra installed at the threshold.',
      },
      {
        q: 'Can sacred plants really correct Vastu doshas?',
        a: 'Yes — sacred plants are an underrated but powerful remedy. Tulsi (holy basil) in the North or North-East is particularly potent — it purifies air, releases oxygen, and absorbs negative energy per Ayurveda research. Money plants near the cash counter amplify financial energy. Bamboo in the South-East balances fire. Aloe vera near the entrance protects against negative incoming energy. Together, plants address both the subtle-energy and air-quality dimensions of Vastu.',
      },
    ],
    related: RELATED_REMEDIES,
  },

  'spiritual-vastu-pooja-room-design': {
    slug: 'spiritual-vastu-pooja-room-design',
    readingMinutes: 7,
    category: 'Spiritual Vastu',
    categoryHi: 'आध्यात्मिक वास्तु',
    quickAnswer:
      'The pooja room should be in the North-East (Ishanya) corner of the home. The main deity should face East or West, and the worshipper should face East while praying. Use light, soothing colours (white, cream, light yellow); avoid dark colours, toilet-adjacent placement, or shared walls with the bedroom. Keep the space clean, well-lit, and free of clutter — the pooja room must remain energetically pure.',
    quickAnswerHi:
      'पूजा कक्ष घर के उत्तर-पूर्व (ईशान्य) कोने में होना चाहिए। मुख्य देवता का मुँह पूर्व या पश्चिम की ओर हो और पूजा करने वाले का मुँह पूर्व की ओर। हल्के, सुखदायी रंग्रों (सफ़ेद, क्रीम, हल्का पीला) का प्रयोग करें; गहरे रंग, शौचालय-सटा स्थान, या शयनकक्ष से साझा दीवार टालें। स्थान स्वच्छ, सुप्रकाशित और अव्यवस्था-मुक्त रखें — पूजा कक्ष ऊर्जात्मक रूप से पवित्र रहना चाहिए।',
    toc: [
      { id: 'direction', label: 'The North-East Ishanya Corner', labelHi: 'उत्तर-पूर्व ईशान्य कोना' },
      { id: 'deity-placement', label: 'Deity Placement & Posture', labelHi: 'देवता स्थापन एवं आसन' },
      { id: 'materials', label: 'Materials, Colours & Lighting', labelHi: 'सामग्री, रंग एवं प्रकाश' },
      { id: 'avoid', label: 'Common Mistakes to Avoid', labelHi: 'टालने योग्य सामान्य गलतियाँ' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Ishanya & divine energy in Vedic tradition', labelHi: 'वैदिक परंपरा में ईशान्य एवं दैवीय ऊर्जा', source: 'Agni Purana; Garuda Purana.' },
      { id: 1, label: 'Tulsi in pooja room air quality', labelHi: 'पूजा कक्ष में तुलसी वायु गुणवत्ता', source: 'Indian Journal of Ayurveda research.' },
      { id: 2, label: 'Pooja room colour and light research', labelHi: 'पूजा कक्ष रंग एवं प्रकाश शोध', source: 'Architectural Digest India — Sacred Spaces Design (2024).' },
    ],
    faqs: [
      {
        q: 'Where should the pooja room be located in a house as per Vastu?',
        a: 'The North-East (Ishanya) corner is the ideal location — the seat of divine energy, the confluence of the northern magnetic axis and the eastern solar axis. If a dedicated room is not possible, a North-East corner of any room can serve. The pooja space should be raised slightly (a small platform or chowki), kept immaculately clean, and never share a wall with a toilet, bedroom, or kitchen. The space should be well-lit — natural morning light is best.',
      },
      {
        q: 'Which direction should the main deity face?',
        a: 'The main deity should face East or West — both considered auspicious. West-facing deities are particularly recommended for Shiva, Hanuman, and Bhairav. East-facing deities are recommended for Lakshmi, Vishnu, Ganesh, and Saraswati. The worshipper should always face East or North while praying (never South). Avoid placing deity images on the floor — they must be on an elevated surface with a clean, clean background wall.',
      },
      {
        q: 'What colours are best for a pooja room?',
        a: 'White, cream, light yellow, soft saffron, and pale pink are ideal. These soothing, light colours amplify the divine energy. Avoid dark colours (black, navy, dark red), bright stimulating colours (electric blue, neon green), or heavy patterns. The wall behind the deities can be a slightly deeper warm tone — soft gold or pale terracotta — to anchor the spiritual focus. Architectural Digest India\'s sacred-spaces guide (2024) confirms these colour principles.',
      },
      {
        q: 'Should the pooja room have a door?',
        a: 'Yes — the pooja room should have a door that can be closed when not in use. This protects the space\'s sanctity and prevents negative energy from entering. The door should be made of solid wood (not glass), and the threshold should have a small step. Some traditions prefer a curtain instead of a door — this is acceptable, but ensure the curtain is made of a clean, light-coloured fabric (white or cream) and kept immaculate.',
      },
      {
        q: 'Can I keep a Tulsi plant in the pooja room?',
        a: 'Yes — Tulsi (holy basil) is highly recommended. It purifies air, releases oxygen, and absorbs subtle negative energy. Place the Tulsi on a small pedestal in the North or East of the pooja room, in a brass or copper vessel. Water the Tulsi daily, and ensure it receives direct morning light if the pooja room has a window. Tulsi is considered the physical embodiment of Vrinda, the goddess associated with devotion — its presence amplifies the spiritual energy of the space.',
      },
      {
        q: 'What should I avoid in the pooja room?',
        a: 'Avoid: (1) storage of unrelated items (shoes, clothes, papers); (2) electronic devices (TVs, speakers); (3) mirrors on the wall directly opposite the deities; (4) dustbins or cleaning equipment visible in the room; (5) images of deceased family members (these belong in a separate respectful area); (6) clocks with a tick-tock sound (use silent digital clocks if timing is needed); (8) keeping cash or financial documents — these belong to the maiden\'s storage area.',
      },
    ],
    related: RELATED_SPIRITUAL,
  },

  'numerology-beginners': {
    slug: 'numerology-beginners',
    readingMinutes: 10,
    category: 'Numerology',
    categoryHi: 'अंकशास्त्र',
    quickAnswer:
      'Numerology uses numbers derived from your birth date (Mulank) and full name (Bhagyank/Name Number) to reveal personality, life path, and lucky directions. The Mulank (Driver Number) is the sum of your birth date digits reduced to a single digit; the Bhagyank (Conductor Number) is the sum of all birth-date digits. Each number 1–9 has a ruling planet, qualities, colours, and lucky directions per Vedic numerology.',
    quickAnswerHi:
      'अंकशास्त्र आपकी जन्म तिथि (मूलांक) और पूरे नाम (भाग्यांक/नाम अंक) से प्राप्त संख्याओं का उपयोग व्यक्तित्व, जीवन-पथ और शुभद्रो दिशाओं को प्रकट करने के लिए करता है। मूलांक (चालक संख्या) आपकी जन्म तिथि के अंकों का योग है जिसे एकल अंक तक घर्षित किया जाता है; भाग्यांक (संचालक संख्या) सभी जन्म-तिथि अंकों का योग है। प्रत्येक संख्या 1–9 का एक शासक ग्रह, गुण, रंग और शुदीद्रो दिशा होती है।',
    toc: [
      { id: 'basics', label: 'Numerology Basics', labelHi: 'अंकशास्त्र के मूल' },
      { id: 'mulank', label: 'Mulank — Your Driver Number', labelHi: 'मूलांक — आपकी चालक संख्या' },
      { id: 'bhagyank', label: 'Bhagyank — Your Conductor Number', labelHi: 'भाग्यांक — आपकी संचालक संख्या' },
      { id: 'name-number', label: 'Name Number & Correction', labelHi: 'नाम अंक एवं सुधार' },
      { id: 'lucky', label: 'Lucky Numbers, Colours, Directions', labelHi: 'शुभ अंक, रंग, दिशाएँ' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: 'Vedic numerology — Mulank & Bhagyank', labelHi: 'वैदिक अंकशास्त्र — मूलांक एवं भाग्यांक', source: 'Brihat Parashara Hora Shastra; numerology treatises.' },
      { id: 1, label: 'Chaldean numerology system', labelHi: 'कैल्डियन अंकशास्त्र प्रणाली', source: 'Chaldean Numerology — historical references.' },
      { id: 2, label: 'Number symbolism in Vedic astrology', labelHi: 'वैदिक ज्योतिष्य में अंक प्रतीकवाद', source: 'Phaladeepika; Brihat Jataka (Vedic texts).' },
    ],
    faqs: [
      {
        q: 'What is a Mulank (Driver Number) in numerology?',
        a: 'Mulank is the sum of the digits of your birth date, reduced to a single digit (1–9). Example: if you were born on 15-March, your Mulank is 1+5 = 6. Mulank represents your core personality, the "driver" of your life. It governs your instinctive reactions, core motivations, and the way you approach challenges. Mulank is considered the most important single number in Vedic numerology — it does not change throughout life.',
      },
      {
        q: 'What is a Bhagyank (Conductor Number) and how is it different from Mulank?',
        a: 'Bhagyank is the sum of all digits in your full birth date (day + month + year), reduced to a single digit. Example: born 15-March-1990 → 1+5+0+3+1+9+9+0 = 28 → 2+8 = 10 → 1+0 = 1. Bhagyank represents your destiny, the "conductor" that orchestrates the life path. Mulank is the driver (how you act); Bhagyank is the conductor (where you are headed). When they harmonise, life flows easily; when they conflict, internal friction is common.',
      },
      {
        q: 'How do I calculate my name number?',
        a: 'Each letter of your name is assigned a number based on the Chaldean or Pythagorean system. In the Chaldean system (preferred in Vedic tradition): A=1, B=2, C=3, D=4, E=5, F=8, G=3, H=5, I=1, J=1, K=2, L=3, M=4, N=5, O=7, P=8, Q=1, R=2, S=3, T=4, U=6, V=6, W=6, X=5, Y=1, Z=7. Add all letters of your full name, then reduce to a single digit. This is your Name Number — it should ideally match your Mulank or Bhagyank.',
      },
      {
        q: 'Can I change my name to improve my numerology?',
        a: 'Yes — name correction is one of the most common numerology interventions. By adding or modifying letters (or using a nickname professionally), you can shift your Name Number to harmonise with your Mulank or Bhagyank. Many successful businesspeople, actors, and politicians have adopted numerologically aligned names. The new name should be adopted consistently — in business cards, social media, signatures — for the alignment to take effect.',
      },
      {
        q: 'What are lucky numbers, colours, and directions per Vedic numerology?',
        a: 'Each number 1–9 has specific associations: 1 (Sun) — orange, Sunday, leadership; 2 (Moon) — white/cream, Monday, creativity; 3 (Jupiter) — yellow, Thursday, growth; 4 (Rahu) — electric blue, Saturday, unconventional paths; 5 (Mercury) — green, Wednesday, communication; 6 (Venus) — pink/light blue, Friday, luxury and relationships; 7 (Ketu) — grey/light yellow, Tuesday, spirituality; 8 (Saturn) — black/dark blue, Saturday, discipline; 9 (Mars) — red, Tuesday, courage.',
      },
      {
        q: 'Is Vedic numerology the same as Western numerology?',
        a: 'No — there are significant differences. Vedic numerology uses the Chaldean letter-to-number system and is closely linked to Vedic astrology (each number has a ruling planet, deity, and specific day). Western numerology more commonly uses the Pythagorean system and treats numbers more abstractly. Vedic numerology also places greater emphasis on Mulank (driver number) and Bhagyank (conductor number) rather than the "life path number" common in Western systems. Both are valid traditions — but the predictive frameworks and remedies differ.',
      },
    ],
    related: RELATED_NUMEROLOGY,
  },

  'nakshatra-name-suggestions-guide': {
    slug: 'nakshatra-name-suggestions-guide',
    readingMinutes: 6,
    category: 'Vedic Astrology',
    categoryHi: 'वैदिक ज्योतिष',
    quickAnswer:
      'Each of the 27 Nakshatras (birth stars) has 4 padas (quarters), each with a specific auspicious starting syllable for naming a child. For example, Ashwini\'s padas start with Chu, Che, Cho, La; Rohini\'s with O, Va, Vi, Vu. The child\'s name should ideally begin with the syllable corresponding to their birth Nakshatra\'s pada and align with their numerology (matching Mulank).',
    quickAnswerHi:
      'प्रत्येक 27 नक्षत्र (जन्म नक्षत्र) के 4 पाद (चौथाइक) होते हैं, प्रत्येक का बच्चे का नामकरण हेतु विशिष्ट शुभ प्रारंभिक अक्षर होता है। उदाहरण के लिए, अश्विनी के पाद Chu, Che, Cho, La से प्रारंभ होते हैं; रोहिणी के O, Va, Vi, Vu से। बच्चे का नाम आदर्श रूप से उनके जन्म नक्षत्र के पाद के अनुरूप अक्षर से प्रारंभ होना चाहिए और उनके अंकशास्त्र (मूलांक मिलान) के साथ संरेखित होना चाहिए।',
    toc: [
      { id: 'nakshatra-intro', label: 'What Are Nakshatras?', labelHi: 'नक्षत्र क्या हैं?' },
      { id: 'padas', label: 'The 4 Padas & Starting Syllables', labelHi: '4 पाद एवं प्रारंभिक अक्षर' },
      { id: 'how-to-use', label: 'How to Find Your Syllable', labelHi: 'अपना अक्षर कैसे खोजें' },
      { id: 'conclusion', label: 'Conclusion', labelHi: 'निष्कर्ष' },
    ],
    references: [
      { id: 0, label: '27 Nakshatras & 4 padas each', labelHi: '27 नक्षत्र एवं प्रत्येक के 4 पाद', source: 'Brihat Parashara Hora Shastra; Jataka Parijata.' },
      { id: 1, label: 'Naming traditions in Vedic culture', labelHi: 'वैदिक संस्कृति में नामकरण परंपराएँ', source: 'Namakarana Sanskar (Vedic naming ceremony references).' },
      { id: 2, label: 'Nakshatra-pada calculation method', labelHi: 'नक्षत्र-पाद गणनीकरण विधि', source: 'Vedic astrology calculation manuals (Phaladeepika).' },
    ],
    faqs: [
      {
        q: 'What is a Nakshatra in Vedic astrology?',
        a: 'Nakshatras are the 27 lunar mansions — divisions of the ecliptic through which the Moon travels during its monthly cycle. Each Nakshatra spans 13°20\' of celestial longitude and has a ruling deity, planet, symbol, and specific qualities. The Nakshatra in which the Moon sits at the moment of birth is called the birth Nakshatra (Janma Nakshatra) and is one of the most important factors in Vedic astrology — more granular than the Sun-based zodiac signs.',
      },
      {
        q: 'Why are starting syllables important for names?',
        a: 'The Vedic tradition holds that the syllable a name starts with carries a subtle vibration that resonates with the birth Nakshatra\'s energy. A name beginning with the correct syllable aligns the child\'s identity with their cosmic blueprint; a misaligned syllable creates inner friction. Modern numerology research suggests syllables also influence the Name Number, which interacts with the Mulank and Bhagyank to shape life outcomes.',
      },
      {
        q: 'How do I find the correct syllable for my child\'s name?',
        a: 'You need the child\'s exact birth date, time, and location to calculate the birth Nakshatra and its pada. From there, identify the pada\'s starting sound. Example: a child born under Ashwini Nakshatra pada 1 should have a name starting with "Chu"; pada 2 → "Che"; pada 3 → "Cho"; pada 4 → "La". The AstroVastu Expert\'s free Name Suggestion tool handles this calculation automatically — it provides 8–10 aligned suggestions for any birth detail.',
      },
      {
        q: 'Can an adult change their name for numerological reasons?',
        a: 'Yes — name correction is a well-established practice. Adults whose current name does not align with their birth Nakshatra can adopt a new name professionally (in business cards, signatures, social media). The new name should (1) start with the syllable matching your birth Nakshatra pada; (2) align with your numerology (Name Number matching Mulank or Bhagyank). The change takes effect when used consistently — particularly in professional contexts where the new name is signed.',
      },
      {
        q: 'Is the syllable rule culturally specific?',
        a: 'The Nakshatra syllable system is universal across Vedic traditions — used in India, Nepal, and by Vedic astrologers worldwide. It is not specific to any region, caste, or religion. What varies is the language of the name itself — the same syllable can be rendered in Sanskrit, Hindi, Tamil, Telugu, Bengali, Marathi, English, etc. The underlying vibration is considered language-independent.',
      },
      {
        q: 'Do all 27 Nakshatras have 4 padas?',
        a: 'Yes — each of the 27 Nakshatras has exactly 4 padas (quarters), giving 108 padas total. This number 108 is significant in Vedic tradition — it is the number of beads on a mala, the number of Upanishads, and a recurring sacred number. The 108 padas map directly to the 12 zodiac signs (each sign hosts 9 padas), creating a precise lattice through which all naming and astrological calculations can be done.',
      },
    ],
    related: RELATED_NAKSHATRA,
  },
};