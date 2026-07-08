import { Youtube, Play, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const BlogSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedVideo && modalRef.current) {
      setTimeout(() => {
        modalRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [selectedVideo]);

  const videos = [
    {
      label: "Témoignage 01",
      author: "Bagoudjare Trading",
      videoId: "SUVaRYY34h8",
      thumbnail: `https://img.youtube.com/vi/SUVaRYY34h8/hqdefault.jpg`,
    },
    {
      label: "Témoignage 02",
      author: "Bagoudjare Trading",
      videoId: "6TglLCU7rdc",
      thumbnail: `https://img.youtube.com/vi/6TglLCU7rdc/hqdefault.jpg`,
    },
    {
      label: "Témoignage 03",
      author: "Bagoudjare Trading",
      videoId: "HpUGxXRs0ko",
      thumbnail: `https://img.youtube.com/vi/HpUGxXRs0ko/hqdefault.jpg`,
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Vidéos YouTube
          </span>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Retrouvez mes analyses, tutoriels et conseils trading sur ma chaîne YouTube
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.label}
              onClick={() => setSelectedVideo(video.videoId)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-pointer border border-slate-100"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur text-slate-900 text-sm font-semibold px-3 py-1.5 rounded-lg shadow">
                    {video.label}
                  </span>
                  <div className="text-white text-xs mt-1 pl-1 drop-shadow">{video.author}</div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-5 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.9.5-3.8.5-5.8s-.1-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                  </svg>
                  Regarder sur YouTube
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => window.open('https://www.youtube.com/@bt3.0trading', '_blank')}
            className="border border-red-600 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <Youtube className="h-5 w-5" />
            <span>Voir toutes les vidéos</span>
          </button>
        </div>

      </div>

      {selectedVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
