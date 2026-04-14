import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'MUSIC', href: '#music' },
  { label: 'LYRICS', href: '#lyrics' },
  { label: 'VIDEOS', href: '#videos' },
  { label: 'MERCH', href: '#merch' },
  { label: 'SHOWS', href: '#shows' },
  { label: 'GUESTBOOK', href: '#guestbook' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      data-testid="main-navigation"
      className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-white z-50"
    >
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">
        <a
          href="#hero"
          data-testid="nav-logo"
          className="hover:opacity-80 transition-opacity duration-100"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_dae0d0fa-e7a0-443b-90b0-a4b47621439d/artifacts/pdbgce42_23242.jpg"
            alt="Peste Negra"
            className="h-8 sm:h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="font-heading text-base uppercase hover:text-[#8A0303] transition-colors duration-100 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-white hover:text-[#8A0303] transition-colors duration-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t border-white bg-black"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`mobile-link-${link.label.toLowerCase()}`}
              className="block font-heading text-2xl uppercase px-8 py-4 border-b border-white/20 hover:text-[#8A0303] hover:bg-white/5 transition-colors duration-100"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
