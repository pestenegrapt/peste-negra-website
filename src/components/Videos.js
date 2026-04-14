const VIDEOS = [
  {
    title: 'VAI-TE FODER',
    videoId: 'VD892kRPKi8',
  },
  {
    title: 'OBSCURO',
    videoId: 'HgRjXmq8RY0',
  },
  {
    title: 'A ARTE DA MORTE',
    videoId: '-t1iP4jX4To',
  },
  {
    title: 'PESTE NEGRA',
    videoId: 'DZHJPGenbxI',
  },
  {
    title: 'ABISMO / DECRÉPITO',
    videoId: 'MsiKGqpKJDw',
  },
];

export default function Videos() {
  return (
    <section id="videos" data-testid="videos-section" className="border-b border-white">
      <div className="p-8 sm:p-12 border-b border-white">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
          VIDEOS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {VIDEOS.map((video, i) => (
          <div
            key={video.videoId}
            data-testid={`video-card-${i}`}
            className="border-b lg:border-r border-white last:border-r-0 p-6 sm:p-8"
          >
            <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-tight mb-4">
              {video.title}
            </h3>
            <div className="relative w-full aspect-video border-2 border-white">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
