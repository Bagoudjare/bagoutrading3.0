
import { Youtube, Play, Eye } from "lucide-react";

export const Videos = () => {
  const videos = [
    {
      title: "Guide Officiel du Système BT3.0 : La Solution Recommandée pour un Trading Rentable",
      description: "Guide d'utilisation du Système BT3.0 meilleure solution recommander pour être rentable en trading ",
      videoId: "hXLgJimCO-o", // YouTube video ID
      thumbnail: "https://i.ytimg.com/vi/hXLgJimCO-o/hqdefault.jpg",
      duration: "1:43:26",
      category: "Presentation"
    },
    {
      title: "Setup Rentable : Transformez 25 $ en 450 $ avec une Stratégie Facile",
      description: "Tu peux gagner 450$ sur ce setup avec un investissement de 25$ et moins, une stratégie simple",
      videoId: "fiBGZtyK200", // YouTube video ID
      thumbnail: "https://i.ytimg.com/vi/fiBGZtyK200/hqdefault.jpg",
      duration: "31:10",
      category: "Presentation"
    },
    {
      title: "+100% Par trade gagnant et + 400% par mois (meilleur stratégie de Trading Rentable) BT3.0",
      description: "Dans cette vidéo je te présente ma stratégie de Trading Rentable qui est semi-automatique et qui te permettra de gagner de l'argent en trading sur le Forex et les indices synthétiques.",
      videoId: "3UEKHASb8l0", // YouTube video ID
      thumbnail: "https://i.ytimg.com/vi/3UEKHASb8l0/hqdefault.jpg",
      duration: "17:38",
      category: "Presentation"
    },
    {
      title: "Strategie de trading des spikes crash et boom en M1",
      description: "Dans cette vidéo, je te dévoile une stratégie puissante et simple à appliquer pour trader efficacement les Spikes sur les indices Crash et Boom en time frame M1 (1 minute).",
      videoId: "6IqF4N3t2E0", // YouTube video ID
      thumbnail: "https://i.ytimg.com/vi/6IqF4N3t2E0/hqdefault.jpg",
      duration: "22:33",
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
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
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
            onClick={() => window.open('https://www.youtube.com/@bt3.0', '_blank')}
            className="border border-red-600 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <Youtube className="h-5 w-5" />
            <span>Voir toutes les vidéos</span>
          </button>
        </div>
      </div>
    </div>
  );
};
