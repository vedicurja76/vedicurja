/* ------------------------------------------------------------------
   Vedic Surya-rashi + Indian/Chaldean numerology — pure, client-safe.
   Only genuinely date/name-computable values are derived here. The
   Moon-based Janma-rashi/Nakshatra needs exact planetary positions,
   so we present Surya-rashi + numbers honestly and route the full
   Kundli to Acharya (see AstroReadClient CTA). No ephemeris faking.
------------------------------------------------------------------ */

export interface RashiProfile {
  key: string;
  sa: string; // Sanskrit transliteration
  en: string; // English name
  hi: string; // Hindi name
  symbol: string;
  datesEn: string;
  datesHi: string;
  startM: number;
  startD: number;
  endM: number;
  endD: number;
  lord: string;
  lordHi: string;
  element: string;
  elementHi: string;
  gemEn: string;
  gemHi: string;
  color: string;
  colorHi: string;
  luckyNumber: number;
  traitsEn: string[];
  traitsHi: string[];
  careerEn: string;
  careerHi: string;
  healthEn: string;
  healthHi: string;
  relationshipEn: string;
  relationshipHi: string;
  remedyEn: string;
  remedyHi: string;
  mantraEn: string;
  deityHi: string;
}

// Nirayana (sidereal) Sun-sign approximate solar months used in North Indian Jyotish.
export const RASHI: RashiProfile[] = [
  { key: 'mesha', sa: 'Mesha', en: 'Aries', hi: 'मेष', symbol: '♈', datesEn: 'Apr 14 – May 14', datesHi: '14 अप्रैल – 14 मई', startM: 4, startD: 14, endM: 5, endD: 14, lord: 'Mangal (Mars)', lordHi: 'मंगल (मंगल)', element: 'Fire', elementHi: 'अग्नि', gemEn: 'Red Coral (Moonga)', gemHi: 'लाल मोंगा', color: 'Crimson Red', colorHi: 'गहरा लाल', luckyNumber: 9, traitsEn: ['Bold initiator', 'High energy', 'Courageous', 'Impulsive'], traitsHi: ['साहसी आरंभक', 'अधिक ऊर्जा', 'निर्भय', 'त्वरित निर्णय'], careerEn: 'Leadership, sports, defence, engineering and startups suit your drive to pioneer.', careerHi: 'नेतृत्व, खेल, रक्षा, इंजीनियरिंग व स्टार्टअप आपके आरंभ करने के स्वभाव को अनुकूल हैं।', healthEn: 'Watch head, BP and inflammation; channel aggression into exercise.', healthHi: 'सिर, रक्तचाप व सूजन का ध्यान रखें; ऊर्जा को व्यायाम में लगाएँ।', relationshipEn: 'Passionate and direct — needs a partner who respects independence.', relationshipHi: 'उत्साही व सीधे — ऐसे साथी की आवश्यकता जो स्वतंत्रता का सम्मान करे।', remedyEn: 'Tuesday Hanuman Chalisa + red Masala Dosa/ masoor dal charity strengthens Mars.', remedyHi: 'मंगलवार हनुमान चालीसा व लाल दान/मसूर दाल दान मंगल को बल देता है।', mantraEn: 'Om Ang Rakang Ang Namah', deityHi: 'हनुमान / मंगल' },
  { key: 'vrishabha', sa: 'Vrishabha', en: 'Taurus', hi: 'वृषभ', symbol: '♉', datesEn: 'May 15 – Jun 14', datesHi: '15 मई – 14 जून', startM: 5, startD: 15, endM: 6, endD: 14, lord: 'Shukra (Venus)', lordHi: 'शुक्र', element: 'Earth', elementHi: 'पृथ्वी', gemEn: 'Diamond / White Sapphire', gemHi: 'हीरा / सफेद पद्मराग', color: 'Emerald Green', colorHi: 'पन्ना हरा', luckyNumber: 6, traitsEn: ['Steady', 'Sensual', 'Patient', 'Possessive'], traitsHi: ['स्थिर', 'सौंदर्य-प्रिय', 'धैर्यवान', 'लगनशील'], careerEn: 'Finance, real-estate, luxury, food & arts reward your patience and taste.', careerHi: 'वित्त, रिअल-एस्टेट, लक्ज़री, खाद्य व कला आपके धैर्य व रुचि को पुरस्कृत करते हैं।', healthEn: 'Mind the throat & thyroid; avoid over-indulgence in sweets.', healthHi: 'गला व थायराइड का ध्यान; मिठाई की अधिकता से बचें।', relationshipEn: 'Loyal and affectionate — values comfort and long-term security.', relationshipHi: 'वफादार व स्नेहमय — सुख और दीर्घकालिक सुरक्षा को महत्व देते हैं।', remedyEn: 'Friday Shukra mantra + white sweets/donation to young girls pleases Venus.', remedyHi: 'शुक्रवार शुक्र मंत्र व सफेद मिठाई/कन्या दान शुक्र को प्रसन्न करता है।', mantraEn: 'Om Dram Drim Drum Sah Shukraya Namah', deityHi: 'लक्ष्मी / शुक्र' },
  { key: 'mithuna', sa: 'Mithuna', en: 'Gemini', hi: 'मिथुन', symbol: '♊', datesEn: 'Jun 15 – Jul 15', datesHi: '15 जून – 15 जुलाई', startM: 6, startD: 15, endM: 7, endD: 15, lord: 'Budh (Mercury)', lordHi: 'बुध', element: 'Air', elementHi: 'वायु', gemEn: 'Emerald (Panna)', gemHi: 'पन्ना', color: 'Green', colorHi: 'हरा', luckyNumber: 5, traitsEn: ['Quick learner', 'Communicator', 'Adaptable', 'Restless'], traitsHi: ['तेज़ सीखने वाले', 'संवादक', 'अनुकूलनीय', 'चंचल'], careerEn: 'Media, sales, writing, IT and trading leverage your intellect and network.', careerHi: 'मीडिया, सेल्स, लेखन, IT व ट्रेडिंग आपकी बुद्धि व नेटवर्क का लाभ उठाते हैं।', healthEn: 'Guard nerves & lungs; manage anxiety with routine and pranayama.', healthHi: 'तंत्रिका व फेफड़ों की रक्षा; नियम व प्राणायाम से चिंता घटाएँ।', relationshipEn: 'Playful and witty — needs mental stimulation and variety.', relationshipHi: 'चंचल व हास्यप्रिय — मानसिक उत्तेजना व विविधता चाहते हैं।', remedyEn: 'Wednesday Budh mantra + green dal/moong charity and learning sharpen Mercury.', remedyHi: 'बुधवार बुध मंत्र व हरे मूंग दान व अध्यापन बुध को तेज करते हैं।', mantraEn: 'Om Budhaya Namah', deityHi: 'गणेश / बुध' },
  { key: 'karka', sa: 'Karka', en: 'Cancer', hi: 'कर्क', symbol: '♋', datesEn: 'Jul 16 – Aug 16', datesHi: '16 जुलाई – 16 अगस्त', startM: 7, startD: 16, endM: 8, endD: 16, lord: 'Chandra (Moon)', lordHi: 'चंद्र', element: 'Water', elementHi: 'जल', gemEn: 'Pearl / Moonstone', gemHi: 'मोती / गोदना', color: 'Silver-White', colorHi: 'चाँदी-सफेद', luckyNumber: 2, traitsEn: ['Nurturing', 'Intuitive', 'Loyal', 'Moody'], traitsHi: ['पालन-पोषण', 'अंतर्ज्ञानी', 'निष्ठावान', 'भावुक'], careerEn: 'Care, hospitality, psychology, food & real-estate fit your empathy.', careerHi: 'सेवा, आतिथ्य, मनोविज्ञान, खाद्य व रिअल-एस्टेट आपकी सहानुभूति के अनुकूल हैं।', healthEn: 'Watch stomach & emotions; regular sleep stabilises the Moon.', healthHi: 'पेट व भावनाओं का ध्यान; नियमित नींद चंद्र को स्थिर करती है।', relationshipEn: 'Deeply caring — seeks family, emotional safety and memory.', relationshipHi: 'गहरा स्नेह — परिवार, भावनात्मक सुरक्षा व स्मृतियाँ चाहते हैं।', remedyEn: 'Monday Chandra mantra + milk/rice donation and water discipline calms the Moon.', remedyHi: 'सोमवार चंद्र मंत्र व दान-पान/चावल दान व जल-अनुशासन चंद्र को शांत करता है।', mantraEn: 'Om Som Somaya Namah', deityHi: 'शिव / चंद्र' },
  { key: 'simha', sa: 'Simha', en: 'Leo', hi: 'सिंह', symbol: '♌', datesEn: 'Aug 17 – Sep 16', datesHi: '17 अगस्त – 16 सितंबर', startM: 8, startD: 17, endM: 9, endD: 16, lord: 'Surya (Sun)', lordHi: 'सूर्य', element: 'Fire', elementHi: 'अग्नि', gemEn: 'Ruby (Manik)', gemHi: 'माणिक', color: 'Golden Orange', colorHi: 'सुनहरा नारंगी', luckyNumber: 1, traitsEn: ['Charismatic', 'Generous', 'Proud', 'Creative'], traitsHi: ['आकर्षक', 'दानशील', 'गर्वीला', 'रचनात्मक'], careerEn: 'Politics, entertainment, management & entrepreneurship shine with your aura.', careerHi: 'राजनीति, मनोरंजन, प्रबंधन व उद्यमिता आपके तेज में चमकते हैं।', healthEn: 'Protect heart & spine; avoid ego-driven overwork.', healthHi: 'हृदय व रीढ़ की रक्षा; अहंकार-प्रेरित अधिक श्रम से बचें।', relationshipEn: 'Warm and protective — admires loyalty and public respect.', relationshipHi: 'उद्गारी व रक्षक — निष्ठा व सार्वजनिक सम्मान को महत्व देते हैं।', remedyEn: 'Sunday Surya namaskar + wheat/jaggery charity and copper water strengthens the Sun.', remedyHi: 'रविवार सूर्य नमस्कार व गेहूं/गुड़ दान व ताम्र जल सूर्य को बल देता है।', mantraEn: 'Om Hram Hrim Hraum Sah Suryaya Namah', deityHi: 'सूर्य / शिव' },
  { key: 'kanya', sa: 'Kanya', en: 'Virgo', hi: 'कन्या', symbol: '♍', datesEn: 'Sep 17 – Oct 16', datesHi: '17 सितंबर – 16 अक्तूबर', startM: 9, startD: 17, endM: 10, endD: 16, lord: 'Budh (Mercury)', lordHi: 'बुध', element: 'Earth', elementHi: 'पृथ्वी', gemEn: 'Emerald (Panna)', gemHi: 'पन्ना', color: 'Earthy Green', colorHi: 'मिट्टीय हरा', luckyNumber: 5, traitsEn: ['Analytical', 'Detail-minded', 'Service-oriented', 'Critical'], traitsHi: ['विश्लेषणात्मक', 'सूक्ष्मदर्शी', 'सेवाप्रिय', 'आलोचनात्मक'], careerEn: 'Research, medicine, data, editing & quality roles reward your precision.', careerHi: 'अनुसंधान, चिकित्सा, डेटा, संपादन व गुणवत्ता भूमिकाएँ आपकी सटीकता को पुरस्कृत करती हैं।', healthEn: 'Digestive care & stress management keep Mercury balanced.', healthHi: 'पाचन व तनाव प्रबंधन बुध को संतुलित रखते हैं।', relationshipEn: 'Devoted but exacting — appreciates order and sincere effort.', relationshipHi: 'समर्पित पर सटीक — अनुक्रम व अर्पित प्रयास को सराहते हैं।', remedyEn: 'Wednesday Hanuman + Vedic chanting and community service aid Virgo.', remedyHi: 'बुधवार हनुमान व वैदिक जप व सेवा कन्या लग्न को सहारा देते हैं।', mantraEn: 'Om Budhaya Namah', deityHi: 'गणेश / बुध' },
  { key: 'tula', sa: 'Tula', en: 'Libra', hi: 'तुला', symbol: '♎', datesEn: 'Oct 17 – Nov 15', datesHi: '17 अक्तूबर – 15 नवंबर', startM: 10, startD: 17, endM: 11, endD: 15, lord: 'Shukra (Venus)', lordHi: 'शुक्र', element: 'Air', elementHi: 'वायु', gemEn: 'Diamond / Opal', gemHi: 'हीरा / ओपल', color: 'Pastel Pink', colorHi: 'हल्का गुलाबी', luckyNumber: 6, traitsEn: ['Diplomatic', 'Aesthetic', 'Fair', 'Indecisive'], traitsHi: ['कूटनीतिक', 'सांस्कृतिक', 'न्यायप्रिय', 'द्वंद्वरत'], careerEn: 'Law, design, diplomacy, luxury & HR benefit from your balance.', careerHi: 'कानून, डिज़ाइन, कूटनीति, लक्ज़री व HR आपके संतुलन से लाभान्वित होते हैं।', healthEn: 'Kidneys & lower back; moderation in rich food and rest.', healthHi: 'गुर्दा व कमर; वसायुक्त भोजन व विश्राम में संयम।', relationshipEn: 'Romantic and partnership-focused — seeks harmony and beauty.', relationshipHi: 'प्रभावी व साझेदारी-मुखी — सामंजस्य व सौंदर्य चाहते हैं।', remedyEn: 'Friday Lakshmi puja + helping the needy keeps Venus graceful.', remedyHi: 'शुक्रवार लक्ष्मी पूजा व ज़रूरतमंदों की सहायता शुक्र को सुंदर रखती है।', mantraEn: 'Om Dram Drim Drum Sah Shukraya Namah', deityHi: 'लक्ष्मी / शुक्र' },
  { key: 'vrishchika', sa: 'Vrishchika', en: 'Scorpio', hi: 'वृश्चिक', symbol: '♏', datesEn: 'Nov 16 – Dec 15', datesHi: '16 नवंबर – 15 दिसंबर', startM: 11, startD: 16, endM: 12, endD: 15, lord: 'Mangal (Mars)', lordHi: 'मंगल', element: 'Water', elementHi: 'जल', gemEn: 'Red Coral (Moonga)', gemHi: 'लाल मोंगा', color: 'Deep Maroon', colorHi: 'गहरा मरून', luckyNumber: 9, traitsEn: ['Intense', 'Resilient', 'Secretive', 'Transformative'], traitsHi: ['तीव्र', 'अटल', 'रहस्यमय', 'कायाकल्पकारी'], careerEn: 'Investigation, surgery, research, occult & crisis management fit your depth.', careerHi: 'अन्वेषण, शल्य, अनुसंधान, अघोर व संकट-प्रबंधन आपकी गहराई के अनुकूल हैं।', healthEn: 'Reproductive & stress zones; release tension through discipline.', healthHi: 'प्रजनन व तनाव क्षेत्र; अनुशासन से तनाव मुक्त करें।', relationshipEn: 'Deep and loyal — needs trust and emotional honesty.', relationshipHi: 'गहरे व निष्ठावान — विश्वास व भावनात्मक सत्यता चाहते हैं।', remedyEn: 'Tuesday Kali/Hanuman worship + blood donation and charity aid Scorpio.', remedyHi: 'मंगलवार काली/हनुमान उपासना व रक्त/दान वृश्चिक को सहारा देते हैं।', mantraEn: 'Om Ang Rakang Ang Namah', deityHi: 'काली / मंगल' },
  { key: 'dhanu', sa: 'Dhanu', en: 'Sagittarius', hi: 'धनु', symbol: '♐', datesEn: 'Dec 16 – Jan 13', datesHi: '16 दिसंबर – 13 जनवरी', startM: 12, startD: 16, endM: 1, endD: 13, lord: 'Guru (Jupiter)', lordHi: 'बृहस्पति', element: 'Fire', elementHi: 'अग्नि', gemEn: 'Yellow Sapphire (Pukhraj)', gemHi: 'पुखराज', color: 'Saffron / Sky Blue', colorHi: 'केसरिया / आसमानी', luckyNumber: 3, traitsEn: ['Optimistic', 'Philosophical', 'Adventurous', 'Frank'], traitsHi: ['आशावादी', 'दार्शनिक', 'साहसी', 'स्पष्टवादी'], careerEn: 'Teaching, law, travel, finance & spirituality reward your vision.', careerHi: 'अध्यापन, कानून, पर्यटन, वित्त व अध्यात्म आपकी दृष्टि को पुरस्कृत करते हैं।', healthEn: 'Liver & hips; avoid overeating and honor routines.', healthHi: 'लिवर व कूल्हे; अधिक भोजन से बचें, दिनचर्या मानें।', relationshipEn: 'Upbeat and expansive — seeks meaning and shared growth.', relationshipHi: 'उत्साही व विस्तारवादी — अर्थ व संयुक्त विकास चाहते हैं।', remedyEn: 'Thursday Guru mantra + yellow-dal/brâhmin donation & learning strengthens Jupiter.', remedyHi: 'गुरुवार बृहस्पति मंत्र व पीले दान/अध्ययन बृहस्पति को बल देते हैं।', mantraEn: 'Om Gram Grim Grom Sah Gurave Namah', deityHi: 'विष्णु / बृहस्पति' },
  { key: 'makara', sa: 'Makara', en: 'Capricorn', hi: 'मकर', symbol: '♑', datesEn: 'Jan 14 – Feb 12', datesHi: '14 जनवरी – 12 फरवरी', startM: 1, startD: 14, endM: 2, endD: 12, lord: 'Shani (Saturn)', lordHi: 'शनि', element: 'Earth', elementHi: 'पृथ्वी', gemEn: 'Blue Sapphire (Neelam)', gemHi: 'नीलम', color: 'Dark Blue / Grey', colorHi: 'गहरा नीला / ग्रे', luckyNumber: 8, traitsEn: ['Disciplined', 'Ambitious', 'Patient', 'Pragmatic'], traitsHi: ['अनुशासित', 'आकांक्षी', 'धैर्यवान', 'व्यावहारिक'], careerEn: 'Management, construction, government & long-cycle ventures suit your endurance.', careerHi: 'प्रबंधन, निर्माण, सरकारी व दीर्घ-चक्र उद्यम आपके धैर्य के अनुकूल हैं।', healthEn: 'Bones, teeth & joints; regular discipline pleases Saturn.', healthHi: 'हड्डी, दांत व जोड़; नियम-अनुशासन शनि को प्रसन्न करते हैं।', relationshipEn: 'Steady and responsible — builds lasting commitments.', relationshipHi: 'स्थिर व ज़िम्मेदार — स्थायी बंधन बनाते हैं।', remedyEn: 'Saturday Shani seva + black-sesame/old-age service softens Saturn.', remedyHi: 'शनिवार शनि सेवा व काले तिल/वृद्ध सेवा शनि को कोमल करते हैं।', mantraEn: 'Om Sham Shanaischaraya Namah', deityHi: 'छायामूर्ति / शनि' },
  { key: 'kumbha', sa: 'Kumbha', en: 'Aquarius', hi: 'कुंभ', symbol: '♒', datesEn: 'Feb 13 – Mar 13', datesHi: '13 फरवरी – 13 मार्च', startM: 2, startD: 13, endM: 3, endD: 13, lord: 'Shani (Saturn)', lordHi: 'शनि', element: 'Air', elementHi: 'वायु', gemEn: 'Blue Sapphire / Amethyst', gemHi: 'नीलम / जमुन', color: 'Electric Blue', colorHi: 'विद्युत नीला', luckyNumber: 4, traitsEn: ['Original', 'Humanitarian', 'Independent', 'Detached'], traitsHi: ['मौलिक', 'लोककल्याणी', 'स्वावलंबी', 'विरक्त'], careerEn: 'Tech, research, social enterprise & innovation leverage your vision.', careerHi: 'टेक, अनुसंधान, सामाजिक उद्यम व अभिनवता आपकी दृष्टि को काम लाते हैं।', healthEn: 'Circulation & ankles; balance solitude with movement.', healthHi: 'परिसंचरण व टखने; एकांत को गति से संतुलित करें।', relationshipEn: 'Friendly and unconventional — needs space and shared ideals.', relationshipHi: 'मैत्रीपूर्ण व परंपरा-मुक्त — स्थान व साझा आदर्श चाहते हैं।', remedyEn: 'Saturn & Rudra abhishek + service to society aids Aquarius.', remedyHi: 'शनि व रूद्र अभिषेक व समाज-सेवा कुंभ को सहारा देती है।', mantraEn: 'Om Sham Shanaischaraya Namah', deityHi: 'शिव / शनि' },
  { key: 'meena', sa: 'Meena', en: 'Pisces', hi: 'मीन', symbol: '♓', datesEn: 'Mar 14 – Apr 13', datesHi: '14 मार्च – 13 अप्रैल', startM: 3, startD: 14, endM: 4, endD: 13, lord: 'Guru (Jupiter)', lordHi: 'बृहस्पति', element: 'Water', elementHi: 'जल', gemEn: 'Yellow Sapphire / Pearl', gemHi: 'पुखराज / मोती', color: 'Sea Green', colorHi: 'समुद्री हरा', luckyNumber: 3, traitsEn: ['Compassionate', 'Dreamy', 'Artistic', 'Escapist'], traitsHi: ['करुणामय', 'स्वप्नशील', 'कलात्मक', 'पलायनी'], careerEn: 'Healing, arts, spirituality & counselling suit your empathy.', careerHi: 'चिकित्सा, कला, अध्यात्म व परामर्श आपकी करुणा के अनुकूल हैं।', healthEn: 'Feet & immunity; grounding and routine help the sensitive Moon-ruled mind.', healthHi: 'पैर व रोग-प्रतिरोध; भूमिसंबंध व दिनचर्या संवेदनशील मन को सहारा देते हैं।', relationshipEn: 'Devoted and giving — seeks soul-connection and reassurance.', relationshipHi: 'अर्पित व दानी — आत्म-बंधन व आश्वासन चाहते हैं।', remedyEn: 'Thursday & Ganga-jal charity + mantra meditation steadies Pisces.', remedyHi: 'गुरुवार व जल-दान/मंत्र-ध्यान मीन लग्न को स्थिर करते हैं।', mantraEn: 'Om Gram Grim Grom Sah Gurave Namah', deityHi: 'विष्णु / बृहस्पति' },
];

