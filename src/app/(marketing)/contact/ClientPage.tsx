'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';
import { openWhatsApp } from '@/lib/whatsapp';
import { useBi } from '@/lib/i18n/Bilingual';

export default function ContactPage() {
  const bi = useBi();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) { setError(bi('Please enter your name.', 'कृपया अपना नाम दर्ज करें।')); return; }
    if (!formData.phone.trim()) { setError(bi('Please enter your phone number.', 'कृपया अपना फ़ोन नंबर दर्ज करें।')); return; }
    if (!formData.message.trim()) { setError(bi('Please enter your message.', 'कृपया अपना संदेश दर्ज करें।')); return; }

    const message = `*📬 New Contact Message*\n──────────────────────────────\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email || 'Not provided'}\n💬 *Message:* ${formData.message}\n──────────────────────────────\n_Sent via AstroVastu Expert contact form_`;

    openWhatsApp(message);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
        <main style={{ position: "relative" }} className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-vastu-parchment via-[var(--color-bg-elevated)] to-vastu-stone overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"><Mandala3D /></div>
          <FloatingParticles />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6">
            <div className="bg-[var(--color-bg-glass)] backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30">
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">{bi('Contact Acharya', 'आचार्य से संपर्क करें')}</h1>
                <p className="text-nidra-indigo/60 text-sm sm:text-base mt-2">{bi("Send us a message via WhatsApp – we'll respond within 12 hours.", 'WhatsApp पर संदेश भेजें – हम 12 घंटे के भीतर उत्तर देंगे।')}</p>
              </div>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="text-6xl mb-4">🙏</div>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-2">{bi('Thank You!', 'धन्यवाद!')}</h2>
                  <p className="text-nidra-indigo/70">{bi('WhatsApp should have opened. Please send the message.', 'WhatsApp खुलना चाहिए था। कृपया संदेश भेजें।')}</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 luxury-button">{bi('Send Another Message', 'एक और संदेश भेजें')}</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">{bi('Full Name *', 'पूरा नाम *')}</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-5 py-4 bg-[var(--color-bg-glass)] backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl" placeholder={bi('Your full name', 'आपका पूरा नाम')} /></div>
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">{bi('Phone Number *', 'फ़ोन नंबर *')}</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 bg-[var(--color-bg-glass)] backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl" placeholder="+91 XXXXX XXXXX" /></div>
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">{bi('Email (Optional)', 'ईमेल (वैकल्पिक)')}</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 bg-[var(--color-bg-glass)] backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl" placeholder="you@example.com" /></div>
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">{bi('Message *', 'संदेश *')}</label><textarea name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-5 py-4 bg-[var(--color-bg-glass)] backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl resize-none" placeholder={bi('Your message...', 'आपका संदेश...')} /></div>
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <button type="submit" className="w-full luxury-button py-4 text-lg">{bi('Send via WhatsApp', 'WhatsApp पर भेजें')}</button>
                </form>
              )}
            </div>
          </motion.div>
        </main>
      
    </>
  );
}
