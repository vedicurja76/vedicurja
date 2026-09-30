'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import { useBi } from '@/lib/i18n/Bilingual';

export default function PrivacyPage() {
  const bi = useBi();
  return (
    <>
        <main style={{ position: "relative" }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl text-nidra-indigo mb-8">{bi('Privacy Policy', 'गोपनीयता नीति')}</h1>
          <div className="prose prose-lg prose-stone">
            <p>{bi('Last updated:', 'अंतिम अद्यतन:')} {new Date().toLocaleDateString()}</p>
            <h2>{bi('1. Information We Collect', '1. हम जो जानकारी एकत्र करते हैं')}</h2>
            <p>{bi('AstroVastu Expert collects only essential information: your name, email, and consultation details. We do not sell or share your data with third parties.', 'एस्ट्रोवास्तु एक्सपर्ट केवल आवश्यक जानकारी एकत्र करता है: आपका नाम, ईमेल और परामर्श विवरण। हम आपका डेटा तीसरे पक्ष को नहीं बेचते या साझा नहीं करते।')}</p>
            <h2>{bi('2. How We Use Your Information', '2. हम आपकी जानकारी का उपयोग कैसे करते हैं')}</h2>
            <p>{bi('Your data is used solely to provide Vastu consultations, course access, and to improve our services. Payment information is processed securely via simulated flows (no real data stored).', 'आपका डेटा केवल वास्तु परामर्श, कोर्स एक्सेस और हमारी सेवाओं को बेहतर बनाने के लिए उपयोग किया जाता है। भुगतान जानकारी सुरक्षित सिमुलेटेड फ्लो के माध्यम से संसाधित होती है (कोई वास्तविक डेटा संग्रहीत नहीं)।')}</p>
            <h2>{bi('3. Data Security', '3. डेटा सुरक्षा')}</h2>
            <p>{bi('All data is stored in Supabase with Row Level Security. Only you and authorized admins can access your information.', 'सारा डेटा Supabase में Row Level Security के साथ संग्रहीत होता है। केवल आप और अधिकृत एडमिन ही आपकी जानकारी तक पहुंच सकते हैं।')}</p>
            <h2>{bi('4. Your Rights', '4. आपके अधिकार')}</h2>
            <p>{bi('You may request deletion of your account and data at any time through the support section in your dashboard.', 'आप अपने डैशबोर्ड में सहायता अनुभाग के माध्यम से कभी भी अपने खाते और डेटा के विलोपन का अनुरोध कर सकते हैं।')}</p>
            <h2>{bi('5. Cookies', '5. कुकीज़')}</h2>
            <p>{bi('We use essential cookies for authentication and session management. No tracking cookies are employed.', 'हम प्रमाणीकरण और सत्र प्रबंधन के लिए आवश्यक कुकीज़ का उपयोग करते हैं। कोई ट्रैकिंग कुकीज़ नहीं उपयोग की जातीं।')}</p>
            <h2>{bi('6. Contact', '6. संपर्क')}</h2>
            <p>{bi('For privacy concerns, contact acharya@vedivastuurja.com.', 'गोपनीयता संबंधी चिंताओं के लिए acharya@vedivastuurja.com पर संपर्क करें।')}</p>
          </div>
        </main>
      
    </>
  );
}
