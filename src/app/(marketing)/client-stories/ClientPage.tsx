'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { SoundController } from '@/features/shared/components/SoundController';
import { useBi } from '@/lib/i18n/Bilingual';

/* ================================================================
   DATA
   ================================================================ */
const instagramReels = [
  'https://www.instagram.com/reel/DXMejXjkk5D/',
  'https://www.instagram.com/reel/DW-oXZ3yhUx/',
  'https://www.instagram.com/reel/DW3PsvlT_eT/',
  'https://www.instagram.com/reel/DWx3t_Dku3u/',
  'https://www.instagram.com/reel/DWik3DZkvZk/',
  'https://www.instagram.com/reel/DWT4z9nEgVs/',
  'https://www.instagram.com/reel/DU7aYejEhj6/',
  'https://www.instagram.com/reel/DUSYXHPkteM/',
  'https://www.instagram.com/reel/DUQW6z5kqIO/',
];

const gmbReviews = [
  { name: 'Shreem Meera', text: 'It was really great experience and feeling so blessed to meet Guru Sri KK Nagaich. He is the best numerologist and great astrologer. I consulted regarding my son name and I am really very satisfied.', textHi: 'सचमुच बहुत शानदार अनुभव रहा। गुरु श्री के. के. नागाइच से मिलकर धन्य-धन्य हो गया। वे सर्वश्रेष्ठ अंकशास्त्री और महान ज्योतिषी हैं। मैंने अपने पुत्र के नाम को लेकर परामर्श किया और मैं बेहद संतुष्ट हूँ।', rating: 5 },
  { name: 'Rajat Rastogi', text: 'Pranaam sabhi ko. Guru ji se judne k baad mujhe bahot fayda hua. Kaam banne lage.', textHi: 'सबको प्रणाम। गुरु जी से जुड़ने के बाद मुझे बहुत फायदा हुआ। काम बनने लगे।', rating: 5 },
  { name: 'Chirag Raval', text: 'Guruji is very soft spoken and give really good remedy. There are so many newly remedy he suggest.', textHi: 'गुरुजी बहुत कोमल भाषी हैं और वाकई बहुत अच्छे उपाय बताते हैं। उन्होंने इतने नए-नए उपाय सुझाए।', rating: 5 },
  { name: 'Sohit Kumar Mishra', text: 'Bahut achche se batate hain. Bahut achcha laga. Dhanyvad.', textHi: 'बहुत अच्छे से बताते हैं। बहुत अच्छा लगा। धन्यवाद।', rating: 5 },
  { name: 'Jashoda devi Bhatt', text: 'Bahut achche se batate hain. Unka har ek upay bahut prabhavshali hai.', textHi: 'बहुत अच्छे से बताते हैं। उनका हर एक उपाय बहुत प्रभावशाली है।', rating: 5 },
  { name: 'Akanksha Bharti', text: 'I had a great experience with K K Nagaich sir. The best part about him is that he has a very understanding nature and explains every small detail with clarity.', textHi: 'के. के. नागाइच सर के साथ मेरा अनुभव शानदार रहा। उनकी सबसे बड़ी खासियत यह है कि वे बहुत समझदार स्वभाव के हैं और हर-हर छोटी बात बड़ी स्पष्टता से समझाते हैं।', rating: 5 },
  { name: 'Florence L', text: 'I had the best interaction! He was generous with his time and gave me plenty of advice and timeframes. He also took the time to explain the reasoning behind his statements. I highly recommend!', textHi: 'मेरा सबसे उत्तम अनुभव रहा! उन्होंने उदारता से समय दिया, भरपूर सलाह और समय-सीमा बताई। अपनी हर बात का कारण भी समझाने का कष्ट किया। मैं उन्हें पूर्णतया अनुशंसित करती हूँ!', rating: 5 },
  { name: 'Sanjjog Tilak', text: 'I highly recommend Pt. Krishna N. of Vedic Urja as an exceptional astrological guide. His expertise in astrology, numerology, and related fields is remarkable, demonstrating both depth and practicality.', textHi: 'असाधारण ज्योतिषीय मार्गदर्शक के रूप में मैं वेदिक अर्जा के पं. कृष्णा एन. की अत्यधिक अनुशंसा करता हूँ। ज्योतिष, अंकशास्त्र एवं संबंधित क्षेत्रों में उनकी विशेषज्ञता अद्वितीय है — में गहराई और व्यावहारिकता दोनों है।', rating: 5 },
  { name: 'arpit mishra', text: 'I have consulted for Mobile Number numerology. He is able to tell my exact issue just by looking at my mobile number. He suggested new number for me in very detailed manner. Also he suggested very practical astrology remedies. Highly impressed and recommended.', textHi: 'मैंने मोबाइल नंबर अंकशास्त्र पर परामर्श लिया। मेरा मोबाइल नंबर देखकर ही उन्होंने मेरी ठीक-ठीक समस्या बता दी। बहुत विस्तार से मुझे नया नंबर सुझाया। साथ ही अत्यंत व्यावहारिक ज्योतिषीय उपाय भी बताए। अत्यधिक प्रभावित और अनुशंसित।', rating: 5 },
  { name: 'shikha singh', text: 'Unhone meri beti ke naam ke liye consultation ki thi, unhone bahut hi acchi salah di. Unke dwara bataye gaye upay bahut kaargar rahe. Main unki bahut aabhari hoon.', textHi: 'उन्होंने मेरी बेटी के नाम के लिए परामर्श दिया, बेहद अच्छी सलाह दी। उनके बताए गए उपाय बहुत कारगर रहे। मैं उनका बहुत आभारी हूँ।', rating: 5 },
  { name: 'Lalit Rc Kediyaa', text: 'Bahut achche se batate hain. Unka har ek upay bahut prabhavshali hai. Main unki salah se bahut prabhavit hua.', textHi: 'बहुत अच्छे से बताते हैं। उनका हर एक उपाय बहुत प्रभावशाली है। मैं उनकी सलाह से बहुत प्रभावित हुआ।', rating: 5 },
  { name: 'Jagriti Razdan', text: 'Very impressed with their products... it is so pure. Really appreciate their prompt reply for any inquiry. They even offer Vedic puja online, one of the few sanstha where I don\'t find them chasing for money but are more interested to see positive results.', textHi: 'उनके उत्पादों से अत्यंत प्रभावित हूँ... बेहद शुद्ध हैं। किसी भी पूछताछ पर तुरंत उत्तर मिलता है, यह सराहनीय है। वे ऑनलाइन वैदिक पूजा भी कराते हैं — ऐसे गिने-चुने संस्थानों में से एक जहाँ वे धन के पीछे नहीं भागते, बल्कि सकारात्मक परिणाम देखने में अधिक रुचि रखते हैं।', rating: 5 },
  { name: 'SARV ABHIMAN GUPTA', text: 'Bahut achche se batate hain. Unka har ek upay bahut prabhavshali hai. Main unki salah se bahut prabhavit hua.', textHi: 'बहुत अच्छे से बताते हैं। उनका हर एक उपाय बहुत प्रभावशाली है। मैं उनकी सलाह से बहुत प्रभावित हुआ।', rating: 5 },
  { name: 'Aalok', text: 'Krishna bhai is one of the most humble and decent person I\'ve come across. He\'s really good in the field of astrology & predictions!!', textHi: 'कृष्ण भाई मेरे द्वारा मिले सबसे विनम्र और सभ्य व्यक्तियों में से एक हैं। ज्योतिष और भविष्यवाणी के क्षेत्र में वे वाकई निपुण हैं!!', rating: 5 },
  { name: 'Rithik Shukla', text: 'Consulted for career, he has given deep insight. The way he mixes numerology and astrology and derives conclusions is very unique. Thanks for his clarity and detailed guidance.', textHi: 'करियर के लिए परामर्श लिया, उन्होंने गहन अंतर्दृष्टि दी। अंकशास्त्र और ज्योतिष को जोड़कर निष्कर्ष निकालने का उनका अंदाज बिल्कुल अद्वितीय है। उनकी स्पष्टता और विस्तृत मार्गदर्शन के लिए धन्यवाद।', rating: 5 },
  { name: 'Prakhar Sharma', text: 'Bahut badiya anubhav. Very simple and very effective. Highly impressed and happy.', textHi: 'बहुत बढ़िया अनुभव। बेहद सरल और अत्यंत असरदार। बेहद प्रभावित और प्रसन्न।', rating: 5 },
  { name: 'manoj gupta', text: 'Best for names, astrology. Consulted many but he is only one who actually knows this science.', textHi: 'नामकरण और ज्योतिष के लिए सर्वश्रेष्ठ। बहुतों से परामर्श किया, पर वे एकमात्र हैं जो वास्तव में इस विज्ञान को जानते हैं।', rating: 5 },
  { name: 'Dushyant Singh Sisodia', text: 'Provided a fair report which was detailed and included every aspect of my life. Also provided detailed remedies to overcome challenges.', textHi: 'उचित और विस्तृत रिपोर्ट दी जिसमें मेरे जीवन के हर पक्ष को शामिल किया गया। चुनौतियों से पार पाने के विस्तृत उपाय भी बताए।', rating: 5 },
  { name: 'Manju Dayal', text: 'Worth using kumkum and havan saamgri of Vedic Urja. Thanks Krishna ji and Vedic Urja for taking this initiative to provide us pure and original products to perform our rituals.', textHi: 'वेदिक अर्जा की कुमकुम और हवन सामग्री प्रयोग करने योग्य (सच में उपयोगी) है। अनुष्ठानों के लिए शुद्ध और मौलिक उत्पाद देने की इस पहल के लिए कृष्णा जी और वेदिक अर्जा को धन्यवाद।', rating: 5 },
  { name: 'richa kapoor', text: 'The products of the firm are natural. It\'s been after ages that I got to smell authentic turmeric. Would recommend the viable products of Vedic Urja to all. 100% satisfaction guaranteed.', textHi: 'इस संस्था के उत्पाद प्राकृतिक हैं। युगों-काल बाद प्रामाणिक हल्दी की सुगंध लेने को मिली। वेदिक अर्जा के सभी उत्पाद सबको जरूर सुझाऊँगी। 100% संतुष्टि की गारंटी।', rating: 5 },
  { name: 'Atulya Mohan Mandela', text: 'Consulted for child career. Great person and great analysis.', textHi: 'पुत्र के करियर के लिए परामर्श किया। महान व्यक्ति और शानदार विश्लेषण।', rating: 5 },
  { name: 'Vikey A. Tandon', text: 'I have used both their services for performing puja and products like Kumkum, hawan samagri, and kapoor, all are pure and excellent. I am also happy with astrological consultations.', textHi: 'मैंने उनकी सेवा में पूजा करवाई और कुमकुम, हवन सामग्री तथा कपूर जैसे उत्पाद भी लिए — सब शुद्ध और उत्कृष्ट हैं। ज्योतिषीय परामर्श से भी मैं बेहद संतुष्ट हूँ।', rating: 5 },
  { name: 'Science of Sanskrit', text: 'Best Astrologer and the best person... he solved my vastu problem and suggested me many remedies which improved the quality of my life. Thank you so much.', textHi: 'श्रेष्ठ ज्योतिषी और सबसे अच्छे इंसान... उन्होंने मेरी वास्तु समस्या हल की और अनेक उपाय सुझाए जिससे मेरे जीवन की गुणवत्ता बेहतर हुई। अनेक-अनेक धन्यवाद।', rating: 5 },
  { name: 'Sandeep Pandey', text: 'Consulted for my baby name. Excellent experience. Highly recommend.', textHi: 'मेरे बच्चे के नामकरण के लिए परामर्श किया। उत्कृष्ट अनुभव। अत्यधिक अनुशंसित।', rating: 5 },
  { name: 'reyansh goswami', text: 'Had a wonderful experience with VedicUrja and team. All the products that got delivered are 100% original and genuine.', textHi: 'वेदिक अर्जा और उनकी टीम के साथ अप्रतिम अनुभव। जो भी उत्पाद डिलीवर हुए, सभी 100% असली और प्रामाणिक थे।', rating: 5 },
  { name: 'Manoj Jadhav', text: 'Awesome experience! Impactful! Helped a lot! Must visit!', textHi: 'शानदार अनुभव! अत्यंत असरदार! बहुत सहायक! अवश्य जाएं!', rating: 5 },
  { name: 'Saumya mishra', text: 'Their products are so awesome. They provide organic products. Thank you Vedic Urja for providing these products.', textHi: 'उनके उत्पाद बेहद बेहतरीन हैं। वे जैविक उत्पाद देते हैं। ये उत्पाद प्रदान करने के लिए वेदिक अर्जा को धन्यवाद।', rating: 5 },
  { name: 'Dr Mahendra Shukla', text: 'Excellent prediction on my question, Mobile numbers. Great experience.', textHi: 'मेरे प्रश्न, मोबाइल नंबरों पर उत्कृष्ट भविष्यवाणी। शानदार अनुभव।', rating: 5 },
  { name: 'Krishnawati Pandey', text: 'Bahut achche se batate hain. Bahut achcha laga. Dhanyvad.', textHi: 'बहुत अच्छे से बताते हैं। बहुत अच्छा लगा। धन्यवाद।', rating: 5 },
  { name: 'Sunil Gupta', text: 'Very learned person with knowledge of Astrology and Numerology. Predictions are very precise.', textHi: 'ज्योतिष और अंकशास्त्र के ज्ञान से परिचित अत्यंत विद्वान व्यक्ति। भविष्यवाणियां बेहद सटीक हैं।', rating: 5 },
  { name: 'Rithik Shukla', text: 'BEST PERSON FOR MOBILE NUMEROLOGY. AWESOME EXPERIENCE.', textHi: 'मोबाइल अंकशास्त्र के लिए सर्वश्रेष्ठ व्यक्ति। अद्भुत अनुभव।', rating: 5 },
  { name: 'Vaishali Mishra', text: 'It was a great experience with Vedic Urja. I recommend everyone to try its service and product.', textHi: 'वेदिक अर्जा के साथ शानदार अनुभव रहा। सबको उनकी सेवा और उत्पाद अवश्य अपनाने की सलाह देती हूँ।', rating: 5 },
  { name: 'gunjan verma', text: 'Very accurate and practical scientific prediction. It really works!', textHi: 'अत्यंत सटीक, व्यावहारिक और वैज्ञानिक भविष्यवाणी। सचमुच काम करती है!', rating: 5 },
  { name: 'Anas Khan', text: 'Best place for numerology. Thank you for name suggestions.', textHi: 'अंकशास्त्र के लिए सर्वश्रेष्ठ स्थान। नाम सुझाने के लिए धन्यवाद।', rating: 5 },
  { name: 'Shivam Sharma', text: 'The best numerologist.', textHi: 'सर्वश्रेष्ठ अंकशास्त्री।', rating: 5 },
  { name: 'Gopal Krishna', text: 'Vedic Urja very greatfully pooja & anusthan.', textHi: 'वेदिक अर्जा ने बड़ी श्रद्धा से पूजा और अनुष्ठान संपन्न कराए।', rating: 5 },
  { name: 'Vaishali Misra', text: 'Best for career and education.', textHi: 'करियर और शिक्षा के लिए सर्वोत्तम।', rating: 5 },
  { name: 'Shailesh Bagdane', text: 'Awesome experience. Peaceful experience.', textHi: 'शानदार अनुभव। शांति भरा अनुभव।', rating: 5 },
  { name: 'Simply dentists dental clinic', text: 'Very nice services.', textHi: 'बहुत बढ़िया सेवाएं।', rating: 5 },
  { name: 'yash mehrotra', text: 'Highly delighted with the rituals performed.', textHi: 'संपन्न किए गए अनुष्ठानों से अत्यंत प्रसन्न।', rating: 5 },
  { name: 'Vikas Singh', text: 'Superb!', textHi: 'अद्भुत!', rating: 5 },
  { name: 'Rupesh Agarwal', text: 'Great service and excellent guidance.', textHi: 'शानदार सेवा और उत्कृष्ट मार्गदर्शन।', rating: 5 },
  { name: 'rinkey pandey', text: 'Wonderful consultation experience.', textHi: 'अपरिमित परामर्श अनुभव।', rating: 5 },
  { name: 'Nitin Trivedy', text: 'Very knowledgeable and helpful. Highly recommended.', textHi: 'अत्यंत ज्ञानी और सहायक। पूर्णतया अनुशंसित।', rating: 5 },
  { name: 'Manisha ravi Singh', text: 'Excellent astrologer. Very accurate predictions.', textHi: 'उत्कृष्ट ज्योतिषी। अत्यंत सटीक भविष्यवाणियां।', rating: 5 },
  { name: 'Prabhay kant Verma', text: 'Best vastu consultant in the region. Very practical solutions.', textHi: 'इस क्षेत्र के सर्वश्रेष्ठ वास्तु सलाहकार। बेहद व्यावहारिक समाधान।', rating: 5 },
  { name: 'Tripti Srivastava', text: 'Amazing experience with Vedic Urja. Highly satisfied.', textHi: 'वेदिक अर्जा के साथ अविस्मरणीय अनुभव। पूर्ण संतुष्टि।', rating: 5 },
  { name: 'Rajesh Prasad', text: 'Very helpful and knowledgeable person. Strongly recommended.', textHi: 'अत्यंत सहायक और ज्ञानी व्यक्ति। दृढ़ता से अनुशंसित।', rating: 5 },
  { name: 'Himani Gawandi', text: 'Wonderful consultation. Very detailed analysis.', textHi: 'अद्भुत परामर्श। बेहद विस्तृत विश्लेषण।', rating: 5 },
  { name: 'Harish Pandit', text: 'Excellent service. Truly professional approach.', textHi: 'उत्कृष्ट सेवा। सचमुच पेशेवर अंदाज।', rating: 5 },
  { name: 'Ajit Singh', text: 'Very satisfied with the consultation and remedies suggested.', textHi: 'परामर्श और सुझाए गए उपायों से पूर्ण संतुष्टि।', rating: 5 },
  { name: 'Ajeet Tomar', text: 'Great experience. Highly recommended for vastu and numerology.', textHi: 'शानदार अनुभव। वास्तु और अंकशास्त्र के लिए अत्यधिक अनुशंसित।', rating: 5 },
  { name: 'Avinash Kokate', text: 'Very good experience. The remedies worked wonderfully.', textHi: 'बहुत अच्छा अनुभव। उपायों ने अद्भुत काम किया।', rating: 5 },
  { name: 'anil singh', text: 'Best astrologer. Predictions are very accurate.', textHi: 'सर्वश्रेष्ठ ज्योतिषी। भविष्यवाणियां अत्यंत सटीक।', rating: 5 },
  { name: 'Abhishake Garg', text: 'Excellent consultation. Very detailed and helpful.', textHi: 'उत्कृष्ट परामर्श। बेहद विस्तृत और सहायक।', rating: 5 },
  { name: 'Namdev Salgar', text: 'Great service. Very professional approach.', textHi: 'शानदार सेवा। अत्यंत पेशेवर अंदाज।', rating: 5 },
  { name: 'Harshit Gupta', text: 'Wonderful experience. Highly recommended.', textHi: 'अद्भुत अनुभव। पूर्णतया अनुशंसित।', rating: 5 },
  { name: 'Ajay Kharra', text: 'Very good consultation. Satisfied with the guidance.', textHi: 'बहुत अच्छा परामर्श। मार्गदर्शन से संतुष्ट।', rating: 5 },
  { name: 'pawan agrawal', text: 'Excellent service and products. Very genuine person.', textHi: 'उत्कृष्ट सेवा और उत्पाद। बेहद सच्चे दिल के इंसान।', rating: 5 },
  { name: 'neelam dixit', text: 'Great experience with Vedic Urja. Highly recommend.', textHi: 'वेदिक अर्जा के साथ शानदार अनुभव। अत्यधिक अनुशंसा।', rating: 5 },
  { name: 'priyanka srivastav', text: 'Very satisfied with the puja services and products.', textHi: 'पूजा सेवाओं और उत्पादों से पूर्ण संतुष्टि।', rating: 5 },
  { name: 'arun kumar mishra', text: 'Best astrologer and numerologist. Very accurate predictions.', textHi: 'सर्वश्रेष्ठ ज्योतिषी और अंकशास्त्री। अत्यंत सटीक भविष्यवाणियां।', rating: 5 },
  { name: 'Shubham Mishra', text: 'Excellent consultation. Very detailed guidance.', textHi: 'उत्कृष्ट परामर्श। बेहद विस्तृत मार्गदर्शन।', rating: 5 },
  { name: 'Dharmendra Mishra', text: 'Wonderful experience. Highly recommended for vastu.', textHi: 'अद्भुत अनुभव। वास्तु के लिए पूर्णतया अनुशंसित।', rating: 5 },
  { name: 'gaurav awasthi', text: 'Very good service. Satisfied with the consultation.', textHi: 'बहुत अच्छी सेवा। परामर्श से संतुष्ट।', rating: 5 },
];

