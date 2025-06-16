import { useNavigate } from "react-router-dom";

const NAV = [
  { name: "BIO", href: "/bio" },
  { name: "WORK", href: "/work" },
  { name: "CONTACT", href: "/contact" }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full bg-[#fbfaf7] flex flex-col font-head relative">
      {/* 顶部导航 */}
      <nav className="w-full flex items-center justify-between px-7 pt-7 pb-4 select-none">
        <div className="flex items-center gap-8 text-md">
          <button
            className="font-head text-black hover:opacity-60 transition text-base px-1"
            onClick={() => navigate(NAV[0].href)}
          >
            {NAV[0].name}
          </button>
          <button
            className="font-head text-black hover:opacity-60 transition text-base px-1"
            onClick={() => navigate(NAV[1].href)}
          >
            {NAV[1].name}
          </button>
        </div>
        <button
          className="font-head text-black hover:opacity-60 transition text-base px-1"
          onClick={() => navigate(NAV[2].href)}
        >
          {NAV[2].name}
        </button>
      </nav>
      {/* 中部大标题 */}
      <section className="flex-1 flex flex-col items-start justify-center px-7 pb-14 relative">
        <div className="w-full flex flex-col flex-1 justify-center">
          <h1 className="font-head font-extrabold tracking-tight text-black text-[clamp(2.5rem,10vw,8rem)] leading-[0.93] pt-8" style={{ wordSpacing: "0.2em" }}>
            Creative is
            <span className="relative inline-block align-middle ml-3">
              <span className="absolute -right-14 -top-7 md:-right-20 md:-top-9 pointer-events-none" aria-hidden>
                <svg width="90" height="90" className="hidden md:block" aria-hidden>
                  <circle cx="45" cy="45" r="35" stroke="#fc9edf" strokeWidth="6" fill="none"/>
                  <path d="M45 24 L45 65 M45 24 L67 60" stroke="#fc9edf" strokeWidth="5" fill="none"/>
                </svg>
                <svg width="65" height="65" className="block md:hidden" aria-hidden>
                  <circle cx="32" cy="32" r="25" stroke="#fc9edf" strokeWidth="5" fill="none"/>
                  <path d="M32 15 L32 52 M32 15 L47 48" stroke="#fc9edf" strokeWidth="4" fill="none"/>
                </svg>
              </span>
              <span className="block"> </span>
            </span>
            <br/>
            <span className="font-head italic" style={{ fontStyle: "italic", fontWeight: 600, letterSpacing: "0.03em" }}>
              joy
            </span>
          </h1>
        </div>
        {/* 左下&下部元素 底部对齐 */}
        <div className="absolute left-0 bottom-0 flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-8 pl-6 pb-8 w-full">
          <div className="flex items-end gap-3">
            <span className="text-[2.5rem] md:text-[4rem] font-bold font-head">&copy;{new Date().getFullYear()}</span>
            <img
              src="/lovable-uploads/8d766d31-dc4f-4c9a-8a8f-653592c946bb.png"
              alt="Portrait"
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover border border-black/10 shadow"
              draggable={false}
            />
          </div>
          <span className="hidden md:inline text-xs font-timesroman opacity-70 mb-3 ml-3">
            /CREATING SINCE 2018
          </span>
        </div>
        {/* 移动端右下角 */}
        <span className="md:hidden absolute right-7 bottom-5 text-xs font-timesroman opacity-70">
          /CREATING SINCE 2018
        </span>
      </section>
    </main>
  );
};

export default Home;
