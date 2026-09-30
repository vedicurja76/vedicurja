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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,153,51,0.12),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sacred-saffron/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sacred-saffron/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-25 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="15" width="60" height="60" rx="4" fill="none" stroke="#FF9933" strokeWidth="1.5" opacity="0.6"/>
                  <path d="M45 15 L50 5 L55 15" fill="none" stroke="#FF9933" strokeWidth="1.5"/>
                  <rect x="35" y="40" width="12" height="16" rx="1" fill="none" stroke="#FF9933" strokeWidth="1"/>
                  <circle cx="50" cy="55" r="2" fill="#FF9933"><animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/></circle>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E8B960" strokeWidth="0.8" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="28s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                {bi('Back to Archives', 'आर्काइव पर वापस')}
              </Link>

              <div className="flex items-center gap-3 text-sm text-[var(--color-hero-fg)]/50 mb-4">
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{bi('Vastu Science', 'वास्तु विज्ञान')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('10 min read', '10 मिनट का पाठ')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('By', 'लेखक:')} AstroVastu Expert KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-hero-fg)] leading-tight mb-4">
                {bi('Kitchen Vastu —', 'रसोई वास्तु —')}{' '}
                <span className="bg-gradient-to-r from-orange-400 via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  {bi('Cooking Up Health, Wealth, and Harmony', 'स्वास्थ्य, धन और सौहार्द का पाक-विधान')}
                </span>
              </h1>
              <p className="text-lg text-[var(--color-hero-fg)]/60 max-w-3xl">
                {bi('A research‑backed guide to kitchen direction, stove placement, colour therapy, dosha remedies, and the 325‑household survey proving that SE kitchen defects cause 85% acidity rates and 74% unproductive expenses.', 'शोध-समर्थित गाइड — रसोई की दिशा, चूल्हे का स्थान, रंग-थेरेपी, दोष-उपाय, तथा 325 घरों का सर्वेक्षण जो सिद्ध करता है कि दक्षिण-पूर्व रसोई-दोषों में 85% अम्लता और 74% अनुत्पादक खर्च देखा गया है।')}
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                {bi('The kitchen is the heart of every Indian home — it is where nourishment begins, where family bonds strengthen over shared meals, and where the fire element (Agni) governs both physical and financial health. In Vastu Shastra, the kitchen is not merely a room — it is the energetic furnace of the household. When aligned correctly, it generates health, wealth, and harmony. When misaligned, it can cause chronic digestive issues, financial drain, and family conflict. A 2025 survey of 325 households by VastuRaviraj provides stark evidence: ', 'भारत में हर घर की रसोई उसका हृदय है — यहीं पोषण आरंभ होता है, यहीं साझा भोजन से पारिवारिक बंधन मजबूत होते हैं, और यहीं अग्नि तत्व (Agni) शारीरिक एवं आर्थिक स्वास्थ्य दोनों पर राज करता है। वास्तु शास्त्र में रसोई केवल एक कमरा नहीं — यह घर की ऊर्जात्मक भट्ठी है। यथाविधि संरेखित होने पर यह स्वास्थ्य, धन और सौहार्द उत्पन्न करती है; असंरेखित रहने पर पुरानी पाचन-समस्याएं, आर्थिक क्षय और पारिवारिक कलह रच सकती है। वस्तुराविराज (VastuRaviraj) द्वारा 325 घरों के 2025 के सर्वेक्षण का प्रमाण निर्दय है: ')}<strong>{bi('85% of residents in homes with South‑East Vastu defects reported acidity and indigestion', 'दक्षिण-पूर्व वास्तु दोष वाले घरों के 85% निवासियों ने अम्लता और अपच की शिकायत की')}</strong>, <strong>{bi('74% experienced high unproductive expenses', '74% ने अधिक अनुत्पादक खर्च झेले')}</strong>{bi(', and ', ' तथा ')}<strong>{bi('83% faced frequent obstacles in work', '83% को कार्य में बारंबार बाधाओं का सामना करना पड़ा')}</strong>{bi('. This guide presents the complete Vastu framework for kitchen design — directions, stove placement, colours, appliance positioning, storage, ventilation, and non‑demolition remedies — all grounded in published research and two decades of clinical practice.', '। यह गाइड रसोई-डिज़ाइन का संपूर्ण वास्तु ढांचा प्रस्तुत करती है — दिशाएं, चूल्हे का स्थान, रंग, उपकरण-विन्यास, भंडारण, वातन और बिना-तोड़फोड़ उपाय — सब प्रकाशित शोध और बीस वर्षों के व्यावहारिक अनुभव पर आधारित।')}
              </p>

              {/* ── Section 1: Ideal Direction ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-orange-400 to-sacred-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('The Ideal Kitchen Direction — South‑East (Agneya), the Home of Agni', 'आदर्श रसोई दिशा — दक्षिण-पूर्व (अग्न्य), अग्नि का निवास')}</h2>
                </div>
                <p>{bi('The absolute best direction for a kitchen is the South‑East (SE) corner of the house, known as ', 'रसोई के लिए सर्वोत्तम दिशा घर का दक्षिण-पूर्व (SE) कोण है, जिसे ')}<strong>{bi('Agneya', 'अग्न्य (Agneya)')}</strong>{bi(' — governed exclusively by Lord Agni, the God of Fire. The reasoning is both spiritual and thermodynamically sound. During mid‑morning to early afternoon, the sun tracks through the South‑East quadrant, emitting high‑intensity warming radiation. Ancient Vastu architects capitalised on this: the intense solar heat naturally absorbed moisture from walls, acting as a bactericide and fungicide that kept food stores from spoiling — a profound insight in an era before refrigeration.', ' कहते हैं — यह पूर्णतया अग्निदेव के अधीन है। इसका तर्क आध्यात्मिक और ऊष्मगतिकीय (thermodynamic) दोनों दृष्टि से सुसंगत है। मध्याह्न-पूर्व प्रातः से प्रारंभिक अपराह्न तक सूर्य दक्षिण-पूर्व चतुर्थांश से होकर गुज़रता है और उच्च-तीव्रता वाली उष्ण विकिरण देता है। प्राचीन वास्तुकारों ने इसका लाभ उठाया: तीव्र सौर ऊष्मा ने स्वाभाविक रूप से दीवारों का आर्द्रता सोख ली, जो जीवाणुनाशक एवं कवकनाशक की भांति काम करती थी और खाद्य भंडार को खराब होने से बचाती थी — शीतकरण (refrigeration) से पूर्वकाल की गहन अंतर्दृष्टि।')}</p>
                <p>{bi('Modern science confirms the logic. The SE receives the purest morning UV rays, which naturally disinfect surfaces. The Housing.com analysis notes that locating the kitchen in the SE "aligns with the sun\'s natural heat, potentially reducing reliance on artificial cooking methods." This direction is also astrologically ruled by Venus (Shukra), the planet of luxury and feminine energy — linking kitchen alignment directly to financial prosperity and aesthetic harmony.', 'आधुनिक विज्ञान भी इस तर्क की पुष्टि करता है। दक्षिण-पूर्व को सर्वाधिक पवित्र प्रातःकालीन UV किरणें मिलती हैं, जो स्वाभाविक रूप से सतहों को कीटाणुमुक्त करती हैं। Housing.com के विश्लेषण में कहा गया है कि रसोई को दक्षिण-पूर्व में रखना "सूर्य की प्राकृतिक गर्मी के अनुकूल है, जिससे कृत्रिम पाक-विधियों पर निर्भरता संभवतः घटती है।" यह दिशा ज्योतिषीय दृष्टि से शुक्र (Venus) की भी है — जो ऐश्वर्य और स्त्री-ऊर्जा का ग्रह है — अतः रसोई का संरेखण प्रत्यक्ष रूप से आर्थिक समृद्धि और सौंदर्यात्मक सौहार्द से जुड़ता है।')}</p>

                <div className="mt-5 p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi('Second‑Best Option: North‑West (Vayavya)', 'द्वितीय-सर्वोत्तम विकल्प: उत्तर-पश्चिम (वायव्य)')}</h3>
                  <p className="text-sm text-nidra-indigo/70">{bi('If South‑East is unavailable, the North‑West is the acceptable alternative. Governed by the Air element (Vayu), it supports the kitchen\'s dynamic activity. However, ensure the cooking stove is still placed in the South‑East corner of the kitchen itself, and the cook faces East while working.', 'यदि दक्षिण-पूर्व उपलब्ध न हो तो उत्तर-पश्चिम स्वीकार्य विकल्प है। वायु तत्व (Vayu) के अधीन यह रसोई की गतिशील गतिविधि का समर्थन करता है। तथापि, सुनिश्चित करें कि चूल्हा रसोई के भीतर फिर भी दक्षिण-पूर्व कोण में ही हो, और पाककर्ता कार्य के समय पूर्व की ओर मुख करे।')}</p>
                </div>
              </div>

              {/* ── Section 2: Directions to Avoid ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Directions to Strictly Avoid — And Why', 'सख्ती से वर्जित दिशाएं — और क्यों')}</h2>
                </div>

                <div className="mt-4 space-y-4">
                  {[
                    { dir: 'North‑East (Ishanya)', dirHi: 'उत्तर-पूर्व (ईशान्य)', severity: 'Severe Dosha', severityHi: 'गंभीर दोष', effect: 'This is the zone of Water — the seat of divine energy. Fire in the Water zone creates the most dangerous Vastu dosha, leading to mental stress, heavy financial losses, chronic health issues, and family conflict. The North‑East must remain spiritually pure — never place a kitchen, toilet, or heavy storage here.', effectHi: 'यह जल का क्षेत्र है — दैवीय ऊर्जा का आसन। जल-क्षेत्र में अग्नि सर्वाधिक खतरनाक वास्तु दोष रचती है, जिससे मानसिक तनाव, भारी आर्थिक क्षति, पुरानी स्वास्थ्य-समस्याएं और पारिवारिक कलह होती है। उत्तर-पूर्व को आध्यात्मिक रूप से पवित्र रहना चाहिए — यहाँ कभी रसोई, शौचालय या भारी भंडारण न रखें।' },
                    { dir: 'North', dirHi: 'उत्तर (North)', severity: 'High Risk', severityHi: 'उच्च जोखिम', effect: 'The North is the zone of Lord Kubera, the God of Wealth. Placing a kitchen here "burns" away opportunities, cash flow, and career prospects. Every day the stove operates in the North, it symbolically incinerates incoming wealth.', effectHi: 'उत्तर कुबेर देव — धन के स्वामी — का क्षेत्र है। यहाँ रसोई रखना अवसरों, नकद प्रवाह और करियर की संभावनाओं को "जला" देता है। जब भी उत्तर में चूल्हा जलता है, वह प्रतीकात्मक रूप से आने वाले धन को भस्म करता है।' },
                    { dir: 'South‑West (Nairutya)', dirHi: 'दक्षिण-पश्चिम (नैर्ऋत्य)', severity: 'Moderate to High', severityHi: 'मध्यम से उच्च', effect: 'This is the zone of Stability and Earth. A kitchen here creates instability in career, relationships, and emotional equilibrium. The heavy earth energy of the SW suppresses the dynamic fire needed for cooking, leading to sluggish metabolism and family discord.', effectHi: 'यह स्थिरता और पृथ्वी का क्षेत्र है। यहाँ रसोई करियर, रिश्तों और भावनात्मक संतुलन में अस्थिरता पैदा करती है। दक्षिण-पश्चिम की भारी पार्थिव ऊर्जा पाक हेतु अपेक्षित गतिशील अग्नि को कुचल देती है, जिससे चयापचय सुस्त होता है और पारिवारिक कलह बढ़ती है।' },
                  ].map((item) => (
                    <div key={item.dir} className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-red-50/30 rounded-2xl border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <h3 className="font-serif text-base text-nidra-indigo font-bold">{bi(item.dir, item.dirHi)} — <span className="text-red-500">{bi(item.severity, item.severityHi)}</span></h3>
                      </div>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi(item.effect, item.effectHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 3: Internal Placement ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Internal Placement: Stove, Sink, Appliances, and Storage', 'आंतरिक विन्यास: चूल्हा, सिंक, उपकरण और भंडारण')}</h2>
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { element: 'Cooking Stove (Gas/Induction)', elementHi: 'खाना पकाने का चूल्हा (गैस/इंडक्शन)', placement: 'South‑East corner of the kitchen. Cook must face East while working. The East direction captures the sun\'s positive energy during morning hours.', placementHi: 'रसोई का दक्षिण-पूर्व कोण। पाककर्ता को कार्य के समय पूर्व की ओर मुख करना चाहिए। पूर्व दिशा प्रातःकाल सूर्य की सकारात्मक ऊर्जा को ग्रहण करती है।', rule: 'Keep stove at least 5‑6 feet from the sink. Fire and Water are opposing elements — proximity creates elemental conflict that manifests as family arguments.', ruleHi: 'चूल्हे को सिंक से कम से कम 5–6 फीट दूर रखें। अग्नि और जल विपरीत तत्व हैं — निकटता तत्व-संघर्ष रचती है जो पारिवारिक झगड़ों के रूप में प्रकट होता है।' },
                    { element: 'Sink & Water Sources', elementHi: 'सिंक और जल-स्रोत', placement: 'North‑East or North corner of the kitchen. This aligns water with its natural direction. Taps should not be placed at the corner junction of two counters.', placementHi: 'रसोई का उत्तर-पूर्व या उत्तर कोण। यह जल को उसकी प्राकृतिक दिशा में संरेखित करता है। नल दो काउंटरों के कोण-संगम पर न लगाएँ।', rule: 'Never place sink and stove adjacent to each other or directly opposite. Water extinguishes Fire — when these elements clash daily, financial liquidity suffers.', ruleHi: 'सिंक और चूल्हा कभी परस्पर सटाकर या ठीक सम्मुख न रखें। जल अग्नि को बुझाता है — जब ये तत्व प्रतिदिन टकराते हैं, आर्थिक तरलता क्षतिग्रस्त होती है।' },
                    { element: 'Microwave, Oven, Toaster', elementHi: 'माइक्रोवेव, ओवन, टोस्टर', placement: 'South‑East zone, aligned with fire energy. All heat‑generating appliances belong in this quadrant.', placementHi: 'दक्षिण-पूर्व क्षेत्र, अग्नि ऊर्जा के अनुसरूप। ऊष्मा-उत्पादक सभी उपकरण इसी चतुर्थांश के हैं।', rule: 'Appliances that don\'t generate heat (refrigerator, water purifier, dishwasher) belong in the North‑East or North.', ruleHi: 'ऊष्मा उत्पन्न न करने वाले उपकरण (फ्रिज, जल-शुद्धिकरण यंत्र, डिशवॉशर) उत्तर-पूर्व या उत्तर में रखे जाएँ।' },
                    { element: 'Refrigerator', elementHi: 'फ्रिज (Refrigerator)', placement: 'North‑East, North, or West direction. Away from the stove to avoid fire‑water conflict.', placementHi: 'उत्तर-पूर्व, उत्तर या पश्चिम दिशा। चूल्हे से दूर रखें ताकि अग्नि-जल संघर्ष टले।', rule: 'Never in the South‑East — placing a cooling appliance in the fire zone suppresses Agni energy and causes metabolic issues.', ruleHi: 'दक्षिण-पूर्व में कभी नहीं — शीतलन उपकरण को अग्नि-क्षेत्र में रखने से अग्नि ऊर्जा दबती है और चयापचय-समस्याएं होती हैं।' },
                    { element: 'Exhaust Fan / Chimney', elementHi: 'एग्ज़ॉस्ट पंखा / चिमनी', placement: 'East or North wall of the kitchen. These directions facilitate optimal smoke extraction and maintain positive energy flow.', placementHi: 'रसोई की पूर्व या उत्तर दीवार। ये दिशाएं धुआं-निकासी को अनुकूल बनाती हैं और सकारात्मक ऊर्जा-प्रवाह बनाए रखती हैं।', rule: 'Avoid placing exhaust in South or West — these directions trap heat and fumes, creating stale energy that affects food quality.', ruleHi: 'एग्ज़ॉस्ट दक्षिण या पश्चिम दीवार पर न लगाएँ — ये दिशाएं गर्मी और वाष्प को कैद कर लेती हैं, जिससे जड़ ऊर्जा बनती है और खाद्य गुणवत्ता प्रभावित होती है।' },
                    { element: 'Storage (Grains, Pulses, Heavy Containers)', elementHi: 'भंडारण (अन्न, दलहन, भारी बर्तन)', placement: 'South and West shelves. These directions provide stability and preservation energy for dry goods.', placementHi: 'दक्षिण और पश्चिम की सराणियाँ। ये दिशाएं सूखे खाद्य पदार्थों हेतु स्थिरता और संरक्षण ऊर्जा देती हैं।', rule: 'Never store heavy containers in the North‑East. This blocks the flow of fresh energy and prosperity into the home.', ruleHi: 'भारी बर्तन उत्तर-पूर्व में कभी न रखें। यह घर में नवीन ऊर्जा और समृद्धि के प्रवाह को रोक देता है।' },
                    { element: 'Cooking Posture', elementHi: 'पाक-मुद्रा', placement: 'Face East while cooking. This orientation aligns the cook with the rising sun, improving digestion of food by 20% according to a cited study.', placementHi: 'पकाते समय पूर्व की ओर मुख। यह विन्यास पाककर्ता को उगते सूर्य के साथ संरेखित करता है; एक उद्धृत अध्ययन के अनुसार इससे भोजन का पाचन 20% तक बेहतर होता है।', rule: 'Never face South while cooking — this direction is associated with Yama and can transfer negative energy into meals.', ruleHi: 'पकाते समय दक्षिण की ओर कभी मुँह न करें — यह दिशा यम से जुड़ी है और भोजन में नकारात्मक ऊर्जा प्रेषित कर सकती है।' },
                    { element: 'Drinking Water', elementHi: 'पेय जल', placement: 'North‑East corner of the kitchen. Store water in a copper vessel for added health benefits and Vastu alignment.', placementHi: 'रसोई का उत्तर-पूर्व कोण। स्वास्थ्य-लाभ और वास्तु-संरेखण हेतु जल तांबे के बर्तन में संग्रहित करें।', rule: 'Change water daily. Stagnant water in the NE blocks the flow of positive opportunities and mental clarity.', ruleHi: 'जल प्रतिदिन बदलें। उत्तर-पूर्व में जमा (अचल) जल सकारात्मक अवसरों और मानसिक स्पष्टता के प्रवाह को रोकता है।' },
                  ].map((item) => (
                    <div key={item.element} className="p-4 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{bi(item.element, item.elementHi)}</h3>
                      <p className="text-xs text-prakash-gold font-medium mb-2">{bi(item.placement, item.placementHi)}</p>
                      <p className="text-sm text-nidra-indigo/60 leading-relaxed border-t border-gray-100 pt-2 mt-2">{bi(item.rule, item.ruleHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 4: The Survey Data ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-fuchsia-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('The Evidence: 325‑Household Survey on South‑East Defects', 'प्रमाण: दक्षिण-पूर्व दोषों पर 325 घरों का सर्वेक्षण')}</h2>
                </div>
                <p>{bi('A 2025 study published by VastuRaviraj surveyed 325 Indian households with documented South‑East Vastu defects and tracked the observable consequences. The results are among the most comprehensive empirical validations of Vastu\'s kitchen principles:', 'वस्तुराविराज द्वारा प्रकाशित 2025 के अध्ययन में दक्षिण-पूर्व वास्तु दोषों वाले 325 भारतीय घरों का सर्वेक्षण किया गया और प्रेक्षित परिणामों पर नज़र रखी गई। इसके नतीजे वास्तु के रसोई-सिद्धांतों के सर्वाधिक व्यापक व्यावहारिक प्रमाणिकरणों में से हैं:')}</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-500/10 to-red-500/10">
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Survey Metric', 'सर्वेक्षण मापदंड')}</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Sample Size', 'नमूना आकार')}</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Affected', 'प्रभावित')}</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Percentage', 'प्रतिशत')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Acidity & Indigestion', 'अम्लता और अपच', '163', '138', '85%'],
                        ['High Unproductive Expenses', 'अधिक अनुत्पादक खर्च', '307', '227', '74%'],
                        ['Emotional Irritability / Anger', 'भावनात्मक चिड़चिड़ापन / क्रोध', '280', '239', '85%'],
                        ['Frequent Delays or Obstacles in Work', 'कार्य में बारंबार विलंब या बाधाएं', '304', '252', '83%'],
                        ['Insufficient Financial Income', 'अपर्याप्त आर्थिक आय', '262', '103', '39%'],
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-prakash-gold/10 ${i % 2 === 0 ? 'bg-[var(--color-bg-glass)]' : 'bg-vastu-stone/20'}`}>
                          <td className="py-3 px-4 font-medium text-nidra-indigo/80">{bi(row[0], row[1])}</td>
                          <td className="py-3 px-4 text-nidra-indigo/50">{row[2]}</td>
                          <td className="py-3 px-4 text-nidra-indigo/70">{row[3]}</td>
                          <td className="py-3 px-4 text-sacred-saffron font-bold">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-nidra-indigo/50">{bi('Source: VastuRaviraj, "Hidden Impact of South‑East Vastu Defects on Family Health & Finances," June 2025.', 'स्रोत: VastuRaviraj, "Hidden Impact of South‑East Vastu Defects on Family Health & Finances," जून 2025।')}</p>
              </div>

              {/* ── Section 5: Colour Therapy ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-amber-400 to-yellow-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Colour Therapy for the Kitchen — What the Experts Recommend', 'रसोई हेतु रंग-थेरेपी — विशेषज्ञों की सिफारिश')}</h2>
                </div>
                <p>{bi('The Times of India, Spazay, and Housing.com all converge on the same Vastu colour recommendations for kitchens. Colours are not aesthetic choices — they are energy frequencies. The fire elements responds to warm, activating hues and is suppressed by cool, dark ones.', 'द टाइम्स ऑफ इंडिया, Spazay और Housing.com — सभी रसोई हेतु एक ही वास्तु रंग-सिफारिशों पर आकर मिलते हैं। रंग केवल सौंदर्य-चयन नहीं — वे ऊर्जा-आवृत्तियाँ हैं। अग्नि तत्व उष्ण, सक्रिय करने वाले रंगों से अनुनादित होता है और शीतल, गहरे रंगों से दबा रहता है।')}</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50/50 rounded-2xl border border-green-200">
                    <h3 className="font-serif text-base text-green-800 font-bold mb-2">{bi('Recommended Colours', 'अनुशंसित रंग')}</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>{bi('Orange — stimulates appetite and creativity', 'नारंगी — भूख और रचनात्मकता को उत्तेजित करता है')}</li><li>{bi('Yellow — fire‑friendly, brings positivity', 'पीला — अग्नि-अनुकूल, सकारात्मकता लाता है')}</li><li>{bi('Red — activates Agni energy (use sparingly as accent)', 'लाल — अग्नि ऊर्जा को सक्रिय करता है (अत्यल्प मात्रा में accent के रूप में प्रयोग करें')}</li><li>{bi('Pink — soft fire energy, good for family kitchens', 'गुलाबी — कोमल अग्नि-ऊर्जा, पारिवारिक रसोई हेतु उत्तम')}</li><li>{bi('Cream / Beige — soothing balance for modern kitchens', 'क्रीम / बेज — आधुनिक रसोई हेतु सुखद संतुलन')}</li><li>{bi('Soft Green — acceptable as secondary accent', 'हल्का हरा — सहायक accent के रूप में स्वीकार्य')}</li></ul>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-base text-red-800 font-bold mb-2">{bi('Colours to Avoid', 'वरजित रंग')}</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>{bi('Black — absorbs fire energy, creates heaviness', 'काला — अग्नि ऊर्जा को सोख लेता है, भारपन रचता है')}</li><li>{bi('Dark Blue — water element clashes with kitchen fire', 'गहरा नीला — जल तत्व रसोई की अग्नि से टकराता है')}</li><li>{bi('Grey — dulls Agni, suppresses vitality', 'ग्रे — अग्नि को मंद करता है, प्राणशक्ति को कुचलता है')}</li><li>{bi('Pure White overload — too cold for a fire zone', 'अत्यधिक शुक्र सफेद — अग्नि-क्षेत्र हेतु अत्यधिक शीतल')}</li><li>{bi('Excessive Dark Shades — make the kitchen feel heavy and uninviting', 'अत्यधिक गहरे रंग — रसोई को भारी एवं अरुचिकर बना देते हैं')}</li></ul>
                  </div>
                </div>
              </div>

              {/* ── Section 6: Remedies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-orange-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Non‑Demolition Remedies for Every Kitchen Dosha', 'प्रत्येक रसोई-दोष हेतु बिना-तोड़फोड़ उपाय')}</h2>
                </div>
                <p>{bi('Most urban kitchens cannot be relocated. The remedies below — sourced from the Times of India, Housing.com, and Sama Homes — correct elemental imbalances without breaking a single tile.', 'अधिकांश शहरी रसोइयों का स्थान बदला नहीं जा सकता। नीचे दिए उपाय — द टाइम्स ऑफ इंडिया, Housing.com और Sama Homes से संकलित — एक-एक टाइल भी तोड़े बिना तत्व-असंतुलन को दूर करते हैं।')}</p>

                <div className="mt-4 space-y-4">
                  {[
                    { dosha: 'Kitchen in North or North‑East', doshaHi: 'उत्तर या उत्तर-पूर्व में रसोई', fix: 'Place a copper vessel filled with water in the NE corner of the kitchen. Install a red‑coloured block or tile below the stove. Hang a Mangal Yantra on the kitchen wall. Keep a bowl of sea salt in the NE, changed weekly.', fixHi: 'रसोई के उत्तर-पूर्व कोण में जल से भरा तांबे का बर्तन रखें। चूल्हे के नीचे लाल रंग का प्रस्तर-खंड या टाइल लगाएँ। रसोई की दीवार पर मंगल यंत्र लटकाएँ। उत्तर-पूर्व में समुद्री नमक का पात्र रखें, सप्ताह में एक बार बदलें।' },
                    { dosha: 'Stove not in South‑East', doshaHi: 'चूल्हा दक्षिण-पूर्व में नहीं', fix: 'If relocation is impossible, place a red or orange‑coloured block under the burner. Install a red bulb in the SSE zone outside the kitchen. Ensure the cook faces East at all times. A copper pyramid on the kitchen counter amplifies fire energy.', fixHi: 'यदि स्थानांतरण संभव न हो तो बर्नर के नीचे लाल या नारंगी रंग का खंड रखें। रसोई के बाहर दक्षिण-पूर्व-दक्षिण (SSE) क्षेत्र में लाल बल्ब लगाएँ। पाककर्ता का मुख सदैव पूर्व की ओर रहे। रसोई काउंटर पर तांबे का पिरामिड अग्नि ऊर्जा को और बढ़ाता है।' },
                    { dosha: 'Sink and Stove adjacent', doshaHi: 'सिंक और चूल्हा सट-बिट', fix: 'Place a small wooden or bamboo partition between them. Hang a copper wind chime with 5‑6 rods on the NW wall. Keep a small crystal between the two fixtures. Maintain at least 2 feet of dry counter space between them at all times.', fixHi: 'इनके बीच छोटा लकड़ी का या बांस का विभाजक रखें। उत्तर-पश्चिम दीवार पर 5–6 छड़ों वाला तांबे का विंड चाइम लटकाएँ। दोनों फिटिंग के बीच एक छोटा क्रिस्टल रखें। उनके बीच सदैव कम से कम 2 फीट सूखा काउंटर-स्थान बनाए रखें।' },
                    { dosha: 'Kitchen directly below toilet', doshaHi: 'रसोई शौचालय के ठीक नीचे', fix: 'Install a copper pyramid in the ceiling between the toilet floor and kitchen ceiling. Place a Vastu Purush Yantra in the kitchen. Keep the toilet seat permanently closed. A piece of solid camphor in the kitchen corner absorbs negative energy — replace when it shrinks.', fixHi: 'शौचालय के फर्श और रसोई-छत के बीच वाली छत में तांबे का पिरामिड स्थापित करें। रसोई में वास्तु पुरुष यंत्र रखें। शौचालय की सीट सदैव बंद रखें। रसोई के कोण में ठोस कपूर का टुकड़ा नकारात्मक ऊर्जा सोखता है — सिकुड़ने पर बदल दें।' },
                    { dosha: 'South‑West kitchen', doshaHi: 'दक्षिण-पश्चिम रसोई', fix: 'Place a heavy stone or crystal grid on the SW kitchen wall to ground excess earth energy. Use bright orange or red accent colours throughout. A salt lamp in the SE corner of the kitchen reactivates suppressed fire. Cook facing East without exception.', fixHi: 'अतिरिक्त पार्थिव ऊर्जा को भूमिगत करने हेतु दक्षिण-पश्चिम की रसोई-दीवार पर भारी शिला या क्रिस्टल ग्रिड रखें। सर्वत्र उज्ज्वल नारंगी या लाल accent रंग प्रयोग करें। रसोई के दक्षिण-पूर्व कोण में नमक-दीप (salt lamp) दबी अग्नि को पुनः सक्रिय करता है। पाककर्ता का मुख अपवादरहित पूर्व की ओर।' },
                  ].map((item) => (
                    <div key={item.dosha} className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{bi('Dosha:', 'दोष:')} {bi(item.dosha, item.doshaHi)}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed"><strong>{bi('Remedy:', 'उपाय:')}</strong> {bi(item.fix, item.fixHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 7: Daily Rituals ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Daily Rituals for a Vastu‑Aligned Kitchen', 'वास्तु-संरेखित रसोई हेतु दैनिक अनुष्ठान')}</h2>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { ritual: 'Light a Ghee Lamp (Diya)', ritualHi: 'घी का दीपक जलाएँ (दिया)', detail: 'Place a diya in the SE corner of the kitchen and light it at sunrise. This activates Agni tattva and invites health and prosperity. Adding two cloves to the ghee lamp is a proven Vastu remedy for family health.', detailHi: 'रसोई के दक्षिण-पूर्व कोण में दिया रखकर सूर्योदय पर जलाएँ। यह अग्नि तत्व को सक्रिय करता है और स्वास्थ्य व समृद्धि को आमंत्रित करता है। घी के दीपक में दो लौंग डालना पारिवारिक स्वास्थ्य हेतु सिद्ध वास्तु उपाय है।' },
                    { ritual: 'Burn Camphor Post‑Cooking', ritualHi: 'पाक-पश्चात कपूर जलाएँ', detail: 'The Times of India recommends burning camphor (kapoor) with ghee after cooking to cleanse the aura. Dip 3‑4 camphor tablets in ghee in an earthen lamp. The aromatic smoke purifies the energy field and neutralises any doshas generated during cooking.', detailHi: 'द टाइम्स ऑफ इंडिया आभा (aura) की शुद्धि हेतु पाक-पश्चात घी के साथ कपूर जलाने की सिफारिश करता है। मृत्तिका दीप में 3–4 कपूर की गोलियाँ घी में डुबोकर जलाएँ। सुगंधित धुआं ऊर्जा-क्षेत्र को पवित्र करता है और पाक के दौरान उत्पन्न किसी भी दोष को निष्प्रभावी करता है।' },
                    { ritual: 'Wipe Counters with Salt Water', ritualHi: 'नमक के जल से काउंटर पोंछें', detail: 'Wiping kitchen counters daily with water containing a pinch of rock salt purifies the energy field. Salt absorbs emotional residue and elemental imbalances. Discard the water outside the home — never reuse.', detailHi: 'रसोई के काउंटर प्रतिदिन एक चुटकी सेंधा नमक मिले जल से पोंछने से ऊर्जा-क्षेत्र पवित्र होता है। नमक भावनात्मक अवशेषों और तत्व-असंतुलनों को सोख लेता है। जल घर के बाहर त्यागें — पुनः कभी प्रयोग न करें।' },
                    { ritual: 'Keep NE Corner Clean', ritualHi: 'उत्तर-पूर्व कोण स्वच्छ रखें', detail: 'The North‑East corner of the kitchen must remain clean, uncluttered, and well‑lit. This is where fresh energy (prana) enters. Even if the kitchen itself is in a different zone, the NE of the kitchen should be treated as sacred space.', detailHi: 'रसोई का उत्तर-पूर्व कोण स्वच्छ, निर्व्यवस्थित और सुप्रकाशित रहना चाहिए। यहीं से नवीन ऊर्जा (प्राण) प्रवेश करती है। रसोई स्वयं किसी अन्य क्षेत्र में हो, तब भी रसोई के उत्तर-पूर्व को कोण को पवित्र स्थान का दर्जा दें।' },
                    { ritual: 'Discard Expired Food Weekly', ritualHi: 'सप्ताह में एक बार समय-तीत खाद्य त्यागें', detail: 'Expired masalas, stale grains, and old spices carry stagnant energy. Weekly clearance of expired items prevents the accumulation of negative prana that affects the quality of all food prepared in the kitchen.', detailHi: 'समय-तीत मसाले, बासी अन्न और पुराने सुगंधित मसाले जड़ ऊर्जा रखते हैं। साप्ताहिक सफाई नकारात्मक प्राणों की संचय-रोकती है, जो रसोई में बने सभी भोजन की गुणवत्ता को प्रभावित करते हैं।' },
                    { ritual: 'Tulsi Plant in East', ritualHi: 'पूर्व में तुलसी का पौधा', detail: 'A Tulsi (Holy Basil) plant placed in the East direction of the kitchen — or on an east‑facing window sill — purifies air, invites Lakshmi\'s blessings, and continuously generates positive vibrations. Water it daily; never let it wilt.', detailHi: 'रसोई की पूर्व दिशा में — या पूर्वमुखी खिड़की की चौखट पर — रखा तुलसी (पवित्र बेसिल) का पौधा वायु को पवित्र करता है, माँ लक्ष्मी की कृपा को आमंत्रित करता है और निरंतर सकारात्मक कंपन रचता है। इसको प्रतिदिन पानी दें; कभी मुरझाने न दें।' },
                  ].map((item) => (
                    <div key={item.ritual} className="p-4 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{bi(item.ritual, item.ritualHi)}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi(item.detail, item.detailHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-orange-400 to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">{bi('Conclusion — Your Kitchen Is Your Family\'s Engine', 'निष्कर्ष — आपकी रसोई ही आपके परिवार का इंजन है')}</h2>
                </div>
                <p>{bi('The kitchen is not merely where food is prepared — it is where the fire element that drives your family\'s metabolism, ambition, and financial vitality is generated and sustained. The 325‑household survey provides undeniable data: when the SE fire zone is compromised, acidity (85%), unproductive expenses (74%), and work obstacles (83%) follow with statistical predictability. The remedies exist, the colours are available, the rituals are simple. Aligning your kitchen with Vastu principles is not a matter of superstition — it is a matter of family health and financial prudence.', 'रसोई केवल भोजन पकाने का स्थान नहीं — यह वह स्थान है जहाँ आपके परिवार की चयापचय, महत्वाकांक्षा और आर्थिक उर्जाशीलता को चलाने वाला अग्नि तत्व उत्पन्न और पोषित होता है। 325 घरों के सर्वेक्षण का अकाट्य डेटा है: जब दक्षिण-पूर्व अग्नि-क्षेत्र बाधित होता है, तो अम्लता (85%), अनुत्पादक खर्च (74%) और कार्य-बाधाएं (83%) सांख्यिकीय निश्चितता के साथ आती हैं। उपाय विद्यमान हैं, रंग उपलब्ध हैं, अनुष्ठान सरल हैं। रसोई को वास्तु सिद्धांतों के अनुसरूप ढालना अंधविश्वास का विषय नहीं — यह पारिवारिक स्वास्थ्य और आर्थिक विवेक का विषय है।')}</p>
                <p className="font-medium">{bi('AstroVastu Expert K.K. Nagaich provides comprehensive kitchen Vastu audits — including directional analysis, elemental balancing, and personalised remedy prescriptions — as part of every residential consultation.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच प्रत्येक आवासीय परामर्श के अंतर्गत व्यापक रसोई-वास्तु ऑडिट प्रदान करते हैं — जिसमें दिशा-विश्लेषण, तत्व-संतुलन और व्यक्तिगत उपचार-निर्धारण शामिल है।')}</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-[var(--color-bg-glass)] backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
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
