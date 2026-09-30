'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '@/lib/constants/config';
import { useBi } from '@/lib/i18n/Bilingual';

// Product data – 20 Vastu products
const products = [
  { id: 1, name: "Copper Vastu Pyramid", nameHi: "कॉपर वास्तु पिरामिड", category: "Pyramids", price: 2999, description: "3‑inch copper pyramid for energy amplification, Vastu dosha correction, and protection. Energised with mantras.", descriptionHi: "3-इंच ताम्र पिरामिड — ऊर्जा वर्धन, वास्तु दोष सुधार और संरक्षण हेतु, मंत्रों से अभिमंत्रित।", benefits: ["Amplifies positive energy", "Corrects Vastu defects", "Protects from negativity"], benefitsHi: ["सकारात्मक ऊर्जा का वर्धन", "वास्तु दोषों का निवारण", "नकारात्मकता से संरक्षण"], whatsapp: "Hi, I want to buy the Copper Vastu Pyramid (₹2,999). Please guide me.", image: "/images/products/product-1.jpg" },
  { id: 2, name: "Sri Yantra (Copper)", nameHi: "श्री यंत्र (कॉपर)", category: "Yantras", price: 1499, description: "Energised copper Sri Yantra – attracts wealth, prosperity, and spiritual growth. 3D embossed design.", descriptionHi: "अभिमंत्रित ताम्र श्री यंत्र — धन, समृद्धि और आध्यात्मिक विकास आकर्षित करता है। 3D उभरी डिज़ाइन।", benefits: ["Attracts wealth & abundance", "Spiritual growth", "Removes financial obstacles"], benefitsHi: ["धन व समृद्धि आकर्षित", "आध्यात्मिक विकास", "वित्तीय बाधाओं का निवारण"], whatsapp: "Hi, I want to buy the Sri Yantra (₹1,499). Please guide me.", image: "/images/products/product-2.jpg" },
  { id: 3, name: "Clear Quartz Crystal", nameHi: "क्लियर क्वार्ट्ज क्रिस्टल", category: "Crystals", price: 999, description: "Natural clear quartz point – amplifies energy, brings clarity, and enhances meditation.", descriptionHi: "प्राकृतिक क्लियर क्वार्ट्ज पॉइंट — ऊर्जा बढ़ाता है, स्पष्टता लाता है और ध्यान को सघन बनाता है।", benefits: ["Amplifies energy", "Mental clarity", "Balances chakras"], benefitsHi: ["ऊर्जा वर्धन", "मानसिक स्पष्टता", "चक्र संतुलन"], whatsapp: "Hi, I want to buy the Clear Quartz Crystal (₹999). Please guide me.", image: "/images/products/product-3.jpg" },
  { id: 4, name: "Kuber Yantra", nameHi: "कुबेर यंत्र", category: "Yantras", price: 1299, description: "Energised Kuber Yantra for financial stability and business growth. Place in North direction.", descriptionHi: "वित्तीय स्थिरता और व्यावसायिक वृद्धि हेतु अभिमंत्रित कुबेर यंत्र। उत्तर दिशा में स्थापित करें।", benefits: ["Attracts wealth", "Business growth", "Financial stability"], benefitsHi: ["धन आकर्षण", "व्यावसायिक वृद्धि", "वित्तीय स्थिरता"], whatsapp: "Hi, I want to buy the Kuber Yantra (₹1,299). Please guide me.", image: "/images/products/product-4.jpg" },
  { id: 5, name: "Rose Quartz Tree", nameHi: "रोज़ क्वार्ट्ज ट्री", category: "Crystals", price: 2499, description: "Rose quartz tree of life – harmonises relationships, attracts love, and brings peace.", descriptionHi: "रोज़ क्वार्ट्ज ट्री ऑफ लाइफ — रिश्तों में मधुरता, प्रेम आकर्षण और शांति लाता है।", benefits: ["Harmonises relationships", "Attracts love", "Emotional healing"], benefitsHi: ["रिश्तों में सामंजस्य", "प्रेम आकर्षण", "भावनात्मक उपचार"], whatsapp: "Hi, I want to buy the Rose Quartz Tree (₹2,499). Please guide me.", image: "/images/products/product-5.jpg" },
  { id: 6, name: "Brass Tortoise", nameHi: "ब्रास कछुआ", category: "Vastu Figurines", price: 899, description: "Brass tortoise for longevity, stability, and career growth. Place in North direction.", descriptionHi: "दीर्घायु, स्थिरता और करियर वृद्धि हेतु पीतल का कछुआ। उत्तर दिशा में रखें।", benefits: ["Longevity & health", "Career stability", "Protection"], benefitsHi: ["दीर्घायु व स्वास्थ्य", "करियर स्थिरता", "संरक्षण"], whatsapp: "Hi, I want to buy the Brass Tortoise (₹899). Please guide me.", image: "/images/products/product-6.jpg" },
  { id: 7, name: "Vastu Dosh Nivaran Yantra", nameHi: "वास्तु दोष निवारण यंत्र", category: "Yantras", price: 1999, description: "Powerful yantra to remove Vastu defects without demolition. Energised by AstroVastu Expert K.K. Nagaich.", descriptionHi: "शक्तिशाली यंत्र जो तोड़-फोड़ के बिना वास्तु दोष दूर करता है। एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा अभिमंत्रित।", benefits: ["Removes Vastu defects", "Balances five elements", "Harmonises space"], benefitsHi: ["वास्तु दोष निवारण", "पंचतत्व संतुलन", "स्थान का सामंजस्य"], whatsapp: "Hi, I want to buy the Vastu Dosh Nivaran Yantra (₹1,999). Please guide me.", image: "/images/products/product-7.jpg" },
  { id: 8, name: "Amethyst Crystal", nameHi: "एमेथिस्ट क्रिस्टल", category: "Crystals", price: 1199, description: "Natural amethyst geode – promotes peace, stress relief, and spiritual awareness.", descriptionHi: "प्राकृतिक एमेथिस्ट जियोड — शांति, तनाव मुक्ति और आध्यात्मिक जागरूकता प्रदान करता है।", benefits: ["Stress relief", "Peaceful sleep", "Spiritual awareness"], benefitsHi: ["तनाव मुक्ति", "सुखद नींद", "आध्यात्मिक जागरूकता"], whatsapp: "Hi, I want to buy the Amethyst Crystal (₹1,199). Please guide me.", image: "/images/products/product-8.jpg" },
  { id: 9, name: "Brass Frog", nameHi: "ब्रास मेंढक", category: "Vastu Figurines", price: 699, description: "Brass frog for prosperity, abundance, and financial flow. Place in North or East.", descriptionHi: "समृद्धि, प्रचुरता और धन प्रवाह हेतु पीतल का मेंढक। उत्तर या पूर्व दिशा में रखें।", benefits: ["Attracts prosperity", "Financial growth", "Removes obstacles"], benefitsHi: ["समृद्धि आकर्षण", "आर्थिक वृद्धि", "बाधाओं का निवारण"], whatsapp: "Hi, I want to buy the Brass Frog (₹699). Please guide me.", image: "/images/products/product-9.jpg" },
  { id: 10, name: "Gomati Chakra", nameHi: "गोमति चक्र", category: "Sacred Items", price: 499, description: "Set of 7 Gomati Chakras – natural sea fossils for good luck, protection, and prosperity.", descriptionHi: "7 गोमति चक्रों का सेट — प्राकृतिक समुद्री जीवाश्म, शुभता, संरक्षण और समृद्धि हेतु।", benefits: ["Good luck & fortune", "Protection", "Prosperity"], benefitsHi: ["शुभता व सौभाग्य", "संरक्षण", "समृद्धि"], whatsapp: "Hi, I want to buy the Gomati Chakra set (₹499). Please guide me.", image: "/images/products/product-10.jpg" },
  { id: 11, name: "Black Tourmaline", nameHi: "ब्लैक टूर्मलाइन", category: "Crystals", price: 1499, description: "Raw black tourmaline for EMF protection, grounding, and negativity absorption.", descriptionHi: "कच्चा ब्लैक टूर्मलाइन — EMF संरक्षण, ग्रॉउंडिंग और नकारात्मकता शोषण हेतु।", benefits: ["EMF protection", "Negativity absorption", "Grounding"], benefitsHi: ["EMF संरक्षण", "नकारात्मकता शोषण", "ग्रॉउंडिंग"], whatsapp: "Hi, I want to buy the Black Tourmaline (₹1,499). Please guide me.", image: "/images/products/product-11.jpg" },
  { id: 12, name: "Laughing Buddha", nameHi: "लाफिंग बुद्धा", category: "Vastu Figurines", price: 1299, description: "Golden Laughing Buddha with coins – symbol of happiness, wealth, and good fortune.", descriptionHi: "सिक्कों वाला सुनहरा लाफिंग बुद्धा — सुख, धन और सौभाग्य का प्रतीक।", benefits: ["Happiness & joy", "Attracts wealth", "Positive energy"], benefitsHi: ["आनंद व उत्साह", "धन आकर्षण", "सकारात्मक ऊर्जा"], whatsapp: "Hi, I want to buy the Laughing Buddha (₹1,299). Please guide me.", image: "/images/products/product-12.jpg" },
  { id: 13, name: "Navagraha Yantra", nameHi: "नवग्रह यंत्र", category: "Yantras", price: 2499, description: "Navagraha Yantra to balance all 9 planetary influences. Energised with Vedic mantras.", descriptionHi: "नवग्रह यंत्र — सभी 9 ग्रहों के प्रभावों का संतुलन हेतु। वैदिक मंत्रों से अभिमंत्रित।", benefits: ["Planetary balance", "Removes doshas", "Harmony"], benefitsHi: ["ग्रह संतुलन", "दोष निवारण", "सामंजस्य"], whatsapp: "Hi, I want to buy the Navagraha Yantra (₹2,499). Please guide me.", image: "/images/products/product-13.jpg" },
  { id: 14, name: "Citrine Crystal", nameHi: "सिट्रिन क्रिस्टल", category: "Crystals", price: 899, description: "Citrine point for business success, wealth attraction, and manifestation.", descriptionHi: "व्यावसायिक सफलता, धन आकर्षण और संकल्प-सिद्धि हेतु सिट्रिन पॉइंट।", benefits: ["Business success", "Wealth attraction", "Manifestation"], benefitsHi: ["व्यावसायिक सफलता", "धन आकर्षण", "संकल्प सिद्धि"], whatsapp: "Hi, I want to buy the Citrine Crystal (₹899). Please guide me.", image: "/images/products/product-14.jpg" },
  { id: 15, name: "7 Horses Painting", nameHi: "7 घोड़ों की पेंटिंग", category: "Vastu Art", price: 3499, description: "Running 7 horses canvas painting – symbolises success, speed, and career growth. Ready to hang.", descriptionHi: "दौड़ते 7 घोड़ों की कैनवास पेंटिंग — सफलता, गति और करियर वृद्धि का प्रतीक। टांगने के लिए तैयार।", benefits: ["Success & achievement", "Career growth", "Motivation"], benefitsHi: ["सफलता व उपलब्धि", "करियर वृद्धि", "प्रेरणा"], whatsapp: "Hi, I want to buy the 7 Horses Painting (₹3,499). Please guide me.", image: "/images/products/product-15.jpg" },
  { id: 16, name: "Parad Shivling", nameHi: "पारद शिवलिंग", category: "Sacred Items", price: 9999, description: "Siddh Parad Shivling (mercury) – most powerful Vastu remedy. Energised with Ashtasanskar.", descriptionHi: "सिद्ध पारद शिवलिंग — सबसे शक्तिशाली वास्तु उपचार। अष्टसंस्कार से अभिमंत्रित।", benefits: ["Ultimate dosha removal", "Spiritual upliftment", "Divine blessings"], benefitsHi: ["परम दोष निवारण", "आध्यात्मिक उत्थान", "दिव्य आशीर्वाद"], whatsapp: "Hi, I want to buy the Parad Shivling (Custom). Please guide me.", image: "/images/products/product-16.jpg" },
  { id: 17, name: "Pyramid Yantra Combo", nameHi: "पिरामिड यंत्र कॉम्बो", category: "Combos", price: 3999, description: "Set of copper pyramid + Sri Yantra + Kuber Yantra – complete Vastu correction kit.", descriptionHi: "कॉपर पिरामिड + श्री यंत्र + कुबेर यंत्र का सेट — संपूर्ण वास्तु सुधार किट।", benefits: ["Complete Vastu solution", "Wealth + protection", "Energised"], benefitsHi: ["संपूर्ण वास्तु समाधान", "धन + संरक्षण", "अभिमंत्रित"], whatsapp: "Hi, I want to buy the Pyramid Yantra Combo (₹3,999). Please guide me.", image: "/images/products/product-17.jpg" },
  { id: 18, name: "Rudraksha Mala (5 Mukhi)", nameHi: "रुद्राक्ष माला (5 मुखी)", category: "Sacred Items", price: 2499, description: "Authentic 5 Mukhi Rudraksha mala, energised, with silk thread and kailash silver bead.", descriptionHi: "प्रामाणिक 5 मुखी रुद्राक्ष माला, अभिमंत्रित, रेशम धागे और कैलाश सिल्वर बीड के साथ।", benefits: ["Stress relief", "Concentration", "Protection"], benefitsHi: ["तनाव मुक्ति", "एकाग्रता", "संरक्षण"], whatsapp: "Hi, I want to buy the Rudraksha Mala (₹2,499). Please guide me.", image: "/images/products/product-18.jpg" },
  { id: 19, name: "Swastik Pyramid", nameHi: "स्वस्तिक पिरामिड", category: "Pyramids", price: 1799, description: "Swastik-engraved copper pyramid for all‑round Vastu correction and positive energy.", descriptionHi: "स्वस्तिक-अंकित कॉपर पिरामिड — सर्वांगीण वास्तु सुधार और सकारात्मक ऊर्जा हेतु।", benefits: ["Vastu dosha removal", "Positive energy", "Protection"], benefitsHi: ["वास्तु दोष निवारण", "सकारात्मक ऊर्जा", "संरक्षण"], whatsapp: "Hi, I want to buy the Swastik Pyramid (₹1,799). Please guide me.", image: "/images/products/product-19.jpg" },
  { id: 20, name: "Vastu Salt Lamp", nameHi: "वास्तु सॉल्ट लैंप", category: "Vastu Remedies", price: 1499, description: "Himalayan salt lamp – purifies air, creates positive energy, removes negativity.", descriptionHi: "हिमालियन सॉल्ट लैंप — वायु शुद्धिकरण, सकारात्मक ऊर्जा और नकारात्मकता निवारण।", benefits: ["Air purification", "Positivity", "Stress reduction"], benefitsHi: ["वायु शुद्धिकरण", "सकारात्मकता", "तनाव कमी"], whatsapp: "Hi, I want to buy the Vastu Salt Lamp (₹1,499). Please guide me.", image: "/images/products/product-20.jpg" }
];