/* ---- Indian / Chaldean numerology numbers 1–9 ---- */
export interface NumberProfile {
  n: number;
  planet: string;
  planetHi: string;
  title: string;
  titleHi: string;
  en: string;
  hi: string;
  color: string;
  colorHi: string;
  gem: string;
  gemHi: string;
  days: string;
}

export const NUMBERS: NumberProfile[] = [
  { n: 1, planet: 'Sun', planetHi: 'सूर्य', title: 'The Leader', titleHi: 'नेतृत्व', en: 'Pioneer, ambitious, original — destined to lead and start new ventures.', hi: 'आरंभक, आकांक्षी, मौलिक — नेतृत्व व नए कार्य हेतु नियमित।', color: 'Golden / Orange', colorHi: 'सुनहरा / नारंगी', gem: 'Ruby', gemHi: 'माणिक', days: 'Sunday' },
  { n: 2, planet: 'Moon', planetHi: 'चंद्र', title: 'The Diplomat', titleHi: 'समन्वयकारक', en: 'Sensitive, cooperative, imaginative — excels in care and partnerships.', hi: 'संवेदनशील, सहकारिताप्रिय, कल्पक — सेवा व साझेदारी में उत्कृष्ट।', color: 'White / Silver', colorHi: 'सफेद / चांदी', gem: 'Pearl', gemHi: 'मोती', days: 'Monday' },
  { n: 3, planet: 'Jupiter', planetHi: 'बृहस्पति', title: 'The Teacher', titleHi: 'गुरु', en: 'Wise, expressive, optimistic — a natural guide, mentor and counsellor.', hi: 'ज्ञानी, अभिव्यक्तिपूर्ण, आशावादी — सहज मार्गदर्शक व सलाहकार।', color: 'Yellow / Saffron', colorHi: 'पीला / केसरिया', gem: 'Yellow Sapphire', gemHi: 'पुखराज', days: 'Thursday' },
  { n: 4, planet: 'Rahu', planetHi: 'राहु', title: 'The Builder', titleHi: 'निर्माता', en: 'Systematic, unconventional, driven — builds structures against the grain.', hi: 'व्यवस्थित, परंपरा-मुक्त, मेहनती — विपरीत परिस्थिति में भी रचना करते हैं।', color: 'Grey / Blue', colorHi: 'ग्रे / नीला', gem: 'Hessonite', gemHi: 'गोमेद', days: 'Saturday' },
  { n: 5, planet: 'Mercury', planetHi: 'बुध', title: 'The Communicator', titleHi: 'संवादक', en: 'Agile, witty, trade-minded — excels in communication, media and business.', hi: 'चतुर, हास्यप्रिय, व्यापारिक — संपर्क, मीडिया व व्यवसाय में निपुण।', color: 'Green', colorHi: 'हरा', gem: 'Emerald', gemHi: 'पन्ना', days: 'Wednesday' },
  { n: 6, planet: 'Venus', planetHi: 'शुक्र', title: 'The Harmoniser', titleHi: 'सौंदर्यकारक', en: 'Artistic, loving, luxury-loving — drawn to beauty, family and comfort.', hi: 'कलात्मक, स्नेहमय, सुखप्रिय — सौंदर्य, परिवार व सुविधा की ओर आकृष्ट।', color: 'White / Pink', colorHi: 'सफेद / गुलाबी', gem: 'Diamond', gemHi: 'हीरा', days: 'Friday' },
  { n: 7, planet: 'Ketu', planetHi: 'केतु', title: 'The Mystic', titleHi: 'महामानी', en: 'Analytical, spiritual, introspective — seeks inner truth and research.', hi: 'विश्लेषणात्मक, आध्यात्मिक, अंतर्मुखी — भीतरी सत्य व अनुसंधान की खोज।', color: 'Light Green / Ash', colorHi: 'हल्का हरा / राख', gem: 'Cat\u2019s Eye', gemHi: 'लहसुनिया', days: 'Monday' },
  { n: 8, planet: 'Saturn', planetHi: 'शनि', title: 'The Achiever', titleHi: 'सिद्धसाधक', en: 'Disciplined, karmic, resilient — rises to power through patience and effort.', hi: 'अनुशासित, कर्मप्रधान, अडिग — धैर्य व परिश्रम से शिखर पर।', color: 'Dark Blue / Black', colorHi: 'गहरा नीला / काला', gem: 'Blue Sapphire', gemHi: 'नीलम', days: 'Saturday' },
  { n: 9, planet: 'Mars', planetHi: 'मंगल', title: 'The Warrior', titleHi: 'योद्धा', en: 'Courageous, energetic, humanitarian — acts decisively to serve and protect.', hi: 'साहसी, ऊर्जावान, सेवाभावी — संरक्षण व सेवा हेतु निर्णायक कर्म।', color: 'Red', colorHi: 'लाल', gem: 'Red Coral', gemHi: 'मोंगा', days: 'Tuesday' },
];

