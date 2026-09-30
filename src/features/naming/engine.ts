/* ------------------------------------------------------------------
   Deterministic, 100% client-side Nakshatra-based name suggestion.
   We derive the MOON'S MEAN sidereal longitude from birth date+time,
   map it to one of 27 Nakshatras and 4 padas, then surface auspicious
   names starting with that pada's syllable.

   HONESTY NOTE: this uses the *mean* Moon (no full Lahiri ayanamsa
   ephemeris), so it is a strong approximation — the exact Janma
   Nakshatra/Pada from true Moon position is confirmed by Acharya ji.
   Nothing here is faked as a precise planetary degree.
------------------------------------------------------------------ */

export interface AreaText { en: string; hi: string }
export interface Pada { sa: string; hi: string }
export interface NameItem { en: string; hi: string }

export interface Nakshatra {
  key: string;
  en: string;
  hi: string;
  sa: string;
  lord: string;
  lordHi: string;
  deity: string;
  deityHi: string;
  symbol: string;
  vibe: AreaText;
  padas: [Pada, Pada, Pada, Pada];
  boys: NameItem[];
  girls: NameItem[];
}

const P = (sa: string, hi: string): Pada => ({ sa, hi });
const N = (en: string, hi: string): NameItem => ({ en, hi });

export const NAKSHATRA: Nakshatra[] = [
  { key: 'ashwini', en: 'Ashwini', hi: 'अश्विनी', sa: 'Aśvinī', lord: 'Ketu', lordHi: 'केतु', deity: 'Ashwini Kumars', deityHi: 'अश्विनी कुमार', symbol: '🐎', vibe: { en: 'Swift, healing, pioneering', hi: 'तेज़, चिकित्सक, आरंभक' }, padas: [P('Chu', 'चू'), P('Cho', 'चो'), P('La', 'ला'), P('Li', 'लि')], boys: [N('Chirag', 'चिराग'), N('Chaitanya', 'चैतन्य'), N('Chirayu', 'चिरायु'), N('Lalit', 'ललित'), N('Lavan', 'लवन'), N('Lohit', 'लोहित')], girls: [N('Charvi', 'चारुवी'), N('Chhaya', 'छाया'), N('Chaitali', 'चैतली'), N('Lalita', 'ललिता'), N('Lasya', 'लस्य'), N('Lipika', 'लपिका')] },
  { key: 'bharani', en: 'Bharani', hi: 'भरणी', sa: 'Bharaṇī', lord: 'Shukra', lordHi: 'शुक्र', deity: 'Yama', deityHi: 'यम', symbol: '🪞', vibe: { en: 'Creative, holding, transformative', hi: 'रचनात्मक, धारक, कायाकल्पकारी' }, padas: [P('Li', 'लि'), P('Lu', 'लू'), P('Le', 'ले'), P('Lo', 'लो')], boys: [N('Lohit', 'लोहित'), N('Lakshya', 'लक्ष्य'), N('Luv', 'लुव'), N('Lav', 'लव'), N('Lalit', 'ललित'), N('Lehar', 'लेहर')], girls: [N('Lipika', 'लिपिका'), N('Leela', 'लीला'), N('Lalita', 'ललिता'), N('Lavanya', 'लावण्या'), N('Lakshmi', 'लक्ष्मी'), N('Lopamudra', 'लोपामुद्रा')] },
  { key: 'krittika', en: 'Krittika', hi: 'कृत्तिका', sa: 'Kṛttikā', lord: 'Surya', lordHi: 'सूर्य', deity: 'Agni', deityHi: 'अग्नि', symbol: '🔥', vibe: { en: 'Sharp, courageous, purifying', hi: 'तीक्ष्ण, साहसी, पावनकारी' }, padas: [P('A', 'अ'), P('I', 'इ'), P('U', 'ऊ'), P('E', 'ए')], boys: [N('Aarav', 'आरव'), N('Aditya', 'आदित्य'), N('Akshat', 'अक्षत'), N('Ishaan', 'ईशान'), N('Ujjwal', 'उज्ज्वल'), N('Ekam', 'एकम')], girls: [N('Ananya', 'अनन्या'), N('Aadhya', 'आध्या'), N('Ira', 'इरा'), N('Ishita', 'ईशिता'), N('Uma', 'उमा'), N('Esha', 'ईशा')] },
  { key: 'rohini', en: 'Rohini', hi: 'रोहिणी', sa: 'Rohiṇī', lord: 'Chandra', lordHi: 'चंद्र', deity: 'Brahma', deityHi: 'ब्रह्मा', symbol: '🌸', vibe: { en: 'Beautiful, growth-oriented, magnetic', hi: 'सुंदर, वृद्धिशील, आकर्षक' }, padas: [P('O', 'ओ'), P('Va', 'वा'), P('Vi', 'वि'), P('Vu', 'वू')], boys: [N('Om', 'ॐ'), N('Vansh', 'वंश'), N('Vikram', 'विक्रम'), N('Ved', 'वेद'), N('Vishal', 'विशाल'), N('Vivan', 'विवान')], girls: [N('Oorja', 'ऊर्जा'), N('Vaishnavi', 'वैष्णवी'), N('Vaani', 'वाणी'), N('Vidhi', 'विधि'), N('Vrinda', 'वृंदा'), N('Veda', 'वेदा')] },
  { key: 'mrigashira', en: 'Mrigashira', hi: 'मृगशिरा', sa: 'Mṛgaśirā', lord: 'Mangal', lordHi: 'मंगल', deity: 'Soma', deityHi: 'सोम', symbol: '🦌', vibe: { en: 'Curious, searching, gentle', hi: 'जिज्ञासु, अन्वेषी, कोमल' }, padas: [P('Ve', 'वे'), P('Vo', 'वो'), P('Ka', 'क'), P('Ki', 'कि')], boys: [N('Kabir', 'कबीर'), N('Kunal', 'कुणाल'), N('Ketan', 'केतन'), N('Kian', 'कियान'), N('Kaustubh', 'कौस्तुभ'), N('Vedant', 'वेदांत')], girls: [N('Vedika', 'वेदिका'), N('Veena', 'वीणा'), N('Kamya', 'काम्या'), N('Kiara', 'कियारा'), N('Keya', 'केया'), N('Kavya', 'काव्या')] },
  { key: 'ardra', en: 'Ardra', hi: 'आर्द्रा', sa: 'Ārdrā', lord: 'Rahu', lordHi: 'राहु', deity: 'Rudra', deityHi: 'रुद्र', symbol: '💧', vibe: { en: 'Intense, researching, teardrop', hi: 'तीव्र, शोधशील, अश्रुबिंदु' }, padas: [P('Ku', 'कू'), P('Gha', 'घ'), P('Ng', 'ङ'), P('Cha', 'च')], boys: [N('Kunal', 'कुणाल'), N('Kuber', 'कुबर'), N('Gaurav', 'गौरव'), N('Chandra', 'चंद्र'), N('Charu', 'चारु'), N('Nakul', 'नकुल')], girls: [N('Kushi', 'कुशी'), N('Kuhu', 'कुरु'), N('Gauri', 'गौरी'), N('Chanda', 'चंडा'), N('Charvi', 'चारुवी'), N('Nivedita', 'निवेदिता')] },
  { key: 'punarvasu', en: 'Punarvasu', hi: 'पुनर्वसु', sa: 'Punarvasu', lord: 'Guru', lordHi: 'बृहस्पति', deity: 'Aditi', deityHi: 'अदिति', symbol: '🏹', vibe: { en: 'Renewal, optimism, light returning', hi: 'पुनरुत्थान, आशावादिता, लौटता प्रकाश' }, padas: [P('Ke', 'के'), P('Ko', 'को'), P('Gu', 'गु'), P('Ga', 'ग')], boys: [N('Ketan', 'केतन'), N('Kunal', 'कुणाल'), N('Gaurav', 'गौरव'), N('Ganesh', 'गणेश'), N('Gulshan', 'गुल्शन'), N('Gopal', 'गोपाल')], girls: [N('Karuna', 'करुणा'), N('Komal', 'कोमल'), N('Gauri', 'गौरी'), N('Gayatri', 'गायत्री'), N('Girija', 'गिरिजा'), N('Keshavi', 'केशवी')] },
  { key: 'pushya', en: 'Pushya', hi: 'पुष्य', sa: 'Puṣyā', lord: 'Shani', lordHi: 'शनि', deity: 'Brihaspati', deityHi: 'बृहस्पति', symbol: '🌼', vibe: { en: 'Nourishing, auspicious, protective', hi: 'पोषक, मंगलकारी, रक्षक' }, padas: [P('Ju', 'जू'), P('Sa', 'स'), P('Si', 'सि'), P('Su', 'सु')], boys: [N('Sagar', 'सागर'), N('Sameer', 'समीर'), N('Satyam', 'सत्यम'), N('Siddharth', 'सिद्धार्थ'), N('Suvarn', 'सुवर्ण'), N('Jayant', 'जयंत')], girls: [N('Sunita', 'सुनीता'), N('Sapna', 'सपना'), N('Sindhu', 'सिंधू'), N('Suchitra', 'सुचित्रा'), N('Suhani', 'सुहानी'), N('Jyoti', 'ज्योति')] },
  { key: 'ashlesha', en: 'Ashlesha', hi: 'आश्लेषा', sa: 'Āśleṣā', lord: 'Budh', lordHi: 'बुध', deity: 'Nagas', deityHi: 'नाग', symbol: '🐍', vibe: { en: 'Insightful, coils of wisdom', hi: 'अंतर्दष्टा, ज्ञान-लिपटाव' }, padas: [P('Di', 'दि'), P('Du', 'दू'), P('De', 'दे'), P('Da', 'द')], boys: [N('Divy', 'दिव्य'), N('Devansh', 'देवांश'), N('Deep', 'दीप'), N('Dayanand', 'दयानंद'), N('Dushyant', 'दुष्यंत'), N('Dev', 'देव')], girls: [N('Divya', 'दिव्या'), N('Dhara', 'धरा'), N('Dipti', 'दीप्ति'), N('Deepa', 'दीपा'), N('Daksha', 'दक्ष'), N('Damini', 'दामिनी')] },
  { key: 'magha', en: 'Magha', hi: 'मघा', sa: 'Maghā', lord: 'Ketu', lordHi: 'केतु', deity: 'Pitri', deityHi: 'पितृ', symbol: '👑', vibe: { en: 'Royal, ancestral, dignified', hi: 'राजसी, पारंपरिक-गौरव' }, padas: [P('Ki', 'कि'), P('Ta', 'टा'), P('Ti', 'ति'), P('Te', 'टे')], boys: [N('Kian', 'कियान'), N('Kishore', 'किशोर'), N('Tanmay', 'तन्मय'), N('Tilak', 'तिलक'), N('Tejas', 'तेजस'), N('Tarun', 'तरुण')], girls: [N('Kiara', 'कियारा'), N('Kavya', 'काव्या'), N('Tara', 'तारा'), N('Trisha', 'त्रिशा'), N('Tina', 'तीना'), N('Tejal', 'तेजल')] },
  { key: 'purva-phalguni', en: 'Purva Phalguni', hi: 'पूर्वा फाल्गुनी', sa: 'Pūrva Phalgunī', lord: 'Shukra', lordHi: 'शुक्र', deity: 'Bhaga', deityHi: 'भग', symbol: '🛏️', vibe: { en: 'Joyful, romantic, easygoing', hi: 'आनंदमय, रोमांटिक, सहज' }, padas: [P('Ta', 'टा'), P('Pi', 'पि'), P('Pu', 'पु'), P('Sha', 'श')], boys: [N('Tanmay', 'तन्मय'), N('Punit', 'पुनीत'), N('Pushkar', 'पुष्कर'), N('Shashank', 'शशांक'), N('Parth', 'पार्थ'), N('Palash', 'पलश')], girls: [N('Tanvi', 'तनुवी'), N('Priya', 'प्रिया'), N('Pooja', 'पूजा'), N('Shaila', 'शैल'), N('Pallavi', 'पल्लवी'), N('Purnima', 'पूर्णिमा')] },
  { key: 'uttara-phalguni', en: 'Uttara Phalguni', hi: 'उत्तरा फाल्गुनी', sa: 'Uttara Phalgunī', lord: 'Surya', lordHi: 'सूर्य', deity: 'Bhaga', deityHi: 'भग', symbol: '🤝', vibe: { en: 'Steady, patronizing, friendly', hi: 'स्थिर, संरक्षक, मैत्रीपूर्ण' }, padas: [P('Si', 'सी'), P('Su', 'सु'), P('Se', 'से'), P('So', 'सो')], boys: [N('Shubham', 'शुभम'), N('Sumit', 'सुमित'), N('Sameer', 'समीर'), N('Siddharth', 'सिद्धार्थ'), N('Sohan', 'सोहन'), N('Surya', 'सूर्य')], girls: [N('Siya', 'सिया'), N('Shreya', 'श्रेया'), N('Suchitra', 'सुचित्रा'), N('Sonal', 'सोनल'), N('Sona', 'सोना'), N('Supriya', 'सुप्रिया')] },
  { key: 'hasta', en: 'Hasta', hi: 'हस्त', sa: 'Hasta', lord: 'Chandra', lordHi: 'चंद्र', deity: 'Savitar', deityHi: 'सवितर', symbol: '✋', vibe: { en: 'Skillful, dexterous, craft', hi: 'कुशल, निपुण, शिल्प' }, padas: [P('Sa', 'स'), P('Da', 'द'), P('Pa', 'प'), P('Pha', 'फ')], boys: [N('Sagar', 'सागर'), N('Darsh', 'दर्श'), N('Parth', 'पार्थ'), N('Praful', 'प्रफुल्ल'), N('Dhruv', 'ध्रुव'), N('Sankalp', 'संकल्प')], girls: [N('Darshana', 'दर्शना'), N('Dimple', 'डिंपल'), N('Pooja', 'पूजा'), N('Sadhana', 'साधना'), N('Harshini', 'हर्षिणी'), N('Pallavi', 'पल्लवी')] },
  { key: 'chitra', en: 'Chitra', hi: 'चित्रा', sa: 'Citrā', lord: 'Mangal', lordHi: 'मंगल', deity: 'Tvashtr', deityHi: 'त्वष्टा', symbol: '🎨', vibe: { en: 'Artistic, design, bright', hi: 'कलात्मक, रचनात्मक, दीप्त' }, padas: [P('So', 'सो'), P('Ta', 'टा'), P('Pa', 'प'), P('Pi', 'पी')], boys: [N('Sohan', 'सोहन'), N('Kishan', 'किशन'), N('Tanmay', 'तन्मय'), N('Parth', 'पार्थ'), N('Piyush', 'पीयूष'), N('Tejas', 'तेजस')], girls: [N('Pihu', 'पीहू'), N('Tanisha', 'तनिशा'), N('Pallavi', 'पल्लवी'), N('Sonal', 'सोनल'), N('Sonia', 'सोनिया'), N('Tejal', 'तेजल')] },
  { key: 'swati', en: 'Swati', hi: 'स्वाति', sa: 'Svātī', lord: 'Rahu', lordHi: 'राहु', deity: 'Vayu', deityHi: 'वायु', symbol: '🌬️', vibe: { en: 'Independent, adaptable, like the wind', hi: 'स्वावलंबी, अनुकूलनशील, वायुसम' }, padas: [P('Ra', 'र'), P('Ti', 'ति'), P('Mu', 'मु'), P('Me', 'मे')], boys: [N('Rahul', 'राहुल'), N('Rishabh', 'ऋषभ'), N('Meet', 'मीट'), N('Milan', 'मिलन'), N('Tanmay', 'तन्मय'), N('Manav', 'मनव')], girls: [N('Riddhi', 'रद्धि'), N('Rhea', 'रिया'), N('Tia', 'तिया'), N('Meghna', 'मेघना'), N('Mitali', 'मिठाली'), N('Manvi', 'मनवी')] },
  { key: 'vishakha', en: 'Vishakha', hi: 'विशाखा', sa: 'Viśākhā', lord: 'Jupiter', lordHi: 'बृहस्पति', deity: 'Indragni', deityHi: 'इंद्र-अग्नि', symbol: '🪔', vibe: { en: 'Goal-driven, fixed, determined', hi: 'लक्ष्य-केंद्रित, दृढ़, संकल्पशाली' }, padas: [P('A', 'अ'), P('E', 'ए'), P('O', 'ओ'), P('Wa', 'व')], boys: [N('Ansh', 'अंश'), N('Aditya', 'आदित्य'), N('Om', 'ॐ'), N('Vansh', 'वंश'), N('Vasu', 'वसु'), N('Aakash', 'आकाश')], girls: [N('Anushka', 'अनुष्का'), N('Ayesha', 'आयशा'), N('Ekta', 'एकता'), N('Oorja', 'ऊर्जा'), N('Vaani', 'वाणी'), N('Aarohi', 'आरोही')] },
  { key: 'anuradha', en: 'Anuradha', hi: 'अनुराधा', sa: 'Anurādhā', lord: 'Shani', lordHi: 'शनि', deity: 'Mitra', deityHi: 'मित्र', symbol: '🪷', vibe: { en: 'Devoted, friendly, coop', hi: 'निष्ठावान, मैत्रीपूर्ण, सहयोगी' }, padas: [P('Mi', 'मी'), P('Me', 'मे'), P('Mo', 'मो'), P('Ta', 'टा')], boys: [N('Milan', 'मिलन'), N('Mohit', 'मोहित'), N('Mandar', 'मंदार'), N('Tanmay', 'तन्मय'), N('Mittal', 'मित्तल'), N('Mahesh', 'महेश')], girls: [N('Mishka', 'मिशका'), N('Meera', 'मीरा'), N('Mohana', 'मोहना'), N('Mimansa', 'मीमांसा'), N('Madhuri', 'माधुरी'), N('Mitali', 'मिठाली')] },
  { key: 'jyeshtha', en: 'Jyeshtha', hi: 'ज्येष्ठा', sa: 'Jyeṣṭhā', lord: 'Mercury', lordHi: 'बुध', deity: 'Indra', deityHi: 'इंद्र', symbol: '🌂', vibe: { en: 'Senior, protective, capable', hi: 'ज्येष्ठ, रक्षक, सामर्थ्यवान' }, padas: [P('Do', 'दो'), P('Pa', 'पा'), P('Pra', 'प्र'), P('Pu', 'पू')], boys: [N('Dhruv', 'ध्रुव'), N('Parth', 'पार्थ'), N('Prahlad', 'प्रह्लाद'), N('Purnendu', 'पूर्णेंदु'), N('Pranav', 'प्रणव'), N('Pushkar', 'पुष्कर')], girls: [N('Parul', 'पारुल'), N('Prisha', 'प्रिशा'), N('Puja', 'पूजा'), N('Prachi', 'प्राची'), N('Prerna', 'प्रेरणा'), N('Purnima', 'पूर्णिमा')] },
  { key: 'mula', en: 'Mula', hi: 'मूल', sa: 'Mūla', lord: 'Ketu', lordHi: 'केतु', deity: 'Nirriti', deityHi: 'निरृति', symbol: '🌱', vibe: { en: 'Root-seeking, transformative', hi: 'मूल-अन्वेषी, कायाकल्पकारी' }, padas: [P('Ya', 'य'), P('Yu', 'यू'), P('Yo', 'यो'), P('Ra', 'र')], boys: [N('Yash', 'यश'), N('Yuvraj', 'युवराज'), N('Yashwan', 'यशवंत'), N('Yashraj', 'यशराज'), N('Rohan', 'रोहन'), N('Rudra', 'रुद्र')], girls: [N('Yashi', 'यशी'), N('Yuvika', 'युविका'), N('Yamini', 'यमिनी'), N('Yashvi', 'यश्वी'), N('Rashmi', 'रश्मि'), N('Radhika', 'राधिका')] },
  { key: 'purva-ashadha', en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा', sa: 'Pūrva Āṣāḍhā', lord: 'Venus', lordHi: 'शुक्र', deity: 'Apas', deityHi: 'आप', symbol: '🪷', vibe: { en: 'Invincible, early win', hi: 'अपराजित, प्रारंभिक विजय' }, padas: [P('Bha', 'भ'), P('Wa', 'व'), P('U', 'उ'), P('Pe', 'पे')], boys: [N('Bhuvan', 'भुवन'), N('Upendra', 'उपेंद्र'), N('Varun', 'वरुण'), N('Vatsal', 'वत्सल'), N('Pankaj', 'पंकज'), N('Bhanu', 'भानु')], girls: [N('Urmi', 'उर्मि'), N('Vaidehi', 'वैदेही'), N('Vibha', 'वीभा'), N('Pooja', 'पूजा'), N('Bhavna', 'भावना'), N('Urvashi', 'ऊर्वशी')] },
  { key: 'uttara-ashadha', en: 'Uttara Ashadha', hi: 'उत्तराषाढ़ा', sa: 'Uttara Āṣāḍhā', lord: 'Sun', lordHi: 'सूर्य', deity: 'Vishvadeva', deityHi: 'विश्वेदेव', symbol: '🦴', vibe: { en: 'Later victory, eternal', hi: 'पश्चात्-विजय, शाश्वत' }, padas: [P('Su', 'सु'), P('Se', 'से'), P('So', 'सो'), P('Da', 'दा')], boys: [N('Sushant', 'सुशांत'), N('Sumit', 'सुमित'), N('Sohan', 'सोहन'), N('Dhananjay', 'धनंजय'), N('Shekhar', 'शेखर'), N('Devdutt', 'देवदत्त')], girls: [N('Suhani', 'सुहानी'), N('Sona', 'सोना'), N('Shefali', 'शेफाली'), N('Devika', 'देविका'), N('Damayanti', 'दमयंती'), N('Sonal', 'सोनल')] },
  { key: 'shravana', en: 'Shravana', hi: 'श्रवण', sa: 'Śravaṇa', lord: 'Moon', lordHi: 'चंद्र', deity: 'Vishnu', deityHi: 'विष्णु', symbol: '👂', vibe: { en: 'Listener, scholar, devoted', hi: 'श्रोता, विद्वान, भक्त' }, padas: [P('Khe', 'खे'), P('Ga', 'ग'), P('Gi', 'गी'), P('Pi', 'पि')], boys: [N('Kailash', 'कैलाश'), N('Gaurav', 'गौरव'), N('Ganesh', 'गणेश'), N('Pitambar', 'पीतांबर'), N('Girish', 'गिरीश'), N('Gautam', 'गौतम')], girls: [N('Gautami', 'गौतमी'), N('Girija', 'गिरिजा'), N('Kaveri', 'कावेरी'), N('Pihu', 'पीहू'), N('Kavya', 'काव्या'), N('Gita', 'गीता')] },
  { key: 'dhanishtha', en: 'Dhanishtha', hi: 'धनिष्ठा', sa: 'Dhaniṣṭhā', lord: 'Mars', lordHi: 'मंगल', deity: 'Vasus', deityHi: 'वसु', symbol: '🥁', vibe: { en: 'Wealthy, rhythmic, generous', hi: 'समृद्ध, लयबद्ध, दानशील' }, padas: [P('Ga', 'गा'), P('Gi', 'गी'), P('Gu', 'गु'), P('Ge', 'गे')], boys: [N('Gaurav', 'गौरव'), N('Girish', 'गिरीश'), N('Guresh', 'गुरेश'), N('Ganesh', 'गणेश'), N('Gopal', 'गोपाल'), N('Gautam', 'गौतम')], girls: [N('Gauri', 'गौरी'), N('Girija', 'गिरिजा'), N('Gudiya', 'गुड़िया'), N('Geet', 'गीत'), N('Gargi', 'गार्गी'), N('Gunjan', 'गुंजन')] },
  { key: 'shatabhisha', en: 'Shatabhisha', hi: 'शतभिषा', sa: 'Śatabhiṣā', lord: 'Rahu', lordHi: 'राहु', deity: 'Varuna', deityHi: 'वरुण', symbol: '⚪', vibe: { en: 'Healer, mystic, independent', hi: 'चिकित्सक, रहस्यवादी, स्वावलंबी' }, padas: [P('Re', 'रे'), P('To', 'तो'), P('Ta', 'ता'), P('Pa', 'प')], boys: [N('Ritesh', 'रितेश'), N('Rishabh', 'ऋषभ'), N('Tanmay', 'तन्मय'), N('Pankaj', 'पंकज'), N('Tushar', 'तुषार'), N('Rahul', 'राहुल')], girls: [N('Radhika', 'राधिका'), N('Rhea', 'रिया'), N('Trisha', 'त्रिशा'), N('Pallavi', 'पल्लवी'), N('Tara', 'तारा'), N('Riddhi', 'रद्धि')] },
  { key: 'purva-bhadrapada', en: 'Purva Bhadrapada', hi: 'पूर्व भाद्रपद', sa: 'Pūrva Bhādrapadā', lord: 'Jupiter', lordHi: 'बृहस्पति', deity: 'Aja Ekapada', deityHi: 'अज एकपाद', symbol: '🌕', vibe: { en: 'Fiery, spiritual, devoted', hi: 'तेजस्वी, आध्यात्मिक, भक्त' }, padas: [P('Da', 'दा'), P('Di', 'दी'), P('Du', 'दू'), P('De', 'दे')], boys: [N('Darsh', 'दर्श'), N('Dhruv', 'ध्रुव'), N('Divya', 'दिव्य'), N('Deep', 'दीप'), N('Devansh', 'देवांश'), N('Damodar', 'दामोदर')], girls: [N('Damini', 'दामिनी'), N('Divya', 'दिव्या'), N('Dulari', 'दुलारी'), N('Deepa', 'दीपा'), N('Daksha', 'दक्ष'), N('Deveshi', 'देवेशी')] },
  { key: 'uttara-bhadrapada', en: 'Uttara Bhadrapada', hi: 'उत्तर भाद्रपद', sa: 'Uttara Bhādrapadā', lord: 'Saturn', lordHi: 'शनि', deity: 'Rsabha', deityHi: 'ऋषभ', symbol: '🐉', vibe: { en: 'Serene, deep, wise endurance', hi: 'शांत, गंभीर, ज्ञानी-धैर्य' }, padas: [P('So', 'सो'), P('Sa', 'सा'), P('Si', 'सी'), P('Su', 'सु')], boys: [N('Sohan', 'सोहन'), N('Sagar', 'सागर'), N('Siddharth', 'सिद्धार्थ'), N('Sushant', 'सुशांत'), N('Sameer', 'समीर'), N('Satyam', 'सत्यम')], girls: [N('Sona', 'सोना'), N('Sapna', 'सपना'), N('Simran', 'सिमरन'), N('Suhani', 'सुहानी'), N('Sanjana', 'संजना'), N('Shruti', 'श्रुति')] },
  { key: 'revati', en: 'Revati', hi: 'रेवती', sa: 'Revatī', lord: 'Mercury', lordHi: 'बुध', deity: 'Pushan', deityHi: 'पूषा', symbol: '🐟', vibe: { en: 'Nourishing, traveler, gentle', hi: 'पोषक, यात्री, कोमल' }, padas: [P('Te', 'टे'), P('Ro', 'रो'), P('Ta', 'ता'), P('Pi', 'पि')], boys: [N('Rohit', 'रोहित'), N('Rakesh', 'राकेश'), N('Tanmay', 'तन्मय'), N('Tejas', 'तेजस'), N('Rehan', 'रेहान'), N('Rudra', 'रुद्र')], girls: [N('Roshni', 'रोशनी'), N('Revathi', 'रेवती'), N('Riddhi', 'रद्धि'), N('Tanvi', 'तनुवी'), N('Tejal', 'तेजल'), N('Rhea', 'रिया')] },
];

export interface NameSuggestion {
  nakshatra: Nakshatra;
  pada: number; // 0..3
  syllable: Pada;
  moonLongitude: number;
  boys: NameItem[];
  girls: NameItem[];
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z]/g, '');
}

