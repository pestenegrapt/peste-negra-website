const MARQUEE_TEXT = 'YOUTUBE / SPOTIFY / APPLE MUSIC / BANDCAMP / INSTAGRAM / FACEBOOK / ';

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white bg-black">
      {/* Marquee */}
      <div className="border-b border-white py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="font-heading text-5xl sm:text-6xl lg:text-8xl uppercase tracking-tight text-white/10">
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-12 px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <img
          src="https://customer-assets.emergentagent.com/job_dae0d0fa-e7a0-443b-90b0-a4b47621439d/artifacts/pdbgce42_23242.jpg"
          alt="Peste Negra"
          className="w-12 h-12"
        />
        <div className="flex items-center gap-6">
          {/* YouTube */}
          <a href="https://m.youtube.com/@pestenegraofficial" target="_blank" rel="noopener noreferrer" data-testid="footer-youtube" className="hover:opacity-60 transition-opacity duration-100">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          {/* Spotify */}
          <a href="https://open.spotify.com/artist/6uNvGoFVsOcgDwhUEJ29Kr" target="_blank" rel="noopener noreferrer" data-testid="footer-spotify" className="hover:opacity-60 transition-opacity duration-100">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
          </a>
          {/* Apple Music */}
          <a href="https://music.apple.com/pt/artist/peste-negra/1623673046" target="_blank" rel="noopener noreferrer" data-testid="footer-apple" className="hover:opacity-60 transition-opacity duration-100">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.862.358-1.31.083-.567.12-1.137.125-1.708V6.124zm-6.424 4.27c-.008 3.612-.008 7.222 0 10.833.005.444-.04.877-.188 1.296-.28.787-.81 1.303-1.6 1.542-.532.16-1.08.22-1.634.174a2.777 2.777 0 01-1.726-.746c-.54-.503-.76-1.13-.7-1.866.08-.968.615-1.615 1.476-2.005.486-.22 1-.35 1.518-.48.387-.097.774-.2 1.13-.38.378-.192.56-.488.58-.918.006-.14 0-.28 0-.42V9.052c0-.17-.03-.33-.156-.46-.126-.13-.29-.17-.46-.134-.34.07-.68.15-1.018.23l-5.46 1.25c-.02.003-.04.01-.06.018-.287.077-.413.236-.43.53-.005.07 0 .14 0 .21v8.237c.003.39-.015.783-.12 1.164-.315 1.14-1.15 1.7-2.183 1.81-.6.063-1.19.005-1.74-.29-.69-.37-1.074-.947-1.122-1.726-.054-.87.367-1.51 1.084-1.96.473-.296 1-.457 1.54-.58.42-.097.842-.188 1.244-.34.43-.164.66-.466.69-.932V7.085c0-.236.033-.47.108-.696.15-.45.465-.706.91-.81.46-.107.928-.187 1.393-.273L17.07 4.1c.14-.027.28-.06.42-.074.36-.034.617.154.68.513.016.093.023.19.023.285v5.57h.378z"/></svg>
          </a>
          {/* Bandcamp */}
          <a href="https://pestenegraband.bandcamp.com/" target="_blank" rel="noopener noreferrer" data-testid="footer-bandcamp" className="hover:opacity-60 transition-opacity duration-100">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/pestenegra.band/" target="_blank" rel="noopener noreferrer" data-testid="footer-instagram" className="hover:opacity-60 transition-opacity duration-100">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/pestenegrapt" target="_blank" rel="noopener noreferrer" data-testid="footer-facebook" className="hover:opacity-60 transition-opacity duration-100">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
