const MERCH_ITEMS = [
  {
    title: 'PARASITA ALBUM',
    price: '€10',
    url: 'https://pestenegraband.bandcamp.com/album/parasita',
    image: 'https://customer-assets.emergentagent.com/job_band-negra-site/artifacts/v9oe2woz_capa%20parasita.jpg',
    soldOut: true,
    hasPreview: true,
  },
  {
    title: 'PESTE NEGRA EP',
    price: '€6',
    url: 'https://pestenegraband.bandcamp.com/album/peste-negra',
    image: 'https://ugc.production.linktr.ee/d59a057e-021d-4b75-9653-febc0a1e3c39_a2593637705-5.jpeg?io=true&size=thumbnail-grid-carousel-v1_1',
    soldOut: true,
    hasPreview: true,
  },
  {
    title: 'PESTE NEGRA PIN',
    price: '€1',
    url: 'https://pestenegraband.bandcamp.com/merch/peste-negra-pin-25mm',
    image: 'https://ugc.production.linktr.ee/c7c42ba4-9e08-42cd-a933-4541c317f1fe_0036190974-36.jpeg?io=true&size=thumbnail-grid-carousel-v1_1',
    soldOut: false,
    hasPreview: false,
  },
  {
    title: 'GOAT SKULL PIN',
    price: '€1',
    url: 'https://pestenegraband.bandcamp.com/merch/peste-negra-goat-skull-pin-25mm',
    image: 'https://ugc.production.linktr.ee/f30c826d-7034-4ae3-95e4-7ec68491d626_0036191025-36.jpeg?io=true&size=thumbnail-grid-carousel-v1_1',
    soldOut: false,
    hasPreview: false,
  },
  {
    title: 'PARASITA PIN',
    price: '€1.50',
    url: 'https://pestenegraband.bandcamp.com/merch/peste-negra-parasita-pin-32mm',
    image: 'https://ugc.production.linktr.ee/aa56c15f-8d01-4860-ab30-b7793e8f3109_0036191064-36.jpeg?io=true&size=square-fit',
    soldOut: false,
    hasPreview: false,
  },
];

export default function Merch() {
  return (
    <section id="merch" data-testid="merch-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          MERCH
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {MERCH_ITEMS.map((item, i) => (
            <a
              key={item.title}
              href={item.soldOut ? undefined : item.url}
              target={item.soldOut ? undefined : "_blank"}
              rel={item.soldOut ? undefined : "noopener noreferrer"}
              data-testid={`merch-item-${i}`}
              className={`group border-b border-r border-white last:border-r-0 bg-black transition-colors duration-100 relative ${item.soldOut ? 'cursor-not-allowed opacity-70' : 'hover:bg-[#0a0a0a]'}`}
            >
              {item.soldOut && (
                <div
                  data-testid={`merch-sold-out-${i}`}
                  className="absolute top-4 right-4 z-10 font-heading text-sm uppercase bg-[#8A0303] text-white px-3 py-1 tracking-wider"
                >
                  SOLD OUT
                </div>
              )}
              <div className="aspect-square overflow-hidden border-b border-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${item.soldOut ? 'grayscale' : 'grayscale group-hover:grayscale-0'}`}
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm sm:text-base uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#A3A3A3] mt-1">{item.soldOut ? <s>{item.price}</s> : item.price}</p>
                <span className={`inline-block mt-3 font-heading text-xs uppercase px-4 py-2 transition-colors duration-100 ${item.soldOut ? 'bg-[#333] text-[#666] cursor-not-allowed' : 'bg-white text-black group-hover:bg-[#8A0303] group-hover:text-white'}`}>
                  {item.soldOut ? 'SOLD OUT' : 'BUY'}
                </span>
                {item.hasPreview && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`merch-preview-${i}`}
                    className="inline-block mt-2 ml-2 font-mono text-[10px] uppercase tracking-wider border border-white/30 px-3 py-2 hover:border-[#1DA0C3] hover:text-[#1DA0C3] transition-colors duration-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    PREVIEW ON BANDCAMP
                  </a>
                )}
              </div>
            </a>
        ))}
      </div>
    </section>
  );
}
