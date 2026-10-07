'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import Link from 'next/link';
import Image from 'next/image';
import { useBi } from '@/lib/i18n/Bilingual';
import ArticleShell from '@/features/blog/components/ArticleShell';
import { ARTICLE_SEO_META } from '@/features/blog/data/articleSeoMetadata';

const META = ARTICLE_SEO_META['peepal-tree-remedy'];

const EN_PRAYER = '"O Tree Deity and all the deities residing in this tree, this building is for my livelihood. It is difficult to maintain your purity here. I request that all deities residing in this tree kindly leave this tree and depart elsewhere. With your permission, I will transplant this plant to another place. Respecting you, I offer this coconut at your feet; please accept it."';
const HI_PRAYER = 'हे वृक्ष देव, और इस वृक्ष में निवासरत सभी देव गणों से प्रार्थना है कि यह भवन मेरे जीवन यापन हेतु है, यहां आपकी सुचिता बनाए रखना कठिन है, आपसे निवेदन है कि इस वृक्ष पर निवासरत सभी देवता यह वृक्ष छोड़कर अन्यत्र प्रस्थान करने की कृपा करें, आपकी आज्ञा से मैं इस पौधे किसी अन्य जगह स्थापित कर दूंगा। आपका सम्मान करते हुए आपके श्री चरणों में यह श्री फल समर्पित कर रहा हु इसे स्वीकार करें।';

