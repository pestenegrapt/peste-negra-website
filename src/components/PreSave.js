export default function PreSave() {
  return (
    <section id="presave" data-testid="presave-section" className="border-b border-white relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_dae0d0fa-e7a0-443b-90b0-a4b47621439d/artifacts/ni949e1x_photo%20promo%20single%20horizontal.jpg')`,
        }}
      />

      <div className="relative z-10 py-20 sm:py-32 px-8 sm:px-12 text-center">
        <p className="font-mono text-xs tracking-[0.4em] uppercase text-[#A3A3A3] mb-6">
          NEW ALBUM COMING SOON
        </p>

        <h2 className="font-heading text-6xl sm:text-7xl lg:text-9xl tracking-tighter uppercase leading-none mb-8">
          FINITUDE
        </h2>

        <p className="font-mono text-sm text-[#A3A3A3] max-w-lg mx-auto mb-12 leading-relaxed">
          THE NEXT CHAPTER OF PESTE NEGRA. THE PLAGUE EVOLVES.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://open.spotify.com/artist/6uNvGoFVsOcgDwhUEJ29Kr"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="presave-spotify-btn"
            className="font-heading text-xl uppercase bg-white text-black px-10 py-4 border-2 border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-100 inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            FOLLOW ON SPOTIFY
          </a>
          <a
            href="https://pestenegraband.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="presave-bandcamp-btn"
            className="font-heading text-xl uppercase bg-black text-white px-10 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors duration-100 inline-flex items-center gap-3"
          >
            FOLLOW ON BANDCAMP
          </a>
        </div>
      </div>
    </section>
  );
}
