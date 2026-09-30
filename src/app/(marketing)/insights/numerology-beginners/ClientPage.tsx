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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(232,185,96,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              {/* Rotating mandala */}
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
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{bi('Numerology', 'अंक शास्त्र')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('10 min read', '10 मिनट का पठन')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('By AstroVastu Expert KK Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा')}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-hero-fg)] leading-tight mb-4">
                {bi('Numerology for Beginners —', 'शुरुआत के लिए अंक शास्त्र —')}{' '}
                <span className="bg-gradient-to-r from-purple-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">
                  {bi('Unlock the Secrets of Your Birth Number', 'अपने जन्म अंक के रहस्य जानें')}
                </span>
              </h1>
              <p className="text-lg text-[var(--color-hero-fg)]/60 max-w-3xl">
                {bi('An authoritative introduction to Vedic numerology — how to calculate your Driver and Destiny numbers, what each number means, real‑world case studies, and why this 5,000‑year‑old science still transforms lives today.', 'वैदिक अंक शास्त्र का प्रामाणिक परिचय — ड्राइवर और डिस्टिनी अंक कैसे निकालें, हर संख्या का क्या अर्थ है, वास्तविक केस स्टडीज़, और यह 5,000 वर्ष पुरानी विद्या आज भी जीवन क्यों बदल देती है।')}
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                {bi('Vedic Numerology is an ancient Indian science of numbers — a system that traces its roots back over 5,000 years to the earliest Vedic texts. Unlike modern Western numerology, which evolved separately through Pythagorean and Chaldean traditions, Vedic numerology connects each number to a specific planet (graha) and divine energy, offering a uniquely holistic framework for understanding personality, destiny, relationships, and career.', 'वैदिक अंक शास्त्र संख्याओं की प्राचीन भारतीय विद्या है — जिसकी जड़ें 5,000 से अधिक वर्ष पुराने आदिम वैदिक ग्रंथों तक जाती हैं। आधुनिक पाश्चात्य अंक शास्त्र से भिन्न, जो Pythagorean और Chaldean परंपराओं में स्वतंत्र रूप से विकसित हुआ, वैदिक अंक शास्त्र हर संख्या को एक निश्चित ग्रह (graha) और दैवीय ऊर्जा से जोड़ता है — व्यक्तित्व, नियति, संबंधों और करियर को समझने की अद्वितीय समग्र दृष्टि देता है।')}
              </p>

              {/* ── Section 1: The Three Core Numbers ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-prakash-gold" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('The Three Core Numbers in Vedic Numerology', 'वैदिक अंक शास्त्र की तीन मुख्य संख्याएँ')}</h2>
                </div>
                <p>{bi('In Vedic numerology, every individual is defined by three primary numbers — the ', 'वैदिक अंक शास्त्र में हर व्यक्ति तीन मुख्य संख्याओं से परिभाषित होता है — ')}<strong>{bi('Psychic Number', 'मूलांक')}</strong>{bi(' (Mulank or Driver), the ', ' (Psychic Number या Driver), ')}<strong>{bi('Destiny Number', 'भाग्यांक')}</strong>{bi(' (Bhagyank or Conductor), and the ', ' (Destiny Number या Conductor), और ')}<strong>{bi('Name Number', 'नामांक')}</strong>{bi(' (Namank). Each serves a distinct purpose, and together they form a complete numerological blueprint.', ' (Namank)। इनमें से हर एक का भिन्न प्रयोजन है, और तीनों मिलकर एक पूर्ण अंक-शास्त्रीय ब्लूप्रिंट बनाते हैं।')}</p>

                <div className="mt-8 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">{bi('Psychic Number (Mulank / Driver Number)', 'मूलांक (Psychic Number / Driver Number)')}</h3>
                  </div>
                  <p>{bi('Your Psychic Number is derived ', 'आपका मूलांक ')}<strong>{bi('solely from your birth day', 'केवल आपके जन्म की तारीख से')}</strong>{bi('. Add the digits of your birth day together and reduce to a single digit. For example, someone born on the 29th: 2 + 9 = 11, then 1 + 1 = 2. Their Psychic Number is 2.', ' निकलता है। जन्म तारीख के अंकों को जोड़कर एक अंक तक घटाएँ। उदाहरण के लिए, 29 तारीख को जन्मे व्यक्ति का: 2 + 9 = 11, फिर 1 + 1 = 2। उनका मूलांक 2 है।')}</p>
                  <p>{bi('This number reveals your ', 'यह संख्या आपका ')}<strong>{bi('inner self', 'आंतरिक स्वभाव')}</strong>{bi(' — your personality traits, desires, ambitions, strengths, and weaknesses. It is the number you resonate with most deeply and the one that governs your day‑to‑day behaviour. In the metaphor of a bus, the Psychic Number is the ', ' — आपके व्यक्तित्व-लक्षण, इच्छाएँ, महत्वाकांक्षाएँ, शक्तियाँ और कमज़ोरियाँ प्रकट करता है। यह वही संख्या है जिससे आप सबसे गहरे स्तर पर जुड़ते हैं और जो आपके दैनिक व्यवहार को संचालित करती है। बस के रूपक में मूलांक ')}<strong>{bi('driver', 'चालक (driver)')}</strong>{bi(' is — it controls where the bus goes, regardless of how many passengers the conductor takes in. Master numerologist Josh Siegel describes this as the number that "defines your character" and "unveils essential insights into your personal values and beliefs."', ' है — यह नियंत्रित करता है कि बस कहाँ जाए, चाहे कंडक्टर कितने भी यात्री क्यों न चढ़ाए। महान अंक शास्त्री Josh Siegel इसे वह संख्या मानते हैं जो "आपके चरित्र को परिभाषित करती है" और "आपके निजी मूल्यों और विश्वासों की मूलभूत अंतर्दृष्टि प्रकट करती है।"')}</p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">{bi('Destiny Number (Bhagyank / Conductor Number)', 'भाग्यांक (Destiny Number / Conductor Number)')}</h3>
                  </div>
                  <p>{bi('Your Destiny Number is derived from your ', 'आपका भाग्यांक आपके ')}<strong>{bi('full birth date', 'पूर्ण जन्म-दिनांक')}</strong>{bi(' — day, month, and year. Add every digit: for 29‑01‑1990, you calculate 2 + 9 + 0 + 1 + 1 + 9 + 9 + 0 = 31, then 3 + 1 = 4. The Destiny Number is 4.', ' — दिन, माह और वर्ष से निकलता है। हर अंक जोड़ें: 29‑01‑1990 के लिए, 2 + 9 + 0 + 1 + 1 + 9 + 9 + 0 = 31, फिर 3 + 1 = 4। भाग्यांक 4 हुआ।')}</p>
                  <p>{bi('Where the Psychic Number represents who you are, the Destiny Number reveals ', 'जहाँ मूलांक यह बताता है कि आप कौन हैं, वहाँ भाग्यांक प्रकट करता है ')}<strong>{bi('who you are meant to become', 'आपको किन बनना चाहिए')}</strong>{bi('. It points to the strengths you should develop, the challenges you will face, and the ultimate purpose of your life. In the bus metaphor, it is the ', ')। यह संकेत देता है कि आपको कौन-सी शक्तियाँ विकसित करनी हैं, कौन-सी चुनौतियों का सामना करना है और जीवन का परम उद्देश्य क्या है। बस के रूपक में यह ')}<strong>{bi('conductor', 'कंडक्टर')}</strong>{bi(' — deciding which passengers to take in, where to stop, and what fees to charge. The Destiny Number governs the broader arc of your life and shapes your long‑term karmic journey.', ' है — तय करता है कि कौन-से यात्री चढ़ेंगे, कहाँ रुकना है और किराया क्या होगा। भाग्यांक आपके जीवन के समग्र पथ को संचालित करता है और दीर्घकालिक कर्म-यात्रा को आकार देता है।')}</p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">{bi('Name Number (Namank)', 'नामांक (Name Number)')}</h3>
                  </div>
                  <p>{bi('Your Name Number is calculated from the letters of your full name using either the ', 'आपका नामांक आपके पूर्ण नाम के अक्षरों से ')}<strong>{bi('Chaldean', 'Chaldean')}</strong>{bi(' or ', ' या ')}<strong>{bi('Pythagorean', 'Pythagorean')}</strong>{bi(' system. Chaldean numerology, the older system originating in Babylonia approximately 4,500 years ago, assigns values 1–8 based on sound vibration (the number 9 is considered sacred and not assigned to letters). Pythagorean numerology, developed in ancient Greece around 2,500 years ago, uses a simpler sequential mapping (A=1, B=2, C=3… I=9, J=1, etc.).', ' प्रणाली की सहायता से निकाला जाता है। Chaldean अंक शास्त्र — लगभग 4,500 वर्ष पूर्व बेबीलोनिया में उद्भूत प्राचीनतर प्रणाली — ध्वनि-कंपन के आधार पर अक्षरों को 1–8 मान देती है (संख्या 9 पवित्र मानी जाती है और अक्षरों को नहीं दी जाती)। Pythagorean अंक शास्त्र, लगभग 2,500 वर्ष पूर्व प्राचीन ग्रीस में विकसित, सरल क्रमिक मानचित्रण प्रयोग करती है (A=1, B=2, C=3… I=9, J=1, आदि)।')}</p>
                  <p>{bi('Most Vedic numerologists prefer ', 'अधिकांश वैदिक अंक शास्त्री ')}<strong>{bi('Chaldean for name analysis', 'नाम-विश्लेषण हेतु Chaldean')}</strong>{bi(' — especially business names — because its sound‑vibration basis aligns naturally with Vedic phonetic principles. The two systems often produce different numbers for the same name; neither is "wrong" — they reveal different vibrational layers.', ' को प्राथमिकता देते हैं — विशेषतः व्यावसायिक नामों के लिए — क्योंकि इसका ध्वनि-कंपन आधार वैदिक ध्वनि-सिद्धांतों से सहजता से मेल खाता है। दोनों प्रणालियाँ अक्सर एक ही नाम के लिए भिन्न संख्याएँ देती हैं; कोई भी "गलत" नहीं — ये कंपन के भिन्न-भिन्न स्तर प्रकट करती हैं।')}</p>
                  <p>{bi('AstroVastu Expert K.K. Nagaich often recommends ', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच अक्सर ')}<strong>{bi('subtle name adjustments', 'नाम में सूक्ष्म परिवर्तन')}</strong>{bi(' — adding or removing a single letter — to harmonise the Name Number with the Psychic and Destiny Numbers, a practice that has transformed businesses and personal lives alike.', ' की सिफारिश करते हैं — एक अक्षर जोड़कर या हटाकर — नामांक को मूलांक और भाग्यांक के साथ सामंजस्य में लाने हेतु; यह अभ्यास व्यवसायों और व्यक्तिगत जीवन दोनों का रूपांतरण कर चुका है।')}</p>
                </div>
              </div>

              {/* ── Section 2: Meaning of Each Number ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-sacred-saffron to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('What Each Number Means — The Planetary Connection', 'हर अंक का क्या अर्थ — ग्रहों से संबंध')}</h2>
                </div>
                <p>{bi('A 2024 study published in ', '2024 में ')}<em>{bi('Nature Humanities & Social Sciences Communications', 'Nature Humanities & Social Sciences Communications')}</em>{bi(' mapped birth numbers to specific personality traits — the most comprehensive modern academic validation of numerology\u2019s character associations. In Vedic numerology, each number is further governed by a specific planet (graha), adding an astrological layer absent from Western systems.', ' जर्नल में प्रकाशित अध्ययन ने जन्म संख्याओं को विशिष्ट व्यक्तित्व-लक्षणों से जोड़ा — अंक शास्त्र के चरित्र-संबंधों का अब तक का सर्वांगीण आधुनिक शैक्षणिक सत्यापन। वैदिक अंक शास्त्र में प्रत्येक संख्या पर एक निश्चित ग्रह (graha) की शासकता और है, जो पाश्चात्य प्रणालियों में अनुपलब्ध ज्योतिषीय स्तर जोड़ता है।')}</p>

                <div className="mt-6 space-y-5">
                  {[
                    { num: '1', planet: 'Sun (Surya)', planetHi: 'सूर्य (Sun)', traits: 'Leadership, organisation, independence, pioneering, originality, integrity', traitsHi: 'नेतृत्व, संगठन-क्षमता, स्वतंत्रता, अग्रणी मनोवृत्ति, मौलिकता, निष्ठा', desc: 'Number 1 individuals are natural‑born leaders. Ruled by the Sun, they radiate confidence and ambition. They thrive in entrepreneurial ventures and positions of authority but must guard against arrogance and isolation.', descHi: 'अंक 1 के जातक जन्मजात नेता होते हैं। सूर्य द्वारा शासित, वे आत्मविश्वास और महत्वाकांक्षा की चमक बिखेरते हैं। वे उद्यमशीलता और अधिकार-स्थितियों में खिलते हैं, पर अहंकार और एकांतवास से सावधान रहें।' },
                    { num: '2', planet: 'Moon (Chandra)', planetHi: 'चंद्र (Moon)', traits: 'Supportive, cooperative, diplomatic, intuitive, detail‑conscious', traitsHi: 'सहयोगी, सहकारितापूर्ण, कूटनीतिज, अंतर्ज्ञानी, बारीकियों प्रति सचेत', desc: 'Number 2 natives are gentle, empathetic, and deeply intuitive. Ruled by the Moon, they excel in collaborative environments, counselling, and creative arts. Their sensitivity is both their greatest strength and their vulnerability.', descHi: 'अंक 2 के जातक कोमल, सहानुभूतिशील और गहरे अंतर्ज्ञानी होते हैं। चंद्रमा द्वारा शासित, वे सहयोगात्मक वातावरण, काउंसलिंग और रचनात्मक कलाओं में उत्कृष्ट। उनकी कोमलता ही उनका सबसे बड़ा बल और सबसे बड़ी कमज़ोरी भी है।' },
                    { num: '3', planet: 'Jupiter (Guru)', planetHi: 'बृहस्पति (Guru)', traits: 'Self‑expressive, creative, joyful, sociable, networking', traitsHi: 'आत्म-अभिव्यक्तिशील, रचनात्मक, आनंदमय, मिलनसार, नेटवर्किंग-प्रिय', desc: 'Number 3 is ruled by Jupiter, the planet of wisdom and expansion. These individuals are natural communicators — writers, speakers, teachers, and artists. Their optimism is infectious, though they must learn discipline and follow‑through.', descHi: 'अंक 3 पर बृहस्पति का राज — ज्ञान और विस्तार के ग्रह। ये सहज संचारक होते हैं — लेखक, वक्ता, शिक्षक और कलाकार। इनका आशावाद संक्रामक, पर अनुशासन और कार्य-पूर्णता सीखना आवश्यक है।' },
                    { num: '4', planet: 'Rahu (North Node)', planetHi: 'राहु (Rahu)', traits: 'Stable, disciplined, conscientious, pragmatic, hardworking', traitsHi: 'स्थिर, अनुशासित, कर्तव्यनिष्ठ, व्यावहारिक, परिश्रमी', desc: 'Rahu\u2019s influence makes Number 4 natives grounded and methodical. They excel in structured environments — engineering, administration, law. Their challenge is learning flexibility and embracing change rather than fearing it.', descHi: 'राहु की प्रेरणा से अंक 4 के जातक ज़मीन से जुड़े और विधिबद्ध। वे संरचित क्षेत्रों — इंजीनियरिंग, प्रशासन, कानून — में श्रेष्ठ। इनकी चुनौती: लचीलापन सीखना और परिवर्तन से डरने के बजाय उसे अंगीकारना।' },
                    { num: '5', planet: 'Mercury (Budh)', planetHi: 'बुध (Mercury)', traits: 'Versatile, adaptable, freedom‑loving, communicative, quick‑thinking', traitsHi: 'बहुमुखी, अनुकूलनशील, स्वतंत्रता-प्रिय, संवादी, तीव्र चिंतन', desc: 'Ruled by Mercury, Number 5 is the most dynamic of all numbers. These individuals crave variety, travel, and intellectual stimulation. They make excellent salespeople, journalists, and entrepreneurs. Their restlessness must be channelled productively.', descHi: 'बुध द्वारा शासित, अंक 5 सर्वाधिक गतिशील संख्या। इन्हें विविधता, यात्रा और बौद्धिक उत्तेजना की तृष्णा। उत्कृष्ट सेल्सपर्सन, पत्रकार और उद्यमी। इनकी बेचैनी को रचनात्मक दिशा देना आवश्यक।' },
                    { num: '6', planet: 'Venus (Shukra)', planetHi: 'शुक्र (Venus)', traits: 'Harmonious, nurturing, responsible, aesthetic, companionable', traitsHi: 'सामंजस्यपूर्ण, पोषक, ज़िम्मेदार, सौंदर्य-प्रिय, संग-प्रिय', desc: 'Venus blesses Number 6 with beauty, charm, and a deep sense of responsibility. They are family‑oriented, loyal, and drawn to creative and healing professions. They must guard against over‑involvement in others\u2019 problems.', descHi: 'शुक्र अंक 6 को सौंदर्य, माधुर्य और गहरे कर्तव्य-बोध से नवाज़ता है। ये परिवार-केंद्रित, निष्ठावान, रचनात्मक और चिकित्सा-संबंधी पेशों की ओर आकृष्ट। दूसरों की समस्याओं में अत्यधिक शामिल होने से सावधान रहें।' },
                    { num: '7', planet: 'Ketu (South Node)', planetHi: 'केतु (Ketu)', traits: 'Reflective, analytical, mystical, intellectual, private', traitsHi: 'चिंतनशील, विश्लेषणात्मक, आध्यात्मिक, बौद्धिक, एकांत-प्रिय', desc: 'Number 7, ruled by Ketu, is the philosopher and seeker. These individuals are introspective, drawn to research, spirituality, and deep thinking. They often prefer solitude and must learn to balance inner exploration with outer engagement.', descHi: 'केतु द्वारा शासित अंक 7 दार्शनिक और साधक। ये अंतर्मुखी, अनुसंधान, अध्यात्म और गहन चिंतन की ओर आकृष्ट। इन्हें अकेला पसंद, पर आंतरिक अन्वेषण और बाह्य संलग्नता में संतुलन सीखना होगा।' },
                    { num: '8', planet: 'Saturn (Shani)', planetHi: 'शनि (Saturn)', traits: 'Ambitious, organised, managerial, productive, material mastery', traitsHi: 'महत्वाकांसी, सुव्यवस्थित, प्रबंधकीय, उत्पादक, भौतिक पारंगतता', desc: 'Saturn\u2019s influence makes Number 8 the most materially driven. They are natural executives, financiers, and organisers. Their journey often involves significant struggle followed by great reward — the classic Saturnian arc of discipline leading to mastery.', descHi: 'शनि की प्रेरणा से अंक 8 सर्वाधिक भौतिक-साधना की ओर अग्रसर। ये जन्मजात कार्यकारी, वित्तविशेषज्ञ और संगठक। इनकी यात्रा में पहले गंभीर संघर्ष, फिर विशाल फल — अनुशासन से पराकाष्ठा तक का शनि का शास्त्रीय चक्र।' },
                    { num: '9', planet: 'Mars (Mangal)', planetHi: 'मंगल (Mars)', traits: 'Universal, idealistic, humanitarian, compassionate, change agent', traitsHi: 'विश्वव्यापी दृष्टि, आदर्शवादी, मानवतावादी, करुणापक्ष, परिवर्तन-कर्ता', desc: 'Ruled by Mars, Number 9 combines aggression with idealism. These individuals are driven to improve the world — activists, reformers, visionaries. Their energy must be directed constructively; unchecked, it can manifest as anger or impulsiveness.', descHi: 'मंगल द्वारा शासित, अंक 9 में आक्रामकता और आदर्शवाद का मिश्रण। ये संसार को बेहतर करने के लिए प्रेरित — कार्यकर्ता, सुधारक, दूरदर्शी। इनकी ऊर्जा को रचनात्मक दिशा मिले; अन्यथा यह क्रोध या आवेग बनकर प्रकट होती है।' },
                  ].map((item) => (
                    <div key={item.num} className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10 hover:border-prakash-gold/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white font-bold text-lg shadow-md">{item.num}</div>
                        <div>
                          <h3 className="font-serif text-lg text-nidra-indigo font-bold">{bi('Number', 'अंक')} {item.num} — {bi(item.planet, item.planetHi)}</h3>
                          <p className="text-xs text-nidra-indigo/50">{bi(item.traits, item.traitsHi)}</p>
                        </div>
                      </div>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi(item.desc, item.descHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 3: Real‑World Case Studies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Real‑World Case Studies — Numerology in Action', 'वास्तविक केस स्टडीज़ — क्रियारत अंक शास्त्र')}</h2>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15 mb-6">
                  <h3 className="font-serif text-xl text-nidra-indigo mb-3">{bi('JC Chaudhry — The ₹7,300 Crore Success', 'JC Chaudhry — ₹7,300 करोड़ की सफलता')}</h3>
                  <p>{bi('JC Chaudhry, founder of Aakash Institute, grew up impoverished — no slippers until age 12, no trousers before college. In 1984, his brother‑in‑law introduced him to numerology. He realised his life was "not in sync with my date of birth." After correcting his birth records and aligning his decisions with numerological principles, he built an educational empire. Numbers guided his hiring decisions, land purchases, fee structures, and business strategy. In 2021, he sold Aakash to Byju\u2019s for approximately ₹7,300 crore — and now runs a numerology platform called Nummero, helping others discover the power of numbers.', 'Aakash Institute के संस्थापक JC Chaudhry अत्यंत गरीबी में पले-बढ़े — 12 वर्ष तक चप्पल नहीं, महाविद्यालय से पूर्व पैंट नहीं। 1984 में उनके जीजा ने इन्हें अंक शास्त्र से परिचित करवाया। इन्हें एहसास हुआ कि उनका जीवन "मेरे जन्म-दिनांक से समंजित नहीं" है। जन्म-विवरण सुधारने और निर्णयों को अंक-सिद्धांतों के साथ संरेखित करने के बाद इन्होंने एक शैक्षिक साम्राज्य खड़ा किया। संख्याओं ने इनकी भर्ती-निर्णय, भूमि-खरीद, शुल्क-संरचना और व्यावसायिक रणनीति में मार्गदर्शन किया। 2021 में इन्होंने Aakash लगभग ₹7,300 करोड़ में Byju\'s को बेचा — और अब Nummero नामक अंक शास्त्र प्लेटफॉर्म चलाकर दूसरों को संख्याओं की शक्ति से रूबरू करा रहे हैं।')}</p>
                </div>

                <div className="mt-4 p-6 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15 mb-6">
                  <h3 className="font-serif text-xl text-nidra-indigo mb-3">{bi('Radhika Jain — From Struggling Boutique to 75% Sales Jump', 'Radhika Jain — संघर्षरती बुटीक से 75% बिक्री-वृद्धि तक')}</h3>
                  <p>{bi('Radhika Jain, a fashion boutique owner in Jaipur, faced poor sales and zero online traction. Her original brand name "Grace Fashion" vibrated on karmic number 16. After numerological correction to "Gracia Fashions" (Master Number 33), her sales jumped by ', 'जयपुर की फैशन बुटीक मालकिन Radhika Jain को मंद बिक्री और शून्य ऑनलाइन पहुंच का सामना था। उनका मूल ब्रांड नाम "Grace Fashion" कर्म-संख्या 16 पर कंपन करता था। अंक-शास्त्रीय सुधार कर "Gracia Fashions" (Master Number 33) करने के बाद उनकी बिक्री ')}<strong>{bi('75% in 90 days', '90 दिनों में 75%')}</strong>{bi('. She gained influencer collaborations and local newspaper coverage. "A single name change from Ankitaa changed everything for me. Numerology works!"', ' बढ़ गई। इन्हें इन्फ्लुएंसर-सहयोग और स्थानीय अखबारों में कवरेज मिला। "Ankitaa से केवल एक अक्षर का परिवर्तन — मेरा सब कुछ बदल गया। अंक शास्त्र काम करता है!"')}</p>
                </div>

                <div className="mt-4 p-6 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-2xl border border-prakash-gold/15 mb-6">
                  <h3 className="font-serif text-xl text-nidra-indigo mb-3">{bi('Walt Disney — The Creative Power of Master Numbers', 'Walt Disney — मास्टर संख्याओं की रचनात्मक शक्ति')}</h3>
                  <p>{bi('Walt Disney\u2019s full name vibrates on a Master Number — associated with higher levels of spiritual evolution, creativity, and self‑expression. While Disney was not a practicing numerologist, his company\u2019s extraordinary creative output and global influence reflect the archetypal energy of these numbers. Modern business numerologists cite Disney as a case study in how company names aligned with powerful numerical vibrations can amplify creative leadership.', 'Walt Disney का पूर्ण नाम एक Master Number पर कंपन करता है — उच्चतर आध्यात्मिक विकास, रचनात्मकता और आत्म-अभिव्यक्ति से संबंधित। यद्यपि Disney स्वयं अंक शास्त्री नहीं थे, पर उनकी कंपनी का असाधारण रचनात्मक उत्पादन और वैश्विक प्रभाव इन संख्याओं की आदिरूपी ऊर्जा को झलकाता है। आधुनिक व्यावसायिक अंक शास्त्री Disney को एक केस स्टडी के रूप में उद्धृत करते हैं कि शक्तिशाली संख्यात्मक कंपनों से संरेखित कंपनी-नाम रचनात्मक नेतृत्व को कितना प्रवर्धित कर सकते हैं।')}</p>
                </div>
              </div>

              {/* ── Section 4: Practical Applications ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-[var(--color-hero-2)]" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Practical Applications of Numerology', 'अंक शास्त्र के व्यावहारिक अनुप्रयोग')}</h2>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <div className="p-5 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">1</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">{bi('Career Guidance', 'करियर मार्गदर्शन')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('If your Psychic Number is 3 and Destiny Number is 8, you are creative yet pragmatic — ideally suited for architecture, law, finance, or media.', 'यदि आपका मूलांक 3 और भाग्यांक 8 है, तो आप रचनात्मक होते हुए भी व्यावहारिक हैं — आर्किटेक्चर, कानून, वित्त या मीडिया के लिए आदर्श।')}</p>
                  </div>
                  <div className="p-5 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">2</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">{bi('Relationship Compatibility', 'संबंध-अनुकूलता')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('Numbers 2 and 6 are highly compatible, fostering harmony and emotional security. Numbers 3 and 9 often clash emotionally and benefit from numerological counselling.', 'संख्या 2 और 6 अत्यंत अनुकूल, सामंजस्य और भावनात्मक सुरक्षा पनपने वाली। संख्या 3 और 9 में भावनात्मक टक्कर अक्सर — अंक-शास्त्रीय काउंसलिंग से लाभ।')}</p>
                  </div>
                  <div className="p-5 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">3</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">{bi('Business & Finance', 'व्यवसाय एवं वित्त')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('Launching a venture on a date aligned with your favorable numbers can significantly influence success. Vedic texts describe auspicious ', 'अपेक्षित अनुकूल संख्याओं से संरेखित दिनांक पर उद्यम आरंभ करना सफलता को उल्लेखनीय रूप से प्रभावित कर सकता है। वैदिक ग्रंथ मालिक की अंक-शास्त्रीय प्रोफाइल पर आधारित शुभ ')}<em>{bi('muhurat', 'मुहूर्त')}</em>{bi(' combinations based on the owner\u2019s numerological profile.', ' संयोग वर्णित करते हैं।')}</p>
                  </div>
                  <div className="p-5 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">4</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">{bi('Health & Well‑being', 'स्वास्थ्य एवं सुख')}</h3>
                    <p className="text-sm text-nidra-indigo/70">{bi('Number 4 often indicates a tendency towards chronic conditions requiring disciplined management. Number 9 suggests robust constitution. Early numerological awareness enables preventive measures.', 'अंक 4 प्रायः दीर्घकालिक विकारों की प्रवृत्ति दर्शाता, अनुशासित प्रबंधन माँगने वाला। अंक 9 सुदृढ़ संविधान का संकेत। अंक-जागरूकता यथाशीघ्र निवारक उपायों को सक्षम।')}</p>
                  </div>
                </div>
              </div>

              {/* ── Section 5: Vedic vs Western ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-[var(--color-hero-2)]" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Why Vedic Numerology Is More Precise — The 27 Nakshatra System', 'वैदिक अंक शास्त्र अधिक परिशुद्ध क्यों — 27 नक्षत्र प्रणाली')}</h2>
                </div>
                <p>{bi('Western numerology collapses all complexity into just nine categories. Vedic numerology solves this limitation elegantly through the ', 'पाश्चात्य अंक शास्त्र सारी जटिलता को केवल नौ श्रेणियों में समेट देता। वैदिक अंक शास्त्र इस सीमा का सुंदर समाधान ')}<strong>{bi('27 Nakshatras', '27 नक्षत्रों')}</strong>{bi(' — lunar mansions that divide the zodiac into 27 equal sections, each spanning 13 degrees and 20 minutes. The Moon travels through each Nakshatra in approximately 24 hours, completing a full cycle in 27.3 days.', ' के माध्यम से निकालता — चंद्र-मंडल जो राशि-चक्र को 27 समान भागों में बाँटते हैं, प्रत्येक 13 डिग्री 20 मिनट का विस्तार। चंद्रमा प्रत्येक नक्षत्र में लगभग 24 घंटे यात्रा करता, और 27.3 दिनों में पूर्ण चक्र पूरा।')}</p>
                <p>{bi('Two people born on the same date may share a Psychic Number — but their Moon\u2019s Nakshatra position will differ, producing fundamentally different personality patterns and life trajectories. This is why Vedic numerologists always consider the Nakshatra alongside the birth numbers, offering a level of precision that Western systems simply cannot match. The 27 Nakshatra system — observable celestial mechanics encoded into numerical wisdom — has been in continuous use for over 5,000 years.', 'एक ही दिनांक को जन्मे दो व्यक्तियों का मूलांक समान हो सकता — पर उनके चंद्रमा की नक्षत्र-स्थिति भिन्न, जो मूलभूत रूप से भिन्न व्यक्तित्व-पैटर्न और जीवन-पथ रचती। इसलिए वैदिक अंक शास्त्री सदैव जन्म-संख्याओं के साथ नक्षत्र भी विचार में लाते हैं — परिशुद्धता का वह स्तर जो पाश्चात्य प्रणालियाँ सहज ही नहीं दे पातीं। 27 नक्षत्र प्रणाली — प्रेक्षणीय खगोलीय यांत्रिकी को अंक-प्रज्ञा में समेट — 5,000 वर्षों से निरंतर प्रयुक्त होती आ रही है।')}</p>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-prakash-gold" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">{bi('Conclusion — Numbers Are a Language, Not Superstition', 'निष्कर्ष — संख्याएँ एक भाषा हैं, अंधविश्वास नहीं')}</h2>
                </div>
                <p>{bi('Vedic numerology is not fortune‑telling — it is a system of profound self‑awareness. The numbers derived from your birth date and name are not random. They form a code that, when properly understood, reveals your strengths, illuminates your challenges, and guides your most important life decisions. From JC Chaudhry\u2019s ₹7,300 crore success to Radhika Jain\u2019s boutique transformation, the evidence is compelling: when humans align their identity with their numerical blueprint, remarkable things happen.', 'वैदिक अंक शास्त्र भविष्यवाणी नहीं — गहरे आत्म-बोध की एक प्रणाली। आपकी जन्म-तिथि और नाम से बनी संख्याएँ संयोगवश नहीं हैं। ये एक कोड रचती हैं, जो यथायोग्य समझे जाने पर आपकी शक्तियाँ प्रकट, चुनौतियों को रोशन और जीवन के निर्णायक मोड़ों पर मार्गदर्शन करती। JC Chaudhry की ₹7,300 करोड़ की सफलता हो या Radhika Jain का बुटीक-रूपांतरण — प्रमाण प्रत्याभ हैं: जब मनुष्य अपनी पहचान को अपनी अंक-रूपरेखा के साथ संरेखित करता, तो अद्भुत घटित।')}</p>
                <p className="font-medium">{bi('AstroVastu Expert K.K. Nagaich provides comprehensive numerological analysis as part of his Vedic consultation services — combining Driver Number, Destiny Number, Name Number, and Nakshatra analysis into a complete personal blueprint.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच अपनी वैदिक परामर्श सेवाओं के अंतर्गत समग्र अंक-शास्त्रीय विश्लेषण प्रदान करते हैं — ड्राइवर अंक, डिस्टिनी अंक, नामांक और नक्षत्र-विश्लेषण को जोड़कर एक पूर्ण व्यक्तिगत ब्लूप्रिंट।')}</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-[var(--color-bg-glass)] backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">{bi('AstroVastu Expert KK Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच')}</p>
                <p className="text-sm text-nidra-indigo/60">{bi('4th Generation Vastu Guru | MBA | Ex‑CEO | Numerologist | Served 2 Lakh+ Clients Worldwide', '4 पीढ़ियों की वास्तु गुरु परंपरा | MBA | पूर्व सीईओ | अंक शास्त्री | विश्वभर में 2 लाख+ क्लाइंट्स को सेवा')}</p>
              </div>
            </div>
          </div>
        </article>
      
    </>
  );
}
