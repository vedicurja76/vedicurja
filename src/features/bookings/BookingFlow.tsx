'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOKING_SERVICES, getServiceById, type PlanTier } from './data';
import { getPaymentProvider, formatAmount, type PaymentResult } from './payments';
import { getWhatsAppLink } from '@/lib/constants/config';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

const STEP_KEYS = ['bk.step1', 'bk.step2', 'bk.step3'];

const inputCls =
  'w-full px-5 py-3.5 rounded-2xl bg-[var(--color-bg-glass)] border-2 border-prakash-gold/25 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-prakash-gold focus:ring-2 focus:ring-prakash-gold/20 outline-none transition-all';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  pincode: string;
  preferredDate: string;
  message: string;
}

const emptyForm: FormState = {
  fullName: '', phone: '', email: '', city: '', address: '', pincode: '', preferredDate: '', message: '',
};

function makeUrn(): string {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `AVE-${ymd}-${rand}`;
}

export function BookingFlow({ initialService, initialPlan }: { initialService?: string; initialPlan?: string }) {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string>(() => {
    const bySlug = BOOKING_SERVICES.find(s => s.slug === initialService);
    return (bySlug || BOOKING_SERVICES[0]).id;
  });
  const [planId, setPlanId] = useState<string>(() => {
    const svc = BOOKING_SERVICES.find(s => s.slug === initialService) || BOOKING_SERVICES[0];
    const found = initialPlan && svc.plans.some(p => p.id === initialPlan) ? initialPlan : null;
    return found || (svc.plans.find(p => p.popular) || svc.plans[0]).id;
  });
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState('');
  const [paying, setPaying] = useState(false);
  const [result, setResult] = useState<PaymentResult | null>(null);
  const [urn, setUrn] = useState('');
  const [redirected, setRedirected] = useState(false);
  const redirectTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const service = useMemo(() => getServiceById(serviceId)!, [serviceId]);
  const plan = service.plans.find(p => p.id === planId) || service.plans[0];

  const provider = useMemo(() => getPaymentProvider(), []);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const validateStep2 = () => {
    if (!form.fullName.trim()) return t('bk.err.name');
    if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim())) return t('bk.err.phone');
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email.trim())) return t('bk.err.email');
    if (!form.city.trim()) return t('bk.err.city');
    if (!/^\d{6}$/.test(form.pincode.trim())) return t('bk.err.pincode');
    return '';
  };

  const goNext = () => {
    const err = validateStep2();
    if (err) return setError(err);
    setError('');
    setStep(2);
  };

  const startPayment = async () => {
    setPaying(true);
    setError('');
    const amount = plan.amount ?? 0;
    if (!amount) {
      const quoteMsg = language === 'hi'
        ? `${plan.name} प्लान की कीमत लेआउट ऑडिट के बाद बताई जाती है। WhatsApp पर जारी रखें — आचार्य जी कोटेशन साझा कर देंगे।`
        : `The ${plan.name} plan is quoted after the layout audit. Continue on WhatsApp and Acharya ji will share the quote.`;
      setResult({ status: 'pending', message: quoteMsg });
      setPaying(false);
      return;
    }
    const res = await provider.startPayment({
      service,
      plan,
      amount,
      customer: { name: form.fullName, phone: form.phone, email: form.email },
    });
    if (res.status === 'success') setUrn(makeUrn());
    setResult(res);
    setPaying(false);
  };

  const confirmAfterRazorpay = () => {
    setUrn(makeUrn());
    setResult({ status: 'success', txId: `RZP-${Date.now().toString(36).toUpperCase()}`, mode: 'razorpay' });
  };

  const whatsappSummary = () => {
    const lines = [
      `*🔔 New Booking — AstroVastu Expert*`,
      `━━━━━━━━━━━━━━━━━━`,
      `🆔 *Booking URN:* ${urn}`,
      `🕉️ *Service:* ${service.name}`,
      `📦 *Plan:* ${plan.name} (${plan.priceLabel})`,
      result?.status === 'success'
        ? result.mode === 'mock'
          ? `🧪 *Payment:* Test Mode — ${formatAmount(plan.amount ?? 0)} · Txn ${result.txId}`
          : `✅ *Payment:* ${formatAmount(plan.amount ?? 0)} — Paid · Txn ${result.txId}`
        : `💵 *Amount:* ${formatAmount(plan.amount ?? 0)}`,
      `━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${form.fullName}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `📧 *Email:* ${form.email}` : '',
      `🏙️ *City:* ${form.city}`,
      `📍 *Address:* ${form.address}`,
      `📮 *Pincode:* ${form.pincode}`,
      form.preferredDate ? `📅 *Preferred date:* ${form.preferredDate}` : '',
      form.message ? `💬 *Message:* ${form.message}` : '',
    ].filter(Boolean);
    return getWhatsAppLink(lines.join('\n'));
  };

  // Auto-redirect to WhatsApp shortly after a confirmed payment (button remains as fallback).
  useEffect(() => {
    if (result?.status === 'success' && !redirected) {
      setRedirected(true);
      redirectTimer.current = setTimeout(() => {
        window.open(whatsappSummary(), '_blank', 'noopener');
      }, 1200);
    }
    return () => {
      if (redirectTimer.current) clearTimeout(redirectTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, redirected]);

  const selectService = (id: string) => {
    setServiceId(id);
    const svc = getServiceById(id)!;
    setPlanId((svc.plans.find(p => p.popular) || svc.plans[0]).id);
  };

  const selectedPlan = (p: PlanTier) => p.id === plan.id;

  return (
    <div className="bg-[var(--color-bg-glass)] backdrop-blur-2xl rounded-[32px] shadow-[var(--shadow-card-hover)] border border-prakash-gold/30 p-5 sm:p-10">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
        {STEP_KEYS.map((key, i) => (
          <div key={key} className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => i < step && setStep(i)}
              className={`relative px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                i === step ? 'text-white' : i < step ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'
              }`}
            >
              {i === step && (
                <motion.span
                  layoutId="booking-step-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-sacred-saffron to-kumkuma-red shadow-lg"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{i + 1}. {t(key)}</span>
            </button>
            {i < STEP_KEYS.length - 1 && <span className="text-prakash-gold/40">→</span>}
          </div>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {/* STEP 1 — service + plan */}
        {step === 0 && (
          <motion.div key="s1" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-text-primary)] text-center mb-2">{t('bk.helpWith')}</h3>
            <p className="text-center text-[var(--color-text-muted)] mb-8">{t('bk.chooseHint')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
              {BOOKING_SERVICES.map(s => (
                <button
                  key={s.id}
                  onClick={() => selectService(s.id)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                    s.id === serviceId
                      ? 'border-prakash-gold bg-gradient-to-br from-prakash-gold/15 to-sacred-saffron/10 shadow-lg -translate-y-0.5'
                      : 'border-transparent bg-[var(--color-bg-glass)] hover:border-prakash-gold/40 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-sm font-bold text-[var(--color-text-primary)] leading-tight">{s.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">{s.hindi}</div>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {service.plans.map((p, i) => (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, type: 'spring', stiffness: 260, damping: 26 }}
                  onClick={() => setPlanId(p.id)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative text-left p-6 rounded-3xl border-2 transition-colors ${
                    selectedPlan(p)
                      ? 'border-prakash-gold bg-[var(--color-bg-elevated)] shadow-[var(--shadow-luxury-lg)]'
                      : 'border-prakash-gold/20 bg-[var(--color-bg-glass)]'
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      ✦ {t('bk.mostPopular')}
                    </span>
                  )}
                  <h4 className="font-serif text-xl text-[var(--color-text-primary)] font-bold">{p.name}</h4>
                  <div className="text-2xl font-extrabold text-sacred-saffron mt-1">{p.priceLabel}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mb-3">{p.duration}</div>
                  <ul className="space-y-1.5">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                        <span className="text-prakash-gold mt-0.5">✦</span>{f}
                      </li>
                    ))}
                  </ul>
                </motion.button>
              ))}
            </div>

            <div className="text-center mt-10">
              <button onClick={() => setStep(1)} className="luxury-button text-lg px-12">
                {t('bk.continue')} — {service.name} · {plan.name}
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2 — details */}
        {step === 1 && (
          <motion.div key="s2" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl">{service.icon}</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-text-primary)]">{service.name} — {plan.name}</h3>
              </div>
              <p className="text-center text-[var(--color-text-muted)] mb-8">{t('bk.detailsPrivate')}</p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.fullName')}</label>
                    <input value={form.fullName} onChange={update('fullName')} className={inputCls} placeholder={t('bk.ph.name')} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.phone')}</label>
                    <input value={form.phone} onChange={update('phone')} className={inputCls} placeholder="+91 XXXXX XXXXX" inputMode="tel" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.email')}</label>
                    <input value={form.email} onChange={update('email')} className={inputCls} placeholder="you@example.com" inputMode="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.city')}</label>
                    <input value={form.city} onChange={update('city')} className={inputCls} placeholder="Lucknow / Mumbai / Delhi…" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.pincode')}</label>
                    <input value={form.pincode} onChange={update('pincode')} maxLength={6} pattern="\d{6}" className={inputCls} placeholder="226030" inputMode="numeric" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.preferredDate')}</label>
                    <input type="date" value={form.preferredDate} onChange={update('preferredDate')} className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.address')}</label>
                  <textarea rows={2} value={form.address} onChange={update('address')} className={`${inputCls} resize-none`} placeholder={t('bk.ph.address')} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">{t('bk.concern')}</label>
                  <textarea rows={3} value={form.message} onChange={update('message')} className={`${inputCls} resize-none`} placeholder={t('bk.ph.concern')} />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}

              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(0)} className="flex-1 py-4 rounded-full border-2 border-prakash-gold/40 text-[var(--color-text-primary)] font-semibold hover:bg-prakash-gold/10 transition">
                  ← {t('bk.back')}
                </button>
                <button onClick={goNext} className="flex-[2] luxury-button">
                  {t('bk.reviewPay')} — {formatAmount(plan.amount ?? 0)}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 3 — payment */}
        {step === 2 && (
          <motion.div key="s3" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
            {!result || result.status === 'pending' ? (
              <div className="max-w-md mx-auto text-center">
                <div className="text-5xl mb-4">🧾</div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-text-primary)] mb-4">{t('bk.orderSummary')}</h3>
                <div className="bg-[var(--color-bg-elevated)] rounded-2xl p-6 border border-prakash-gold/25 text-left mb-6">
                  {[
                    [t('bk.service'), service.name],
                    [t('bk.plan'), `${plan.name} · ${plan.priceLabel}`],
                    [t('bk.duration'), plan.duration],
                    [t('bk.name'), form.fullName],
                    [t('bk.cityPlain'), form.city],
                    [t('bk.amount'), formatAmount(plan.amount ?? 0)],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-1.5 text-sm">
                      <span className="text-[var(--color-text-muted)]">{k}</span>
                      <span className="font-semibold text-[var(--color-text-primary)] text-right">{v}</span>
                    </div>
                  ))}
                  <div className="border-t border-prakash-gold/25 mt-3 pt-3 flex justify-between">
                    <span className="font-bold text-[var(--color-text-primary)]">{t('bk.total')}</span>
                    <span className="font-extrabold text-sacred-saffron text-xl">{formatAmount(plan.amount ?? 0)}</span>
                  </div>
                </div>

                {result?.status === 'pending' && (
                  <div className="mb-6">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">{result.message}</p>
                    <div className="flex gap-3 justify-center">
                      <button onClick={confirmAfterRazorpay} className="luxury-button">✓ {t('bk.iHavePaid')}</button>
                      <button onClick={() => setResult(null)} className="py-4 px-6 rounded-full border-2 border-prakash-gold/40 text-[var(--color-text-primary)] font-semibold hover:bg-prakash-gold/10 transition">
                        {t('bk.reopen')}
                      </button>
                    </div>
                  </div>
                )}

                {!result && (
                  <>
                    <button onClick={startPayment} disabled={paying} className="luxury-button w-full text-lg disabled:opacity-60">
                      {paying ? (
                        <span className="inline-flex items-center gap-3">
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          {t('bk.processing')}
                        </span>
                      ) : provider.testMode ? (
                        t('bk.payTest')
                      ) : (
                        t('bk.paySecure')
                      )}
                    </button>
                    <p className="text-xs text-[var(--color-text-muted)] mt-4">
                      {provider.testMode ? `🧪 ${t('bk.testNote')}` : `🔒 ${t('bk.secureNote')}`}
                    </p>
                  </>
                )}
              </div>
            ) : result.status === 'success' ? (
              <div className="max-w-md mx-auto text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-4xl mb-6 shadow-xl">
                  ✓
                </motion.div>
                <h3 className="font-serif text-3xl text-[var(--color-text-primary)] mb-2">{t('bk.confirmed')}</h3>
                <p className="text-[var(--color-text-secondary)] mb-2">
                  {service.name} · {plan.name} {result.mode === 'mock' && <span className="text-xs text-[var(--color-text-muted)]">({t('bk.testPayment')})</span>}
                </p>

                <div className="mx-auto my-6 max-w-sm rounded-2xl border border-prakash-gold/30 bg-[var(--color-bg-elevated)] p-5 text-left space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">🆔 {language === 'hi' ? 'बुकिंग URN' : 'Booking URN'}</span>
                    <span className="font-mono font-bold tracking-wider text-prakash-gold">{urn}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">💵 {language === 'hi' ? 'भुगतान राशि' : 'Amount Paid'}</span>
                    <span className="font-extrabold text-sacred-saffron">{formatAmount(plan.amount ?? 0)}</span>
                  </div>
                </div>

                <p className="text-[var(--color-text-muted)] text-sm mb-6">
                  {result.mode === 'mock'
                    ? (language === 'hi' ? `टेस्ट मोड Txn: ${result.txId}` : `Test-mode Txn: ${result.txId}`)
                    : t('bk.confirmedNote')}
                </p>
                <p className="text-xs text-[#128C7E] mb-4 animate-pulse">
                  {language === 'hi' ? 'WhatsApp पर URN और राशि के साथ भेजा जा रहा है…' : 'Redirecting to WhatsApp with your URN & amount…'}
                </p>
                <a href={whatsappSummary()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 1.67c4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.25-8.24 8.25-1.56 0-3.09-.44-4.42-1.27l-.32-.2-3.12.82.83-3.04-.21-.33a8.18 8.18 0 01-1.26-4.4c0-4.55 3.7-8.25 8.24-8.25zm-3.1 4.1c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.73 2.77 4.3 3.77 2.13.83 2.56.67 3.02.63.46-.04 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3-.25-.12-1.49-.73-1.72-.82-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48z"/></svg>
                  {t('cta.sendWhatsApp')}
                </a>
                <div className="mt-6">
                  <button onClick={() => { setResult(null); setUrn(''); setRedirected(false); setStep(0); setForm(emptyForm); }} className="text-sm text-[var(--color-text-muted)] underline hover:text-prakash-gold transition">
                    {t('bk.bookAnother')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto text-center">
                <div className="text-5xl mb-4">⚠️</div>
                <h3 className="font-serif text-3xl text-[var(--color-text-primary)] mb-2">{t('bk.payFailed')}</h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-8">{result.message}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={startPayment} disabled={paying} className="luxury-button">
                    {paying ? t('bk.processing') : t('bk.tryAgain')}
                  </button>
                  <button onClick={() => setResult(null)} className="py-4 px-6 rounded-full border-2 border-prakash-gold/40 text-[var(--color-text-primary)] font-semibold hover:bg-prakash-gold/10 transition">
                    {t('bk.backSummary')}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