export default function PeepalTreeRemedyPage() {
  const bi = useBi();
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="bg-vastu-parchment">
          <article className="pt-28 pb-20 min-h-screen">
            <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:underline mb-6">
              {bi('← Back to Insights', '← अंतर्दृष्टि संग्रह में वापस')}
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-nidra-indigo/60 mb-4">
                <span className="text-prakash-gold uppercase tracking-wider">{bi('Remedies', 'उपाय')}</span>
                <span>•</span>
                <span>{bi('8 min read', '8 मिनट का लेख')}</span>
                <span>•</span>
                <span>{bi('By AstroVastu Expert KK Nagaich', 'एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा')}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-nidra-indigo mb-6">
                {bi('Peepal Tree Growing on House Walls – Signs and Remedies', 'दीवार पर उगता पीपल का वृक्ष – संकेत और उपाय')}
              </h1>
              <p className="text-xl text-nidra-indigo/70 italic">
                {bi('Understanding the spiritual and Vastu significance, and step‑by‑step remedies.', 'आध्यात्मिक एवं वास्तुगत महत्व की समझ और चरणबद्ध उपाय।')}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10 shadow-xl border border-prakash-gold/30">
              <Image
                src="/images/blog/peepal-tree-square.jpg"
                alt="Peepal tree on wall"
                width="800"
                height="800"
                className="w-full aspect-square object-cover"
                priority
              />
            </div>

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
              <p>{bi('Small Peepal trees spontaneously growing on the walls of a house are a sign. Usually, birds drop seeds here and there, causing them to sprout. But it is noteworthy that they do not grow in every building; sometimes they even sprout on walls that have cement, etc.', 'घर की दीवारों पर स्वतः निकल पीपल के छोटे वृक्ष, एक संकेत होते है। वैसे तो यह चिड़ियाँ अपने मुंह में बीज लेकर इधर उधर डाल देती है इससे उग सकते है। लेकिन गौर करने वाली बात यह है कि यह हर भवन में नहीं उगते, कभी कभी तो दीवारों पर सीमेंट इत्यादि होता है वहां उग आते है।')}</p>
              <p className="text-nidra-indigo/70">{bi('घर की दीवारों पर स्वतः निकल पीपल के छोटे वृक्ष, एक संकेत होते है। वैसे तो यह चिड़ियाँ अपने मुंह में बीज लेकर इधर उधर डाल देती है इससे उग सकते है। लेकिन गौर करने वाली बात यह है कि यह हर भवन में नहीं उगते, कभी कभी तो दीवारों पर सीमेंट इत्यादि होता है वहां उग आते है।', 'Small Peepal trees spontaneously growing on the walls of a house are a sign. Usually, birds drop seeds here and there, causing them to sprout. But it is noteworthy that they do not grow in every building; sometimes they even sprout on walls that have cement, etc.')}</p>

              <p>{bi('It is believed that Peepal trees host the Pitrs (departed ancestors) and Lord Brahma.', 'ऐसी मान्यता है कि पीपल पर पितृ (अर्थात दिवंगत आत्माओं) और ब्रह्म देव का वास होता है।')}</p>
              <p className="text-nidra-indigo/70">{bi('ऐसी मान्यता है कि पीपल पर पितृ (अर्थात दिवंगत आत्माओं) और ब्रह्म देव का वास होता है।', 'It is believed that Peepal trees host the Pitrs (departed ancestors) and Lord Brahma.')}</p>

              <p>{bi('The appearance of a Peepal tree on the walls of a house indicates both ', 'किसी घर इस तरह दीवारों पर पीपल का वृक्ष आने का संकेत ')}<strong>{bi('Pitru Dosha', 'पितृ दोष')}</strong>{bi(' and ', ' के साथ ')}<strong>{bi('Vastu Dosha', 'वास्तु दोष')}</strong>{bi('.', ' को भी इंगित करता है।')}</p>
              <p className="text-nidra-indigo/70">{bi('किसी घर इस तरह दीवारों पर पीपल का वृक्ष आने का संकेत पितृ दोष के साथ वास्तु दोष को भी इंगित करता है।', 'The appearance of a Peepal tree on the walls of a house indicates both Pitru Dosha and Vastu Dosha.')}</p>

              <h2 id="remedies">{bi('Remedies / उपाय', 'उपाय / Remedies')}</h2>

              <p>{bi('First, according to Hindu beliefs, you should perform the prescribed rituals for the liberation and salvation of your ancestors.', 'सबसे पहले तो आपको हिंदू मान्यताओं के अनुसार अपने पूर्वजों की मोक्ष, मुक्ति हेतु जो विधि विधान बताएं गये हैं वो करना चाहिए।')}</p>
              <p className="text-nidra-indigo/70">{bi('सबसे पहले तो आपको हिंदू मान्यताओं के अनुसार अपने पूर्वजों की मोक्ष, मुक्ति हेतु जो विधि विधान बताएं गये हैं वो करना चाहिए।', 'First, according to Hindu beliefs, you should perform the prescribed rituals for the liberation and salvation of your ancestors.')}</p>

              <p>{bi('If there has been an untimely death in your current or the previous two generations, and you are experiencing severe symptoms like disease, grief, or financial distress in your life or family, you can conduct special pujas such as ', 'यदि किसी की वर्तमान या पिछली दो पीढ़ियों तक अकाल मृत्यु हुई हो, और आपके जीवन में, परिवार में रोग, शोक, आर्थिक कष्ट कोई गंभीर लक्षण है तो आप विशेष पूजन जैसे ')}<strong>{bi('Tripindi Shraddha', 'त्रिपिंडी श्राद्ध')}</strong>{bi(' or ', ' या ')}<strong>{bi('Narayan Bali', 'नारायण बलि')}</strong>{bi(' may be performed.', ' जैसे विधान करवा सकते हैं।')}</p>
              <p className="text-nidra-indigo/70">{bi('यदि किसी की वर्तमान या पिछली दो पीढ़ियों तक अकाल मृत्यु हुई हो, और आपके जीवन में, परिवार में रोग, शोक, आर्थिक कष्ट कोई गंभीर लक्षण है तो आप विशेष पूजन जैसे त्रिपिंडी श्राद्ध, नारायण बलि जैसे विधान करवा सकते हैं।', 'If there has been an untimely death in your current or the previous two generations, and you are experiencing severe symptoms like disease, grief, or financial distress in your life or family, you can conduct special pujas such as Tripindi Shraddha or Narayan Bali.')}</p>

              <p>{bi('If you are not capable or lack funds, you can perform daily ', 'यदि सक्षम नहीं है पैसे का अभाव है तो सामान्य ')}<em>{bi('tarpanam', 'तर्पण')}</em>{bi(' with water.', ' जल के द्वारा नित्य किया जा सकता है।')}</p>
              <p className="text-nidra-indigo/70">{bi('यदि सक्षम नहीं है पैसे का अभाव है तो सामान्य तर्पण जल के द्वारा नित्य किया जा सकता है।', 'If you are not capable or lack funds, you can perform daily tarpanam with water.')}</p>

              <p>{bi('On the new moon day (Amavasya), light a dried coconut shell in the southwest corner of the house with cow\'s ghee and camphor, and chant mantras of Mahakal or Lord Shiva – this also helps.', 'अमावस्या के दिन घर के दक्षिण पश्चिम कोने पर एक सूखा नारियल का गोला, गाय के घी और कपूर के साथ प्रज्वलित जलाकर महाकाल, भगवान शिव के मंत्र जाप करने से भी लाभ होता है।')}</p>
              <p className="text-nidra-indigo/70">{bi('अमावस्या के दिन घर के दक्षिण पश्चिम कोने पर एक सूखा नारियल का गोला, गाय के घी और कपूर के साथ प्रज्वलित जलाकर महाकाल, भगवान शिव के मंत्र जाप करने से भी लाभ होता है।', 'On the new moon day (Amavasya), light a dried coconut shell in the southwest corner of the house with cow\'s ghee and camphor, and chant mantras of Mahakal or Lord Shiva – this also helps.')}</p>

              <p>{bi('On Amavasya, place five‑colour sweets in a leaf bowl in the southwest corner in the name of the ancestors, along with water.', 'अमावस्या वाले दिन एक दोने में 5 रंग की मिठाई दक्षिण पश्चिम में पितरों के नाम रखें और साथ में जल।')}</p>
              <p className="text-nidra-indigo/70">{bi('अमावस्या वाले दिन एक दोने में 5 रंग की मिठाई दक्षिण पश्चिम में पितरों के नाम रखें और साथ में जल।', 'On Amavasya, place five‑colour sweets in a leaf bowl in the southwest corner in the name of the ancestors, along with water.')}</p>

              <p>{bi('If you cannot do anything else, then every day during your worship, at the temple, or during fasting, just ask one thing: ', 'कुछ नहीं कर सकते तो प्रतिदिन अपने पूजन में, मंदिर में, व्रत के समय सिर्फ एक चीज मांगे की ')}<em>{bi('"O Lord, may the merit of this worship be dedicated to my ancestors; please grant them liberation and salvation."', '"हे प्रभु मेरी इस पूजा का पुण्य मेरे पूर्वजों को समर्पित है, आपने उन्हें मोक्ष और मुक्ति प्रदान करें।"')}</em></p>
              <p className="text-nidra-indigo/70">{bi('कुछ नहीं कर सकते तो प्रतिदिन अपने पूजन में, मंदिर में, व्रत के समय सिर्फ एक चीज मांगे की हे प्रभु मेरी इस पूजा का पुण्य मेरे पूर्वजों को समर्पित है, आपने उन्हें मोक्ष और मुक्ति प्रदान करें।', 'If you cannot do anything else, then every day during your worship, at the temple, or during fasting, just ask one thing: "O Lord, may the merit of this worship be dedicated to my ancestors; please grant them liberation and salvation."')}</p>

              <p>{bi('On Saturday, Amavasya, take water in a bowl, add a few black sesame seeds, and while chanting the following mantra 21 times, offer it into an empty vessel for the Pitrs:', 'शनिवार, अमावस्या को एक कटोरी में जल लें उसमें थोड़े काले तिल डालें और यह मंत्र बोलते हुए 21 बार एक खाली पात्र में पितृ गण हेतु अर्पित करें।')}</p>
              <p className="text-nidra-indigo/70">{bi('शनिवार, अमावस्या को एक कटोरी में जल लें उसमें थोड़े काले तिल डालें और यह मंत्र बोलते हुए 21 बार एक खाली पात्र में पितृ गण हेतु अर्पित करें।', 'On Saturday, Amavasya, take water in a bowl, add a few black sesame seeds, and while chanting the following mantra 21 times, offer it into an empty vessel for the Pitrs:')}</p>
              <pre className="bg-[var(--color-bg-secondary)] p-4 rounded-lg">ॐ सर्व पितृभ्यो नमः तर्पयामी</pre>

              <h2 id="signs">{bi('Method to remove the Peepal plant / पीपल के पौधे को हटाने की विधि', 'पीपल के पौधे को हटाने की विधि / Method to remove the Peepal plant')}</h2>

              <p>{bi('First, apologise to your ancestors through at least one of the methods given above, and offer them worship or tarpanam.', 'सबसे पहले ऊपर दी गई कम से कम कोई एक विधि के माध्यम से अपने पूर्वजों से क्षमा मांगते हुए उन्हें पूजन या तर्पण अर्पित करें।')}</p>
              <p className="text-nidra-indigo/70">{bi('सबसे पहले ऊपर दी गई कम से कम कोई एक विधि के माध्यम से अपने पूर्वजों से क्षमा मांगते हुए उन्हें पूजन या तर्पण अर्पित करें।', 'First, apologise to your ancestors through at least one of the methods given above, and offer them worship or tarpanam.')}</p>

              <p>{bi('Then, approach the Peepal plant, take a coconut with water, and pray:', 'इसके बाद आप पीपल के पौधे के पास जाकर, एक पानी वाला नारियल लें और प्रार्थना करें कि')}</p>
              <p className="text-nidra-indigo/70">{bi('इसके बाद आप पीपल के पौधे के पास जाकर, एक पानी वाला नारियल लें और प्रार्थना करें कि', 'Then, approach the Peepal plant, take a coconut with water, and pray:')}</p>
              <blockquote className="italic border-l-4 border-prakash-gold pl-4">
                {bi(EN_PRAYER, HI_PRAYER)}
              </blockquote>
              <p className="text-nidra-indigo/70 mt-2">{bi(HI_PRAYER, EN_PRAYER)}</p>

              <p>{bi('Place the coconut on yellow mustard seeds near the plant for at least 12 hours. The next day, immerse it in a large Peepal tree outside, a river, a lake, or a temple.', 'पौधे के पास पीली सरसों के ऊपर, नारियल को कम से कम 12 घंटे के लिए रख दें, अगले दिन उसे किसी बाहर लगे बड़े पीपल वृक्ष या नदी या सरोवर या मंदिर में प्रवाहित कर दें।')}</p>
              <p className="text-nidra-indigo/70">{bi('पौधे के पास पीली सरसों के ऊपर, नारियल को कम से कम 12 घंटे के लिए रख दें, अगले दिन उसे किसी बाहर लगे बड़े पीपल वृक्ष या नदी या सरोवर या मंदिर में प्रवाहित कर दें।', 'Place the coconut on yellow mustard seeds near the plant for at least 12 hours. The next day, immerse it in a large Peepal tree outside, a river, a lake, or a temple.')}</p>

              <p>{bi('After that, try to remove the plant in such a way that it survives and plant it elsewhere. If the Pitru Dosha affliction is severe, plant it in a cremation ground; otherwise, you can plant it in a Shiva temple or a park.', 'इसके बाद पौधे को इस प्रकार निकालने का प्रयास करे कि वह बच जाए और उसे आप किसी अन्य जगह लगा दें, यदि पितृ दोष के कष्ट बहुत है तो श्मशान भूमि पर लगाए अन्यथा किसी शिव मंदिर, पार्क में लगा सकते हैं।')}</p>
              <p className="text-nidra-indigo/70">{bi('इसके बाद पौधे को इस प्रकार निकालने का प्रयास करे कि वह बच जाए और उसे आप किसी अन्य जगह लगा दें, यदि पितृ दोष के कष्ट बहुत है तो श्मशान भूमि पर लगाए अन्यथा किसी शिव मंदिर, पार्क में लगा सकते हैं।', 'After that, try to remove the plant in such a way that it survives and plant it elsewhere. If the Pitru Dosha affliction is severe, plant it in a cremation ground; otherwise, you can plant it in a Shiva temple or a park.')}</p>

              <p>{bi('If the plant keeps sprouting repeatedly, drill and inject 5 to 10 grams of liquid mercury there. If that is not possible, sprinkle yellow sulphur, along with salt and lime.', 'यदि पौधे बार बार निकलते है तो वहां 5 से 10 ग्राम लिक्विड मर्करी ड्रिल करके इंजेक्ट कर दें। यदि यह संभव नहीं तो पीला गंधक (yellow sulphur), साथ में नमक और चूना छिड़क दें।')}</p>
              <p className="text-nidra-indigo/70">{bi('यदि पौधे बार बार निकलते है तो वहां 5 से 10 ग्राम लिक्विड मर्करी ड्रिल करके इंजेक्ट कर दें। यदि यह संभव नहीं तो पीला गंधक (yellow sulphur), साथ में नमक और चूना छिड़क दें।', 'If the plant keeps sprouting repeatedly, drill and inject 5 to 10 grams of liquid mercury there. If that is not possible, sprinkle yellow sulphur, along with salt and lime.')}</p>

              <p>{bi('If for some reason the plant dies, plant three Peepal trees in its place during an auspicious constellation – in a cremation ground, temple, or park.', 'यदि किसी कारण पौधा खराब हो जाता है तो उसके बदले तीन पीपल के वृक्ष शुभ नक्षत्र में। किसी श्मशान भूमि, मंदिर, पार्क में लगाए।')}</p>
              <p className="text-nidra-indigo/70">{bi('यदि किसी कारण पौधा खराब हो जाता है तो उसके बदले तीन पीपल के वृक्ष शुभ नक्षत्र में। किसी श्मशान भूमि, मंदिर, पार्क में लगाए।', 'If for some reason the plant dies, plant three Peepal trees in its place during an auspicious constellation – in a cremation ground, temple, or park.')}</p>

              <p>{bi('While removing the plant, chant this mantra:', 'पौधे को निकालते समय इस मंत्र का उच्चारण करें।')}</p>
              <p className="text-nidra-indigo/70">{bi('पौधे को निकालते समय इस मंत्र का उच्चारण करें।', 'While removing the plant, chant this mantra:')}</p>
              <pre className="bg-[var(--color-bg-secondary)] p-4 rounded-lg">ॐ ह्रीं क्षौं फट् स्वाहा</pre>
            </div>
            </ArticleShell>
          </article>
        </main>
      </SmoothScroll>
    </>
  );
}
