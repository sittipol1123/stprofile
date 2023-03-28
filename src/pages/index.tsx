import Dropskill from "../component/dropskill";
import Skill from "../component/skilllist";
import Contact from "../component/contactme";
import { useTheme } from "next-themes";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);

  return (
    <>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Clickme to change
      </button>
      <div>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                สวัสดี
                <br />
                Back-end, front-end, full-stack developer
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                การเปิดใจรับสิ่งใหม่ ๆ มันทำให้ชีวิตเราเปลี่ยนได้เสมอ
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                {/* <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  เริ่มกันเลย
                </a> */}
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  เกี่ยวกับฉัน <span aria-hidden="true">→</span>
                </a>
                <Dropskill></Dropskill>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="#"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
        <div className="lg:px-12 sm:py-10">
          <Skill></Skill>
        </div>
        <div>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}
