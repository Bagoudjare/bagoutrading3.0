import { useState } from "react";
import { Play, X, Star, CheckCircle2 } from "lucide-react";

const VIDEO_ID = "6TglLCU7rdc";

export const VideoPresentationSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 px-4 bg-transparent overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Découvrez la vidéo présentation de l'outil{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              BMAE
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            BMAE vous aide à développer cette compétence étape par étape. Découvrez comment notre outil analyse le marché en temps réel et vous guide vers des décisions de trading plus disciplinées.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 group cursor-pointer"
               onClick={() => setIsOpen(true)}>
            {/* Thumbnail */}
            <div className="relative aspect-video">
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                alt="Présentation de BMAE - Best Market Analyser Edge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />
                  <div className="relative bg-red-600 rounded-full p-6 md:p-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 md:h-14 md:w-14 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* YouTube badge */}
              <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur text-slate-300 text-sm px-3 py-2 rounded-lg flex items-center gap-2 border border-slate-800">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.9.5-3.8.5-5.8s-.1-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                </svg>
                Regarder sur YouTube
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-6 left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-800 dark:text-slate-200 text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-gray-200 dark:border-slate-800">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Analyse temps réel
            </div>

            <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-800 dark:text-slate-200 text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-gray-200 dark:border-slate-800">
              <CheckCircle2 className="h-4 w-4 text-blue-500" />
              Signaux précis
            </div>
          </div>
        </div>

        {/* Trustpilot rating */}
        {/* <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-green-500 text-green-500" />
            ))}
          </div>
          <div className="text-slate-700 font-medium">
            Noté <span className="font-bold text-slate-900">4.8 sur 5</span> par nos utilisateurs
          </div>
        </div> */}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                title="Présentation de BMAE"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
