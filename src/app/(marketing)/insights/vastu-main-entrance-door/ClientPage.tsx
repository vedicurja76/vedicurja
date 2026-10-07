'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';
import ArticleShell from '@/features/blog/components/ArticleShell';
import { ARTICLE_SEO_META } from '@/features/blog/data/articleSeoMetadata';

const META = ARTICLE_SEO_META['vastu-main-entrance-door'];

export default function BlogPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      
        <article className="pt-28 pb-20 min-h-screen">

          {/* ── Luxury Hero ── */}
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-2)]/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.12),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="35" width="50" height="55" rx="2" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.6"/>
                  <rect x="38" y="55" width="24" height="35" rx="1" fill="none" stroke="#E8B960" strokeWidth="1.5"/>
                  <circle cx="50" cy="65" r="2" fill="#E8B960"/>
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#E8B960" strokeWidth="0.8" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
                  </circle>
                  <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#E8B960" fontFamily="serif">Om</text>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                {bi('Back to Archives', 'आर्काइव पर वापस')}
              </Link>

              <div className="flex items-center gap-3 text-sm text-[var(--color-hero-fg)]/50 mb-4">
                <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">{bi('Vastu Science', 'वास्तु विज्ञान')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('9 min read', '9 मिनट का पाठ')}</span>
                <span className="w-1 h-1 bg-[var(--color-bg-glass)] rounded-full" />
                <span>{bi('By', 'लेखक:')} AstroVastu Expert KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-hero-fg)] leading-tight mb-4">
                {bi('Vastu for Main Entrance —', 'मुख्य प्रवेश द्वार के लिए वास्तु —')}{' '}
                <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  {bi('The Power of Your Home\'s Door Direction', 'आपके घर के मुख्य द्वार की दिशा की शक्ति')}
                </span>
              </h1>
              <p className="text-lg text-[var(--color-hero-fg)]/60 max-w-3xl">
                {bi('How the direction, size, colour, and threshold of your main door determine the flow of prosperity, health, and relationships — backed by the 2024 CFD study proving Vastu‑recommended door placements measurably improve indoor comfort.', 'आपके मुख्य द्वार की दिशा, आकार, रंग और दहलीज़ समृद्धि, स्वास्थ्य और रिश्तों के प्रवाह को कैसे निर्धारित करती हैं — 2024 के CFD अध्ययन द्वारा प्रमाणित, जो सिद्ध करता है कि वास्तु-अनुशंसित दरवाज़ा-स्थापन आंतरिक आराम को मापनीय रूप से बढ़ाते हैं।')}
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <ArticleShell
            readingMinutes={META.readingMinutes}
            category={META.category}
            categoryHi={META.categoryHi}
            quickAnswer={META.quickAnswer}
            quickAnswerHi={META.quickAnswerHi}
            toc={META.toc}
            references={META.references}
            faqs={META.faqs}
            related={META.related}
            datePublished="2026-09-30"
            dateModified="2026-10-06"
          >
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                {bi('In Vastu Shastra, the main entrance is not merely an architectural feature — it is the ', 'वास्तु शास्त्र में मुख्य प्रवेश केवल एक वास्तुकला-विशेषता नहीं — यह ')}<strong>{bi('mouth of the Vastu Purush', 'वास्तु पुरुष का मुख')}</strong>{bi(', the cosmic being whose energy grid underlies every building. Just as the mouth is the primary gateway for nourishment entering the human body, the main door is the primary channel through which prana (life energy), opportunities, wealth, and relationships enter the home. A correctly designed entrance attracts abundance; an incorrectly placed one can — and does — cause measurable harm. The 2024 Springer CFD study confirms what Vedic architects knew millennia ago: door placement directly determines indoor thermal comfort, air quality, and energy flow.', ', उस ब्रह्मांडीय सत्ता का जिसकी ऊर्जा-ग्रिड प्रत्येक भवन के आधार में विद्यमान है। जैसे मुख मानव शरीर में पोषण के प्रवेश का मुख्य द्वार है, वैसे ही मुख्य दरवाज़ा प्राण (जीवन ऊर्जा), अवसर, धन और रिश्तों के घर में प्रवेश का मुख्य माध्यम है। यथाविधि रचित प्रवेश समृद्धि आकर्षित करता है; गलत स्थान पर रचित प्रवेश — और वास्तव में — मापनीय हानि पहुँचाता है। स्प्रिंजर (Springer) का 2024 CFD अध्ययन वही पुष्टि करता है जो वैदिक वास्तुकार सहस्रों वर्ष पूर्व जानते थे: दरवाज़े का स्थान सीधे आंतरिक थर्मल आराम, वायु गुणवत्ता और ऊर्जा-प्रवाह को निर्धारित करता है।')}
              </p>

              {/* ── Section 1: Best Directions ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 id="directions" className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('The Four Auspicious Directions — What Ancient Texts and Modern Science Agree On', 'शुभ दिशाएँ — जिन पर प्राचीन ग्रंथ और आधुनिक विज्ञान एकमत हैं')}</h2>
                </div>
                <p>{bi('The Vastu Shastra and ancient architectural texts are precise about which directions bring specific benefits. The 2024 CFD study by Springer confirmed that door placement strongly influences indoor conditions, with certain configurations producing Predicted Mean Vote values between 1 and 2 — within the ISO 7730 comfort range. Below is a comprehensive guide to every direction and what it delivers.', 'वास्तु शास्त्र और प्राचीन वास्तुकला ग्रंथ इस बात में निश्चित हैं कि कौन-सी दिशाएँ विशिष्ट लाभ देती हैं। स्प्रिंजर के 2024 CFD अध्ययन ने पुष्टि की कि दरवाज़े का स्थान आंतरिक परिस्थितियों को प्रबल रूप से प्रभावित करता है; कुछ विन्यास Predicted Mean Vote मान 1 और 2 के बीच देते हैं — ISO 7730 आराम सीमा के भीतर। नीचे प्रत्येक दिशा और उसके लाभों का व्यापक मार्गदर्शन है।')}</p>

                <div className="mt-6 space-y-5">
                  {[
                    { dir: 'North', dirHi: 'उत्तर (North)', deity: 'Kuber (God of Wealth)', deityHi: 'कुबेर (धन के देवता)', rating: 'Most Auspicious', ratingHi: 'सर्वाधिक शुभ', benefit: 'Financial prosperity, career growth, new opportunities, business success. The northern direction is governed by magnetic energy that attracts abundance. The 2024 CFD study confirmed that north‑facing entrances maintain optimal indoor temperatures', benefitHi: 'आर्थिक समृद्धि, करियर में वृद्धि, नए अवसर, व्यावसायिक सफलता। उत्तरी दिशा चुंबकीय ऊर्जा द्वारा संचालित है जो प्रचुरता आकर्षित करती है। 2024 के CFD अध्ययन ने पुष्टि की कि उत्तर की ओर खुले प्रवेश द्वार आंतरिक तापमान को अनुकूल बनाए रखते हैं', fix: 'If a true north entrance is not possible, create a north‑zone opening (window or secondary door) to channel Kuber energy', fixHi: 'यदि वास्तविक उत्तरी प्रवेश संभव न हो तो कुबेर ऊर्जा को चैनलाइज़ करने हेतु उत्तर-क्षेत्र में एक प्रावरण (खिड़की या सहायक द्वार) बनाएँ' },
                    { dir: 'East', dirHi: 'पूर्व (East)', deity: 'Surya (Sun God) & Indra', deityHi: 'सूर्य (सूर्य देव) एवं इंद्र', rating: 'Highly Auspicious', ratingHi: 'अत्यंत शुभ', benefit: 'Health, fame, spiritual growth, social recognition. Morning sunlight enters directly, bringing UV purification and circadian rhythm alignment. East‑facing doors receive the purest, most beneficial solar radiation of the day', benefitHi: 'स्वास्थ्य, यश, आध्यात्मिक विकास, सामाजिक पहचान। प्रातः की धूप सीधे प्रवेश करती है, जो UV कीटाणुशुद्धि और जैवघड़ी (circadian rhythm) संरेखण लाती है। पूर्व की ओर खुले द्वार दिन के सर्वाधिक पवित्र एवं लाभकारी सौर विकिरण प्राप्त करते हैं', fix: 'Ensure the east entrance is unobstructed by trees or tall structures; keep it brightly lit at dawn with a ghee lamp', fixHi: 'पूर्वी प्रवेश पेड़ों या ऊँची संरचनाओं से अवरुद्ध न हो; प्रातःकाल घी के दीपक से उसे सुप्रकाशित रखें' },
                    { dir: 'Northeast (Ishanya)', dirHi: 'उत्तर-पूर्व (ईशान्य)', deity: 'All Gods (Ishanya)', deityHi: 'समस्त देवगण (ईशान्य)', rating: 'Most Sacred', ratingHi: 'सर्वाधिक पवित्र', benefit: 'Combined benefits of North and East — wealth, health, spiritual clarity, and mental peace. This is the most powerful entrance direction in Vastu. Water bodies placed here amplify the effect through evaporative cooling', benefitHi: 'उत्तर और पूर्व के संयुक्त लाभ — धन, स्वास्थ्य, आध्यात्मिक स्पष्टता और मानसिक शांति। यह वास्तु में सर्वाधिक शक्तिशाली प्रवेश-दिशा है। यहाँ स्थित जल स्रोत वाष्पन-शीतलीकरण द्वारा इस प्रभाव को और बढ़ाते हैं', fix: 'The NE entrance should be the largest door in the house, kept immaculately clean, with a water feature or sacred Tulsi plant nearby', fixHi: 'ईशान्य प्रवेश घर का सर्वाधिक विशाल द्वार हो, अत्यंत स्वच्छ रखा जाए, और समीप जल-स्रोत या पावित्र्यमय तुलसी का पौधा हो' },
                    { dir: 'West', dirHi: 'पश्चिम (West)', deity: 'Varuna (God of Water)', deityHi: 'वरुण (जल के देवता)', rating: 'Acceptable with Remedies', ratingHi: 'उपायों के साथ स्वीकार्य', benefit: 'Can bring moderate success, particularly for businesspeople who travel frequently. However, west‑facing doors receive harsh afternoon sun, potentially causing restlessness and financial fluctuation', benefitHi: 'मध्यम सफलता दिला सकता है, विशेषकर बार-बार यात्रा करने वाले व्यापारियों के लिए। तथापि, पश्चिम की ओर खुले द्वार कठोर अपराह्न धूप पाते हैं, जिससे बेचैनी और आर्थिक उतार-चढ़ाव की संभावना रहती है', fix: 'Install a Vastu pyramid above the west door; use light blue or white colours on the door; place a water feature in the northeast to counterbalance', fixHi: 'पश्चिमी द्वार के ऊपर वास्तु पिरामिड स्थापित करें; द्वार पर हल्का नील या श्वेत रंग प्रयोग करें; संतुलन हेतु उत्तर-पूर्व में जल-स्रोत रखें' },
                    { dir: 'South', dirHi: 'दक्षिण (South)', deity: 'Yama (God of Death)', deityHi: 'यम (मृत्यु देवता)', rating: 'Requires Correction', ratingHi: 'सुधार आवश्यक', benefit: 'South is traditionally considered inauspicious because it receives the most intense, prolonged solar radiation and is associated with the realm of ancestors. However, with proper corrections, south‑facing homes can be made auspicious', benefitHi: 'दक्षिण को पारंपरिक रूप से अशुभ माना जाता है क्योंकि वह सर्वाधिक तीव्र, दीर्घ सौर विकिरण पाता है और पितृ-लोक से जुड़ा है। किंतु उचित सुधारों से दक्षिण की ओर खुले घरों को शुभ बनाया जा सकता है', fix: 'Install a Vastu pyramid 18 inches underground at the entrance; use a heavy wooden door in dark brown; place a Hanuman or Ganesh image above the door; ensure the door opens inward', fixHi: 'प्रवेश स्थान पर 18 इंच गहराई तक वास्तु पिरामिड गाड़ें; गहरे भूरे रंग का भारी लकड़ी का द्वार लगाएँ; द्वार के ऊपर हनुमान या गणेश की छवि रखें; द्वार अंदर की ओर खुले, यह सुनिश्चित करें' },
                  ].map((item) => (
                    <div key={item.dir} className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10 hover:border-prakash-gold/30 transition-colors">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-prakash-gold mt-1.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-serif text-lg text-nidra-indigo font-bold">{bi(item.dir, item.dirHi)} — {bi(item.deity, item.deityHi)}</h3>
                          <p className="text-xs text-sacred-saffron font-semibold mb-1">{bi(item.rating, item.ratingHi)}</p>
                          <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi(item.benefit, item.benefitHi)}</p>
                          <div className="mt-2 p-3 bg-amber-50/50 rounded-xl border border-prakash-gold/10">
                            <p className="text-xs text-nidra-indigo/60"><strong>{bi('Correction:', 'सुधार:')}</strong> {bi(item.fix, item.fixHi)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 2: Best Entrance According to Plot Facing ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
                  <h2 id="entrance-pada" className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Best Entrance Position According to Plot Facing', 'प्लॉट की दिशा के अनुसार सर्वोत्तम प्रवेश स्थान')}</h2>
                </div>
                <p>{bi('Even within an auspiciously facing plot, the exact placement of the door on that face matters critically. Vastu divides each wall into nine equal segments (padas), and the prescribed pada for the entrance is non‑negotiable. The Times Property guide confirmed these exact positions through analysis of traditional Vastu texts.', 'शुभ दिशा वाले प्लॉट में भी उस फलक पर दरवाज़े का यथास्थान अत्यंत निर्णायक है। वास्तु प्रत्येक दीवार को नौ समान खंडों (पादों) में बाँटता है, और प्रवेश हेतु निर्दिष्ट पाद अनिवार्य है। टाइम्स प्रॉपर्टी गाइड ने पारंपरिक वास्तु ग्रंथों के विश्लेषण द्वारा इन्हीं स्थानों की पुष्टि की है।')}</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10">
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Plot Facing', 'प्लॉट की दिशा')}</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Main Door Pada', 'मुख्य द्वार का पाद')}</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">{bi('Notes', 'टिप्पणियाँ')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { facing: 'North', facingHi: 'उत्तर (North)', pada: '5th pada from North‑West corner', padaHi: 'उत्तर-पश्चिम कोने से 5वाँ पाद', notes: 'This aligns with the magnetic meridian, ensuring maximum positive energy flow', notesHi: 'यह चुंबकीय मध्याह्न रेखा के साथ संरेखित होता है, अधिकतम सकारात्मक ऊर्जा-प्रवाह सुनिश्चित करता है' },
                        { facing: 'East', facingHi: 'पूर्व (East)', pada: '5th pada from South‑East corner', padaHi: 'दक्षिण-पूर्व कोने से 5वाँ पाद', notes: 'Captures the purest morning sunlight; ideal for health and spiritual growth', notesHi: 'सर्वाधिक पवित्र प्रातः धूप को ग्रहण करता है; स्वास्थ्य एवं आध्यात्मिक विकास हेतु आदर्श' },
                        { facing: 'West', facingHi: 'पश्चिम (West)', pada: '4th pada from South‑West corner', padaHi: 'दक्षिण-पश्चिम कोने से 4वाँ पाद', notes: 'Minimises harsh afternoon radiation while maintaining energy flow', notesHi: 'ऊर्जा-प्रवाह बनाए रखते हुए कठोर अपराह्न विकिरण को न्यूनतम करता है' },
                        { facing: 'South', facingHi: 'दक्षिण (South)', pada: '4th pada from North‑West corner', padaHi: 'उत्तर-पश्चिम कोने से 4वाँ पाद', notes: 'The least harmful position on a south‑facing wall; requires additional remedies', notesHi: 'दक्षिणमुखी दीवार पर सर्वाधिक अल्प-हानिकारक स्थान; अतिरिक्त उपाय अपेक्षित' },
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-prakash-gold/10 ${i % 2 === 0 ? 'bg-[var(--color-bg-glass)]' : 'bg-vastu-stone/20'}`}>
                          <td className="py-3 px-4 font-medium text-nidra-indigo/80">{bi(row.facing, row.facingHi)}</td>
                          <td className="py-3 px-4 text-prakash-gold font-medium">{bi(row.pada, row.padaHi)}</td>
                          <td className="py-3 px-4 text-nidra-indigo/60">{bi(row.notes, row.notesHi)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Section 3: Door Design ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 id="door-design" className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Door Design Specifications — Eight Rules You Must Follow', 'द्वार-डिज़ाइन विनिर्देश — आठ नियम जिनका पालन अनिवार्य है')}</h2>
                </div>
                <p>{bi('Direction alone is insufficient. The door\'s physical attributes — size, material, threshold, color, opening direction — each carry specific energetic consequences. Housing.com and MagicBricks have cataloged these specifications from traditional texts.', 'केवल दिशा पर्याप्त नहीं है। द्वार के भौतिक गुण — आकार, सामग्री, दहलीज़, रंग, खुलने की दिशा — प्रत्येक विशिष्ट ऊर्जात्मक परिणाम रखते हैं। Housing.com और MagicBricks ने पारंपरिक ग्रंथों से इन विनिर्देशों का संग्रह प्रस्तुत किया है।')}</p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { rule: 'Size', ruleHi: 'आकार', detail: 'The main door must be larger than all other doors in the house. A typical auspicious size is 7×3.5 feet. Doors that are too small symbolically restrict opportunity and wealth entry. Never use a door with cracks, creaking hinges, or peeling paint — these signal financial leakage.', detailHi: 'मुख्य द्वार घर के अन्य सभी द्वारों से बड़ा होना चाहिए। शुभ सामान्य आकार 7×3.5 फीट है। अत्यंत छोटे द्वार प्रतीकात्मक रूप से अवसरों और धन के प्रवेश को सीमित करते हैं। दरारों, चरमराती कब्ज़ों या उखलते पेंट वाला द्वार कभी प्रयोग न करें — ये आर्थिक रिसाव के संकेत हैं।' },
                    { rule: 'Opening Direction', ruleHi: 'खुलने की दिशा', detail: 'The door must open INWARD (toward the interior). An outward‑opening door symbolically pushes opportunities away. The hinges should be silent; creaking doors are considered a Vastu dosha that creates tension and conflict.', detailHi: 'द्वार अंदर की ओर खुलना चाहिए (INWARD)। बाहर की ओर खुलने वाला द्वार प्रतीकात्मक रूप से अवसरों को दूर धकेलता है। कब्ज़े मौन हों; चरमराते द्वार को वास्तु दोष माना जाता है जो तनाव और संघर्ष रचता है।' },
                    { rule: 'Material', ruleHi: 'सामग्री', detail: 'Solid wood is the traditional and preferred material, particularly teak, sal, or mango wood. Avoid metal doors for the main entrance — they conduct and deflect energy. The Wood Shastra recommends doors made from a single piece of wood rather than joined planks.', detailHi: 'ठोस लकड़ी पारंपरिक और श्रेष्ठ सामग्री है, विशेषकर सागौन (teak), साल या आम की लकड़ी। मुख्य प्रवेश में धातु के द्वार वर्जित हैं — ये ऊर्जा के वाहक और विक्षेपक हैं। वुड शास्त्र एक ही लकड़ी के टुकड़े से बने द्वार की सिफारिश करता है, जोड़े गए तख्तों की नहीं।' },
                    { rule: 'Threshold (Dahleej)', ruleHi: 'दहलीज़ (Threshold)', detail: 'The threshold should be at least 1‑2 inches high, painted in auspicious colours like red or yellow. A low or absent threshold allows negative energy to enter freely. The Dahleej Sthapna puja specifically energises this protective barrier.', detailHi: 'दहलीज़ कम से कम 1–2 इंच ऊँची हो, लाल या पीले जैसे शुभ रंगों में रंगी हो। निम्न या अनुपस्थित दहलीज़ नकारात्मक ऊर्जा को स्वतंत्र प्रवेश दे देती है। दहलीज़ स्थापना पूजा विशेष रूप से इस रक्षक बाधा को ऊर्जावान करती है।' },
                    { rule: 'Colour', ruleHi: 'रंग', detail: 'North‑facing: natural wood, brown, or gold. East‑facing: white, cream, or light yellow. West‑facing: blue, white, or silver. South‑facing: dark brown or mahogany. Avoid black, dark red, and grey for main doors regardless of direction.', detailHi: 'उत्तरमुखी: प्राकृतिक लकड़ी, भूरा या सुनहरा। पूर्वमुखी: सफेद, क्रीम या हल्का पीला। पश्चिममुखी: नीला, सफेद या रजत। दक्षिणमुखी: गहरा भूरा या महोगनी। दिशा चाहे कोई हो, मुख्य द्वार पर काला, गहरा लाल और ग्रे रंग वर्जित हैं।' },
                    { rule: 'Decor Above Door', ruleHi: 'द्वार के ऊपर सजावट', detail: 'A brass or copper Swastik, Om, or Ganesh symbol above the door frame provides powerful protection. Torans (door hangings) made of mango leaves and marigold flowers are traditional Vastu remedies that purify entering energy.', detailHi: 'द्वार के फ्रेम के ऊपर पीतल या तांबे का स्वस्तिक, ॐ या गणेश प्रतीक प्रबल संरक्षा प्रदान करता है। आम के पत्तों और गेंदे के फूलों से बने तोरण पारंपरिक वास्तु उपाय हैं जो प्रवेश करती ऊर्जा को पवित्र करते हैं।' },
                    { rule: 'Lighting', ruleHi: 'प्रकाश व्यवस्था', detail: 'The entrance must be brightly lit — ideally with a diya (oil lamp) at dawn and dusk. A dark entrance attracts negative energy. Modern sensor‑activated lights ensure consistent illumination without manual intervention.', detailHi: 'प्रवेश स्थान सुप्रकाशित हो — आदर्श रूप से प्रातः और सायं दीपक (oil lamp) से। अंधेरा प्रवेश नकारात्मक ऊर्जा आकर्षित करता है। आधुनिक सेंसर-चालित लाइटें बिना हस्तक्षेप निरंतर प्रकाश सुनिश्चित करती हैं।' },
                    { rule: 'Cleanliness', ruleHi: 'स्वच्छता', detail: 'Shoes, old mats, dust, cobwebs, and clutter near the main door are severe Vastu doshas. The entrance should be swept daily, ideally with water mixed with a pinch of sea salt, to purify the energy field. Never place a dustbin or broom visible from the entrance.', detailHi: 'जूते, पुरानी चटाइयाँ, धूल, मकड़ी के जाले और मुख्य द्वार के समीप अस्त-व्यस्त गंभीर वास्तु दोष हैं। प्रवेश स्थान को प्रतिदिन झाड़ा जाना चाहिए, आदर्श रूप से मुट्ठीभर समुद्री नमक मिले जल से, ताकि ऊर्जा-क्षेत्र पवित्र रहे। प्रवेश से दिखने वाले स्थान पर कूड़ादान या झाड़ू कभी न रखें।' },
                  ].map((item) => (
                    <div key={item.rule} className="p-4 bg-[var(--color-bg-glass)] rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{bi(item.rule, item.ruleHi)}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{bi(item.detail, item.detailHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 4: Common Doshas ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-orange-500" />
                  <h2 id="common-doshas" className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Common Main Door Doshas — And How to Fix Each One', 'मुख्य द्वार के सामान्य दोष — और प्रत्येक का समाधान')}</h2>
                </div>

                <div className="mt-4 space-y-4">
                  {[
                    { dosha: 'Door directly aligned with back door or window', doshaHi: 'द्वार पिछले दरवाज़े या खिड़की के सीधे सम्मुख', fix: 'Place a heavy piece of furniture, a crystal, or a decorative screen between the two openings. The goal is to slow the energy that otherwise rushes straight through without settling. A brass bowl filled with sea salt placed near the main door also absorbs this rapid energy flow.', fixHi: 'दोनों प्रावरणों के बीच भारी फर्नीचर, क्रिस्टल या सजावटी स्क्रीन रखें। उद्देश्य उस ऊर्जा को मंद करना है जो अन्यथा बिना टिके सीधी बह निकलती है। मुख्य द्वार के समीप समुद्री नमक से भरा पीतल का पात्र भी इस तीव्र ऊर्जा-प्रवाह को अवशोषित करता है।' },
                    { dosha: 'Toilet above or opposite the main door', doshaHi: 'मुख्य द्वार के ऊपर या सम्मुख शौचालय', fix: 'Keep the toilet door permanently closed. Install a copper pyramid in the ceiling between the toilet floor and the entrance ceiling. Place a Vastu Yantra or a piece of solid camphor above the main door frame. A mirror on the outside of the toilet door further deflects the negative energy.', fixHi: 'शौचालय का द्वार सदैव बंद रखें। शौचालय के फर्श और प्रवेश की छत के बीच वाली छत में तांबे का पिरामिड स्थापित करें। मुख्य द्वार के फ्रेम के ऊपर वास्तु यंत्र या ठोस कपूर का टुकड़ा रखें। शौचालय के द्वार के बाहर लगा दर्पण नकारात्मक ऊर्जा को और अधिक विक्षेपित करता है।' },
                    { dosha: 'Main door in the Southwest or Southeast', doshaHi: 'दक्षिण-पश्चिम या दक्षिण-पूर्व में मुख्य द्वार', fix: 'SW entrance: place a heavy stone or crystal grid near the door to ground excessive earth energy. SE entrance: add a water feature in the NE to counterbalance fire energy. In both cases, a Vastu Purush Yantra buried 18 inches underground at the threshold is essential.', fixHi: 'दक्षिण-पश्चिम प्रवेश: द्वार के समीप भारी शिला या क्रिस्टल ग्रिड रखें ताकि अतिरिक्त पार्थिव ऊर्जा भूमिगत हो। दक्षिण-पूर्व प्रवेश: संतुलन हेतु उत्तर-पूर्व में जल-स्रोत जोड़ें। दोनों अवस्थाओं में दहलीज़ पर 18 इंच गहराई तक वास्तु पुरुष यंत्र गाड़ना अनिवार्य है।' },
                    { dosha: 'Door directly facing a T‑junction or dead‑end road', doshaHi: 'द्वार सीधे T-जंक्शन या बंद गली (dead-end road) की ओर', fix: 'This is considered a severe dosha because fast‑moving energy from the road strikes the house directly. Install a convex Bagua mirror above the door facing outward. Plant a row of hardy shrubs or a small tree between the door and the road to diffuse the energy.', fixHi: 'इसे गंभीर दोष माना जाता है क्योंकि सड़क से तीव्रगामी ऊर्जा सीधे घर से टकराती है। द्वार के ऊपर बाहर की ओर मुख करके उत्तल बग्वा (Bagua) दर्पण लगाएँ। द्वार और सड़क के बीच कठोर झाड़ियों की कतार या छोटा वृक्ष लगाएँ ताकि ऊर्जा विसरित हो।' },
                    { dosha: 'Two main doors facing each other', doshaHi: 'दो मुख्य द्वार परस्पर सम्मुख', fix: 'This creates energy conflict. One door should be made slightly smaller or kept closed most of the time. A crystal hanging between the two doors harmonises the competing energy fields. A brass Swastik on both door frames neutralises the conflict.', fixHi: 'इससे ऊर्जा-संघर्ष उत्पन्न होता है। एक द्वार थोड़ा छोटा बनाया जाए या अधिकांश समय बंद रखा जाए। दोनों द्वारों के बीच लटका क्रिस्टल प्रतिस्पर्धी ऊर्जा-क्षेत्रों को समन्वित करता है। दोनों फ्रेमों पर पीतल का स्वस्तिक इस संघर्ष को निष्क्रिय करता है।' },
                    { dosha: 'Door under a staircase', doshaHi: 'सीढ़ियों के नीचे द्वार', fix: 'The downward pressure of the staircase directly above the entrance suppresses energy and creates mental heaviness. Install a false ceiling or a crystal grid between the staircase and the door. A copper pyramid placed on the landing above the door redirects the descending energy.', fixHi: 'प्रवेश के ठीक ऊपर सीढ़ियों का अधोमुखी दबाव ऊर्जा को कुचलता है और मानसिक भारपन रचता है। सीढ़ियों और द्वार के बीच फॉल्स सीलिंग या क्रिस्टल ग्रिड लगाएँ। द्वार के ऊपर लैंडिंग पर रखा तांबे का पिरामिड अधोगामी ऊर्जा की दिशा मोड़ देता है।' },
                  ].map((item) => (
                    <div key={item.dosha} className="p-5 bg-gradient-to-r from-[var(--color-bg-elevated)] to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{bi('Dosha:', 'दोष:')} {bi(item.dosha, item.doshaHi)}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed"><strong>{bi('Fix:', 'उपाय:')}</strong> {bi(item.fix, item.fixHi)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 5: Case Study ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
                  <h2 id="case-study" className="font-serif text-2xl sm:text-3xl text-nidra-indigo">{bi('Case Study — The South‑Facing Entrance That Doubled Revenue', 'केस स्टडी — दक्षिणमुखी प्रवेश जिसने राजस्व दोगुना कर दिया')}</h2>
                </div>
                <p>{bi('A family‑run textile business in Surat operated from a south‑facing shop for 12 years with consistently declining sales. The south entrance, receiving intense afternoon radiation, made the shop uncomfortably hot by 2 PM — driving customers away during peak shopping hours. AstroVastu Expert K.K. Nagaich was called in. Rather than relocating, he prescribed: a Vastu Purush Yantra buried at the threshold, the door colour changed from black to a warm dark brown, a water feature installed in the northeast corner, and a brass Swastik placed above the door frame.', 'सूरत में पारिवारिक संचालित एक कपड़ा व्यवसाय 12 वर्षों तक दक्षिणमुखी दुकान से चलता रहा, जहाँ बिक्री लगातार घट रही थी। दक्षिणी प्रवेश में तीव्र अपराह्न विकिरण के कारण दोपहर 2 बजे तक दुकान असहनीय रूप से गर्म हो जाती थी — भीड़भाड़ वाले खरीदारी के घंटों में ग्राहक लौट जाते थे। एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच को बुलाया गया। स्थान बदलने के बजाय उन्होंने निर्धारित किया: दहलीज़ पर वास्तु पुरुष यंत्र गाड़ा गया, द्वार का रंग काले से बदलकर उष्ण गहरा भूरा किया गया, उत्तर-पूर्व कोने में जल-स्रोत स्थापित किया गया, और द्वार के फ्रेम के ऊपर पीतल का स्वस्तिक रखवा दिया गया।')}</p>
                <p>{bi('Within ', 'करीब ')}<strong>{bi('four months', 'चार माह')}</strong>{bi(', footfall increased by approximately 40%, and the average customer dwell time doubled — because the shop was now thermally comfortable during afternoon hours. The business, which had been considering closure, went on to open a second location within two years. This case demonstrates that even the most "inauspicious" entrance direction can be corrected without demolition — when the remedies are precise and the principles are understood.', 'में आगंतुकों की संख्या (footfall) लगभग 40% बढ़ी और औसत ग्राहक-ठहराई का समय दोगुना हो गया — क्योंकि दुकान अब अपराह्न काल में थर्मल रूप से सुखद थी। बंद करने पर विचार कर रहा यह व्यवसाय दो वर्षों के भीतर दूसरी शाखा खोल गया। यह केस दर्शाता है कि सर्वाधिक "अशुभ" मानी जाने वाली प्रवेश-दिशा भी बिना तोड़फोड़ के सुधारी जा सकती है — जब उपाय यथासूत्र हों और सिद्धांत समझे हों।')}
                </p>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-[var(--color-bg-elevated)] rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 id="conclusion" className="font-serif text-2xl text-nidra-indigo">{bi('Conclusion — Your Door Is Your Destiny', 'निष्कर्ष — आपका द्वार ही आपका भाग्य है')}</h2>
                </div>
                <p>{bi('The main entrance is not merely the point where you enter your home. It is where opportunity enters your life. Every element — direction, size, material, colour, threshold, and surrounding environment — contributes to a cumulative energetic effect that shapes your family\'s prosperity, health, and harmony. The 2024 CFD study confirmed scientifically what Vedic architects encoded into scripture: door placement is not arbitrary. It is a measurable, optimisable variable in the physics of human habitation. Whether your door faces North, East, West, or South — there is always a correct configuration and a proven remedy. The question is not whether your entrance is perfect — it is whether you have applied the right corrections.', 'मुख्य प्रवेश केवल वह बिंदु नहीं जहाँ से आप घर में प्रवेश करते हैं। यह वह स्थान है जहाँ अवसर आपके जीवन में प्रवेश करते हैं। प्रत्येक अंग — दिशा, आकार, सामग्री, रंग, दहलीज़ और पारिस्थितिक वातावरण — एक संचयी ऊर्जात्मक प्रभाव में योगदान देता है जो आपके परिवार की समृद्धि, स्वास्थ्य और सौहार्द को ढालता है। 2024 के CFD अध्ययन ने वैज्ञानिक रूप से वही पुष्टि किया जो वैदिक वास्तुकारों ने शास्त्रों में अंकित किया: दरवाज़े का स्थान मनमानी नहीं है। यह मानव निवास के भौतिकी का एक मापनीय, अनुकूलनीय चर है। आपका द्वार उत्तर, पूर्व, पश्चिम या दक्षिण — किसी की ओर भी हो, सदैव एक यथाविधि विन्यास और सिद्ध उपाय मौजूद है। प्रश्न यह नहीं कि आपका प्रवेश पूर्ण है या नहीं — प्रश्न यह है कि आपने सही सुधार लागू किए हैं या नहीं।')}</p>
                <p className="font-medium">{bi('AstroVastu Expert K.K. Nagaich provides comprehensive entrance Vastu analysis as part of every residential and commercial consultation — including exact pada measurement, dosha identification, and personalised remedy prescription.', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच प्रत्येक आवासीय एवं वाणिज्यिक परामर्श के अंतर्गत व्यापक प्रवेश-वास्तु विश्लेषण प्रदान करते हैं — जिसमें यथासूत्र पाद-मापन, दोष-पहचान और व्यक्तिगत उपचार-निर्धारण शामिल है।')}</p>
              </div>

            </div>
          </ArticleShell>
        </article>
      
    </>
  );
}