/* Chaldean letter→value (the standard Indian/Chaldean table) */
const CHALDEAN: Record<string, number> = {
  a: 1, i: 1, j: 1, q: 1, y: 1,
  b: 2, k: 2, r: 2,
  c: 3, g: 3, l: 3, s: 3,
  d: 4, m: 4, t: 4,
  e: 5, h: 5, n: 5, x: 5,
  u: 6, v: 6, w: 6,
  o: 7, z: 7,
  f: 8, p: 8,
};

function digitalRoot(value: number): number {
  while (value > 9) value = String(value).split('').reduce((s, d) => s + Number(d), 0);
  return value === 0 ? 9 : value;
}

export function chaldeanName(name: string): { total: number; reduced: number } {
  const letters = name.toLowerCase().replace(/[^a-z]/g, '');
  let total = 0;
  for (const ch of letters) total += CHALDEAN[ch] || 0;
  return { total, reduced: total ? digitalRoot(total) : 0 };
}

export interface VedicInput {
  dob: Date; // must be valid local date
  name?: string;
}

export interface VedicResult {
  rashi: RashiProfile;
  mulank: NumberProfile;    // psychic / birth-day number
  bhagyank: NumberProfile;  // destiny / full-date number
  nameNumber: { total: number; reduced: number; profile: NumberProfile | null };
  luckyNumbers: number[];
  sunDateLabel: string;
}

