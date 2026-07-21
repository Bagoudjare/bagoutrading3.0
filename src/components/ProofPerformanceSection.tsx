import { Monitor, Smartphone, Video, AlertTriangle } from "lucide-react";
import pcProof1 from "@/assets/proof2.58.16.jpeg";
import pcProof2 from "@/assets/proof2.59.23.jpeg";
import pcProof3 from "@/assets/proof2.59.53.jpeg";
import androidProof1 from "@/assets/proof3.32.52.jpeg";
import androidProof2 from "@/assets/proof3.35.59.jpeg";
import androidProof3 from "@/assets/proof3.38.30.jpeg";
import androidVideo from "@/assets/proof-video.mp4";

type ProofItem =
  | { type: "image"; src: string; label: string; device: "pc" | "android" }
  | { type: "video"; src: string; label: string; device: "pc" | "android" };

const items: ProofItem[] = [
  { type: "image", device: "pc", label: "Backtest MT5 – Résultats", src: pcProof1 },
  { type: "image", device: "pc", label: "Statistiques détaillées MT5", src: pcProof2 },
  { type: "image", device: "pc", label: "Statistiques détaillées MT5", src: pcProof3 },
  { type: "image", device: "android", label: "Android – Trades en cours", src: androidProof1 },
  { type: "image", device: "android", label: "Android – Trades en cours", src: androidProof2 },
  { type: "image", device: "android", label: "Android – Trades en cours", src: androidProof3 },
  { type: "video", device: "android", label: "Android – Exécution live", src: androidVideo },
];

const DeviceBadge = ({ device }: { device: "pc" | "android" | "video" }) => {
  const map = {
    pc: { icon: Monitor, label: "PC" },
    android: { icon: Smartphone, label: "Android" },
    video: { icon: Video, label: "Vidéo" },
  } as const;
  const { icon: Icon, label } = map[device];
  return (
    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-full px-3 py-1 text-xs font-medium text-blue-200">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </div>
  );
};

const ProofCard = ({ item }: { item: ProofItem }) => {
  const isPc = item.device === "pc";
  // PC: format paysage large (16:10). Android: format portrait (9:16).
  const sizeClass = isPc
    ? "w-[520px] sm:w-[640px] h-[360px]"
    : "w-[240px] sm:w-[280px] h-[500px]";

  return (
    <div
      className={`relative shrink-0 mx-3 ${sizeClass} rounded-2xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/90 shadow-xl`}
    >
      <DeviceBadge device={item.type === "video" ? "video" : item.device} />
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover bg-slate-950"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-4">
        <p className="text-sm font-medium text-white">{item.label}</p>
      </div>
    </div>
  );
};

export const ProofPerformanceSection = () => {
  const loop = [...items, ...items];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Preuves de{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            performance
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] items-center">
          {loop.map((item, i) => (
            <ProofCard key={i} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProofPerformanceSection;
