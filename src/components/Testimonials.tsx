import { testimonials } from "../data";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  // Duplicate list to create an infinite, seamless circular loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-neutral-950/80 border-t border-slate-200 dark:border-neutral-900/60 transition-colors duration-300">
      {/* Background soft glow and grid mask */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.02),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
        <span className="px-3 py-1 text-xs font-mono tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/40 rounded-full">
          Retours d'Expérience
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight transition-colors duration-300">
          La satisfaction de nos clients
        </h2>
        <p className="text-slate-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Des traders particuliers, gérants indépendants et passionnés de finance partagent leur quotidien avec les algorithmes de BagougjareTrading 3.0.
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 flex select-none">
        {/* Soft fading overlays at edges to create high-end visual smoothness */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-15 pointer-events-none" />

        {/* Moving track */}
        <div className="flex w-max animate-marquee gap-8 pr-8 hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[300px] md:w-[380px] p-6 md:p-8 rounded-2xl bg-white dark:bg-[#090909] border border-slate-200 dark:border-neutral-800/80 hover:border-slate-300 dark:hover:border-neutral-700/80 flex-shrink-0 flex flex-col justify-between transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div>
                {/* Five-Star Rating */}
                <div className="flex gap-1 mb-4 text-blue-500 dark:text-blue-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 dark:text-neutral-300 text-xs md:text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Profile Block */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100 dark:border-neutral-900">
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2.5 shadow-lg shadow-blue-500/30">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                {/* <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 border border-slate-200 dark:border-neutral-850"
                /> */}
                <div className="text-left">
                  <h4 className="text-slate-800 dark:text-white font-bold font-display text-xs md:text-sm">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 dark:text-neutral-400 text-[10px] font-mono mt-0.5">
                    {item.role}, {/* <span className="text-slate-400 dark:text-neutral-500">{item.company}</span> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
