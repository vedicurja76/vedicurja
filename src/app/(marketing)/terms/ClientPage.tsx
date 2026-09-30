'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import { useBi } from '@/lib/i18n/Bilingual';

export default function TermsPage() {
  const bi = useBi();
  return (
    <>
        <main style={{ position: "relative" }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl text-nidra-indigo mb-8">{bi('Terms & Conditions', 'नियम एवं शर्तें')}</h1>
          <div className="prose prose-lg prose-stone">
            <p>{bi('Effective Date:', 'प्रभावी तिथि:')} {new Date().toLocaleDateString()}</p>
            <h2>{bi('1. Acceptance of Terms', '1. नियमों की स्वीकृति')}</h2>
            <p>{bi('By accessing AstroVastu Expert, you agree to these terms. If you disagree, please discontinue use.', 'AstroVastu Expert का उपयोग करके आप इन नियमों से सहमत होते हैं। यदि आप सहमत नहीं हैं, कृपया उपयोग बंद करें।')}</p>
            <h2>{bi('2. Services Provided', '2. प्रदान की जा रही सेवाएं')}</h2>
            <p>{bi('We offer virtual Vastu consultations, educational courses, and AI‑powered tools. All guidance is based on traditional Vedic principles and should not replace professional legal, medical, or financial advice.', 'हम वर्चुअल वास्तु परामर्श, शैक्षिक कोर्स और AI-संचालित उपलब्ध कराते हैं। सभी मार्गदर्शन पारंपरिक वैदिक सिद्धांतों पर आधारित है और यह पेशेवर कानूनी, चिकित्सीय या वित्तीय सलाह का विकल्प नहीं है।')}</p>
            <h2>{bi('3. Payments and Refunds', '3. भुगतान और रिफंड')}</h2>
            <p>{bi('Payments are processed via simulation for demonstration purposes. For paid services, refunds are handled on a case‑by‑case basis within 7 days of purchase.', 'भुगतान प्रदर्शन उद्देश्य के लिए सिमुलेशन के माध्यम से प्रोसेस होते हैं। सशुल्क सेवाओं के लिए रिफंड खरीद के 7 दिनों के भीतर मामला-दर-मामला आधार पर संभाले जाते हैं।')}</p>
            <h2>{bi('4. User Conduct', '4. उपयोगकर्ता व्यवहार')}</h2>
            <p>{bi('You agree to use our services respectfully and not to misuse, reverse‑engineer, or exploit any part of the platform.', 'आप हमारी सेवाओं का सम्मानपूर्वक उपयोग करने, और प्लेटफॉर्म के किसी भाग का दुरुपयोग, रिवर्स-इंजीनियरिंग या शोषण न करने के लिए सहमत हैं।')}</p>
            <h2>{bi('5. Intellectual Property', '5. बौद्धिक संपदा')}</h2>
            <p>{bi('All content, including course materials and Vastu diagrams, is owned by AstroVastu Expert and protected by copyright laws.', 'कोर्स सामग्री और वास्तु आकृतियों सहित सभी कंटेंट AstroVastu Expert की संपत्ति है और कॉपीराइट कानूनों द्वारा सुरक्षित है।')}</p>
            <h2>{bi('6. Limitation of Liability', '6. दायित्व की सीमा')}</h2>
            <p>{bi('AstroVastu Expert is not liable for any indirect damages arising from the use of our services.', 'हमारी सेवाओं के उपयोग से उत्पन्न किसी भी अप्रत्यक्ष क्षति के लिए AstroVastu Expert उत्तरदायी नहीं है।')}</p>
            <h2>{bi('7. Changes to Terms', '7. नियमों में परिवर्तन')}</h2>
            <p>{bi('We may update these terms. Continued use constitutes acceptance.', 'हम इन नियमों को अपडेट कर सकते हैं। उपयोग जारी रखना स्वीकृति मानी जाएगी।')}</p>
          </div>
        </main>
      
    </>
  );
}
