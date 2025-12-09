
import { Youtube, Play, Eye, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to center the modal when video opens
  useEffect(() => {
    if (selectedVideo && modalRef.current) {
      setTimeout(() => {
        modalRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100); // Small delay to ensure modal is rendered
    }
  }, [selectedVideo]);

  const videos = [
    {
      title: "Conseils et Stratégie pour réussir en trading Forex et indices synthétiques, les erreurs a éviter ",
      description: "Découvrez les meilleurs conseils et stratégies pour réussir durablement en trading Forex et sur les indices synthétiques. Dans ce guide",
      videoId: "AUq_ai4Y2Nw", // YouTube video ID
      thumbnail: "https://i.ytimg.com/vi/AUq_ai4Y2Nw/hqdefault.jpg",
      duration: "6:24",
      category: "Presentation"
    },
    {
      title: "Faire des entrées a faibles risques en Scalping M1, en Day trading M15, et en Swing H4",
      description: "Cette approche vise à identifier des zones d’entrée à faible risque sur plusieurs horizons de temps — M1, M15, H4",
      videoId: "AcTqm8vRjWw", // YouTube video ID
      thumbnail: "https://i.ytimg.com/vi/AcTqm8vRjWw/hqdefault.jpg",
      duration: "5:33",
      category: "Presentation"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Formation": "from-green-500 to-emerald-600",
      "Crypto": "from-yellow-500 to-orange-600",
      "Presentation": "from-blue-500 to-purple-600",
      "Stratégie": "from-purple-500 to-pink-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);    
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vidéos YouTube
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Retrouvez mes analyses, tutoriels et conseils trading sur ma chaîne YouTube
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-600/30 hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer"
              onClick={() => openVideo(video.videoId)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 rounded-full p-4">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${getCategoryColor(video.category)} px-3 py-1 rounded-full text-white text-sm font-semibold`}>
                    {video.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {video.description}
                </p>

                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Youtube className="h-4 w-4" />
                  <span>Regarder sur YouTube</span>
                </button>
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

            {/* Video Modal */}
      {selectedVideo && (
        <div 
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
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
