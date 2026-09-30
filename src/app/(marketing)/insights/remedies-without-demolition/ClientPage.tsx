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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#FF9933" strokeWidth="1" opacity="0.5">
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="22s" repeatCount="indefinite"/>
                  </circle>
                  <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#E8B960" fontFamily="serif">Om</text>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                {bi('Back to Archives', 'संग्रह पर वापस जाएँ')}
              </Link>

              <div className="flex items-center gap-3 text-sm text-[var(--color-hero-fg)]/50 mb-4">
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{bi('Remedies', 'उपचार')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('11 min read', '11 मिनट का पठन')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('By AstroVastu Expert KK Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा')}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-hero-fg)] leading-tight mb-4">
                {bi('Remedies Without Demolition —', 'बिना तोड़फोड़ उपचार —')}{' '}
                <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  {bi('Powerful Vastu Corrections for Your Home', 'आपके घर के लिए शक्तिशाली वास्तु सुधार')}
                </span>
              </h1>
              <p className="text-lg text-[var(--color-hero-fg)]/60 max-w-3xl">
                {bi('How to fix every common Vastu defect — toilets in the Northeast, kitchens in the wrong zone, south‑facing entrances — without breaking a single wall. Backed by published case studies and two decades of clinical practice.', 'टॉयलेट उत्तर-पूर्व में हो, रसोई गलत क्षेत्र में, या मुख्य द्वार दक्षिण की ओर — हर सामान्य वास्तु दोष को बिना एक भी दीवार तोड़े कैसे सुधारें? प्रकाशित केस स्टडीज़ और दो दशकों के क्लीनिकल अनुभव से समर्थित मार्गदर्शन।')}
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                {bi('When a homeowner learns their property has a Vastu dosha, the first image that comes to mind is a mason with a hammer. But Vastu Shastra is not about demolition. It is an energy‑management system — and like a skilled physiotherapist who restores mobility without surgery, Vastu remedies redirect, amplify, and balance energy without structural destruction. This guide presents every major non‑invasive remedy category, each grounded in published case studies, clinical observation, and authentic Vedic texts.', 'जब कोई गृहस्थ जानता है कि उसके घर में वास्तु दोष है, तो मन में पहली तस्वीर हथौड़ा लिए मजदूर की आती है। पर वास्तु शास्त्र तोड़फोड़ का शास्त्र नहीं — यह एक ऊर्जा-प्रबंधन प्रणाली है। और जैसे एक कुशल फ़िज़ियोथेरेपिस्ट बिना सर्जरी के गतिशीलता लौटाता है, वैसे ही वास्तु उपचार संरचनात्मक विनाश के बिना ऊर्जा को दिशा देते, प्रबल करते और संतुलित करते हैं। यह गाइड हर प्रमुख गैर-आक्रामक उपचार-श्रेणी प्रस्तुत करती है — जिनमें से प्रत्येक प्रकाशित केस स्टडीज़, क्लीनिकल अवलोकन और प्रामाणिक वैदिक ग्रंथों पर आधारित है।')}
              </p>

              {/* ── Section 1: Why Remedies Work ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Why Remedies Work: The Energy‑Flow Principle', 'उपचार काम क्यों करते हैं: ऊर्जा-प्रवाह सिद्धांत')}</h2>
                </div>
                <p>{bi('Vastu Shastra maps your home like a living organism — each direction, element, and zone has a defined function. The North governs wealth (Kuber), the Northeast clarity and spiritual energy (Ishanya), the Southeast fire and metabolism (Agneya), the Southwest stability and relationships (Nairutya). When real‑world constraints force a misalignment — a kitchen in the North, a toilet in the Northeast — the energy flow is disrupted. Remedies work by ', 'वास्तु शास्त्र आपके घर को एक जीवित प्राणी की तरह मानचित्रित करता है — हर दिशा, तत्व और क्षेत्र का एक निश्चित कार्य है। उत्तर धन का स्वामी है (कुबेर), उत्तर-पूर्व स्पष्टता और आध्यात्मिक ऊर्जा का (ईशान्य), दक्षिण-पूर्व अग्नि और चयापचय का (अग्नेय), दक्षिण-पश्चिम स्थिरता और संबंधों का (नैर्ऋत्य)। जब वास्तविक बाधाओं के कारण असंतुलन हो — उत्तर में रसोई, उत्तर-पूर्व में टॉयलेट — तो ऊर्जा-प्रवाह बाधित होता है। उपचार ')}<strong>{bi('redirecting, balancing, or amplifying energy', 'ऊर्जा को दिशा देने, संतुलित करने या प्रबल करने')}</strong>{bi(' using colours, symbols, mirrors, metals, plants, crystals, and light — so that the intended elemental energy is strengthened, and what is not helping is softened. A 2024 computational‑fluid‑dynamics study published by Springer confirmed that Vastu‑recommended door configurations measurably improve indoor thermal comfort — proving that energy‑flow principles translate to physical outcomes.', ' के लिए रंगों, प्रतीकों, दर्पणों, धातुओं, पौधों, क्रिस्टल और प्रकाश का प्रयोग करते हैं — ताकि अभीष्ट तत्वीय ऊर्जा प्रबल हो और जो सहायक नहीं है वह शिथिल पड़े। 2024 में Springer द्वारा प्रकाशित एक कम्प्यूटेशनल फ़्लुइड डायनामिक्स अध्ययन ने पुष्टि की कि वास्तु-अनुशंसित द्वार-विन्यास इनडोर थर्मल आराम को मापनीय रूप से बेहतर बनाते हैं — यह सिद्ध करते हुए कि ऊर्जा-प्रवाह सिद्धांत भौतिक परिणामों में बदलते हैं।')}</p>
              </div>

              {/* ── Section 2: Clean & Declutter ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Start Here: Clean and Declutter — The Simplest, Most Powerful Remedy', 'शुरुआत यहाँ से: सफ़ाई और अव्यवस्था हटाना — सबसे सरल, सबसे शक्तिशाली उपचार')}</h2>
                </div>
                <p>{bi('Before investing in pyramids or yantras, begin with the remedy that costs nothing and works immediately: ', 'पिरामिड या यंत्रों पर खर्च करने से पहले उस उपचार से शुरू करें जो कुछ नहीं माँगता और तुरंत काम करता है: ')}<strong>{bi('remove what you do not need', 'जो चाहिए नहीं, उसे हटाएँ')}</strong>{bi('. Clutter is not merely "mess" in Vastu — it is a blocker of prana (life energy). The Northeast (linked to clarity and wisdom) and the Brahmasthan (the open centre of the home, linked to health) must remain open, clean, and well‑lit. A cluttered home sends the brain constant micro‑reminders of unfinished tasks, draining mental energy even when you do not consciously notice. JK Cement\u2019s Vastu guide recommends keeping entrances and thresholds free of shoes, old mats, and unused décor; ensuring windows open smoothly; and repairing cracked plaster or chipped flooring — a sound structure is a sound home.', '। वास्तु में अव्यवस्था केवल "गंदगी" नहीं — वह प्राण (जीवन-ऊर्जा) का अवरोधक है। उत्तर-पूर्व (स्पष्टता और ज्ञान से जुड़ा) और ब्रह्मस्थान (घर का खुला केंद्र, स्वास्थ्य से जुड़ा) खुले, स्वच्छ और सुप्रकाशित रहने चाहिए। अव्यवस्थित घर मस्तिष्क को लगातार अधूरे कार्यों के सूक्ष्म संकेत भेजता है, जिससे मानसिक ऊर्जा क्षीण होती है — भले ही आप सचेत रूप से ध्यान दें या न दें। JK Cement की वास्तु गाइड सलाह देती है कि द्वार और दहलीज़ जूतों, पुरानी चटाइयों और अनुपयोगी सजावट से मुक्त रखें; खिड़कियाँ सुगमता से खुलें; और टूटी प्लास्टर या छिले फ़र्श की मरम्मत कराएँ — सुरक्षित संरचना ही सुरक्षित घर है।')}</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">{bi('Quick Daily Practices', 'दैनिक सरल अभ्यास')}</h3>
                    <ul className="text-sm text-nidra-indigo/70 space-y-1.5">
                      <li>{bi('• Keep entrances and thresholds free of shoes, old mats, and unused décor','• मुख्य द्वार और दहलीज़ को जूतों, पुरानी चटाइयों और अनुपयोगी सजावट से मुक्त रखें')}</li>
                      <li>{bi('• Ensure windows open smoothly — natural light and air are instant energy boosters','• खिड़कियाँ सुगमता से खुलें — प्राकृतिक प्रकाश और वायु तुरंत ऊर्जा-वर्धक हैं')}</li>
                      <li>{bi('• Repair cracked plaster or chipped flooring — a sound structure equals a sound home','• टूटी प्लास्टर या छिले फ़र्श की मरम्मत कराएँ — सुरक्षित संरचना = सुरक्षित घर')}</li>
                      <li>{bi('• Remove broken clocks, cracked mirrors, and non‑functional appliances immediately','• टूटी घड़ियाँ, दरके दर्पण और निष्क्रिय उपकरण तुरंत हटाएँ')}</li>
                      <li>{bi('• Keep the Brahmasthan (centre of home) completely open — no furniture, no storage','• ब्रह्मस्थान (घर का केंद्र) पूर्णतः खुला रखें — न फ़र्नीचर, न भंडारण')}</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">{bi('The Science Behind It', 'इसके पीछे का विज्ञान')}</h3>
                    <ul className="text-sm text-nidra-indigo/70 space-y-1.5">
                      <li>{bi('• A cluttered home sends subconscious "unfinished task" signals that drain mental energy','• अव्यवस्थित घर अवचेतन में "अधूरे कार्य" के संकेत भेजकर मानसिक ऊर्जा खर्च करता है')}</li>
                      <li>{bi('• The Northeast zone governs clarity — clutter here directly impairs decision‑making','• उत्तर-पूर्व क्षेत्र स्पष्टता का स्वामी — यहाँ अव्यवस्था सीधे निर्णय-क्षमता कमजोर करती है')}</li>
                      <li>{bi('• More than 30% of renovated urban homes in India adapt Vastu features without structural changes','• भारत में 30% से अधिक नवीकृत शहरी घर संरचनात्मक परिवर्तन के बिना वास्तु विशेषताएँ अपनाते हैं')}</li>
                      <li>{bi('• Improved ventilation alone solves a large portion of everyday Vastu concerns','• केवल बेहतर पवन-संचार भी आम वास्तु चिंताओं का बड़ा हिस्सा हल कर देता है')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ── Section 3: Elemental Remedies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Elemental Remedies: The Five‑Element Correction System', 'तत्व-आधारित उपचार: पाँच-तत्व सुधार प्रणाली')}</h2>
                </div>
                <p>{bi('Every Vastu dosha ultimately represents an elemental imbalance. The five elements — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akash) — can be strengthened or pacified using specific materials and placements. The Times of India\u2019s Vastu guide confirms that imbalanced elements cause specific symptoms: a weak Earth element causes financial instability; an overactive Fire element creates aggression and conflict; a blocked Air element results in communication breakdown.', 'हर वास्तु दोष अंततः एक तत्वीय असंतुलन है। पाँच तत्व — पृथ्वी (Prithvi), जल (Jal), अग्नि (Agni), वायु (Vayu) और आकाश (Akash) — विशिष्ट सामग्री और स्थान-विन्यास से प्रबल या शांत किए जा सकते हैं। Times of India की वास्तु गाइड पुष्टि करती है कि असंतुलित तत्व विशिष्ट लक्षण पैदा करते हैं: कमजोर पृथ्वी तत्व वित्तीय अस्थिरता; अत्यधिक सक्रिय अग्नि तत्व आक्रामकता और संघर्ष; अवरोधित वायु तत्व संचार-विफलता उत्पन्न करता है।')}</p>

                <div className="mt-6 space-y-5">
                  {[
                    { element: 'Earth (Prithvi)', elementHi: 'पृथ्वी (Prithvi)', zone: 'Southwest', zoneHi: 'दक्षिण-पश्चिम', remedy: 'Place a heavy ceramic pot with soil or a terracotta object. Use yellow, beige, or brown colours. Add a solid stone or brick piece in the southwest corner to stabilise energy.', remedyHi: 'मिट्टी भरकर भारी सेरामिक गमला या टेराकोटा वस्तु रखें। पीले, बेज या भूरे रंगों का प्रयोग करें। ऊर्जा स्थिर करने हेतु दक्षिण-पश्चिम कोने में ठोस पत्थर या ईंट रखें।' },
                    { element: 'Water (Jal)', elementHi: 'जल (Jal)', zone: 'Northeast', zoneHi: 'उत्तर-पूर्व', remedy: 'A small water fountain or a bowl of fresh water with rose petals and a few drops of Gangajal. Change the water daily. A copper vessel with water energised overnight in the Northeast corner enhances mental clarity.', remedyHi: 'छोटा जल-फव्वारा या गुलाब की पंखुड़ियों और कुछ बूँद गंगाजल वाले ताज़ा पानी का कटोरा। पानी रोज़ बदलें। उत्तर-पूर्व कोने में रातभर पानी भरता ताँबे का बर्तन मानसिक स्पष्टता बढ़ाता है।' },
                    { element: 'Fire (Agni)', elementHi: 'अग्नि (Agni)', zone: 'Southeast', zoneHi: 'दक्षिण-पूर्व', remedy: 'A salt lamp, a ghee lamp lit daily at sunrise, or a red bulb installed in the SSE zone. The colour red is associated with the fire element — installing a red bulb in the South‑Southeast zone has restored health in documented cases.', remedyHi: 'सॉल्ट लैंप, रोज़ सूर्योदय पर जलाई गई घी की दीपक, या दक्षिण-दक्षिण-पूर्व क्षेत्र में लाल बल्ब। लाल रंग अग्नि तत्व से जुड़ा है — दक्षिण-दक्षिण-पूर्व क्षेत्र में लाल बल्ब लगाने से प्रलेखित मामलों में स्वास्थ्य पुनर्स्थापित हुआ है।' },
                    { element: 'Air (Vayu)', elementHi: 'वायु (Vayu)', zone: 'Northwest', zoneHi: 'उत्तर-पश्चिम', remedy: 'A metal wind chime with 5 or 6 rods hung in the northwest. The sound vibrations break stagnant energy patterns and improve communication flow. Bamboo chimes work in the East and Southeast.', remedyHi: '5 या 6 रॉड वाला धातु का विंड चाइम उत्तर-पश्चिम में लटकाएँ। ध्वनि के कंपन स्थिर ऊर्जा-पैटर्न तोड़ते हैं और संचार-प्रवाह सुधारते हैं। बाँस के चाइम पूर्व और दक्षिण-पूर्व में कारगर हैं।' },
                    { element: 'Space (Akash)', elementHi: 'आकाश (Akash)', zone: 'Brahmasthan', zoneHi: 'ब्रह्मस्थान', remedy: 'Keep the centre open and well‑lit. A crystal lotus or a copper pyramid with arrows mounted on a sacred grid canvas can neutralise Brahmasthan doshas, as documented by multiple Vastu practitioners.', remedyHi: 'केंद्र को खुला और सुप्रकाशित रखें। पवित्र ग्रिड कैनवास पर अंकित तीरों वाला क्रिस्टल कमल या ताँबे का पिरामिड ब्रह्मस्थान के दोष निष्क्रिय कर सकता है — अनेक वास्तु विशेषज्ञों द्वारा प्रलेखित।' },
                  ].map((item) => (
                    <div key={item.element} className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10 hover:border-prakash-gold/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-prakash-gold" />
                        <h3 className="font-serif text-lg text-nidra-indigo font-bold">{bi(item.element, item.elementHi)} ({bi(item.zone, item.zoneHi)})</h3>
                      </div>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi(item.remedy, item.remedyHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 4: Yantra Remedies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-fuchsia-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Yantra Remedies: Sacred Geometry as Energy Correction', 'यंत्र उपचार: ऊर्जा-सुधार के रूप में पवित्र ज्यामिति')}</h2>
                </div>
                <p>{bi('Yantras are sacred geometric diagrams energised through specific mantras. They are not decorative — they are precision energy tools. Diviniti\u2019s comprehensive Vastu Yantra guide recommends placing them on clean altars, facing the correct direction, and maintaining regular prayer or meditation practice for sustained effect.', 'यंत्र विशिष्ट मंत्रों से प्राण-प्रतिष्ठित पवित्र ज्यामितीय आकृतियाँ हैं। ये सजावट नहीं — सूक्ष्म-सटीक ऊर्जा-उपकरण हैं। Diviniti की समग्र वास्तु यंत्र गाइड सिफारिश करती है इन्हें स्वच्छ वेदी पर, सही दिशा की ओर मुँह करके स्थापित करें और निरंतर प्रभाव हेतु नियमित प्रार्थना या ध्यान-अभ्यास बनाए रखें।')}</p>


                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Vastu Purush Yantra', nameHi: 'वास्तु पुरुष यंत्र', placement: 'Northeast, underground or in pooja room', placementHi: 'उत्तर-पूर्व, भूमिगत या पूजा-कक्ष में', purpose: 'Aligns the entire home with the cosmic energy grid of the Vastu Purush Mandala — the foundational correction for any major Vastu dosha', purposeHi: 'पूरे घर को वास्तु पुरुष मंडल की ब्रह्मांडीय ऊर्जा ग्रिड के साथ संरेखित करता है — हर बड़े वास्तु दोष का मूलभूत सुधार' },
                    { name: 'Shri Yantra', nameHi: 'श्री यंत्र', placement: 'North‑East, facing West', placementHi: 'उत्तर-पूर्व, पश्चिम की ओर मुँह', purpose: 'The most powerful of all yantras. Attracts wealth, harmony, and spiritual growth. Should be worshipped with saffron and water daily', purposeHi: 'सभी यंत्रों में सर्वाधिक शक्तिशाली। धन, सामंजस्य और आध्यात्मिक वृद्धि आकर्षित करता है। रोज़ केसर और जल से अर्चना करें' },
                    { name: 'Kuber Yantra', nameHi: 'कुबेर यंत्र', placement: 'North or East, facing South', placementHi: 'उत्तर या पूर्व, दक्षिण की ओर मुँह', purpose: 'Enhances financial inflow and removes economic obstacles. Associated with Kuber, the deity of wealth. Can be placed in the cash box or north zone', purposeHi: 'वित्तीय आगमन बढ़ाता और आर्थिक बाधाएँ हटाता है। धन-देवता कुबेर से संबंधित। कैश बॉक्स या उत्तर क्षेत्र में रखा जा सकता है' },
                    { name: 'Mangal Yantra', nameHi: 'मंगल यंत्र', placement: 'South, facing North', placementHi: 'दक्षिण, उत्तर की ओर मुँह', purpose: 'Pacifies aggressive Mars (Mangal) energy. Prevents accidents, disputes, and fire‑related mishaps. Essential for homes with Southeast doshas', purposeHi: 'आक्रामक मंगल (Mars) ऊर्जा को शांत करता है। दुर्घटनाओं, विवादों और अग्नि-जनित दुर्घटनाओं से रक्षा करता है। दक्षिण-पूर्व के दोष वाले घरों के लिए आवश्यक' },
                  ].map((yantra) => (
                    <div key={yantra.name} className="p-4 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-1">{bi(yantra.name, yantra.nameHi)}</h3>
                      <p className="text-xs text-sacred-saffron mb-2">{bi(yantra.placement, yantra.placementHi)}</p>
                      <p className="text-sm text-nidra-indigo/70">{bi(yantra.purpose, yantra.purposeHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 5: Crystals & Pyramids ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Crystals and Pyramids: Precision Energy Tools', 'क्रिस्टल और पिरामिड: परिशुद्ध ऊर्जा-उपकरण')}</h2>
                </div>
                <p>{bi('Housing.com\u2019s definitive guide on Vastu pyramids and crystals catalogs the specific energy properties of each mineral. These are not decorative items — they are precision instruments that must be placed at exact angles and directions for measurable effect.', 'Housing.com की निर्णायक वास्तु पिरामिड और क्रिस्टल गाइड हर खनिज की विशिष्ट ऊर्जा-विशेषताएँ दर्ज करती है। ये सजावटी वस्तुएँ नहीं — परिशुद्ध उपकरण हैं जिन्हें मापनीय प्रभाव हेतु सटीक कोणों और दिशाओं में ही स्थापित करना चाहिए।')}</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10">
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Crystal / Pyramid', 'क्रिस्टल / पिरामिड')}</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Best Placement', 'सर्वोत्तम स्थान')}</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Primary Benefit', 'प्रमुख लाभ')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Clear Quartz Pyramid', 'Northeast – study or workspace', 'Amplifies focus, clarity, and concentration', 'क्लियर क्वार्ट्ज पिरामिड', 'उत्तर-पूर्व – अध्ययन या कार्य-स्थल', 'एकाग्रता, स्पष्टता और ध्यान-शक्ति बढ़ाता है'],
                        ['Rose Quartz', 'Southwest – master bedroom', 'Healing, love, compassion, emotional balance', 'रोज़ क्वार्ट्ज', 'दक्षिण-पश्चिम – मास्टर बेडरूम', 'मरहम, प्रेम, करुणा और भावनात्मक संतुलन'],
                        ['Amethyst Pyramid', 'Southwest – bedroom corner', 'Stress relief, calm sleep, spiritual awareness', 'एमेथिस्ट पिरामिड', 'दक्षिण-पश्चिम – बेडरूम कोना', 'तनाव-राहत, शांत नींद, आध्यात्मिक जागरूकता'],
                        ['Black Tourmaline', 'Main entrance or all four corners', 'Protection, negativity shield; absorbs harmful vibrations', 'ब्लैक टूरमलाइन', 'मुख्य द्वार या चारों कोने', 'संरक्षण, नकारात्मकता-कवच; हानिकारक कंपन अवशोषित करता है'],
                        ['Citrine', 'North – wealth zone, or office', 'Prosperity, motivation, business success', 'सिट्रिन', 'उत्तर – धन-क्षेत्र, या कार्यालय', 'समृद्धि, प्रेरणा, व्यावसायिक सफलता'],
                        ['Copper Pyramid (81‑Pyramid Plate)', 'Under mattress or main entrance flooring', 'Attracts universal cosmic energy; neutralises structural doshas', 'ताँबे का पिरामिड (81-पिरामिड प्लेट)', 'गद्दे के नीचे या मुख्य द्वार के फ़र्श में', 'सार्वभौमिक कॉस्मिक ऊर्जा आकर्षित करता है; संरचनात्मक दोष निष्क्रिय करता है'],
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-prakash-gold/10 ${i % 2 === 0 ? 'bg-[var(--color-bg-glass)]' : 'bg-vastu-stone/20'}`}>
                          <td className="py-3 px-4 font-medium text-nidra-indigo/80">{bi(row[0], row[3])}</td>
                          <td className="py-3 px-4 text-nidra-indigo/60">{bi(row[1], row[4])}</td>
                          <td className="py-3 px-4 text-nidra-indigo/60">{bi(row[2], row[5])}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Section 6: Salt, Camphor, Colour ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-pink-400 to-rose-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Salt Therapy, Camphor, and Colour Balancing', 'नमक थेरेपी, कपूर और रंग-संतुलन')}</h2>
                </div>

                <div className="mt-4 space-y-5">
                  <div className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi('Sea Salt Bowl Therapy', 'समुद्री नमक कटोरा थेरेपी')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi('Both Vastu and spiritual science confirm that salt absorbs emotional residue, psychic heaviness, and energy imbalances. Place uncrushed sea salt in glass or ceramic bowls in all four corners of a room, especially in spaces that feel heavy or emotionally charged. Replace the salt weekly — discard it outside the home, never reuse. The Times of India recommends this as "a quick way to start the process of spiritual cleaning." For toilets, a bowl of sea salt in an open corner, changed every 15 days, neutralises the negative energy of the water element mixing with waste.', 'वास्तु और आध्यात्मिक विज्ञान — दोनों पुष्टि करते हैं कि नमक भावनात्मक अवशेष, मानसिक भार और ऊर्जा-असंतुलन अवशोषित करता है। बिना कुचला समुद्री नमक काँच या सेरामिक के कटोरों में कमरे के चारों कोनों में रखें — विशेषतः भारीपन या भावनात्मक तनाव वाले स्थानों में। सप्ताह में नमक बदलें — घर के बाहर त्यागें, दोबारा कभी प्रयोग न करें। Times of India इसे "आध्यात्मिक सफ़ाई की शुरुआत का त्वरित मार्ग" बताता है। टॉयलेट हेतु खुले कोने में समुद्री नमक का कटोरा, हर 15 दिन में बदला जाए, जल-तत्व के अपशिष्ट से मिश्रण की नकारात्मक ऊर्जा को निष्क्रिय करता है।')}</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi('Camphor Burning (Kapur)', 'कपूर दहन (Kapur)')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi('Burning camphor (kapur) is one of the oldest and most effective Vastu remedies. Dip 5‑6 camphor tablets in pure ghee in an earthen lamp and burn them in the morning and evening. The aromatic smoke purifies the energy field, removes Vastu doshas, and also calms Pitru Dosha (ancestral afflictions). For stubborn doshas in a particular corner, place a piece of solid camphor there without burning it — as it naturally shrinks, it absorbs negative energy. News18 recommends burning camphor or guggul every morning and evening; the Times of India notes that camphor with ghee burned on Fridays in the Southeast activates Agni tattva and dissolves financial blockages.', 'कपूर (kapur) का दहन सबसे प्राचीन और कारगर वास्तु उपचारों में से एक। मिट्टी के दीपक में शुद्ध घी में 5–6 कपूर की गोलियाँ भिगोकर सुबह और शाम जलाएँ। सुगंधित धुआँ ऊर्जा-क्षेत्र को पवित्र करता है, वास्तु दोष हटाता है और पितृ दोष (पूर्वज-जनित क्लेश) को भी शांत करता है। किसी विशिष्ट कोने के ज़िद्दी दोष में वहाँ ठोस कपूर का टुकड़ा बिना जलाए रखें — स्वाभाविक रूप से सिकुड़ते हुए वह नकारात्मक ऊर्जा अवशोषित करता है। News18 हर सुबह-शाम कपूर या गूगल जलाने की सिफारिश करता है; Times of India के अनुसार शुक्रवार को दक्षिण-पूर्व में घी के साथ जलाया कपूर अग्नि तत्व को सक्रिय कर वित्तीय अवरोधों को दूर करता है।')}</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi('Colour Therapy Room‑by‑Room', 'कमरे-वार रंग थेरेपी')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi('Colour is one of the most accessible Vastu corrections. A360 Architects\u2019 comprehensive colour guide confirms that colours must match both the room\u2019s function and its directional alignment. Key guidelines: ', 'रंग सबसे सुलभ वास्तु सुधारों में से एक। A360 Architects की समग्र रंग गाइड पुष्टि करती है कि रंग कमरे के कार्य और उसकी दिशा-संरेखण — दोनों से मेल खाते होने चाहिए। मुख्य दिशा-निर्देश: ')}<strong>{bi('Living Room', 'लिविंग रूम')}</strong>{bi(' — East‑facing: white, green, light blue. Southeast‑facing: light orange or pink. ', ' — पूर्व की ओर: सफ़ेद, हरा, हल्का नीला। दक्षिण-पूर्व की ओर: हल्का नारंगी या गुलाबी। ')}<strong>{bi('Bedroom', 'बेडरूम')}</strong>{bi(' — Southwest: earthy browns and yellows. South‑facing: soft pinks and peaches. Avoid dark blues, deep reds, and black. ', ' — दक्षिण-पश्चिम: पृथ्वी-से भूरे और पीले रंग। दक्षिण की ओर: कोमल गुलाबी और आड़ू-रंग। गहरे नीले, गहरे लाल और काले से बचें। ')}<strong>{bi('Kitchen', 'रसोई')}</strong>{bi(' — Light orange, red, yellow to stimulate appetite; never dark colours. ', ' — भूक बढ़ाने हेतु हल्का नारंगी, लाल, पीला; गहरे रंग कभी नहीं। ')}<strong>{bi('Pooja Room', 'पूजा-कक्ष')}</strong>{bi(' — White, cream, light yellow, or soft gold. Light colours always preferred over dark or vibrant shades in smaller rooms or spaces lacking natural sunlight.', ' — सफ़ेद, क्रीम, हल्का पीला या कोमल सुनहरा। छोटे कमरों या प्राकृतिक धूप-रहित स्थानों में गहरे या तीव्र रंगों से हल्के रंग सर्वदा श्रेष्ठ।')}</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi('Mirror Placement — The Energy Redirector', 'दर्पण स्थान — ऊर्जा-दिशाबदलक')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi('Mirrors are powerful energy tools in Vastu. Dwello\u2019s mirror guide states that the best directions for mirrors are North and East walls — these attract positive energy and create spaciousness. ', 'दर्पण वास्तु में शक्तिशाली ऊर्जा-उपकरण। Dwello की दर्पण गाइड के अनुसार दर्पण हेतु सर्वोत्तम दीवारें उत्तर और पूर्व — ये सकारात्मक ऊर्जा आकर्षित कर विस्तार की अनुभूति रचती हैं। ')}<strong>{bi('Never', 'कभी न')}</strong>{bi(' place a mirror facing the bed (causes marital discord and poor sleep), facing the main door (reflects opportunities away), or reflecting clutter or a toilet. A mirror on the outside of a Northeast toilet door symbolically neutralises the dosha. Two mirrors at the end of a narrow corridor visually extend the space and correct the defect. A mirror reflecting the dining table symbolically doubles food and prosperity.', ' रखें दर्पण बिस्तर की ओर (दांपत्य कलह और खराब नींद का कारण), मुख्य द्वार की ओर (अवसरों को परावर्तित कर लौटा देता), या अव्यवस्था या टॉयलेट के प्रतिबिंब में। उत्तर-पूर्व टॉयलेट के दरवाज़े के बाहर दर्पण दोष को प्रतीकात्मक निष्क्रिय करता। संकरी गलियारे के अंत में दो दर्पण स्थान को दृश्यतः विस्तृत करके दोष सुधारते। भोजन-मेज़ का प्रतिबिंब अन्न और समृद्धि को प्रतीकात्मक दोगुना करता।')}</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi('Wind Chimes, Plants, and Daily Rituals', 'विंड चाइम, पौधे और दैनिक अनुष्ठान')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed"><strong>{bi('Wind Chimes:', 'विंड चाइम:')}</strong> {bi('A metal chime with 5‑6 rods in the Northwest attracts helpful people and improves communication. A wooden or bamboo chime with 5 rods in the East promotes health and family growth. Never use a metal chime where a bamboo one belongs. ', '5–6 रॉड वाला धातु का चाइम उत्तर-पश्चिम में सहायक लोगों को आकर्षित करता और संचार सुधरता। 5 रॉड वाला लकड़ी या बाँस का चाइम पूर्व में स्वास्थ्य और पारिवारिक वृद्धि देता। जहाँ बाँस का चाइम होना चाहिए, वहाँ धातु का कभी न लटकाएँ। ')}<strong>{bi('Tulsi Plant:', 'तुलसी पौधा:')}</strong> {bi('Place in the East, North, or Northeast direction — never in the South. Water it daily. Lighting a lamp near Tulsi in the evening is a powerful daily Vastu ritual. Housing.com confirms it purifies air and invites spiritual energy. ', 'पूर्व, उत्तर या उत्तर-पूर्व दिशा में रखें — दक्षिण में कभी नहीं। रोज़ पानी दें। शाम को तुलसी के पास दीपक जलाना शक्तिशाली दैनिक वास्तु अनुष्ठान है। Housing.com पुष्टि करता है यह वायु को पवित्र करता और आध्यात्मिक ऊर्जा को आमंत्रित। ')}<strong>{bi('Ghee Lamp:', 'घी की दीपक:')}</strong> {bi('Lighting a ghee lamp in the East every morning activates the fire element and invites health and prosperity. Adding two cloves to the ghee lamp is a proven remedy for family health, documented across multiple Vastu traditions.', 'प्रति प्रातः पूर्व में घी का दीपक जलाना अग्नि तत्व को सक्रिय कर स्वास्थ्य और समृद्धि का निमंत्रण देता। घी की दीपक में दो लौंग डालना पारिवारिक स्वास्थ्य का सिद्ध उपचार, अनेक वास्तु परंपराओं में प्रलेखित।')}</p>
                  </div>
                </div>
              </div>

              {/* ── Section 7: Case Studies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-orange-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Documented Case Studies — Remedies in Action', 'प्रलेखित केस स्टडीज़ — क्रियारत उपचार')}</h2>
                </div>

                <div className="mt-4 space-y-5">
                  <div className="p-6 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">{bi('Case 1: Asthma Recovery Through Zone Correction', 'केस 1: क्षेत्र-सुधार से दमे से उबरना')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi('A family head with severe asthma was dependent on an inhaler and had been hospitalised. Vastu analysis revealed that the Southeast and South‑Southeast zones — linked to health and the fire element — were too small. The entrance was positioned in the Zone of Disposal. Simple remedies were applied: a red bulb in the SSE zone, the bed moved to the South, and a water feature in the NNE zone. Health dramatically improved — the dependency on the inhaler reduced significantly, and energy levels normalised. ', 'गंभीर दमे से पीड़ित परिवार के मुखी इनहेलर पर निर्भर थे और अस्पताल में भर्ती हुए। वास्तु विश्लेषण में खुलासा — स्वास्थ्य और अग्नि तत्व से जुड़े दक्षिण-पूर्व तथा दक्षिण-दक्षिण-पूर्व क्षेत्र आकार में बहुत छोटे थे। प्रवेश द्वार निष्कासन-क्षेत्र (Zone of Disposal) में स्थित। सरल उपचार लगाए: दक्षिण-दक्षिण-पूर्व क्षेत्र में लाल बल्ब, बिस्तर दक्षिण में, और उत्तर-उत्तर-पूर्व क्षेत्र में जल-विशेष। स्वास्थ्य में नाटकीय सुधार — इनहेलर की निर्भरता उल्लेखनीय घटी और ऊर्जा-स्तर सामान्य हो गया। ')}<em>{bi('Source: vastu‑shastra.co.uk, October 2024.', 'स्रोत: vastu‑shastra.co.uk, अक्टूबर 2024.')}</em></p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">{bi('Case 2: Delhi Family — Three‑Month Transformation', 'केस 2: दिल्ली का परिवार — तीन महीने का रूपांतरण')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi('Mr. and Mrs. Sharma of Delhi experienced constant financial instability and health issues despite a well‑established business. A Vastu audit identified four major doshas: a South‑West main entrance, a North‑East kitchen, a North master bedroom, and cluttered dark corners. Corrections included creating a North‑East entrance using a secondary door, repositioning the stove to the South‑East, moving the bedroom to the South‑West, and decluttering with improved lighting. Within three months: financial growth resumed, health issues reduced significantly, sleep improved, and relationships strengthened. ', 'दिल्ली के शर्मा जी-शर्माजी सुप्रतिष्ठित व्यवसाय के बावजूद निरंतर वित्तीय अस्थिरता और स्वास्थ्य समस्याएँ झेल रहे थे। वास्तु ऑडिट में चार प्रमुख दोष: दक्षिण-पश्चिम मुख्य द्वार, उत्तर-पूर्व रसोई, उत्तर में मास्टर बेडरूम, और अव्यवस्थित अंधेरे कोने। सुधार: सहायक द्वार से उत्तर-पूर्व प्रवेश बनाना, चूल्हा दक्षिण-पूर्व में, बेडरूम दक्षिण-पश्चिम में, और अव्यवस्था-मुक्ति के साथ बेहतर प्रकाश। तीन महीने के भीतर: वित्तीय वृद्धि पुनः आरंभ, स्वास्थ्य समस्याएँ उल्लेखनीय रूप से घटी, नींद सुधरी और संबंध मज़बूत हुए। ')}<em>{bi('Source: vaastuguruduttji.com, January 2025.', 'स्रोत: vaastuguruduttji.com, जनवरी 2025.')}</em></p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">{bi('Case 3: Factory Owner — Production Turnaround', 'केस 3: फैक्ट्री मालिक — उत्पादन में सकारात्मक मोड़')}</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi('A factory owner who had recently relocated to expand his business faced declining production speed and poor team coordination. Vastu treatment without any structural demolition — using metal strips, colour balancing, crystals, and directional programming of cabins — resulted in improved production speed, better delivery timelines, and a supportive, cooperative team. ', 'कारोबार विस्तार हेतु हाल ही में नए स्थान पर आए एक फैक्ट्री मालिक की उत्पादन-गति और टीम-तालमेल लगातार गिर रहे थे। बिना किसी संरचनात्मक तोड़फोड़ वास्तु उपचार — धातु की स्ट्रिप्स, रंग-संतुलन, क्रिस्टल और केबिनों की दिशा-निर्धारण — से उत्पादन-गति सुधरी, डिलीवरी समय-सारिनी बेहतर हुई, और टीम सहयोगी व समर्पित हो गई। ')}<em>{bi('Source: LinkedIn, Karuna Sharma Vastu Case Study, January 2025.', 'स्रोत: LinkedIn, Karuna Sharma वास्तु केस स्टडी, जनवरी 2025.')}</em></p>
                  </div>
                </div>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">{bi('Conclusion — Your Home Does Not Need to Be Torn Down', 'निष्कर्ष — आपके घर को तोड़ने की ज़रूरत नहीं')}</h2>
                </div>
                <p>{bi('Every Vastu dosha — from a toilet in the Northeast to a kitchen in the North, from a South‑facing entrance to a cluttered Brahmasthan — has a documented, effective, and non‑destructive remedy. The ancient science of Vastu Shastra never demanded demolition. It demanded understanding. When you know which element to strengthen, which direction to activate, and which tool to deploy — a salt bowl, a copper pyramid, a red bulb, a crystal, a yantra, or simply decluttering — you can transform your living space without ever lifting a hammer.', 'हर वास्तु दोष — उत्तर-पूर्व के टॉयलेट से उत्तर में रसोई, दक्षिण की ओर खुले द्वार से अव्यवस्थित ब्रह्मस्थान तक — का प्रलेखित, कारगर और अविनाशी उपचार मौजूद है। वास्तु शास्त्र की प्राचीन विद्या ने कभी तोड़फोड़ नहीं माँगी — केवल समझ माँगी। जब आप जानते हैं कि कौन-सा तत्व प्रबल करना है, कौन-सी दिशा सक्रिय करनी है और कौन-सा उपचार लगाना है — नमक का कटोरा, ताँबे का पिरामिड, लाल बल्ब, क्रिस्टल, यंत्र या केवल अव्यवस्था-मुक्ति — तो हथौड़ा उठाए बिना भी अपना निवास-स्थान पूर्णतः बदल सकते हैं।')}</p>
                <p className="font-medium">{bi('AstroVastu Expert K.K. Nagaich has spent over 20 years applying these precise, non‑invasive remedies for over 2 lakh clients across 50+ countries — proving every day that the most powerful Vastu corrections are also the simplest.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच ने 50+ देशों में 2 लाख से अधिक क्लाइंट्स के लिए ये परिशुद्ध, गैर-आक्रामक उपचार 20 से अधिक वर्षों तक लगाए हैं — हर दिन यह सिद्ध करते हुए कि सबसे शक्तिशाली वास्तु सुधार सरलतम भी होते हैं।')}</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-[var(--color-bg-glass)] backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">{bi('AstroVastu Expert KK Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच')}</p>
                <p className="text-sm text-nidra-indigo/60">{bi('4th Generation Vastu Guru | MBA | Ex‑CEO | 20+ Years Clinical Practice | 2 Lakh+ Clients Worldwide', '4 पीढ़ियों की वास्तु गुरु परंपरा | MBA | पूर्व सीईओ | 20+ वर्षों का क्लीनिकल अनुभव | विश्वभर में 2 लाख+ क्लाइंट्स')}</p>
              </div>
            </div>
          </div>
        </article>
      
    </>
  );
}
