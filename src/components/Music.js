const DISCOGRAPHY = [
  {
    title: 'VAI-TE FODER',
    year: '2025',
    type: 'SINGLE',
    spotifyUrl: 'https://open.spotify.com/artist/6uNvGoFVsOcgDwhUEJ29Kr',
    appleMusicUrl: 'https://music.apple.com/pt/artist/peste-negra/1623673046',
    bandcampUrl: 'https://pestenegraband.bandcamp.com/',
    image: 'https://customer-assets.emergentagent.com/job_band-negra-site/artifacts/otvivijq_capa%20single%20vai-te%20foder.jpg',
  },
  {
    title: 'PARASITA',
    year: '2024',
    type: 'ALBUM — 8 TRACKS',
    spotifyUrl: 'https://open.spotify.com/artist/6uNvGoFVsOcgDwhUEJ29Kr',
    appleMusicUrl: 'https://music.apple.com/pt/artist/peste-negra/1623673046',
    bandcampUrl: 'https://pestenegraband.bandcamp.com/album/parasita',
    image: 'https://customer-assets.emergentagent.com/job_band-negra-site/artifacts/v9oe2woz_capa%20parasita.jpg',
  },
  {
    title: 'PESTE NEGRA',
    year: '2023',
    type: 'EP — 5 TRACKS',
    spotifyUrl: 'https://open.spotify.com/artist/6uNvGoFVsOcgDwhUEJ29Kr',
    appleMusicUrl: 'https://music.apple.com/pt/artist/peste-negra/1623673046',
    bandcampUrl: 'https://pestenegraband.bandcamp.com/album/peste-negra',
    image: 'https://customer-assets.emergentagent.com/job_band-negra-site/artifacts/yhx9pul6_peste%20negra%20ep%20art.jpg',
  },
  {
    title: 'PODRIDÃO',
    year: '2023',
    type: 'SINGLE',
    spotifyUrl: 'https://open.spotify.com/artist/6uNvGoFVsOcgDwhUEJ29Kr',
    appleMusicUrl: 'https://music.apple.com/pt/artist/peste-negra/1623673046',
    bandcampUrl: 'https://pestenegraband.bandcamp.com/',
    image: 'https://customer-assets.emergentagent.com/job_band-negra-site/artifacts/mg46zby4_podridao%20single%20copy.jpg',
  },
];

export default function Music() {
  return (
    <section id="music" data-testid="music-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          DISCOGRAPHY
        </h2>
      </div>

      {/* Spotify Embedded Player */}
      <div className="p-6 sm:p-8 border-b border-white">
        <div className="flex items-center gap-3 mb-4">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#1DB954">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span className="font-heading text-lg uppercase tracking-tight">STREAM ON SPOTIFY</span>
        </div>
        <div className="border-2 border-white" data-testid="spotify-embed">
          <iframe
            src="https://open.spotify.com/embed/artist/6uNvGoFVsOcgDwhUEJ29Kr?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {DISCOGRAPHY.map((album, i) => (
          <div
            key={album.title}
            data-testid={`album-card-${i}`}
            className={`group relative bg-black border-b sm:border-b-0 sm:border-r border-white last:border-r-0 overflow-hidden`}
          >
            {/* Album image / cover */}
            <div className="aspect-square relative overflow-hidden">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
                <a
                  href={album.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`album-spotify-${i}`}
                  className="font-heading text-base uppercase bg-white text-black px-6 py-3 hover:bg-[#8A0303] hover:text-white transition-colors duration-100"
                >
                  SPOTIFY
                </a>
                <a
                  href={album.bandcampUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`album-bandcamp-${i}`}
                  className="font-heading text-base uppercase border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-100"
                >
                  BANDCAMP
                </a>
              </div>
            </div>

            {/* Info + Listen-on badges */}
            <div className="p-6 border-t border-white">
              <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-tight">
                {album.title}
              </h3>
              <p className="font-mono text-xs tracking-widest uppercase text-[#A3A3A3] mt-2">
                {album.year} — {album.type}
              </p>
              {/* Listen-on badges */}
              <div className="flex gap-3 mt-4" data-testid={`album-badges-${i}`}>
                <a
                  href={album.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider border border-white/30 px-2.5 py-1.5 hover:border-[#1DB954] hover:text-[#1DB954] transition-colors duration-100"
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  SPOTIFY
                </a>
                <a
                  href={album.appleMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider border border-white/30 px-2.5 py-1.5 hover:border-[#fc3c44] hover:text-[#fc3c44] transition-colors duration-100"
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.862.358-1.31.083-.567.12-1.137.125-1.708V6.124zm-6.424 4.27c-.008 3.612-.008 7.222 0 10.833.005.444-.04.877-.188 1.296-.28.787-.81 1.303-1.6 1.542-.532.16-1.08.22-1.634.174a2.777 2.777 0 01-1.726-.746c-.54-.503-.76-1.13-.7-1.866.08-.968.615-1.615 1.476-2.005.486-.22 1-.35 1.518-.48.387-.097.774-.2 1.13-.38.378-.192.56-.488.58-.918.006-.14 0-.28 0-.42V9.052c0-.17-.03-.33-.156-.46-.126-.13-.29-.17-.46-.134-.34.07-.68.15-1.018.23l-5.46 1.25c-.02.003-.04.01-.06.018-.287.077-.413.236-.43.53-.005.07 0 .14 0 .21v8.237c.003.39-.015.783-.12 1.164-.315 1.14-1.15 1.7-2.183 1.81-.6.063-1.19.005-1.74-.29-.69-.37-1.074-.947-1.122-1.726-.054-.87.367-1.51 1.084-1.96.473-.296 1-.457 1.54-.58.42-.097.842-.188 1.244-.34.43-.164.66-.466.69-.932V7.085c0-.236.033-.47.108-.696.15-.45.465-.706.91-.81.46-.107.928-.187 1.393-.273L17.07 4.1c.14-.027.28-.06.42-.074.36-.034.617.154.68.513.016.093.023.19.023.285v5.57h.378z"/>
                  </svg>
                  APPLE
                </a>
                <a
                  href={album.bandcampUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider border border-white/30 px-2.5 py-1.5 hover:border-[#1DA0C3] hover:text-[#1DA0C3] transition-colors duration-100"
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/>
                  </svg>
                  BANDCAMP
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
