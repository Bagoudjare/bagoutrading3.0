import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Play, X, GraduationCap, CheckCircle2, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface Lesson {
  number: number;
  title: string;
  description: string;
  duration: string;
  videoId: string;
}

const lessons: Lesson[] = [
  {
    number: 1,
    title: "Qu'est-ce que le Trading ?",
    description: "Introduction au marchés du Forex, les bases du trading.",
    duration: "1:23",
    videoId: "0isBMiFDKfk",
  },
  {
    number: 2,
    title: "Les Marchés Financiers",
    description: "Découvrez les principaux marchés : Forex, actions, crypto-monnaies, matières premières et indices.",
    duration: "12:00",
    videoId: "xubKsjihhnc",
  },
  {
    number: 3,
    title: "Comprendre les Graphiques",
    description: "Apprenez à lire les graphiques en chandeliers japonais, les bougies et les unités de temps.",
    duration: "15:00",
    videoId: "b0F13fSlOr0",
  },
  {
    number: 4,
    title: "Les Bases de l'Analyse Technique",
    description: "Supports, résistances, tendances : les concepts fondamentaux de l'analyse technique.",
    duration: "18:00",
    videoId: "zDnWlPpqyKg",
  },
  {
    number: 5,
    title: "Les Indicateurs Essentiels",
    description: "Moyennes mobiles, RSI, MACD : maîtrisez les indicateurs incontournables pour vos analyses.",
    duration: "20:00",
    videoId: "AVMBEhH-16o",
  },
  {
    number: 6,
    title: "La Gestion du Risque",
    description: "Stop loss, take profit, money management : protégez votre capital comme un professionnel.",
    duration: "16:00",
    videoId: "86vWm8LePRs",
  },
  {
    number: 7,
    title: "La Psychologie du Trader",
    description: "Maîtrisez vos émotions : peur, avidité, FOMO. Les clés mentales pour réussir en trading.",
    duration: "14:00",
    videoId: "TBTRV1otTo4",
  },
//   {
//     number: 8,
//     title: "Choisir son Broker",
//     description: "Critères de sélection, régulation, frais : comment choisir un broker fiable et adapté.",
//     duration: "13:00",
//     videoId: "dQw4w9WgXcQ",
//   },
];

const InitiationTrading = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("initiation-completed");
    if (stored) setCompleted(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (selectedVideo && modalRef.current) {
      setTimeout(() => {
        modalRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [selectedVideo]);

  const openLesson = (lesson: Lesson) => {
    setSelectedVideo(lesson.videoId);
    if (!completed.includes(lesson.number)) {
      const updated = [...completed, lesson.number];
      setCompleted(updated);
      localStorage.setItem("initiation-completed", JSON.stringify(updated));
    }
  };

  const progressPercent = Math.round((completed.length / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Initiation au Trading
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Un parcours progressif en 9 étapes pour comprendre les bases du trading et démarrer sereinement.
            </p>

            {/* Progress bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Votre progression</span>
                <span className="text-blue-400 font-semibold">{completed.length}/{lessons.length} leçons</span>
              </div>
              <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Lessons list */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-transparent" />

            <div className="space-y-4">
              {lessons.map((lesson) => {
                const isCompleted = completed.includes(lesson.number);
                return (
                  <div
                    key={lesson.number}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Step circle */}
                    <div
                      className={`absolute left-0 top-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        isCompleted
                          ? "bg-gradient-to-br from-green-500 to-emerald-600 border-green-400/50"
                          : "bg-gradient-to-br from-blue-500 to-purple-600 border-blue-400/50"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-6 md:h-7 w-6 md:w-7 text-white" />
                      ) : (
                        <span className="text-white font-bold text-lg md:text-xl">{lesson.number}</span>
                      )}
                    </div>

                    {/* Card */}
                    <button
                      onClick={() => openLesson(lesson)}
                      className="w-full text-left bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-600/30 hover:border-blue-400/50 hover:transform hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                              Leçon {lesson.number}
                            </span>
                            <span className="text-xs text-gray-400">• {lesson.duration}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {lesson.title}
                          </h3>
                          <p className="text-gray-300">{lesson.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="bg-red-600 group-hover:bg-red-700 rounded-full p-4 transition-colors">
                            <Play className="h-6 w-6 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* End marker */}
            <div className="relative pl-16 md:pl-20 mt-6">
              <div className="absolute left-0 top-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-600 border-4 border-yellow-400/50">
                <GraduationCap className="h-6 md:h-7 w-6 md:w-7 text-white" />
              </div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-xl p-6 border border-yellow-400/30">
                <h3 className="text-xl font-bold text-white mb-2">Félicitations !</h3>
                <p className="text-gray-300 mb-4">
                  Vous avez terminé l'initiation. Prêt à passer au niveau supérieur avec nos formations avancées ?
                </p>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      document.querySelector("#formations")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Découvrir nos formations
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Video Modal */}
      {selectedVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-auto bg-slate-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Leçon d'initiation"
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

export default InitiationTrading;