// Category display labels (English key kept for filtering logic)
const CATEGORY_HI: Record<string, string> = {
  All: "सभी",
  Pyramids: "पिरामिड",
  Yantras: "यंत्र",
  Crystals: "क्रिस्टल",
  "Vastu Figurines": "वास्तु मूर्तियाँ",
  "Sacred Items": "पवित्र वस्तुएँ",
  "Vastu Art": "वास्तु आर्ट",
  Combos: "कॉम्बो",
  "Vastu Remedies": "वास्तु उपचार",
};

export default function ProductCatalogue() {
  const bi = useBi();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);

  const handleBuyNow = (productName: string, price: number, whatsappMessage: string) => {
    window.open(getWhatsAppLink(whatsappMessage), '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-vastu-parchment to-[var(--color-bg-elevated)]">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nidra-indigo mb-4">
            {bi('AstroVastu Expert', 'एस्ट्रोवास्तु एक्सपर्ट')} <span className="text-prakash-gold">{bi('Product Catalogue', 'उत्पाद कैटलॉग')}</span>
          </h1>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto">
            {bi('Authentic, energised Vastu products – each item personally blessed by AstroVastu Expert K.K. Nagaich.', 'प्रामाणिक, अभिमंत्रित वास्तु उत्पाद — हर वस्तु का व्यक्तिगत आशीर्वाद एस्ट्रोवास्तु एक्सपर्ट के. के. नागाइच द्वारा।')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white shadow-md"
                  : "bg-[var(--color-bg-glass)] border border-prakash-gold/30 text-nidra-indigo hover:bg-prakash-gold/10"
              }`}
            >
              {bi(cat, CATEGORY_HI[cat])}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, rotateY: 3 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="group bg-[var(--color-bg-elevated)] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-prakash-gold/20"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-bg-glass)] backdrop-blur-sm text-prakash-gold border border-prakash-gold/30 shadow-sm">{bi(product.category, CATEGORY_HI[product.category])}</span>
                </div>
                {product.id <= 3 && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white shadow-md">{bi('Best Seller', 'बेस्ट सेलर')}</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-2 line-clamp-1">{bi(product.name, product.nameHi)}</h3>
                <p className="text-sm text-nidra-indigo/60 mb-3 line-clamp-2">{bi(product.description, product.descriptionHi)}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.benefits.slice(0, 2).map((benefit, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-prakash-gold/10 text-prakash-gold">{bi(benefit, product.benefitsHi[i])}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-prakash-gold">₹{product.price.toLocaleString()}</span>
                    {product.price > 2000 && <span className="ml-2 text-xs text-nidra-indigo/40 line-through">₹{(product.price * 1.2).toFixed(0)}</span>}
                  </div>
                  <button onClick={() => handleBuyNow(product.name, product.price, product.whatsapp)} className="px-5 py-2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all">{bi('Buy Now', 'अभी खरीदें')}</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && <div className="text-center py-20"><p className="text-nidra-indigo/60">{bi('No products in this category.', 'इस श्रेणी में कोई उत्पाद नहीं है।')}</p></div>}
      </div>
    </div>
  );
}