/** Approximate mean-Moon sidereal Nakshatra + Pada from birth date & time. */
export function computeNakshatra(dobISO: string, timeStr: string): { nakshatra: Nakshatra; pada: number; moonLongitude: number } {
  const [y, m, d] = dobISO.split('-').map(Number);
  let hh = 12, min = 0;
  if (timeStr && /^\d{1,2}:\d{2}/.test(timeStr)) {
    const parts = timeStr.split(':');
    hh = Number(parts[0]) || 12;
    min = Number(parts[1]) || 0;
  }
  const utc = Date.UTC(y, (m || 1) - 1, d || 1, hh, min);
  const j2000 = Date.UTC(2000, 0, 1, 12, 0);
  const days = (utc - j2000) / 86400000;
  const meanTropical = 218.3164477 + 13.176396 * days; // degrees
  const ayanamsa = 23.95 + 0.0139 * (days / 365.25); // Lahiri-approx
  const sidereal = ((meanTropical - ayanamsa) % 360 + 360) % 360;
  const span = 360 / 27;
  const nakIdx = Math.floor(sidereal / span) % 27;
  const pada = Math.floor((sidereal % span) / (span / 4)) % 4;
  return { nakshatra: NAKSHATRA[nakIdx], pada, moonLongitude: sidereal };
}

export function suggestNames(dobISO: string, timeStr: string): NameSuggestion {
  const { nakshatra, pada, moonLongitude } = computeNakshatra(dobISO, timeStr);
  const syl = nakshatra.padas[pada];
  const prefix = normalize(syl.sa).slice(0, 2);
  const rank = (list: NameItem[]) =>
    [...list].sort((a, b) => {
      const am = normalize(a.en).startsWith(prefix) ? 0 : 1;
      const bm = normalize(b.en).startsWith(prefix) ? 0 : 1;
      return am - bm;
    });
  return { nakshatra, pada, syllable: syl, moonLongitude, boys: rank(nakshatra.boys), girls: rank(nakshatra.girls) };
}

/** Approximate Surya-rashi (Sun sign) — no birth time needed, used as a fallback vibe. */
export function getNakshatraByKey(key: string): Nakshatra {
  return NAKSHATRA.find(n => n.key === key) || NAKSHATRA[0];
}