function findRashi(d: Date): RashiProfile {
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const md = m * 100 + day;
  for (const r of RASHI) {
    const start = r.startM * 100 + r.startD;
    const end = r.endM * 100 + r.endD;
    if (start <= end) {
      if (md >= start && md <= end) return r;
    } else {
      // wraps across Dec→Jan (e.g. Dhanu 1216 → 0113)
      if (md >= start || md <= end) return r;
    }
  }
  return RASHI[0];
}

export function computeVedic({ dob, name }: VedicInput): VedicResult {
  const rashi = findRashi(dob);
  const day = dob.getDate();
  const mm = dob.getMonth() + 1;
  const yyyy = dob.getFullYear();
  const allDigits = `${String(day).padStart(2, '0')}${String(mm).padStart(2, '0')}${yyyy}`.split('').reduce((s, d) => s + Number(d), 0);
  const mulank = NUMBERS[digitalRoot(day) - 1];
  const bhagyank = NUMBERS[digitalRoot(allDigits) - 1];
  const nn = name ? chaldeanName(name) : { total: 0, reduced: 0 };
  const nameProfile = nn.reduced ? NUMBERS[nn.reduced - 1] : null;
  return {
    rashi,
    mulank,
    bhagyank,
    nameNumber: { total: nn.total, reduced: nn.reduced, profile: nameProfile },
    luckyNumbers: Array.from(new Set([mulank.n, bhagyank.n, rashi.luckyNumber])),
    sunDateLabel: rashi.datesEn,
  };
}
