'use client';

import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import Link from 'next/link';
import { useBi } from '@/lib/i18n/Bilingual';

export default function RemediesPage() {
  const bi = useBi();
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="min-h-screen bg-vastu-parchment">
          {/* Header Strip */}
          <div className="bg-gradient-to-r from-kumkuma-red to-sacred-saffron py-4 text-center">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[var(--color-hero-fg)] font-bold tracking-wide">
              {bi('PITRA-DOSH SAMADHAN', 'पितृ-दोष समाधान')}
            </h1>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
            <article className="prose prose-lg prose-stone max-w-none">
              <p>
                {bi('Small peepal trees sprouting on their own on the walls of a house are considered an omen. Generally, birds carry seeds in their beaks and drop them here and there, which is why they grow. But the striking thing is that they do not grow on every building; sometimes they even appear on cemented walls.', 'घर की दीवारों पर स्वतः निकलने वाले पीपल के छोटे वृक्ष एक संकेत माने जाते हैं। सामान्यतः चिड़ियाँ अपने मुख में बीज लेकर इधर-उधर गिरा देती हैं, जिससे वे उग जाते हैं। लेकिन गौर करने वाली बात यह है कि ये हर भवन में नहीं उगते; कभी-कभी तो सीमेंट वाली दीवारों पर भी निकल आते हैं।')}
              </p>

              <p>
                {bi('It is believed that the peepal tree is the abode of', 'ऐसी मान्यता है कि पीपल के वृक्ष पर')} <strong>{bi('the Pitras (departed souls)', 'पितृ (दिवंगत आत्माएँ)')}</strong> {bi('and', 'तथा')} <strong>{bi('Brahm Dev', 'ब्रह्म देव')}</strong> {bi('.', 'का वास होता है।')}
              </p>

              <p>
                {bi('Peepal saplings repeatedly sprouting on the walls of your house on their own is taken as a sign that one of your ancestors among the Pitras is seeking your help for liberation. This is merely symbolic omen-knowledge (nimitt gyan). Whether your family has a Pitra Dosh or not is examined through every lens — your name, the names of your family members, the vastu of your home, your kundli. The possibility can only be expressed when the dosh appears in 2 or 3 places and is corroborated by events.', 'घर के दीवारों पर स्वतः पीपल बार बार निकलना इस बात का संकेत माना जाता है कि आपके पूर्वज, पितृ में से कोई मुक्ति हेतु आपसे सहायता चाहता है। यह एक सांकेतिक, निमित्त ज्ञान भर है। आपके परिवार में पितृ दोष है या नहीं इसको आपके नाम, परिवारजन के नाम से, घर की वास्तु से, कुंडली से सभी प्रकार से देखा जाता है। 2 या 3 जगह दोष दिखने और घटनाओं के आधार पर यह संभावना व्यक्त की जा सकती है।')}
              </p>

              <p>
                {bi('For example, in this remedy, the names of those who know the remedy — or the names of their children — will contain', 'उदाहरण के तौर पर यह रेमेडी, उपाय जानने वालों के नाम या उनके बच्चों के नाम में')} <strong>{bi('the letters "AIY" along with "DMT"', '“AIY” के साथ “DMT” लेटर्स')}</strong> {bi('(in 90% of cases) — check your own as well.', 'पाए जायेंगे (90% केस में), आप भी अपना चेक कर लें।')}
              </p>

              <h2>{bi('★ Remedies ★', '★ उपाय ★')}</h2>

              <p>
                {bi('First and foremost, perform the rites prescribed in Hindu traditions for the moksha and liberation of your ancestors.', 'सबसे पहले, हिंदू मान्यताओं के अनुसार अपने पूर्वजों की मोक्ष और मुक्ति हेतु बताए गए विधि-विधान अवश्य करें।')}
              </p>

              <p>
                {bi('If someone in the current or the previous two generations has met an untimely death, and the family shows serious symptoms such as illness, grief, or financial hardship, then special pujas like', 'यदि वर्तमान या पिछली दो पीढ़ियों में किसी की अकाल मृत्यु हुई हो और परिवार में रोग, शोक या आर्थिक कष्ट जैसे गंभीर लक्षण हों, तो')} <strong>{bi('Tripindi Shraddha', 'त्रिपिंडी श्राद्ध')}</strong> {bi('or', 'या')} <strong>{bi('Narayan Bali', 'नारायण बलि')}</strong> {bi('can be performed.', 'जैसे विशेष पूजन कराए जा सकते हैं।')}
              </p>

              <p>
                {bi('If there is financial scarcity, ordinary daily tarpan can be performed with water alone.', 'यदि आर्थिक अभाव हो, तो सामान्य तर्पण प्रतिदिन जल द्वारा किया जा सकता है।')}
              </p>

              <p>
                {bi('On the day of Amavasya, light a dry coconut shell in the southwest corner of your house with cow ghee and camphor, and chant the mantras of Mahakal or Lord Shiva.', 'अमावस्या के दिन घर के दक्षिण-पश्चिम कोने में सूखे नारियल के गोले को गाय के घी और कपूर के साथ प्रज्वलित करें तथा महाकाल या भगवान शिव के मंत्रों का जाप करें।')}
              </p>

              <p>
                {bi('On the day of Amavasya, place sweets of five colours and water in a winnowing basket (doney) and offer them in the names of the Pitras in the southwest direction.', 'अमावस्या के दिन एक दोने में पाँच रंगों की मिठाई और जल रखकर दक्षिण-पश्चिम दिशा में पितरों के नाम अर्पित करें।')}
              </p>

              <p>
                {bi('If nothing else is possible, then each day at the time of your puja, at the temple, or during a fast, simply offer this prayer:', 'यदि कुछ और संभव न हो, तो प्रतिदिन पूजा, मंदिर या व्रत के समय केवल यह प्रार्थना करें:')}<br />
                <em>{bi('"Lord, the merit of this worship of mine is dedicated to my ancestors. Please grant them moksha and liberation."', '“हे प्रभु, मेरी इस पूजा का पुण्य मेरे पूर्वजों को समर्पित है। कृपया उन्हें मोक्ष और मुक्ति प्रदान करें।”')}</em>
              </p>

              <p>
                {bi('On a Saturday or on Amavasya, add black sesame seeds to a bowl of water and offer it to the Pitras while chanting the following mantra', 'शनिवार या अमावस्या के दिन एक कटोरी जल में काले तिल डालें और निम्न मंत्र का')} <strong>{bi('108 times:', '108 बार जाप करते हुए पितरों हेतु अर्पित करें:')}</strong>
              </p>
              <pre className="bg-[var(--color-bg-secondary)] p-4 rounded-lg text-center">
                {bi('ॐ सर्व पितृभ्यो नमः तर्पयामि')}
              </pre>

              <h2>{bi('★ Method for Removing the Peepal Sapling ★', '★ पीपल के पौधे को हटाने की विधि ★')}</h2>

              <p>
                {bi('First, seek forgiveness from your ancestors through any of the remedies described above, and offer them puja or tarpan.', 'सबसे पहले ऊपर बताए गए किसी भी उपाय के माध्यम से अपने पूर्वजों से क्षमा याचना करें और उन्हें पूजन या तर्पण अर्पित करें।')}
              </p>

              <p>
                {bi('Then, go to the peepal sapling with a coconut containing water and pray:', 'इसके बाद पीपल के पौधे के पास जाकर जल वाला नारियल लें और प्रार्थना करें:')}
              </p>
              <blockquote className="italic border-l-4 border-prakash-gold pl-4">
                {bi('"O tree deity and all divine beings residing in this tree, this building is for my livelihood, and it is difficult to maintain your sanctity here. I humbly request all the deities residing on this tree to please depart to another place. With your permission, I will re-establish this sapling elsewhere. With due respect, I offer this coconut (shreephal) at your feet — please accept it."', '“हे वृक्ष देव और इस वृक्ष में निवास करने वाले सभी देवगण, यह भवन मेरे जीवन-यापन हेतु है। यहाँ आपकी पवित्रता बनाए रखना कठिन है। आपसे विनम्र निवेदन है कि इस वृक्ष पर निवासरत सभी देवता कृपया अन्य स्थान पर प्रस्थान करें। आपकी आज्ञा से मैं इस पौधे को किसी अन्य स्थान पर स्थापित करूँगा। सम्मानपूर्वक आपके चरणों में यह श्रीफल अर्पित कर रहा हूँ, कृपया इसे स्वीकार करें।”')}
              </blockquote>

              <p>
                {bi('Keep the coconut resting on yellow mustard seeds near the sapling for at least 12 hours. The next day, set it aflow at a large peepal tree, a river, a lake, or a temple.', 'पौधे के पास पीली सरसों के ऊपर नारियल को कम से कम 12 घंटे तक रखें। अगले दिन उसे किसी बड़े पीपल वृक्ष, नदी, सरोवर या मंदिर में प्रवाहित कर दें।')}
              </p>

              <p>
                {bi('Then, try to remove the sapling in such a way that it remains intact, and plant it elsewhere. If the Pitra Dosh is severe, plant it in a cremation ground (shmshan bhuumi); otherwise, a Shiva temple or a park will also do.', 'इसके बाद पौधे को इस प्रकार निकालने का प्रयास करें कि वह सुरक्षित रहे और उसे किसी अन्य स्थान पर लगा दें। यदि पितृ दोष अधिक हो, तो उसे श्मशान भूमि में लगाएँ, अन्यथा शिव मंदिर या पार्क में भी लगा सकते हैं।')}
              </p>

              <p>
                {bi('If the sapling keeps sprouting again and again, you may inject liquid mercury there (with caution, as it is toxic), or sprinkle yellow sulphur and salt-and-lime.', 'यदि पौधा बार-बार उगता रहे, तो आप वहाँ लिक्विड मर्करी इंजेक्ट करने (सावधानी पूर्वक क्योंकि यह जहरीली होती है) या पीला गंधक, नमक तथा चूना छिड़क सकते हैं।')}
              </p>

              <p>
                {bi('If, for any reason, the sapling perishes, plant three peepal trees in its place during an auspicious nakshatra — at a cremation ground, a temple, or a park.', 'यदि किसी कारण पौधा नष्ट हो जाए, तो उसके स्थान पर शुभ नक्षत्र में तीन पीपल के वृक्ष श्मशान भूमि, मंदिर या पार्क में लगाएँ।')}
              </p>

              <p>
                {bi('Chant this mantra while removing the sapling:', 'पौधे को निकालते समय इस मंत्र का जाप करें:')}
              </p>
              <pre className="bg-[var(--color-bg-secondary)] p-4 rounded-lg text-center">
                {bi('ॐ ह्रीं क्षौं फट् स्वाहा')}
              </pre>

              <p className="text-lg font-semibold text-center mt-8">
                {bi('If you need any assistance — Narayan Bali puja, or regarding vastu doshas of your home — you can contact our team at', 'यदि आपको किसी भी प्रकार की सहायता – नारायण बलि पूजन, या घर के वास्तु दोष के बारे में चाहिए, तो हमारी टीम से')} <strong>6393570832</strong> {bi('.', 'पर संपर्क कर सकते हैं।')}
              </p>
            </article>

            {/* CTA Button in Hindi */}
            <div className="text-center mt-12">
              <Link
                href="/bookings"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white font-bold rounded-full shadow-lg hover:shadow-xl transition text-lg"
              >
                {bi('Book Your Consultation Today →', 'परामर्श के लिए आज ही बुक करें →')}
              </Link>
            </div>
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
