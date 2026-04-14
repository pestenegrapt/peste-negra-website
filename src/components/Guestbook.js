import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef(null);

  const fetchEntries = async () => {
    try {
      const res = await axios.get(`${API}/guestbook`);
      setEntries(res.data);
    } catch (err) {
      console.error('Failed to fetch guestbook:', err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('NAME AND MESSAGE REQUIRED');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await axios.post(`${API}/guestbook`, { name: name.trim(), message: message.trim() });
      setName('');
      setMessage('');
      await fetchEntries();
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    } catch (err) {
      setError('FAILED TO POST. TRY AGAIN.');
    } finally {
      setSubmitting(false);
    }
  };

  const formatTimestamp = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString('en-GB', {
      day: '2-digit', month: '2-digit', year: '2-digit',
      hour: '2-digit', minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <section id="guestbook" data-testid="guestbook-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          GUESTBOOK
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Terminal log */}
        <div className="border-b md:border-b-0 md:border-r border-white">
          <div className="p-4 border-b border-white/30">
            <span className="font-mono text-xs text-[#A3A3A3] uppercase tracking-widest">
              // MESSAGES [{entries.length}]
            </span>
          </div>
          <div
            ref={scrollRef}
            data-testid="guestbook-entries"
            className="h-[400px] overflow-y-auto terminal-scroll bg-[#050505] p-4"
          >
            {entries.length === 0 ? (
              <p className="font-mono text-xs text-[#A3A3A3]">
                {'>'} NO ENTRIES YET. BE THE FIRST.
              </p>
            ) : (
              entries.map((entry, i) => (
                <div
                  key={entry.id}
                  data-testid={`guestbook-entry-${i}`}
                  className="mb-4 font-mono text-sm"
                >
                  <span className="text-[#A3A3A3] text-xs">
                    [{formatTimestamp(entry.created_at)}]
                  </span>
                  <span className="text-[#8A0303] ml-2 font-bold uppercase">
                    {entry.name}
                  </span>
                  <p className="text-white/90 mt-1 ml-4 text-xs leading-relaxed">
                    {'>'} {entry.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Submit form */}
        <div className="p-8">
          <h3 className="font-heading text-2xl uppercase tracking-tight mb-8">
            LEAVE YOUR MARK
          </h3>
          <form onSubmit={handleSubmit} data-testid="guestbook-form" className="space-y-6">
            <div>
              <label className="font-heading text-sm uppercase block mb-2">NAME</label>
              <input
                data-testid="guestbook-name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="YOUR NAME"
                maxLength={50}
                className="w-full bg-black text-white border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none px-0 py-4 focus:ring-0 focus:border-[#8A0303] outline-none font-mono text-sm placeholder:text-neutral-600 transition-colors"
              />
            </div>
            <div>
              <label className="font-heading text-sm uppercase block mb-2">MESSAGE</label>
              <textarea
                data-testid="guestbook-message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="SPEAK..."
                rows={4}
                maxLength={500}
                className="w-full bg-black text-white border-b-2 border-white border-t-0 border-l-0 border-r-0 rounded-none px-0 py-4 focus:ring-0 focus:border-[#8A0303] outline-none font-mono text-sm placeholder:text-neutral-600 transition-colors resize-none"
              />
            </div>
            {error && (
              <p data-testid="guestbook-error" className="font-mono text-xs text-[#8A0303] uppercase">
                {error}
              </p>
            )}
            <button
              data-testid="guestbook-submit-btn"
              type="submit"
              disabled={submitting}
              className="font-heading text-xl uppercase bg-white text-black px-8 py-4 border-2 border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'POSTING...' : 'POST'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
