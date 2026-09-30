'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export default function BlogPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      
        <article className="pt-28 pb-20 min-h-screen">

          {/* ── Luxury Hero ── */}
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-2)]/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,180,255,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-25 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 45 Q50 10 75 45 L75 85 L25 85 Z" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="40" y="60" width="20" height="25" rx="2" fill="none" stroke="#E8B960" strokeWidth="1.2" opacity="0.5"/>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E8B960" strokeWidth="0.8" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="35s" repeatCount="indefinite"/>
                  </circle>
                  <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#E8B960" fontFamily="serif">SW</text>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                {bi('Back to Archives', 'आर्काइव पर वापस')}
              </Link>

              <div className="flex items-center gap-3 text-sm text-[var(--color-hero-fg)]/50 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{bi('Vastu Science', 'वास्तु विज्ञान')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('9 min read', '9 मिनट का पाठ')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('By', 'लेखक:')} AstroVastu Expert KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-hero-fg)] leading-tight mb-4">
                {bi('Bedroom Vastu —', 'शयनकक्ष वास्तु —')}{' '}
                <span className="bg-gradient-to-r from-blue-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">
                  {bi('Marital Harmony and Restful Sleep', 'दाम्पत्य सौहार्द और सुखद निद्रा')}
                </span>
              </h1>
              <p className="text-lg text-[var(--color-hero-fg)]/60 max-w-3xl">
                {bi('How bedroom placement, bed direction, mirror positioning, and colour therapy determine the quality of your sleep, the health of your marriage, and the emotional stability of your entire household — backed by magnetic field research and clinical case studies.', 'शयनकक्ष का स्थान, बिछौने की दिशा, दर्पण-विन्यास और रंग-थेरेपी आपकी नींद की गुणवत्ता, आपके विवाह के स्वास्थ्य और संपूर्ण घर के भावनात्मक संतुलन को कैसे निर्धारित करती हैं — चुंबकीय क्षेत्र अनुसंधान और नैदानिक केस स्टडीज़ द्वारा प्रमाणित।')}
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                {bi('We spend approximately one‑third of our lives in the bedroom — more time than in any other single room. The bedroom is where the body repairs itself, where the subconscious processes the day, and where the most intimate bonds of marriage are either strengthened or strained. In Vastu Shastra, the master bedroom is not merely a sleeping chamber — it is the energetic anchor of the entire household. When aligned correctly, it stabilises relationships, deepens sleep, and fosters emotional security. When misaligned, it can cause insomnia, marital discord, chronic anxiety, and even fertility challenges. National Sleep Foundation data confirms that sleep environment directly impacts sleep quality, with direction, light, and electromagnetic fields playing measurable roles. This guide presents the complete Vastu framework for bedroom design — all grounded in published research and two decades of clinical practice.', 'हम अपने जीवन का लगभग एक-तिहाई भाग शयनकक्ष में बिताते हैं — किसी भी अन्य एकल कक्ष की तुलना में अधिक। शयनकक्ष वह स्थान है जहाँ शरीर की मरम्मत होती है, जहाँ अवचेतन मन दिन का प्रसंस्करण करता है, और जहाँ विवाह के अति-निविड़ बंधन या तो मजबूत होते हैं या तनावग्रस्त। वास्तु शास्त्र में मुख्य शयनकक्ष केवल सोने का कक्ष नहीं — यह संपूर्ण गृह की ऊर्जात्मक लंगर है। यथाविधि संरेखित होने पर यह रिश्तों को स्थिर करता है, नींद को गहरा करता है और भावनात्मक सुरक्षा पोषित करता है। असंरेखित रहने पर अनिद्रा, दाम्पत्य कलह, पुरानी चिंता और यहाँ तक कि गर्भधारण-चुनौतियां भी रच सकती है। नेशनल स्लीप फाउंडेशन का डेटा पुष्टि करता है कि नींद का वातावरण नींद की गुणवत्ता को प्रत्यक्ष प्रभावित करता है, जिसमें दिशा, प्रकाश और विद्युतचुंबकीय क्षेत्र मापनीय भूमिका निभाते हैं। यह गाइड शयनकक्ष-डिज़ाइन का संपूर्ण वास्तु ढांचा प्रस्तुत करती है — सब प्रकाशित शोध और बीस वर्षों के व्यावहारिक अनुभव पर आधारित।')}
              </p>

              {/* ── Section 1: Ideal Location ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-indigo-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('The Master Bedroom — South‑West, the Anchor of Stability', 'मुख्य शयनकक्ष — दक्षिण-पश्चिम, स्थिरता की लंगर')}</h2>
                </div>
                <p>{bi('Vastu Shastra prescribes the ', 'वास्तु शास्त्र मुख्य शयनकक्ष हेतु ')}<strong>{bi('South‑West (Nairutya) corner', 'दक्षिण-पश्चिम (नैर्ऋत्य) कोण')}</strong>{bi(' as the unequivocally ideal location for the master bedroom. This direction is governed by the Earth element (Prithvi) — the heaviest, most stable of the five elements — and is associated with Lord Nairutya, the deity of strength, protection, and rootedness. The master bedroom in the SW provides the adults of the household with the energetic grounding they need to make sound decisions, maintain emotional equilibrium, and sustain a stable marriage.', ' को निर्विवाद रूप से आदर्श स्थान निर्दिष्ट करता है। यह दिशा पृथ्वी तत्व (Prithvi) के अधीन है — पाँचों तत्वों में सर्वाधिक भारी, सर्वाधिक स्थिर — और नैर्ऋत्य देव से जुड़ी है, जो शक्ति, संरक्षा और दृढ़ मूलता के देवता हैं। दक्षिण-पश्चिम में मुख्य शयनकक्ष घर के वयस्कों को वह ऊर्जात्मक भू-संस्पर्श (grounding) प्रदान करता है जो समीचीन निर्णय लेने, भावनात्मक संतुलन बनाए रखने और स्थिर दाम्पत्यजीवन जीने हेतु आवश्यक है।')}</p>
                <p>{bi('Modern building science concurs: the SW quadrant receives the most stable, cumulative solar radiation in the northern hemisphere. Walls in this direction act as thermal mass, absorbing heat slowly by day and releasing it gradually at night. The resulting temperature stability — fewer temperature fluctuations through the night — is a known contributor to uninterrupted, restorative sleep. Multiple studies have demonstrated that stable thermal environments improve sleep efficiency and reduce nocturnal awakenings.', 'आधुनिक बिल्डिंग विज्ञान भी सहमत है: उत्तरी गोलार्ध में दक्षिण-पश्चिम चतुर्थांश सर्वाधिक स्थिर, संचित सौर विकिरण पाता है। इस दिशा की दीवारें थर्मल मास का कार्य करती हैं — दिन में मंदगति से गर्मी सोखती हैं और रात में क्रमशः छोड़ती हैं। इससे उत्पन्न तापमान-स्थिरता — रात भर कम उतार-चढ़ाव — अखंड, पुनर्ताजाकारीणी नींद का ज्ञात कारक है। अनेक अध्ययनों में दर्शाया गया है कि स्थिर ऊष्मीय वातावरण नींद-क्षमता बढ़ाते हैं और रात्रि-जागरण घटाते हैं।')}</p>

                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-200">
                    <h3 className="font-serif text-lg text-blue-800 font-bold mb-2">{bi('Children\'s Bedrooms', 'बच्चों के शयनकक्ष')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('Place children in the ', 'बच्चों को ')}<strong>{bi('North‑West', 'उत्तर-पश्चिम')}</strong>{bi(' (stimulates growth, learning, and leadership) or ', ' (वृद्धि, शिक्षण और नेतृत्व को उत्तेजित करता है) या ')}<strong>{bi('West', 'पश्चिम')}</strong>{bi(' (calms excess energy, improves focus). Children should never sleep in the South‑East — the fire zone — as this can cause aggression, restlessness, and difficulty concentrating in school.', ' (अतिरिक्त ऊर्जा को शांत कर, एकाग्रता बढ़ाता है) — वहाँ सुलाएँ। बच्चों को दक्षिण-पूर्व — अग्नि-क्षेत्र — में कभी नहीं सोचना चाहिए, इससे आक्रामकता, बेचैनी और विद्यालय में एकाग्रता-कठिनाई हो सकती है।')}</p>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-lg text-red-800 font-bold mb-2">{bi('Elderly Parents / Guests', 'वरिष्ठ माता-पिता / अतिथि')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('The ', 'वरिष्ठजनों के लिए ')}<strong>{bi('South', 'दक्षिण')}</strong>{bi(' direction is ideal for elderly family members, providing stability and health support. The ', ' दिशा आदर्श है, जो स्थिरता और स्वास्थ्य-सहायता देती है। ')}<strong>{bi('North', 'उत्तर')}</strong>{bi(' is acceptable for short‑term guest stays but should never be used as a permanent bedroom — it belongs to Kuber, the God of Wealth, and using it for sleeping drains financial energy.', ' अल्पकालिक अतिथि-निवास हेतु स्वीकार्य है, परंतु इसे कभी स्थायी शयनकक्ष के रूप में नहीं प्रयोग करना चाहिए — यह कुबेर (धन के देवता) का क्षेत्र है, और यहाँ सोने से आर्थिक ऊर्जा का क्षय होता है।')}</p>
                  </div>
                </div>
              </div>

              {/* ── Section 2: Sleeping Direction ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Sleeping Direction — The Science of Magnetic Alignment', 'सोने की दिशा — चुंबकीय संरेखण का विज्ञान')}</h2>
                </div>
                <p>{bi('The direction in which you place your head while sleeping is, arguably, the single most important Vastu decision in the bedroom. The human body is not electrically neutral — it contains iron‑rich blood (haemoglobin), and the brain and heart generate measurable electromagnetic fields. The Earth itself is a giant magnet, with field lines running from the geographic South Pole to the geographic North Pole.', 'सोते समय सिर की जिस दिशा को आप चुनते हैं, वह कहें तो निर्विवाद रूप से शयनकक्ष का सर्वाधिक महत्वपूर्ण वास्तु निर्णय है। मानव शरीर विद्युतीय दृष्टि से उदासीन नहीं — इसमें लोह-समृद्ध रक्त (हीमोग्लोबिन) होता है, और मस्तिष्क तथा हृदय मापनीय विद्युतचुंबकीय क्षेत्र रचते हैं। पृथ्वी स्वयं एक विशाल चुंबक है, जिसकी क्षेत्र-रेखाएँ भौगोलिक दक्षिण ध्रुव से भौगोलिक उत्तर ध्रुव तक चलती हैं।')}</p>
                <p>{bi('Sleeping with the ', 'सिर ')}<strong>{bi('head towards the South', 'दक्षिण की ओर रखकर सोना')}</strong>{bi(' aligns the body\'s own magnetic polarity with the Earth\'s natural field. The head (positive pole) faces South (magnetic positive); the feet (negative pole) face North (magnetic negative). This alignment places the body in electromagnetic harmony with the planet — reducing stress on the cardiovascular system, lowering blood pressure, and promoting the deepest possible sleep.', ' शरीर की अपनी चुंबकीय ध्रुवीयता को पृथ्वी के प्राकृतिक क्षेत्र के साथ संरेखित करता है। सिर (धन ध्रुव) दक्षिण (चुंबकीय धन) की ओर रहता है; पैर (ऋण ध्रुव) उत्तर (चुंबकीय ऋण) की ओर। यह संरेखण शरीर को ग्रह के साथ विद्युतचुंबकीय सौहार्द में स्थापित करता है — हृदय-संवहन तंत्र पर तनाव घटाता है, रक्तचाप कम करता है और यथासंभव गहरी नींद प्रदान करता है।')}</p>

                <div className="mt-5 p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-prakash-gold/20 mb-4">
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi('The National Sleep Foundation\'s Position', 'नेशनल स्लीप फाउंडेशन का रुख')}</h3>
                  <p className="text-sm text-nidra-indigo/70">{bi('The NSF acknowledges this alignment as beneficial, noting that sleeping head‑south "mirrors the natural flow of the Earth\'s magnetic field, helping promote calm, restorative sleep." A paper published in the ', 'NSF इस संरेखण को लाभकारी स्वीकार करती है और कहती है कि सिर दक्षिण रखकर सोना "पृथ्वी के चुंबकीय क्षेत्र की प्राकृतिक धारा का प्रतिबिंब है, जो शांत, पुनर्ताजाकारीणी नींद को बढ़ावा देने में सहायक है।" एक ')}<em>{bi('Journal of Alternative and Complementary Medicine', 'जर्नल ऑफ ऑल्टरनेटिव एंड कंप्लीमेंट्री मेडिसिन')}</em>{bi(' found that participants sleeping head‑south experienced ', ' में प्रकाशित शोध-पत्र ने पाया कि सिर दक्षिण रखकर सोने वाले सहभागियों को ')}<strong>{bi('approximately 25% improvement in sleep quality', 'नींद की गुणवत्ता में लगभग 25% सुधार')}</strong>{bi(' and significantly reduced blood pressure fluctuations compared to those sleeping head‑north.', ' मिला और सिर उत्तर रखकर सोने वालों की तुलना में रक्तचाप के उतार-चढ़ाव उल्लेखनीय रूप से घटे।')}</p>
                </div>

                <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200">
                  <h3 className="font-serif text-lg text-red-800 font-bold mb-2">{bi('Never Sleep Head‑North', 'सिर उत्तर रखकर कभी न सोएँ')}</h3>
                  <p className="text-sm text-nidra-indigo/70">{bi('Sleeping with the head towards the North places the body\'s magnetic field in opposition to the Earth\'s — like two positive ends of a magnet forced together. This subtle but persistent electromagnetic stress manifests as disturbed sleep, morning headaches, nightmares, and a sense of exhaustion even after a full night\'s rest. The human body, over years of this alignment, experiences chronic low‑grade cardiovascular stress. In Vedic belief, the North is the direction from which the soul departs the body at death — sleeping head‑north is considered an invitation to this energy.', 'सिर उत्तर की ओर रखकर सोना शरीर के चुंबकीय क्षेत्र को पृथ्वी के क्षेत्र के विरुद्ध खड़ा कर देता है — जैसे चुंबक के दोनों धन ध्रुवों को जबरन सटा दिया जाए। यह सूक्ष्म किंतु निरंतर विद्युतचुंबकीय तनाव विक्षिप्त नींद, प्रातःकालीन सिरदर्द, दुःसपनों और पूरी रात के विश्राम के बाद भी थकावट के अनुभव के रूप में प्रकट होता है। मानव शरीर इस संरेखण में वर्षों तक रहकर पुरानी, निम्न-कोटी का हृदय-संवहन तनाव झेलता है। वैदिक मान्यता में उत्तर वह दिशा है जिससे मृत्यु के समय आत्मा शरीर त्यागती है — सिर उत्तर रखकर सोना इस ऊर्जा को निमंत्रण माना जाता है।')}</p>
                </div>
              </div>

              {/* ── Section 3: Mirror Dosha ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('The Mirror Dosha — Why It\'s the #1 Cause of Marital Discord', 'दर्पण दोष — दाम्पत्य कलह का प्रथम कारण क्यों')}</h2>
                </div>
                <p>{bi('If there is one Vastu rule that even sceptics acknowledge after personal experience, it is this: ', 'यदि कोई एक वास्तु नियम है जिसे संदेहवादी भी व्यक्तिगत अनुभव के बाद स्वीकार करते हैं, तो वह यह है: ')}<strong>{bi('never place a mirror directly opposite the bed', 'दर्पण को कभी बिछौने के ठीक सम्मुख न रखें')}</strong>{bi('. The mirror acts as an energy reflector — it bounces the couple\'s own energy back at them, creating a feedback loop that amplifies disagreements, creates a sense of being watched (a third entity in the relationship), and — in documented cases — has been linked to infidelity and separation.', '। दर्पण ऊर्जा-परावर्तक का कार्य करता है — यह दंपति की अपनी ऊर्जा को लौटाकर उनके ही ऊपर फेंकता है, एक प्रतिपुष्टि-चक्र रचता है जो मतभेदों को बढ़ाता है, देखे जाने का अनुभव (संबंध में एक तृतीय सत्ता) उत्पन्न करता है, और — प्रलेखित मामलों में — व्यभिचार और पृथक्करण से जोड़ा गया है।')}</p>

                <div className="mt-4 space-y-4">
                  <div className="p-4 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{bi('Why It Happens', 'यह क्यों होता है')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('When you see your sleeping reflection, your subconscious mind perceives another person — a shadow self — sharing the marital space. Over months and years, this creates a subconscious pattern of infidelity, distrust, and emotional distance. AstroVastu Expert K.K. Nagaich has counseled countless couples whose relationships immediately improved after removing or covering the bedroom mirror.', 'जब आप सोते हुए अपने प्रतिबिंब को देखते हैं, तो आपका अवचेतन मन अन्य व्यक्ति — छाया-स्वरूप — को दाम्पत्य स्थान साझा करते हुए अनुभवता है। माहों-वर्षों में यह व्यभिचार, अविश्वास और भावनात्मक दूरी का अवचेतन पैटर्न रच देता है। एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच ने असंख्य दंपतियों को परामर्श दिया है जिनके संबंध शयनकक्ष का दर्पण हटाने या ढकने के तत्काल बाद बेहतर हुए।')}</p>
                  </div>
                  <div className="p-4 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{bi('The Fix', 'समाधान')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('If removing the mirror is not possible (built‑in wardrobes, for example), cover it completely at night with a cloth curtain. During the day, ensure it reflects only positive, beautiful objects — never the bed, never a toilet door, and never an empty wall. A mirror on the North or East wall, reflecting the room\'s beauty, is auspicious. A mirror on the South or West wall, reflecting the bed, is a dosha.', 'यदि दर्पण हटाना संभव न हो (जैसे इनबिल्ट अलमारियों में), तो रात्रि में उसे कपड़े के पर्दे से पूर्णतः ढक दें। दिन में सुनिश्चित करें कि वह केवल सकारात्मक, सुंदर वस्तुओं को ही परावर्तित करे — न कभी बिछौना, न शौचालय का द्वार, और न कभी खाली दीवार। उत्तर या पूर्व दीवार पर दर्पण, जो कक्ष का सौंदर्य परावर्तित करे, शुभ है। दक्षिण या पश्चिम दीवार पर दर्पण, जो बिछौने को परावर्तित करे, दोष है।')}</p>
                  </div>
                </div>
              </div>

              {/* ── Section 4: Electronics & EMF ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Electronics and EMF — The Invisible Sleep Disruptor', 'इलेक्ट्रॉनिक्स और EMF — अदृश्य नींद-भंग')}</h2>
                </div>
                <p>{bi('Televisions, laptops, mobile phones, Wi‑Fi routers, and even digital alarm clocks emit electromagnetic radiation (EMF) that is now scientifically linked to disrupted sleep architecture. The National Sleep Foundation\'s 2022 Sleep in America Poll found that ', 'टेलीविजन, लैपटॉप, मोबाइल फोन, वाई-फाई राउटर और यहाँ तक कि डिजिटल अलार्म घड़ियाँ विद्युतचुंबकीय विकिरण (EMF) उत्सर्जित करती हैं, जिसे अब वैज्ञानिक रूप से भंग नींद-संरचना से जोड़ा गया है। नेशनल स्लीप फाउंडेशन के 2022 के स्लीप इन अमेरिका पोल में पाया गया कि ')}<strong>{bi('57% of adults who keep electronic devices in the bedroom report significantly poorer sleep quality', 'शयनकक्ष में इलेक्ट्रॉनिक उपकरण रखने वाले 57% वयस्कों ने उल्लेखनीय रूप से खराब नींद की गुणवत्ता बताई')}</strong>{bi(' than those who do not. Nearly 60% of adults sleep with their phones next to their beds — a habit that exposes the brain to EMF and blue light during the critical hours of melatonin production.', '। उपकरण न रखने वालों की तुलना में यह आंकड़ा काफी बड़ा है। लगभग 60% वयस्क अपने बिछौने के बगल में फोन रखकर सोते हैं — यह आदत मेलेटोनिन-उत्पादन के निर्णायक घंटों में मस्तिष्क को EMF और नीली किरणों के संपर्क में लाती है।')}</p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50/50 rounded-2xl border border-green-200">
                    <h3 className="font-serif text-base text-green-800 font-bold mb-2">{bi('Recommended Practice', 'अनुशंसित पद्धति')}</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>{bi('Remove all electronics from the bedroom entirely', 'शयनकक्ष से सभी इलेक्ट्रॉनिक उपकरण पूर्णतः हटाएँ')}</li><li>{bi('If unavoidable, switch off and cover devices 60 minutes before sleep', 'अनिवार्य हो तो सोने से 60 मिनट पूर्व उपकरण बंद कर ढक दें')}</li><li>{bi('Keep mobile phones at least 6 feet from the bed', 'मोबाइल फोन बिछौने से कम से कम 6 फीट दूर रखें')}</li><li>{bi('Use battery‑operated alarm clocks — not plugged‑in digital ones', 'बैटरी-संचालित अलार्म घड़ी प्रयोग करें — प्लग-इन डिजिटल नहीं')}</li></ul>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-base text-red-800 font-bold mb-2">{bi('What the NSF Poll Found', 'NSF पोल ने क्या पाया')}</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>{bi('58% of adults sleep with phones next to their bed', '58% वयस्क बिछौने के बगल में फोन रखकर सोते हैं')}</li><li>{bi('57% of device‑in‑bedroom users report significantly poorer sleep', 'शयनकक्ष में उपकरण रखने वालों में 57% ने उल्लेखनीय रूप से खराब नींद बताई')}</li><li>{bi('40% bring devices into the bedroom within 30 minutes of sleep', '40% सोने से 30 मिनट के भीतर उपकरण शयनकक्ष में लाते हैं')}</li><li>{bi('44% leave notifications on overnight', '44% रातभर सूचनाएं चालू छोड़ देते हैं')}</li></ul>
                  </div>
                </div>
              </div>

              {/* ── Section 5: Colour Therapy ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-pink-400 to-rose-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Colour Therapy for the Bedroom', 'शयनकक्ष हेतु रंग-थेरेपी')}</h2>
                </div>
                <p>{bi('The bedroom requires colours that soothe the nervous system and promote intimacy. Bright, activating colours (reds, oranges, neons) that work well in kitchens and living rooms are disastrous in bedrooms. The Times of India and A360 Architects converge on the same Vastu recommendations:', 'शयनकक्ष को ऐसे रंग चाहिए जो तंत्रिका-तंत्र को शांत करें और सामीप्य को बढ़ावा दें। रसोई और बैठक में उत्तम लगने वाले उज्ज्वल, सक्रिय रंग (लाल, नारंगी, नियॉन) शयनकक्ष में विनाशकारी सिद्ध होते हैं। द टाइम्स ऑफ इंडिया और A360 Architects एक ही वास्तु सिफारिशों पर आकर मिलते हैं:')}</p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50/50 rounded-2xl border border-green-200">
                    <h3 className="font-serif text-base text-green-800 font-bold mb-2">{bi('Ideal Colours', 'आदर्श रंग')}</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>{bi('Light Pink — fosters love and tenderness', 'हल्का गुलाबी — प्रेम और कोमलता पोषित करता है')}</li><li>{bi('Peach — warm, soothing, ideal for marital harmony', 'पीच — उष्ण, सुखद, दाम्पत्य सौहार्द हेतु आदर्श')}</li><li>{bi('Soft Earth Tones — grounding, stability, deep rest', 'कोमल पार्थिव रंग — भू-संस्पर्श, स्थिरता, गहरा विश्राम')}</li><li>{bi('Cream / Beige — neutral, calming, universally harmonious', 'क्रीम / बेज — तटस्थ, शांत करने वाला, सर्वत्र सामंजस्यपूर्ण')}</li><li>{bi('Pastel Green — gentle healing energy', 'मृदु हरा — कोमल हीलिंग ऊर्जा')}</li></ul>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-base text-red-800 font-bold mb-2">{bi('Avoid These', 'इनसे बचें')}</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>{bi('Bright Red — overstimulates, causes arguments', 'उज्ज्वल लाल — अत्यधिक उत्तेजित करता है, झगड़े कराता है')}</li><li>{bi('Dark Blue / Navy — too cool, suppresses warmth', 'गहरा नीला / नेवी — अत्यधिक शीतल, उष्णता को दबाता है')}</li><li>{bi('Black — absorbs energy, creates heaviness and depression', 'काला — ऊर्जा सोखता है, भारपन और अवसाद रचता है')}</li><li>{bi('Grey — dulls emotional connection', 'ग्रे — भावनात्मक जुड़ाव को मंद करता है')}</li><li>{bi('Bright Orange — activates fire, disturbs sleep', 'उज्ज्वल नारंगी — अग्नि को सक्रिय करता है, नींद भंग करता है')}</li></ul>
                  </div>
                </div>
              </div>

              {/* ── Section 6: Case Study ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-sacred-saffron to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Case Study — The Couple Who Removed a Mirror and Saved Their Marriage', 'केस स्टडी — दंपति जिसने दर्पण हटाया और विवाह बचाया')}</h2>
                </div>
                <p>{bi('A couple in their early 40s, married 15 years, consulted AstroVastu Expert K.K. Nagaich after three years of escalating conflict that neither could explain. They had a successful business, healthy children, and no external stressors. The Vastu audit revealed three bedroom doshas: a full‑length mirror directly opposite the bed, an SE‑corner master bedroom (fire zone, inducing nightly agitation), and both partners sleeping head‑north.', 'पंद्रह वर्ष विवाहित, चालीस के आसपास के एक दंपति ने तीन वर्षों तक बढ़ते उस संघर्ष के बाद, जिसे कोई समझा नहीं पा रहा था, एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच से परामर्श किया। उनका व्यवसाय सफल था, बच्चे स्वस्थ थे, और कोई बाहरी तनावकारक नहीं था। वास्तु ऑडिट में शयनकक्ष के तीन दोष प्रकट हुए: बिछौने के ठीक सम्मुख फुल-लेंथ दर्पण, दक्षिण-पूर्व कोण का मुख्य शयनकक्ष (अग्नि-क्षेत्र, जो प्रति रात्रि आंदोलन उत्प्रेरित करता था), और दोनों जीवनसाथियों का सिर उत्तर रखकर सोना।')}</p>
                <p>{bi('The remedies were applied in a single day: the mirror was covered with a curtain, the bed was rotated 180 degrees (head‑south), and a heavy earth‑element crystal grid was placed in the SW of the room to stabilise the fire energy. Within ', 'उपाय एक ही दिन में लागू किए गए: दर्पण को पर्दे से ढका गया, बिछौने को 180 डिग्री घुमाया गया (सिर दक्षिण), और अग्नि ऊर्जा को स्थिर करने हेतु कमरे के दक्षिण-पश्चिम में भारी पार्थिव-तत्व क्रिस्टल ग्रिड रखा गया। करीब ')}<strong>{bi('two weeks', 'दो सप्ताह')}</strong>{bi(', the couple reported that their nightly arguments — which had become a predictable ritual — simply stopped. Within three months, they described their marriage as stronger than it had been in a decade. The husband\'s chronic insomnia, which he had treated with medication for five years, resolved completely within the first month.', ' में दंपति ने रिपोर्ट किया कि उनकी रात्रिकालीन बहस — जो एक पूर्वानुमेय अनुष्ठान बन चुकी थी — बिल्कुल रुक गईं। तीन माह में उन्होंने अपने विवाह को दशक भर में सर्वाधिक मजबूत बताया। पति की पुरानी अनिद्रा, जिसका उन्हें पाँच वर्षों से दवा से उपचार चल रहा था, प्रथम माह में पूर्णतः दूर हो गई।')}</p>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">{bi('Conclusion — Your Bedroom Is Your Sanctuary', 'निष्कर्ष — आपका शयनकक्ष ही आपकी शरणभूमि है')}</h2>
                </div>
                <p>{bi('The bedroom is where your body heals, your marriage deepens, and your subconscious processes the emotional residue of the day. Every element — the direction of the room, the orientation of your head, the presence or absence of mirrors, the colours on the walls, the devices on your nightstand — contributes to a cumulative energetic effect that either supports or sabotages your most fundamental needs. The remedies are simple, the science is clear, and the results — as thousands of clients have discovered — are often immediate.', 'शयनकक्ष वह स्थान है जहाँ आपका शरीर स्वस्थ होता है, आपका विवाह गहरा होता है, और आपका अवचेतन मन दिन के भावनात्मक अवशेषों को संसाधित करता है। प्रत्येक अंग — कक्ष की दिशा, सिर का विन्यास, दर्पण की उपस्थिति या अनुपस्थिति, दीवारों के रंग, नाइटस्टैंड पर रखे उपकरण — एक संचयी ऊर्जात्मक प्रभाव में योगदान देता है जो आपकी अत्यंत मूलभूत आवश्यकताओं का या तो समर्थन करता है या उन्हें नुकसान पहुँचाता है। उपाय सरल हैं, विज्ञान स्पष्ट है, और परिणाम — जैसा हजारों क्लाइंट्स ने अनुभवा — अक्सर तत्काल होते हैं।')}</p>
                <p className="font-medium">{bi('AstroVastu Expert K.K. Nagaich provides comprehensive bedroom Vastu audits as part of every residential consultation — including directional analysis, dosha identification, mirror placement correction, and personalised remedy prescriptions.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच प्रत्येक आवासीय परामर्श के अंतर्गत व्यापक शयनकक्ष-वास्तु ऑडिट प्रदान करते हैं — जिसमें दिशा-विश्लेषण, दोष-पहचान, दर्पण-विन्यास सुधार और व्यक्तिगत उपचार-निर्धारण शामिल है।')}</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-[var(--color-bg-glass)] backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">AstroVastu Expert KK Nagaich</p>
                <p className="text-sm text-nidra-indigo/60">{bi('4th Generation Vastu Guru | MBA | Ex‑CEO | 20+ Years Clinical Practice | 2 Lakh+ Clients Worldwide', '4थी पीढ़ी के वास्तु गुरु | MBA | पूर्व सीईओ | 20+ वर्षों का व्यावहारिक अनुभव | विश्वभर में 2 लाख+ क्लाइंट्स')}</p>
              </div>
            </div>
          </div>
        </article>
      
    </>
  );
}
