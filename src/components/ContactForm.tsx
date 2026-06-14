import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/mojzydlk', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="kontakt" className="py-32 bg-navy-dark relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="section-reveal text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Masz dość skomplikowanego marketingu?</h2>
          <p className="text-text-muted text-xl max-w-2xl mx-auto">
            Zostaw nam swoje dane. Odezwiemy się i wytłumaczymy Ci w prostych słowach, jak możemy odciążyć Twój biznes. Po ludzku.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="section-reveal space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/70 uppercase tracking-widest pl-2">Imię i nazwisko</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Jan Kowalski"
                className="w-full bg-navy-light/50 border border-white/10 rounded-sm px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/70 uppercase tracking-widest pl-2">Telefon lub e-mail</label>
              <input
                type="text"
                name="contact"
                required
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                placeholder="Twoje dane kontaktowe"
                className="w-full bg-navy-light/50 border border-white/10 rounded-sm px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-white/70 uppercase tracking-widest pl-2">Wiadomość</label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Opisz krótko swój biznes i cele..."
              className="w-full bg-navy-light/50 border border-white/10 rounded-sm px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder:text-white/20"
            />
          </div>

          <button
            type="submit"
            disabled={status !== 'idle' && status !== 'error'}
            className="w-full btn-primary flex items-center justify-center gap-3 py-6 text-xl relative overflow-hidden disabled:opacity-70"
            aria-label={status === 'loading' ? "Trwa wysyłanie wiadomości" : status === 'success' ? "Wiadomość została wysłana pomyślnie" : status === 'error' ? "Wystąpił błąd przy wysyłaniu" : "Wyślij formularz kontaktowy"}
          >
            <AnimatePresence mode="wait">
              {(status === 'idle' || status === 'error') && (
                <motion.div
                  key={status}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  {status === 'error' ? (
                    <span className="text-red-400">Coś poszło nie tak. Spróbuj ponownie <span className="font-mono text-xs">(Błąd wejścia)</span></span>
                  ) : (
                    <>Wyślij wiadomość <Send size={20} /></>
                  )}
                </motion.div>
              )}
              {status === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  Wysyłanie... <Loader2 size={20} className="animate-spin" />
                </motion.div>
              )}
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="flex items-center gap-3 text-white"
                >
                  Wiadomość wysłana! <CheckCircle2 size={24} className="text-success" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      </div>
    </section>
  );
}
