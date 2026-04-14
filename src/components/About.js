export default function About() {
  return (
    <section id="about" data-testid="about-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          ABOUT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <div className="border-b md:border-b-0 md:border-r border-white overflow-hidden">
          <img
            src="https://customer-assets.emergentagent.com/job_band-negra-site/artifacts/ahcz92vb_28.jpg"
            alt="Peste Negra"
            data-testid="about-photo"
            className="w-full h-full object-cover min-h-[400px] grayscale"
          />
        </div>

        {/* Bio */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <p className="font-mono text-sm sm:text-base leading-relaxed tracking-tight text-[#A3A3A3] mb-6">
            Hailing from the sun-soaked landscapes of the south of Portugal, this deathgrind powerhouse injects a fiery blend of relentless aggression.
          </p>
          <p className="font-mono text-sm sm:text-base leading-relaxed tracking-tight text-[#A3A3A3] mb-6">
            With each note, they unleash a sonic onslaught that's nothing short of a kick to the senses. Yet, amidst the relentless assault, the band skillfully weaves dark and atmospheric elements into their composition.
          </p>
          <p className="font-heading text-2xl sm:text-3xl uppercase tracking-tight mt-4">
            Thus, we spread our plague, for WE ARE PESTE NEGRA!
          </p>
        </div>
      </div>
    </section>
  );
}
