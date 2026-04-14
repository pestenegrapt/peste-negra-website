import { useState } from 'react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SOCIAL_LINKS = [
  { label: 'YOUTUBE', url: 'https://m.youtube.com/@pestenegraofficial' },
  { label: 'SPOTIFY', url: 'https://open.spotify.com/artist/6uNvGoFVsOcgDwhUEJ29Kr' },
  { label: 'APPLE MUSIC', url: 'https://music.apple.com/pt/artist/peste-negra/1623673046' },
  { label: 'BANDCAMP', url: 'https://pestenegraband.bandcamp.com/' },
  { label: 'INSTAGRAM', url: 'https://www.instagram.com/pestenegra.band/' },
  { label: 'FACEBOOK', url: 'https://www.facebook.com/pestenegrapt' },
];

export default function Contact() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setStatus('');
    try {
      await axios.post(`${API}/mailing-list`, { email: email.trim() });
      setEmail('');
      setStatus('SUBSCRIBED. THE PLAGUE SPREADS.');
    } catch (err) {
      if (err.response?.status === 400) {
        setStatus('ALREADY SUBSCRIBED.');
      } else {
        setStatus('ERROR. TRY AGAIN.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          CONTACT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Mailing List */}
        <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-white">
          <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-tight mb-4">
            JOIN THE PLAGUE
          </h3>
          <p className="font-mono text-xs text-[#A3A3A3] uppercase tracking-widest mb-8">
            SUBSCRIBE TO GET NEWS, RELEASES & SHOW ANNOUNCEMENTS
          </p>

          <form onSubmit={handleSubscribe} data-testid="mailing-list-form" className="space-y-6">
            <div>
              <label className="font-heading text-sm uppercase block mb-2">EMAIL</label>
              <input
                data-testid="mailing-list-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR@EMAIL.COM"
                required
                className="w-full bg-black text-white border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none px-0 py-4 focus:ring-0 focus:border-[#8A0303] outline-none font-mono text-sm placeholder:text-neutral-600 transition-colors"
              />
            </div>
            <button
              data-testid="mailing-list-submit-btn"
              type="submit"
              disabled={submitting}
              className="font-heading text-xl uppercase bg-white text-black px-8 py-4 border-2 border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-100 disabled:opacity-50"
            >
              {submitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
            {status && (
              <p
                data-testid="mailing-list-status"
                className={`font-mono text-xs uppercase tracking-widest ${
                  status.includes('ERROR') ? 'text-[#8A0303]' : 'text-white'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="p-8 sm:p-12">
          <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-tight mb-8">
            FOLLOW THE PLAGUE
          </h3>
          <div className="space-y-0">
            {SOCIAL_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`social-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                className="block font-heading text-2xl sm:text-3xl uppercase py-3 border-b border-white/20 hover:text-[#8A0303] hover:pl-4 transition-all duration-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
