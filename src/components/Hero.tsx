
import { Smile } from "lucide-react";

// Simple: massive headline, accent circle, no overlays, portrait
const Hero = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center max-w-6xl mx-auto">
      {/* Big headline */}
      <div className="mt-8 mb-10 relative w-full">
        <h1 className="font-head text-[min(13vw,6.5rem)] font-extrabold leading-none tracking-tight text-black dark:text-white select-none">
          Creative is{" "}
          <span className="relative text-pink-400">
            joy
            <span className="absolute top-[-24px] right-[-60px]">
              <svg width="60" height="60">
                <circle cx="30" cy="30" r="26" stroke="#fc9edf" strokeWidth="5" fill="none"/>
                <path d="M29,43 Q40,43 42,30 M18,28 Q16,40 29,43" stroke="#fc9edf" strokeWidth="4" fill="none"/>
                <circle cx="22" cy="27" r="3" fill="#fc9edf"/>
                <circle cx="38" cy="27" r="3" fill="#fc9edf"/>
              </svg>
            </span>
          </span>
        </h1>
      </div>
      {/* Portrait and intro right */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-8">
        {/* About */}
        <div className="flex-1 flex flex-col items-start max-w-2xl mt-6 md:mt-0">
          <span className="font-head text-3xl mb-2 font-bold tracking-tight">Hey!</span>
          <span className="block mb-3 text-base font-timesroman text-black dark:text-white opacity-80">
            I'm <strong>Fan</strong>, a Full-Stack development engineer passionate about crafting seamless digital experiences that bridge design and technology. I thrive on building robust, user-centric web and app interfaces, blending technical expertise with creative problem-solving to deliver impactful solutions.
            Currently pursuing a Master’s in Computational Science at <span className="italic font-bold">Laurentian University</span>, based in <span className="italic font-bold">Sudbury, ON</span>.
          </span>
          {/* Portrait */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
