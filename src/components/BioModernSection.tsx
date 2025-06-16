
import React from "react";

// 仿照用户图片参考图完成
const BioModernSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start w-full h-[80vh] px-6 md:px-16 bg-[#fbfaf7]">
      {/* 左上 “Hey!” + 笑脸 */}
      <div className="flex flex-col justify-start items-start w-full lg:w-[31%] pt-8">
        <div className="relative">
          <h1
            className="text-[7vw] md:text-[6vw] font-head font-extrabold leading-none text-black mb-6"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Hey!
          </h1>
          <span className="absolute left-[94px] top-[10px] pointer-events-none select-none md:left-[140px]">
            <svg width="90" height="90">
              <circle cx="45" cy="45" r="40" stroke="#ffd88b" strokeWidth="6" fill="none"/>
              <path d="M36,59 Q45,68 54,59" stroke="#ffd88b" strokeWidth="5" fill="none"/>
              <circle cx="33" cy="40" r="5" fill="#ffd88b"/>
              <circle cx="57" cy="40" r="5" fill="#ffd88b"/>
            </svg>
          </span>
        </div>
        <div className="mt-8 font-head text-base md:text-lg font-bold text-black">
          Design<br/>
          <span className="font-normal">by <span className="italic font-extrabold">Mykhailo</span>, a designer based in London, currently part of the design team at <span className="italic font-bold">&copy;Gintera.</span></span>
        </div>
      </div>
      {/* 头像+右侧介绍 */}
      <div className="flex flex-col md:flex-row items-center w-full lg:w-[69%] justify-end pt-8 md:pt-0">
        {/* 中间头像 */}
        <div className="flex flex-col items-center justify-center w-full md:w-[41%]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=350&h=350&facepad=2"
              alt="Portrait"
              className="rounded-2xl object-cover w-[250px] h-[250px] md:w-[320px] md:h-[320px] border border-black/20 shadow"
              draggable={false}
            />
            {/* 右上角编号 */}
            <span className="absolute top-0 right-0 text-xs font-head font-semibold text-black/50" style={{right: "-40px"}}>(02)</span>
          </div>
        </div>
        {/* 右侧自我介绍文本 */}
        <div className="w-full md:w-[59%] flex flex-col mt-4 md:mt-0 md:pl-8 text-black">
          <div className="font-normal text-[16px] md:text-[17px] max-w-[400px] leading-relaxed font-timesroman mb-2">
            I am a UI/UX designer with over 6 years of experience. I have won multiple international awards and had the privilege of collaborating with major companies.
          </div>
          <div className="font-normal text-[16px] md:text-[17px] max-w-[400px] leading-relaxed font-timesroman">
            My work focuses on combining creativity and functionality to deliver exceptional user experiences while enhancing business performance. With a rich portfolio and a passion for innovation, I continue to contribute to impactful digital design solutions.
          </div>
        </div>
      </div>
    </div>
  );
};
export default BioModernSection;
