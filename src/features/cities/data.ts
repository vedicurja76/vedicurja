export interface City {
  slug: string;
  name: string;
  nameHi: string;
  state: string;
  stateHi: string;
  taglineEn: string;
  taglineHi: string;
  introEn: string;
  introHi: string;
  areas: { en: string; hi: string }[];
  localAngleEn: string;
  localAngleHi: string;
}

export interface CityFaq {
  qEn: string;
  qHi: string;
  aEn: string;
  aHi: string;
}

export function cityFaq(c: City): CityFaq[] {
  return [
    {
      qEn: `Who is the best Vastu consultant in ${c.name}?`,
      qHi: `${c.nameHi} में सर्वश्रेष्ठ वास्तु सलाहकार कौन हैं?`,
      aEn: `AstroVastu Expert KK Nagaich — a 4th-generation Vedic Vastu Guru, trained Tantra Sadhak, MBA and ex-CEO — personally handles Vastu consultation for homes, offices, shops and factories across ${c.name}.`,
      aHi: `एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच — 4वीं पीढ़ी के वैदिक वास्तु गुरु, प्रशिक्षित तंत्र साधक, MBA व पूर्व सीईओ — ${c.nameHi} में घरों, कार्यालयों, दुकानों व फैक्ट्रियों का वास्तु परामर्श स्वयं संपन्न करते हैं।`,
    },
    {
      qEn: `Do you offer online (virtual) Vastu consultation in ${c.name}?`,
      qHi: `क्या ${c.nameHi} में ऑनलाइन (वर्चुअल) वास्तु परामर्श उपलब्ध है?`,
      aEn: `Yes. Acharya ji conducts detailed virtual consultations over WhatsApp video for clients in ${c.name} and anywhere in the world — you only need a computerised layout plan and photos of your space.`,
      aHi: `जी हाँ। आचार्य जी ${c.nameHi} और दुनियाभर के ग्राहकों के लिए WhatsApp वीडियो पर विस्तृत वर्चुअल परामर्श करते हैं — आपको केवल कंप्यूटरीकृत नक्शा और अपने स्थान की फोटो चाहिए।`,
    },
    {
      qEn: `Can Vastu defects be corrected in ${c.name} without demolition?`,
      qHi: `क्या ${c.nameHi} में बिना तोड़-फोड़ के वास्तु दोष सुधारे जा सकते हैं?`,
      aEn: `In the majority of ${c.name} flats and offices, yes. Non-invasive remedies — yantras, crystals, colour therapy, furniture alignment and directional corrections — remove most doshas without breaking a single wall.`,
      aHi: `${c.nameHi} के अधिकांश फ्लैटों व कार्यालयों में जी हाँ। बिना तोड़-फोड़ के उपचार — यंत्र, स्फटिक, रंग थेरेपी, फर्नीचर संरेखण व दिशा-सुधार — एक भी दीवार तोड़े अधिकांश दोष हटा देते हैं।`,
    },
    {
      qEn: `How much does a Vastu consultation cost in ${c.name}?`,
      qHi: `${c.nameHi} में वास्तु परामर्श की लागत कितनी है?`,
      aEn: `Pricing is transparent and area-based (from about ₹7 per sq.ft.), with tiered Silver, Gold and Luxury plans. Open the booking page or message us on WhatsApp for an exact quote for your ${c.name} property.`,
      aHi: `मूल्य पारदर्शी एवं क्षेत्र-आधारित हैं (लगभग ₹7 प्रति वर्ग फुट से), रजत, स्वर्ण व लक्ज़री योजनाओं के साथ। अपने ${c.nameHi} स्थान का सटीक मूल्य जानने हेतु बुकिंग पेज खोलें या WhatsApp पर संदेश करें।`,
    },
    {
      qEn: `Which areas of ${c.name} do you cover?`,
      qHi: `आप ${c.nameHi} के कौन-कौन से क्षेत्रों में सेवा देते हैं?`,
      aEn: `We serve all major localities including ${c.areas.slice(0, 5).map((a) => a.en).join(', ')} and surrounding regions of ${c.name}, ${c.state}.`,
      aHi: `हम ${c.nameHi}, ${c.stateHi} के प्रमुख क्षेत्रों — जिनमें ${c.areas.slice(0, 5).map((a) => a.hi).join(', ')} शामिल हैं — तथा आस-पास के इलाकों में सेवा देते हैं।`,
    },
  ];
}

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export const CITIES: City[] = [
  {
    slug: 'lucknow',
    name: 'Lucknow',
    nameHi: 'लखनऊ',
    state: 'Uttar Pradesh',
    stateHi: 'उत्तर प्रदेश',
    taglineEn: 'No.1 Vastu Consultant in Lucknow',
    taglineHi: 'लखनऊ में सर्वश्रेष्ठ वास्तु विशेषज्ञ',
    introEn:
      'AstroVastu Expert KK Nagaich brings 4th-generation Vedic Vastu, Tantra ritual mastery and MBA-grade precision to homes, offices, shops and factories across Lucknow — from Hazratganj to Gomti Nagar.',
    introHi:
      'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच 4 पीढ़ियों की वैदिक वास्तु, तंत्र अनुष्ठान विशेषज्ञता और MBA-स्तरीय सटीकता लखनऊ के घरों, कार्यालयों, दुकानों और फैक्ट्रियों तक लाते हैं — हज़रतगंज से गोमती नगर तक।',
    areas: [
      { en: 'Hazratganj', hi: 'हज़रतगंज' },
      { en: 'Gomti Nagar', hi: 'गोमती नगर' },
      { en: 'Alambagh', hi: 'आलमबाग' },
      { en: 'Indira Nagar', hi: 'इंदिरा नगर' },
      { en: 'Aminabad', hi: 'अमीनाबाद' },
      { en: 'Chowk', hi: 'चौक' },
      { en: 'Sitapur Road', hi: 'सीतापुर रोड' },
      { en: 'Kisan Path', hi: 'किसान पथ' },
    ],
    localAngleEn:
      'Lucknow\'s mix of heritage havelis, new-group-housing flats and growing IT corridors each carry distinct Vastu challenges — Acharya ji audits the plot direction, kitchen and master-cylinder placement personally.',
    localAngleHi:
      'लखनऊ की पुरानी हवेलियां, नए ग्रुप हाउसिंग फ्लैट और बढ़ते IT कॉरिडोर — हर एक की अपनी वास्तु चुनौती है। आचार्य जी प्लॉट की दिशा, रसोई और मास्टर सिलेंडर की स्थिति का स्वयं निरीक्षण करते हैं।',
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    nameHi: 'मुंबई',
    state: 'Maharashtra',
    stateHi: 'महाराष्ट्र',
    taglineEn: 'Leading Vastu Consultant in Mumbai',
    taglineHi: 'मुंबई में अग्रणी वास्तु विशेषज्ञ',
    introEn:
      'In India\'s financial capital, every square foot of a high-rise flat or BKC office carries money-energy. AstroVastu Expert KK Nagaich maps Vastu defects directly to your P&L — with virtual and on-site consultations across Mumbai.',
    introHi:
      'भारत की वित्तीय राजधानी में, हाई-राइज़ फ्लैट या BKC कार्यालय का हर वर्ग फुट धन-ऊर्जा से जुड़ा है। एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच आपके वास्तु दोषों को सीधे मुनाफा-नुकसान से जोड़ते हैं — मुंबई भर में वर्चुअल व साइट परामर्श के साथ।',
    areas: [
      { en: 'Bandra', hi: 'बांद्रा' },
      { en: 'Andheri', hi: 'आंधेरी' },
      { en: 'BKC', hi: 'बीकेसी' },
      { en: 'Powai', hi: 'पोवाई' },
      { en: 'Malad', hi: 'मलाड' },
      { en: 'Thane', hi: 'ठाणे' },
      { en: 'Navi Mumbai', hi: 'नवी मुंबई' },
      { en: 'Colaba', hi: 'कोलाबा' },
    ],
    localAngleEn:
      'Mumbai apartments often face cut-plots, irregular shapes and shared-wall kitchens. Acharya ji applies non-structural remedies — yantras, crystals and colour therapy — so you never need demolition.',
    localAngleHi:
      'मुंबई के अपार्टमेंट में अक्सर कट-प्लॉट, अनियमित आकार और साझा दीवार वाली रसोई की समस्या होती है। आचार्य जी बिना तोड़-फोड़ के उपचार — यंत्र, स्फटिक व रंग थेरेपी — लागू करते हैं।',
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    nameHi: 'दिल्ली',
    state: 'Delhi NCR',
    stateHi: 'दिल्ली एनसीआर',
    taglineEn: 'Trusted Vastu Expert in Delhi',
    taglineHi: 'दिल्ली में विश्वसनीय वास्तु विशेषज्ञ',
    introEn:
      'From Lutyens bungalows to DDA flats and Okhla industrial units, AstroVastu Expert KK Nagaich has guided thousands of Delhi families and businesses towards health, wealth and harmony through authentic Vedic Vastu.',
    introHi:
      'लुटियंस बंगले से DDA फ्लैट और ओखला के औद्योगिक इकाइयों तक — एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच ने हज़ारों दिल्ली परिवारों और व्यवसायों को प्रामाणिक वैदिक वास्तु से स्वास्थ्य, धन और समृद्धि की ओर मार्गदर्शन दिया है।',
    areas: [
      { en: 'Dwarka', hi: 'द्वारका' },
      { en: 'Rohini', hi: 'रोहिणी' },
      { en: 'Saket', hi: 'साकेत' },
      { en: 'Vasant Kunj', hi: 'वसंत कुंज' },
      { en: 'Karol Bagh', hi: 'करोल बाग' },
      { en: 'Lajpat Nagar', hi: 'राजपथ नगर' },
      { en: 'Mayur Vihar', hi: 'मयूर विहार' },
      { en: 'Okhla', hi: 'ओखला' },
    ],
    localAngleEn:
      'Delhi\'s older colonies often have main doors in inauspicious directions. Acharya ji corrects entrance, staircase and puja-room energy without disturbing the structure.',
    localAngleHi:
      'दिल्ली के पुराने कॉलोनियों में मुख्य द्वार अक्सर अशुभ दिशा में होते हैं। आचार्य जी संरचना को बिना छेड़े प्रवेश सीढ़ी और पूजा घर की ऊर्जा सुधारते हैं।',
  },
  {
    slug: 'noida',
    name: 'Noida',
    nameHi: 'नोएडा',
    state: 'Uttar Pradesh',
    stateHi: 'उत्तर प्रदेश',
    taglineEn: 'Vastu Consultant in Noida & Greater Noida',
    taglineHi: 'नोएडा व ग्रेटर नोएडा में वास्तु विशेषज्ञ',
    introEn:
      'Noida\'s sector-based plotted homes and tech-park offices benefit enormously from directional planning. KK Nagaich consults for new constructions, ready-to-move flats and startups across Noida and Greater Noida.',
    introHi:
      'नोएडा के सेक्टर-आधारित प्लॉटेड घर और टेक-पार्क कार्यालय दिशा-नियोजन से भरपूर लाभ पाते हैं। के. के. नागाइच नोएडा व ग्रेटर नोएडा में नए निर्माण, रेडी-टू-मुव फ्लैट और स्टार्टअप के लिए परामर्श देते हैं।',
    areas: [
      { en: 'Sector 18', hi: 'सेक्टर 18' },
      { en: 'Sector 62', hi: 'सेक्टर 62' },
      { en: 'Sector 150', hi: 'सेक्टर 150' },
      { en: 'Greater Noida West', hi: 'ग्रेटर नोएडा वेस्ट' },
      { en: 'Blue Area', hi: 'ब्लू एरिया' },
      { en: 'Nodia Extension', hi: 'नोएडा एक्सप्रेशन' },
    ],
    localAngleEn:
      'Many Noida flats have the kitchen or master bedroom in the wrong zone. Acharya ji re-aligns the five elements (Panch Mahabhuta) with simple, renter-friendly remedies.',
    localAngleHi:
      'कई नोएडा फ्लैटों में रसोई या मास्टर बेडरूम गलत जोन में होता है। आचार्य जी सरल, किरायेदार-अनुकूल उपायों से पांच तत्वों (पंच महाभूत) को संरेखित करते हैं।',
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    nameHi: 'गुरुग्राम',
    state: 'Haryana',
    stateHi: 'हरियाणा',
    taglineEn: 'Vastu Expert for Gurugram Homes & Corporate Offices',
    taglineHi: 'गुरुग्राम के घर व कॉर्पोरेट कार्यालयों के वास्तु विशेषज्ञ',
    introEn:
      'Gurugram\'s high-rise residences and multinational corporate towers demand Vastu that speaks boardroom language. An MBA & ex-CEO himself, KK Nagaich aligns cabin placement, cash counters and CEO zones to business outcomes.',
    introHi:
      'गुरुग्राम के हाई-राइज़ आवास व बहुराष्ट्रीय कॉर्पोरेट टावर ऐसे वास्तु मांगते हैं जो बोर्डरूम की भाषा बोले। स्वयं MBA व पूर्व सीईओ, के. के. नागाइच कैबिन प्लेसमेंट, कैश काउंटर और सीईओ ज़ोन को व्यावसायिक परिणामों के अनुसार संरेखित करते हैं।',
    areas: [
      { en: 'Golf Course Road', hi: 'गॉल्फ कोर्स रोड' },
      { en: 'Sector 29', hi: 'सेक्टर 29' },
      { en: 'Sohna Road', hi: 'सोहना रोड' },
      { en: 'DLF Phase', hi: 'डीएलएफ फेज़' },
      { en: 'Manesar', hi: 'मनेसर' },
      { en: 'Sector 56', hi: 'सेक्टर 56' },
    ],
    localAngleEn:
      'High-rise offices often suffer from attrition and stalled client deals due to spatial defects. Acharya ji identifies the leaking zones and prescribes targeted yantras and rituals.',
    localAngleHi:
      'हाई-राइज़ कार्यालयों में अक्सर स्थानिक दोषों से कर्मचारी बहाव और रुकी हुई डील होती हैं। आचार्य जी रिसाव वाले क्षेत्र पहचानकर लक्षित यंत्र व अनुष्ठान बताते हैं।',
  },
  {
    slug: 'pune',
    name: 'Pune',
    nameHi: 'पुणे',
    state: 'Maharashtra',
    stateHi: 'महाराष्ट्र',
    taglineEn: 'Vastu Consultant in Pune',
    taglineHi: 'पुणे में वास्तु विशेषज्ञ',
    introEn:
      'Pune blends ancestral wadas with booming Hinjawadi IT homes and automobile plants. AstroVastu Expert KK Nagaich offers grounded Vastu for families, software professionals and industrial units across the city.',
    introHi:
      'पुणे में पैतृक वड़े, बढ़ता हुआ हिंजवाडी IT आवास और ऑटोमोबाइल प्लांट का मिश्रण है। एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच शहर के परिवारों, सॉफ्टवेयर पेशेवरों और औद्योगिक इकाइयों के लिए प्रामाणिक वास्तु सेवा देते हैं।',
    areas: [
      { en: 'Kothrud', hi: 'कोठरूड' },
      { en: 'Hinjawadi', hi: 'हिंजवाडी' },
      { en: 'Baner', hi: 'बाणे' },
      { en: 'Wakad', hi: 'वाकड़' },
      { en: 'Viman Nagar', hi: 'विमान नगर' },
      { en: 'Hadapsar', hi: 'हडप्सर' },
    ],
    localAngleEn:
      'Pune\'s west-facing flats and sloped plots need careful element balancing. Acharya ji performs Bhoomi Shanti before new construction and Navagraha Shanti for existing homes.',
    localAngleHi:
      'पुणे के पश्चिम-मुख फ्लैट और ढलान वाले प्लॉट सावधान तत्व-संतुलन मांगते हैं। आचार्य जी नए निर्माण से पहले भूमि शांति और मौजूदा घरों के लिए नवग्रह शांति करते हैं।',
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    nameHi: 'बेंगलुरु',
    state: 'Karnataka',
    stateHi: 'कर्नाटक',
    taglineEn: 'Vastu Expert in Bengaluru',
    taglineHi: 'बेंगलुरु में वास्तु विशेषज्ञ',
    introEn:
      'For Bengaluru\'s tech founders and NRI families alike, AstroVastu Expert KK Nagaich combines classical Vedic Vastu with measurable business insight — correcting homes in Whitefield and offices in Koramangala alike.',
    introHi:
      'बेंगलुरु के टेक संस्थापकों व प्रवासी भारतीय परिवारों दोनों के लिए, एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच शास्त्रीय वैदिक वास्तु को मापने योग्य व्यावसायिक अंतर्दृष्टि के साथ जोड़ते हैं — व्हाइटफील्ड के घर और कोरमंगलाम कार्यालय दोनों के सुधार।',
    areas: [
      { en: 'Whitefield', hi: 'व्हाइटफील्ड' },
      { en: 'Koramangala', hi: 'कोरमंगलाम' },
      { en: 'Indiranagar', hi: 'इंदिरानगर' },
      { en: 'HSR Layout', hi: 'एचएसआर लेआउट' },
      { en: 'Electronic City', hi: 'इलेक्ट्रॉनिक्स सिटी' },
      { en: 'JP Nagar', hi: 'जेपी नगर' },
    ],
    localAngleEn:
      'Startup offices with irregular floor plates face funding and attrition stress. Acharya ji maps every defect to productivity and recommends non-invasive corrections.',
    localAngleHi:
      'अनियमित फ्लोर प्लेट वाले स्टार्टअप कार्यालय फंडिंग व कर्मचारी तनाव झेलते हैं। आचार्य जी हर दोष को उत्पादकता से जोड़कर बिना तोड़-फोड़ सुधार सुझाते हैं।',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    nameHi: 'हैदराबाद',
    state: 'Telangana',
    stateHi: 'तेलंगाना',
    taglineEn: 'Vastu Consultant in Hyderabad',
    taglineHi: 'हैदराबाद में वास्तु विशेषज्ञ',
    introEn:
      'From Gachibowli villa communities to HITEC-city offices, AstroVastu Expert KK Nagaich serves Hyderabad with personalised, ritual-backed Vedic Vastu for homes, businesses and industrial plots.',
    introHi:
      'गांचीबौली विला कॉम्युनिटी से HITEC-सिटी कार्यालयों तक, एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच हैदराबाद को घर, व्यवसाय और औद्योगिक प्लॉट के लिए व्यक्तिगत, अनुष्ठान-समर्थित वैदिक वास्तु सेवा देते हैं।',
    areas: [
      { en: 'Gachibowli', hi: 'गांचीबौली' },
      { en: 'Kondapur', hi: 'कोंडापूर' },
      { en: 'HITEC City', hi: 'हाईटेक सिटी' },
      { en: 'Banjara Hills', hi: 'बंजारा हिल्स' },
      { en: 'Jubilee Hills', hi: 'जुबिली हिल्स' },
      { en: 'LB Nagar', hi: 'एलबी नगर' },
    ],
    localAngleEn:
      'Villa plots in Hyderabad\'s new townships often ignore Ishanya (north-east) rules. Acharya ji corrects the master bedroom, puja location and water bodies before move-in.',
    localAngleHi:
      'हैदराबाद के नए टाउनशिप के विला प्लॉट अक्सर ईशान ( उत्तर-पूर्व) नियम नज़रअंदाज़ करते हैं। आचार्य जी shift से पहले मास्टर बेडरूम, पूजा स्थान व जल स्रोत सुधारते हैं।',
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    nameHi: 'अहमदाबाद',
    state: 'Gujarat',
    stateHi: 'गुजरात',
    taglineEn: 'Vastu Expert in Ahmedabad',
    taglineHi: 'अहमदाबाद में वास्तु विशेषज्ञ',
    introEn:
      'Ahmedabad\'s trading families, GIDC factories and new townships across the SG corridor rely on AstroVastu Expert KK Nagaich for commercially-aware, spiritually-grounded Vastu that protects wealth and health.',
    introHi:
      'अहमदाबाद के व्यापारी परिवार, GIDC फैक्ट्रियां और एसजी कॉरिडोर के नए टाउनशिप एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच पर भरोसा करते हैं — व्यावसायिक दृष्टि व आध्यात्मिक आधार वाली वास्तु जो धन व स्वास्थ्य की रक्षा करे।',
    areas: [
      { en: 'SG Highway', hi: 'एसजी हाईवे' },
      { en: 'Bopal', hi: 'बोपाल' },
      { en: 'Satellite', hi: 'सैटेलाइट' },
      { en: 'Gandhinagar', hi: 'गांधीनगर' },
      { en: 'Sanand GIDC', hi: 'सानंद GIDC' },
      { en: 'Nikol', hi: 'निकोल' },
    ],
    localAngleEn:
      'GIDC industrial plots demand Vastu tied to output, downtime and safety. Acharya ji, an MBA & ex-CEO, audits machinery zones and fire directions personally.',
    localAngleHi:
      'GIDC औद्योगिक प्लॉट को उत्पादन, डाउनटाइम व सुरक्षा से जुड़ी वास्तु चाहिए। MBA व पूर्व सीईओ आचार्य जी मशीनरी ज़ोन व अग्नि दिशाओं का स्वयं ऑडिट करते हैं।',
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    nameHi: 'कोलकाता',
    state: 'West Bengal',
    stateHi: 'पश्चिम बंगाल',
    taglineEn: 'Vastu Consultant in Kolkata',
    taglineHi: 'कोलकाता में वास्तु विशेषज्ञ',
    introEn:
      'Kolkata\'s heritage apartments, salt-landscape new flats and busy trading lanes get Vastu that honours tradition and modern living from AstroVastu Expert KK Nagaich.',
    introHi:
      'कोलकाता के विरासती अपार्टमेंट, सॉलेट-लैंडस्केप के नए फ्लैट और व्यस्त व्यापार गलियां एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच से परंपरा व आधुनिक जीवन का सम्मान करती वास्तु पाती हैं।',
    areas: [
      { en: 'Salt Lake', hi: 'सॉलेट लेक' },
      { en: 'New Town', hi: 'न्यू टाउन' },
      { en: 'Ballygunge', hi: 'बालीगंज' },
      { en: 'Dumdum', hi: 'दमदम' },
      { en: 'Behala', hi: 'बेहाला' },
      { en: 'Rajarhat', hi: 'राजारहाट' },
    ],
    localAngleEn:
      'Dense multi-storey buildings bring shared-wall doshas. Acharya ji balances the Panch Mahabhuta with crystals and yantras suited to a rented or owned flat.',
    localAngleHi:
      'घने बहुमंज़िला भवनों में साझा-दीवार दोष आते हैं। आचार्य जी किराये या स्वामित्व के फ्लैट के उपयुक्त स्फटिक व यंत्र से पंच महाभूत को संतुलित करते हैं।',
  },
];
