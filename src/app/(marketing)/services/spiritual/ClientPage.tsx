'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export default function SpiritualSpacesPage() {
  const bi = useBi();
  return (
    <>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.07),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-[var(--color-border-soft)] animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-violet-400/5 to-transparent backdrop-blur-2xl border border-[var(--color-border-soft)] animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">{bi('Extensive Framework', 'विस्तृत ढांचा')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-violet-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">{bi('Spiritual Spaces', 'आध्यात्मिक स्थान')}</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-hero-fg)]/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">{bi('Pratima Vastu · Prateek Vastu · Poojan & Havan · Havanlogy · Devata Vastu · Vastu Shanti · Meditation & Yoga Space Design · Temple Architecture', 'प्रतिमा वास्तु · प्रतीक वास्तु · पूजन एवं हवन · हवनशास्त्र · देवता वास्तु · वास्तु शांति · ध्यान एवं योग स्थान डिज़ाइन · मंदिर वास्तुकला')}</p>
            <p className="text-sm sm:text-base text-[var(--color-hero-fg)]/50 max-w-2xl mx-auto mb-10">{bi('9 sacred spiritual Vastu practices for temples, meditation halls, pooja rooms, yoga studios & retreats — performed by AstroVastu Expert K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO.', 'मंदिरों, ध्यान कक्षों, पूजा घरों, योग स्टूडियो एवं आश्रमों हेतु 9 पवित्र आध्यात्मिक वास्तु प्रथाएँ — एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा स्वयं संपन्न, 4थी पीढ़ी के गुरु, MBA, पूर्व सीईओ।')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">{bi('Book Spiritual Audit', 'आध्यात्मिक ऑडिट बुक करें')}</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">{bi('Explore Practices ↓', 'प्रथाएँ जानें ↓')}</Link></div>
          </div>
        </section>

        {/* ── VASTU PURUSHA MANDALA ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--color-bg-elevated)] via-vastu-stone/10 to-[var(--color-bg-elevated)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('The Sacred Blueprint for Worship', 'पूजा हेतु पवित्र नक्शा')}</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('The Vastu Purusha Mandala – 81‑Grid Spiritual Architecture', 'वास्तु पुरुष मंडल — 81-ग्रिड आध्यात्मिक वास्तुकला')}</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">{bi('For temples and sacred spaces, the Paramasayika Mandala (9×9 grid) places the Garbhagriha at the Brahmasthan. NE (Ishanya) is governed by Jupiter and the Water element — the abode of divine energy.', 'मंदिरों एवं पवित्र स्थानों हेतु परमासायिक मंडल (9×9 ग्रिड) गर्भगृह को ब्रह्मस्थान पर रखता है। ईशान (आग्नेय नहीं, ईशान्या) बृहस्पति एवं जल-तत्व द्वारा शासित — दिव्य ऊर्जा का निवास।')}</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-[var(--color-bg-elevated)] relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('The 9 Sacred Practices', '9 पवित्र प्रथाएँ')}</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">{bi('Authentic Vedic Practices for Temples, Pooja Rooms & Meditation Spaces', 'मंदिरों, पूजा घरों एवं ध्यान स्थानों हेतु प्रामाणिक वैदिक प्रथाएँ')}</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">{bi('Each practice performed at an astrologically determined Muhurta.', 'प्रत्येक प्रथा ज्योतिषीय दृष्टि से निर्धारित मुहूर्त पर संपन्न की जाती है।')}</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Pratima Vastu (Idol & Deity Placement)',titleHi:'प्रतिमा वास्तु (मूर्ति एवं देवता स्थापना)',desc:'Idols face West so devotee faces East. Ganesha, Durga, Lakshmi face West. Shiva Linga tip faces East. Hanuman faces South. Idols 2‑9 inches on raised platform, 1‑inch gap from wall. Eyes at devotee chest level. Marble preferred; avoid clay, plastic, glass. Brihat‑samhita Chapter 60: idol installation in temples.',descHi:'मूर्तियाँ पश्चिम मुखा रखी जाती हैं ताकि भक्त पूर्व मुखी होकर पूजा करें। गणेश, दुर्गा, लक्ष्मी पश्चिम मुखी। शिवलिंग का अग्रभाग पूर्व की ओर। हनुमान दक्षिण मुखी। 2–9 इंच की मूर्तियाँ उँचे आसन पर, दीवार से 1 इंच की दूरी पर। भक्त की छाती के स्तर पर मूर्तियों की दृष्टि। संगमरमर श्रेष्ठ; मिट्टी, प्लास्टिक, कांच वर्जित। बृहत्-संहिता अध्याय 60: मंदिर में प्रतिमा स्थापना।',features:['West‑facing idols','1‑inch gap from wall','2‑9 inch idol height','Chest‑level eye placement','Marble idols preferred'],featuresHi:['पश्चिम मुखा मूर्तियाँ','दीवार से 1 इंच की दूरी','2–9 इंच मूर्ति ऊँचाई','छाती-स्तर की दृष्टि','संगमरमर की मूर्तियाँ श्रेष्ठ'],color:'#FFD700'},
                {num:'02',title:'Prateek Vastu (Sacred Symbol Placement)',titleHi:'प्रतीक वास्तु (पवित्र प्रतीक स्थापना)',desc:'9 powerful symbols: Swastik (good fortune), Om (cosmic vibration), Lotus (purity), Trishul (protection), Namaste, Conch, Kalash, Fish, Lamp. Trishakti Yantra (Om+Swastik+Trishul) above main door. Shri Yantra in East/NE worshipped regularly. Symbols balance Pancha Mahabhutas.',descHi:'9 शक्तिशाली प्रतीक: स्वस्तिक (सौभाग्य), ॐ (ब्रह्मांडीय कंपन), कमल (पवित्रता), त्रिशूल (सुरक्षा), नमस्ते, शंख, कलश, मछली, दीपक। मुख्य द्वार के ऊपर त्रिशक्ति यंत्र (ॐ+स्वस्तिक+त्रिशूल)। श्री यंत्र पूर्व/ईशान में, नियमित अर्चना। प्रतीक पंचमहाभूतों को संतुलित करते हैं।',features:['Swastik at front gate','Om in meditation corners','Trishakti above main door','Shri Yantra in E/NE','9 symbols balance 5 elements'],featuresHi:['मुख्य द्वार पर स्वस्तिक','ध्यान कोनों में ॐ','मुख्य द्वार के ऊपर त्रिशक्ति','पूर्व/ईशान में श्री यंत्र','9 प्रतीक 5 तत्वों को संतुलित करें'],color:'#C88A5D'},
                {num:'03',title:'Devata Vastu (Deity Placement & Temple Architecture)',titleHi:'देवता वास्तु (देवता स्थापना एवं मंदिर वास्तुकला)',desc:'NE corner primary placement. Morning sunlight enters — considered pure and energizing. Low ceiling with pyramid‑shaped roof. Wooden structure preferred. Double‑shutter doors. Brahmasthan also sacred for mandir. Never South, basement, behind toilet, or under staircase.',descHi:'ईशान कोण प्राथमिक स्थान। सुबह की धूप अंदर आए — इसे पवित्र एवं ऊर्जावान माना जाता है। निम्न छत तथा पिरामिडाकार शिखर। लकड़ी की संरचना श्रेष्ठ। द्वि-पल्ले वाले द्वार। ब्रह्मस्थान भी मंदिर हेतु पवित्र। कदापि दक्षिण, तहखाना, शौचालय के पीछे, या सीढ़ी के नीचे नहीं।',features:['NE corner primary','Pyramid/gopura ceiling','Wooden structure','Double‑shutter doors','Never South/basement/stairs'],featuresHi:['ईशान कोण प्राथमिक','पिरामिड/गोपुर छत','लकड़ी की संरचना','द्वि-पल्ले वाले द्वार','दक्षिण/तहखाना/सीढ़ी कदापि नहीं'],color:'#FF9933'},
                {num:'04',title:'Poojan & Havan (Sacred Fire Rituals)',titleHi:'पूजन एवं हवन (पवित्र अग्नि अनुष्ठान)',desc:'Havan cleanses aura of the house. Ghee, herbs, sacred materials offered into fire with Vedic mantras. Fire destroys harmful bacteria. Includes Ganapati Poojan, Navagraha Shanti, Kalash Poojan, Havan, Mangal Aarti. Agni bestows health, wealth, peace, prosperity.',descHi:'हवन घर के आभा-मंडल को शुद्ध करता है। वैदिक मंत्रों के साथ घी, जड़ी-बूटी एवं पवित्र सामग्री अग्नि में अर्पित। अग्नि हानिकारक जीवाणु नष्ट करती है। इसमें गणपति पूजन, नवग्रह शांति, कलश पूजन, हवन एवं मंगल आरती शामिल। अग्नि स्वास्थ्य, धन, शांति एवं समृद्धि प्रदान करती है।',features:['Ghee & herb Havan','Ganapati & Navagraha','Kalash Sthapana','Medicinal smoke disinfection','Mangal Aarti conclusion'],featuresHi:['घी एवं जड़ी-बूटी का हवन','गणपति एवं नवग्रह','कलश स्थापना','औषधीय धुआं कीटाणुशोधन','मंगल आरती पर समापन'],color:'#C10000'},
                {num:'05',title:'Havanlogy (The Science of Fire Rituals)',titleHi:'हवनशास्त्र (अग्नि अनुष्ठान का विज्ञान)',desc:'Thermal energy of fire as drug delivery system. Smoke from ghee, samagri, wood creates pesticide effect removing airborne bacteria. Ash enriches soil. 40‑herb Vastu Shanti samagri. Purpose‑specific compositions: Vastu Shanti, Griha Pravesh, Navagraha, Lakshmi Havan.',descHi:'औषधि-वितरण प्रणाली के रूप में अग्नि की तापीय ऊर्जा। घी, सामग्री एवं लकड़ी का धुआं कीटनाशक प्रभाव उत्पन्न कर वायुजन्य जीवाणु नष्ट करता है। राख मिट्टी को समृद्ध करती है। 40 जड़ी-बूटी की वास्तु शांति सामग्री। उद्देश्य-विशिष्ट संयोजन: वास्तु शांति, गृह प्रवेश, नवग्रह एवं लक्ष्मी हवन।',features:['Thermal energy purification','40‑herb Vastu Shanti samagri','Airborne bacteria elimination','Drug delivery via smoke','Purpose‑specific samagri'],featuresHi:['तापीय ऊर्जा शुद्धि','40 जड़ी-बूटी वास्तु शांति सामग्री','वायुजन्य जीवाणु उन्मूलन','धुएं द्वारा औषधि-वितरण','उद्देश्य-विशिष्ट सामग्री'],color:'#EF4444'},
                {num:'06',title:'Vastu Shanti Puja (Space Energisation)',titleHi:'वास्तु शांति पूजा (स्थान ऊर्जीकरण)',desc:'Pacifies Vastu Purush. Ganapati, Navagraha, Kalash Poojan, Havan, Mangal Aarti. Vastu Shanti Mantra invokes acceptance, health, happiness. Balances five elements. Transforms space into sanctuary of positive energy and divine protection.',descHi:'वास्तु पुरुष को शांत करता है। गणपति, नवग्रह, कलश पूजन, हवन एवं मंगल आरती। वास्तु शांति मंत्र स्वीकृति, स्वास्थ्य एवं सुख का आह्वान करता है। पाँच तत्वों को संतुलित करता है। स्थान को सकारात्मक ऊर्जा एवं दिव्य सुरक्षा के अभयारण्य में बदल देता है।',features:['Vastu Purush pacification','Ganapati+Navagraha+Kalash','Sacred Havan with mantras','Five‑element balancing','Vastu dosha neutralisation'],featuresHi:['वास्तु पुरुष शांति','गणपति+नवग्रह+कलश','मंत्रों सहित पवित्र हवन','पाँच-तत्व संतुलन','वास्तु दोष निवारण'],color:'#8B5CF6'},
                {num:'07',title:'Meditation & Yoga Space Design',titleHi:'ध्यान एवं योग स्थान डिज़ाइन',desc:'NE or centre ideal for meditation and yoga. Water element zone — fountain or flowers in glass bowl. Natural daylight uplifts mood. Soft blues, greens, pastels. Natural materials: silk, cotton, wool, wood, bamboo. Beeswax candles purify air. Shoes removed before entering. Altar in NE honors divine.',descHi:'ध्यान एवं योग हेतु ईशान या केंद्र आदर्श। जल-तत्व क्षेत्र — फव्वारा या कांच के कटोरे में पुष्प। प्राकृतिक धूप मनोदशा को उन्नत करती है। हले नीले, हरे एवं पैस्टल रंग। प्राकृतिक सामग्री: रेशम, सूती, ऊन, लकड़ी, बांस। मक्खी-मोम (बीवैक्स) मोमबत्तियाँ वायु शुद्ध करती हैं। प्रवेश से पूर्व जूते उतारें। ईशान में वेदी दिव्य का सम्मान करती है।',features:['NE or centre location','Water feature in NE','Soft blue/green/pastel','Natural materials','Clutter‑free & shoes removed'],featuresHi:['ईशान या केंद्र स्थान','ईशान में जल-विशेषता','हले नीले/हरे/पैस्टल','प्राकृतिक सामग्री','अव्यवस्था-मुक्त एवं जूते उतारें'],color:'#10B981'},
                {num:'08',title:'Temple Construction (Garbhagriha, Mandapa & Shikhara)',titleHi:'मंदिर निर्माण (गर्भगृह, मंडप एवं शिखर)',desc:'Garbhagriha at magnetic north centre. Shikhara rises above with golden ratio. Mandapa with Navagraha column grid (9 squares). Parikrama circumambulatory path. Nagara or Dravida style per Shilpa Shastras and Vastu Sastras.',descHi:'चुंबकीय उत्तर केंद्र में गर्भगृह। शिखर सुवर्ण-अनुपात के साथ ऊर्ध्व उठे। नवग्रह स्तंभ-जाल (9 वर्ग) वाला मंडप। परिक्रमा प्रदक्षणा मार्ग। शिल्प शास्त्र एवं वास्तु शास्त्रों अनुसार नागर या द्रविड़ शैली।',features:['Garbhagriha at magnetic N','Mandapa with Navagraha grid','Shikhara golden ratio','Parikrama path','Shilpa+Vastu Sastra compliant'],featuresHi:['चुंबकीय उत्तर में गर्भगृह','नवग्रह जाल वाला मंडप','शिखर सुवर्ण-अनुपात','परिक्रमा मार्ग','शिल्प+वास्तु शास्त्र अनुपालित'],color:'#6366F1'},
                {num:'09',title:'Spiritual Space Maintenance & Daily Ritual Protocol',titleHi:'आध्यात्मिक स्थान रखरखाव एवं दैनिक अनुष्ठान विधि',desc:'Diya lit morning and evening. Kalash water changed daily before 9 AM. Fresh flowers daily — marigold, lotus, jasmine, rose. Camphor or sandalwood incense during aarti. Brass bell rung. NE immaculately clean — wipe with salt water. Broken idols replaced immediately. Pooja room exclusively for spiritual practices.',descHi:'सुबह एवं शाम दीप जलाएँ। कलश का जल रोज़ सुबह 9 बजे से पूर्व बदलें। रोज़ ताजे पुष्प — गेंदा, कमल, चमेली, गुलाब। आरती के समय कपूर या चंदन की लोबान। पीतल की घंटी बजाएँ। ईशान अत्यंत स्वच्छ — नमक वाले जल से पोंछें। टूटी मूर्तियाँ तुरंत बदलें। पूजा कक्ष केवल आध्यात्मिक साधना हेतु।',features:['Diya morning & evening','Daily Kalash water change','Fresh flowers daily','Brass bell during aarti','Exclusive spiritual use'],featuresHi:['सुबह एवं शाम दीप','रोज़ कलश जल परिवर्तन','रोज़ ताजे पुष्प','आरती में पीतल घंटी','केवल आध्यात्मिक उपयोग'],color:'#F59E0B'},
              ].map((p,i)=>(
                <div key={i} className={`flex flex-col ${i%2===0?'lg:flex-row':'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}>
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[var(--color-bg-elevated)] via-[var(--color-bg-glass)] to-[var(--color-bg-glass)] backdrop-blur-md border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center">
                      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{backgroundColor:p.color}}/>
                      <div className="text-6xl font-bold mt-4 mb-2" style={{color:p.color}}>{p.num}</div>
                      <h3 className="font-serif text-xl text-nidra-indigo font-bold">{bi(p.title.split('(')[0].trim(), p.titleHi.split('(')[0].trim())}</h3>
                      <p className="text-xs text-nidra-indigo/50 mt-1">{bi(p.title.match(/\(.*?\)/)?.[0]?.replace(/[()]/g,'') ?? '', p.titleHi.match(/\(.*?\)/)?.[0]?.replace(/[()]/g,'') ?? '')}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-nidra-indigo/70 leading-relaxed mb-4">{bi(p.desc, p.descHi)}</p>
                    <div className="flex flex-wrap gap-2">{p.features.map((f,j)=><span key={j} className="text-xs px-3 py-1.5 rounded-full border" style={{borderColor:p.color+'30',backgroundColor:p.color+'08',color:p.color}}>{bi(f, p.featuresHi?.[j])}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POOJA ROOM DIRECTION GUIDE ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Quick Reference', 'त्वरित संदर्भ')}</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Pooja Room Direction & Idol Placement Guide', 'पूजा कक्ष दिशा एवं मूर्ति स्थापना गाइड')}</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {item:'Best Location',itemHi:'श्रेष्ठ स्थान',detail:'Northeast (Ishan Kona). East or North acceptable. Centre (Brahmasthan) also auspicious.',detailHi:'ईशान कोण। पूर्व या उत्तर भी स्वीकार्य। केंद्र (ब्रह्मस्थान) भी शुभ।',color:'#FFD700'},
                {item:'Avoid Locations',itemHi:'परिहार्य स्थान',detail:'South, Southeast, bathroom‑adjacent, under staircase, basement, bedroom. Never share wall with toilet.',detailHi:'दक्षिण, आग्नेय, शौचालय-संलग्न, सीढ़ी के नीचे, तहखाना, शयनकक्ष। शौचालय से साझा दीवार कदापि नहीं।',color:'#EF4444'},
                {item:'Pooja Room Structure',itemHi:'पूजा कक्ष संरचना',detail:'Low ceiling with pyramid roof. Wooden double‑shutter doors. Threshold at entrance. Square or rectangular.',detailHi:'पिरामिड छत वाली निम्न छत। लकड़ी के द्वि-पल्ले द्वार। प्रवेश पर देहली। वर्गाकार या आयताकार।',color:'#10B981'},
                {item:'Idol Facing Direction',itemHi:'मूर्ति की दिशा',detail:'Ganesha/Lakshmi/Durga face West. Shiva Linga tip East. Hanuman South. Idols 1 inch from wall on raised platform.',detailHi:'गणेश/लक्ष्मी/दुर्गा पश्चिम मुखी। शिवलिंग अग्रभाग पूर्व। हनुमान दक्षिण। मूर्तियाँ दीवार से 1 इंच दूर उँचे आसन पर।',color:'#FF9933'},
                {item:'Idol Size & Material',itemHi:'मूर्ति आकार एवं सामग्री',detail:'2‑9 inches. Eyes at chest level. Marble preferred. Avoid clay, plastic, glass. Never broken idols.',detailHi:'2–9 इंच। दृष्टि छाती-स्तर पर। संगमरमर श्रेष्ठ। मिट्टी, प्लास्टिक, कांच वर्जित। टूटी मूर्तियाँ कदापि नहीं।',color:'#8B5CF6'},
                {item:'Colours & Lighting',itemHi:'रंग एवं प्रकाश',detail:'White, light yellow, light blue, cream. Soft natural light. Ghee diya morning & evening.',detailHi:'सफेद, हला पीला, हला नीला, क्रीम। मृदु प्राकृतिक प्रकाश। सुबह एवं शाम घी का दीप।',color:'#06B6D4'},
              ].map((item,idx)=>(<div key={idx} className="bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{bi(item.item, item.itemHi)}</h3><p className="text-xs text-nidra-indigo/60 mt-1">{bi(item.detail, item.detailHi)}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── SACRED SYMBOLS TABLE ── */}
        <section className="py-16 sm:py-24 bg-[var(--color-bg-elevated)] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Sacred Symbols', 'पवित्र प्रतीक')}</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('The 9 Most Powerful Vastu Symbols — Where and Why', '9 सबसे शक्तिशाली वास्तु प्रतीक — कहाँ और क्यों')}</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {symbol:'Swastik',symbolHi:'स्वस्तिक',direction:'Front gate / Main door',directionHi:'मुख्य द्वार / प्रधान दरवाज़ा',purpose:'Security, good fortune, divine protection. Red or yellow.',purposeHi:'सुरक्षा, सौभाग्य, दिव्य रक्षा। लाल या पीला।',color:'#EF4444'},
                {symbol:'Om',symbolHi:'ॐ',direction:'Pooja room / Meditation corner',directionHi:'पूजा कक्ष / ध्यान कोण',purpose:'Cosmic vibration, spiritual grounding, emotional equilibrium.',purposeHi:'ब्रह्मांडीय कंपन, आध्यात्मिक स्थिरता, भावनात्मक संतुलन।',color:'#FFD700'},
                {symbol:'Trishul',symbolHi:'त्रिशूल',direction:'Above main door / Pooja room',directionHi:'मुख्य द्वार के ऊपर / पूजा कक्ष',purpose:'Protection from divine, physical, mental afflictions.',purposeHi:'दिव्य, शारीरिक एवं मानसिक कष्टों से रक्षा।',color:'#6366F1'},
                {symbol:'Shri Yantra',symbolHi:'श्री यंत्र',direction:'East or Northeast',directionHi:'पूर्व या ईशान',purpose:'Wealth manifestation, financial obstacle removal.',purposeHi:'धन-आकर्षण, आर्थिक बाधा निवारण।',color:'#FF9933'},
                {symbol:'Kalash',symbolHi:'कलश',direction:'Main entrance / Pooja room',directionHi:'मुख्य प्रवेश / पूजा कक्ष',purpose:'Fertility, prosperity, auspicious beginning with coconut and mango leaves.',purposeHi:'उर्वरता, समृद्धि, नारियल व आम के पत्तों से मंगल आरंभ।',color:'#10B981'},
                {symbol:'Lotus',symbolHi:'कमल',direction:'Northeast direction',directionHi:'ईशान दिशा',purpose:'Purity, enlightenment, renewal, creativity.',purposeHi:'पवित्रता, ज्ञानोदय, नवीनीकरण, सृजनात्मकता।',color:'#EC4899'},
                {symbol:'Tortoise',symbolHi:'कछुआ',direction:'North (metal) / SW (crystal)',directionHi:'उत्तर (धातु) / नैरृत्य (क्रिस्टल)',purpose:'Stability, longevity, protection. Resilience symbol.',purposeHi:'स्थिरता, दीर्घायु, रक्षा। सहनशीलता का प्रतीक।',color:'#06B6D4'},
                {symbol:'Fish',symbolHi:'मछली',direction:'North direction',directionHi:'उत्तर दिशा',purpose:'Career development, financial improvement, abundance.',purposeHi:'करियर विकास, आर्थिक उन्नति, प्रचुरता।',color:'#F59E0B'},
                {symbol:'Conch (Shankh)',symbolHi:'शंख',direction:'Pooja room / NE corner',directionHi:'पूजा कक्ष / ईशान कोण',purpose:'Sound purification, negative energy dispersion.',purposeHi:'ध्वनि शुद्धि, नकारात्मक ऊर्जा का विक्षेपण।',color:'#C88A5D'},
              ].map((item,idx)=>(<div key={idx} className="bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{bi(item.symbol, item.symbolHi)}</h3><p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>{bi('Place:', 'स्थान:')}</strong> {bi(item.direction, item.directionHi)}</p><p className="text-xs text-nidra-indigo/60">{bi(item.purpose, item.purposeHi)}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── REMEDIES WITHOUT DEMOLITION ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Non‑Invasive Corrections', 'बिना तोड़-फोड़ के सुधार')}</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Remedies for Spiritual Space Doshas', 'आध्यात्मिक स्थान के दोषों के उपचार')}</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Pooja Room Wrong Direction',titleHi:'पूजा कक्ष गलत दिशा',desc:'Copper pyramid in NE corner. Mirror on N/E wall. Vastu yantra for energy balance. Immaculately clean.',descHi:'ईशान कोण में तांबे का पिरामिड। उत्तर/पूर्व दीवार पर दर्पण। ऊर्जा-संतुलन हेतु वास्तु यंत्र। अत्यंत स्वच्छ।',color:'#FFD700'},
                {title:'Pooja Room Under Staircase',titleHi:'सीढ़ी के नीचे पूजा कक्ष',desc:'Copper pyramid between staircase and ceiling. Crystal grid in NE of mandir. Brightly lit. Brass Vastu plate beneath.',descHi:'सीढ़ी एवं छत के बीच तांबे का पिरामिड। मंदिर के ईशान में क्रिस्टल ग्रिड। उज्ज्वल प्रकाश। नीचे पीतल का वास्तु प्लेट।',color:'#C88A5D'},
                {title:'Sharing Wall with Toilet',titleHi:'शौचालय से साझा दीवार',desc:'Copper pyramid on shared wall. Toilet door closed. Vastu Purush Yantra in NE. No cleaning supplies near pooja space.',descHi:'साझा दीवार पर तांबे का पिरामिड। शौचालय का द्वार बंद। ईशान में वास्तु पुरुष यंत्र। पूजा स्थान के पास सफाई सामग्री नहीं।',color:'#EF4444'},
                {title:'Broken/Improper Idols',titleHi:'टूटी/अनुचित मूर्तियाँ',desc:'Immediately replace. Gangajal purification. Copper Kalash in front of mandir. Vastu Shanti mantras.',descHi:'तुरंत प्रतिस्थापित करें। गंगाजल से शुद्धि। मंदिर के सामने तांबे का कलश। वास्तु शांति मंत्र।',color:'#FF9933'},
                {title:'Dark/Poorly Ventilated',titleHi:'अंधेरा/कुछ अप्रभावी',desc:'Soft yellow lighting or oil lamp daily. Exhaust fan. Ghee lamp at sunrise and sunset. Strategic mirrors.',descHi:'रोज़ मृदु पीला प्रकाश या तेल का दीप। निकास पंखा। सूर्योदय एवं सूर्यास्त पर घी का दीप। उचित स्थान पर दर्पण।',color:'#10B981'},
                {title:'Cluttered Mandir',titleHi:'अव्यवस्थित मंदिर',desc:'Avoid two same‑deity idols. Exclusive spiritual use. Closed cabinets below platform for discreet storage.',descHi:'एक-सी देवता की दो मूर्तियाँ रखने से बचें। केवल आध्यात्मिक उपयोग। छिपे संग्रहन हेतु आसन के नीचे बंद अलमारी।',color:'#8B5CF6'},
              ].map((item,idx)=>(<div key={idx} className="bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{bi(item.title, item.titleHi)}</h3><p className="text-xs text-nidra-indigo/60">{bi(item.desc, item.descHi)}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-violet-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-[var(--color-bg-glass)] backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-[var(--color-border-soft)] shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--color-hero-fg)] mb-4">{bi('Let AstroVastu Expert K.K. Nagaich Consecrate Your Sacred Space', 'आपके पवित्र स्थान का कलशाभिषेक एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच से कराएँ')}</h2>
                  <p className="text-[var(--color-hero-fg)]/70 text-base sm:text-lg max-w-xl mx-auto mb-10">{bi('Book a private spiritual Vastu consultation covering all 9 sacred practices — performed personally by a 4th‑generation Vastu Guru with 20+ years of clinical practice and 2 Lakh+ clients worldwide.', 'सभी 9 पवित्र प्रथाओं को समेटे एक निजी आध्यात्मिक वास्तु परामर्श बुक करें — 20+ वर्षों के साक्षात् अनुभव एवं 2 लाख+ विश्वव्यापी क्लाइंट्स वाले 4थी पीढ़ी के वास्तु गुरु द्वारा स्वयं संपन्न।')}</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">{bi('Schedule Your Spiritual Audit →', 'अपना आध्यात्मिक ऑडिट शेड्यूल करें →')}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </>
  );
}
