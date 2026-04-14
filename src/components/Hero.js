export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="min-h-screen flex flex-col justify-end relative border-b border-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_dae0d0fa-e7a0-443b-90b0-a4b47621439d/artifacts/ni949e1x_photo%20promo%20single%20horizontal.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Noise */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <div className="relative z-10 p-8 pb-24 flex flex-col items-center justify-center gap-8 text-center">
        <p
          data-testid="hero-tagline"
          className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#A3A3A3] text-center"
        >
          Deathgrind from Portugal's southern inferno
        </p>

        <a
          href="https://youtu.be/VD892kRPKi8"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-cta"
          className="font-heading text-xl sm:text-2xl uppercase bg-white text-black px-8 py-4 border-2 border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-100 inline-block"
        >
          LISTEN TO OUR LATEST SINGLE "VAI-TE FODER"
        </a>
      </div>
    </section>
  );
}
