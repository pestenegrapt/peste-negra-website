import { useState, useEffect } from 'react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function TourDates() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API}/events`);
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section id="shows" data-testid="shows-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          LIVE SHOWS
        </h2>
      </div>

      <div className="p-8">
        {loading ? (
          <p className="font-mono text-xs text-[#A3A3A3] uppercase tracking-widest">
            Loading...
          </p>
        ) : events.length === 0 ? (
          <div className="border border-white p-8 text-center">
            <p className="font-heading text-2xl sm:text-3xl uppercase tracking-tight">
              NO UPCOMING SHOWS
            </p>
            <p className="font-mono text-xs text-[#A3A3A3] mt-4 uppercase tracking-widest">
              FOLLOW US ON SOCIAL MEDIA FOR ANNOUNCEMENTS
            </p>
          </div>
        ) : (
          <table data-testid="events-table" className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white">
                <th className="font-heading text-left text-sm uppercase p-4 border-r border-white">DATE</th>
                <th className="font-heading text-left text-sm uppercase p-4 border-r border-white">VENUE</th>
                <th className="font-heading text-left text-sm uppercase p-4 border-r border-white">CITY</th>
                <th className="font-heading text-left text-sm uppercase p-4 border-r border-white">COUNTRY</th>
                <th className="font-heading text-left text-sm uppercase p-4">TICKETS</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, i) => (
                <tr
                  key={event.id}
                  data-testid={`event-row-${i}`}
                  className="border-b border-white/20 hover:bg-white/5 transition-colors duration-100"
                >
                  <td className="font-mono text-sm p-4 border-r border-white/20">{event.date}</td>
                  <td className="font-mono text-sm p-4 border-r border-white/20">{event.venue}</td>
                  <td className="font-mono text-sm p-4 border-r border-white/20">{event.city}</td>
                  <td className="font-mono text-sm p-4 border-r border-white/20">{event.country}</td>
                  <td className="p-4">
                    {event.ticket_url ? (
                      <a
                        href={event.ticket_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-xs uppercase bg-white text-black px-4 py-2 hover:bg-[#8A0303] hover:text-white transition-colors duration-100"
                      >
                        GET TICKETS
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-[#A3A3A3] uppercase">TBA</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