function HeroSection() {
  const bi = useBi();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-1)] via-[var(--color-hero-2)] to-[var(--color-hero-1)] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,153,51,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-[8%] w-72 h-72 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-[var(--color-border-soft)] animate-float-slow" />
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16 sm:mt-20">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
          {bi('Real Stories from Around the World', 'दुनिया भर की सच्ची कहानियां')}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-hero-fg)] mb-6 leading-tight drop-shadow-2xl">
          {bi('Words of', 'आपकी जुबानी')}{' '}
          <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">{bi('Gratitude', 'अनमोल अनुभव')}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-[var(--color-hero-fg)]/70 max-w-2xl mx-auto mb-6 px-4">
          {bi('Discover how AstroVastu Expert has transformed spaces and lives across India and beyond. Authentic reviews from verified clients.', 'जानिए एस्ट्रोवास्तु एक्सपर्ट ने भारत और उसके बाहर स्थानों और जीवनों को कैसे बदला। सत्यापित क्लाइंट्स की प्रामाणिक समीक्षाएं।')}
        </motion.p>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}

function TrustStats() {
  const bi = useBi();
  const stats = [
    { value: '2 Lakh+', label: 'Clients Served', labelHi: 'सेवा प्राप्त क्लाइंट्स', icon: '◆' },
    { value: '20+', label: 'Years Experience', labelHi: 'वर्षों का अनुभव', icon: '◇' },
    { value: '50+', label: 'Countries', labelHi: 'देश', icon: '◈' },
    { value: '4.9 ★', label: 'Rating', labelHi: 'रेटिंग', icon: '◉' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--color-bg-elevated)] to-vastu-stone/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 3 }}
              className="text-center p-6 bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl border border-prakash-gold/20 shadow-[0_8px_25px_rgba(26,42,58,0.06)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-500"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="text-3xl mb-2 text-prakash-gold">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-nidra-indigo">{stat.value}</div>
              <div className="text-xs sm:text-sm text-nidra-indigo/50 mt-1">{bi(stat.label, stat.labelHi)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoTestimonialsSection() {
  const bi = useBi();
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script'); script.src = '//www.instagram.com/embed.js'; script.async = true;
      script.onload = () => { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); };
      document.body.appendChild(script);
    } else { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-vastu-stone/20 to-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Video Testimonials', 'वीडियो अनुभव')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('Hear from Our Clients', 'हमारे क्लाइंट्स की जुबानी')}</h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm">{bi('Real video reviews from families and businesses across India.', 'भारत भर के परिवारों और व्यवसायों के सच्चे वीडियो अनुभव।')}</p>
        </motion.div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {instagramReels.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start rounded-2xl overflow-hidden bg-[var(--color-bg-elevated)] shadow-[0_8px_25px_rgba(26,42,58,0.06)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] border border-prakash-gold/10 transition-shadow duration-500"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <iframe loading="lazy" src={`${url}embed/`} width="100%" height="460" frameBorder="0" scrolling="no" className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}

function TextTestimonialsSection() {
  const bi = useBi();
  const [visibleCount, setVisibleCount] = useState(12);

  return (
    <section className="py-16 bg-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">{bi('Verified Reviews', 'सत्यापित समीक्षाएं')}</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">{bi('65+ Google Verified Client Reviews', '65+ गूगल-सत्यापित क्लाइंट समीक्षाएं')}</h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm">{bi('Authentic feedback from real clients who have experienced the power of AstroVastu Expert.', 'एस्ट्रोवास्तु एक्सपर्ट की शक्ति का अनुभव कर चुके असली क्लाइंट्स की प्रामाणिक प्रतिक्रिया।')}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gmbReviews.slice(0, visibleCount).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 12) * 0.03 }}
              whileHover={{ scale: 1.02, rotateY: 2, translateZ: 10 }}
              className="bg-[var(--color-bg-glass)] backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-prakash-gold/15 shadow-[0_4px_15px_rgba(26,42,58,0.04)] hover:shadow-[0_10px_25px_rgba(200,138,93,0.12)] transition-all duration-300 flex flex-col h-full"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-prakash-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
                <span className="text-xs text-nidra-indigo/40 ml-1">{bi('GMB Verified', 'GMB सत्यापित')}</span>
              </div>
              <p className="text-sm text-nidra-indigo/70 leading-relaxed flex-1 mb-3 line-clamp-4">{bi(review.text, review.textHi)}</p>
              <div className="flex items-center gap-3 pt-3 border-t border-prakash-gold/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold/30 to-sacred-saffron/30 flex items-center justify-center text-nidra-indigo font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <p className="font-medium text-sm text-nidra-indigo">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleCount < gmbReviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-8 py-3 border-2 border-prakash-gold text-nidra-indigo rounded-full font-medium hover:bg-prakash-gold/5 transition"
            >
              {bi('Load More Reviews', 'और समीक्षाएं देखें')} ({gmbReviews.length - visibleCount} {bi('remaining', 'शेष')})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ClientStoriesPage() {
  const bi = useBi();
  return (
    <>
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <TrustStats />
          <VideoTestimonialsSection />
          <TextTestimonialsSection />
        </main>
      </SmoothScroll>
      <style>{`
        @keyframes float-slow {0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
        @keyframes gradient-loop {0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        .animate-float-slow{animation:float-slow 8s ease-in-out infinite}
        .animate-gradient-loop{animation:gradient-loop 12s ease infinite}
        .scrollbar-hide::-webkit-scrollbar{display:none}
      `}</style>
    </>
  );
}
