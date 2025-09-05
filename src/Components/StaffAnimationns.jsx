import React, { useEffect, useRef, useState } from "react";
import Imageanimation from "../assets/logo/pictures/Imageanimation.webp";
import Imagewriting from "../assets/logo/pictures/Imagewriting.webp";
import Imagethirdbord from "../assets/logo/pictures/Imagethirdbord.webp";
import ArrowBoard from "../assets/logo/logos/ArrowBoard.svg";
import Trophy from "../assets/logo/logos/Trophy.svg";
import WhiteTick from "../assets/logo/logos/WhiteTick.svg";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function StaffAnimationns() {
  const Data = [
    { text: "75% of our clients hire the first match" },
    { text: "Top 3% world Talent" },
    { text: "15-day Money-back Trial Period" },
  ];

  const DataImages = [
    {
      imageanimation: Imageanimation,
      LogoImage: ArrowBoard,
      secondtext: "75% of our clients hire the first match",
      description:
        "And this is possible only because we love what we do and strive for excellence in everything we do. Our staff works as a dream team where everyone is a crucial player in the hiring journey.",
    },
    {
      imageanimation: Imagewriting,
      LogoImage: Trophy,
      secondtext: "Top 3% world Talent",
      description:
        "We have skilled developers from top locations: Canada, Pakistan and U.A.E with matching timezone between GMT -6 to GMT +6. Experts in top technologies we work with: Backend: Node.js, Nest.js, Python, Django, MongoDb, PostgresQL Frontend: React.js, Next.js, Svelte.js, Vue.js, Nuxt.js Mobile: React-native, Expo, iOS Cloud: AWS, GCP QA Automation: Selenium, Jenkins, Jest",
    },
    {
      imageanimation: Imagethirdbord,
      LogoImage: WhiteTick,
      secondtext: "15-day Money-back Trial Period",
      description:
        "The Client may terminate our Agreement with immediate effect by written notice to the other Party during this trial period, and the services rendered during such period shall not be invoiced. If this provision is not exercised all services shall be invoiced.",
    },
  ];

  const [active, setActive] = useState(0);
  const barCtrls = useAnimation();
  const contentCtrls = useAnimation();
  const timerRef = useRef(null);

  // autoplay: bar fill -> content reveal -> next
  useEffect(() => {
    const BAR_DURATION = 5.2;   // seconds
    const CONTENT_DURATION = 0.45;
    const HOLD_AFTER = 0;

    if (timerRef.current) clearTimeout(timerRef.current);

    const run = async () => {
      barCtrls.set({ scaleY: 0 });
      contentCtrls.set({ opacity: 0, y: 12 });

      await barCtrls.start({
        scaleY: 1,
        transition: { duration: BAR_DURATION, ease: "linear" },
      });

      await contentCtrls.start({
        opacity: 1,
        y: 0,
        transition: { duration: CONTENT_DURATION, ease: "easeOut" },
      });

      timerRef.current = setTimeout(() => {
        setActive((prev) => (prev + 1) % Data.length);
      }, HOLD_AFTER * 1000);
    };

    run();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      barCtrls.stop();
      contentCtrls.stop();
    };
  }, [active]);

  const itemColor = (i) => (i === active ? "text-[#204285]" : "text-[#C9C9C9]");
  const barColor = (i) => (i === active ? "bg-[#204285]" : "bg-[#C9C9C9]");

  return (
    <div className="bg-[#e3e5da]">
      <div className="max-w-[1810px] mx-auto px-6 py-16 lg:py-24 2xl:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center">
          {/* Left column */}
          <div className="flex items-start gap-5 ">
            <div className="flex flex-col w-full relative">
              {Data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (timerRef.current) clearTimeout(timerRef.current);
                    barCtrls.stop();
                    contentCtrls.stop();
                    setActive(index);
                  }}
                  className={`relative pl-4 text-left py-2 text-2xl md:text-4xl font-bold transition-colors duration-300 cursor-pointer hover:text-[#204285] ${itemColor(
                    index
                  )}`}
                >
                  {/* grey track */}
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9C9C9] z-0 rounded-full" />
                  <motion.span
                    className={`absolute left-0 top-0 w-1 h-full ${barColor(
                      index
                    )} z-10 rounded-full`}
                    style={{ transformOrigin: "top" }}
                    initial={{ scaleY: 0,opacity:1 }}
                    animate={index === active ? barCtrls : { scaleY: 0, opacity:1 }}
                  />
                  <span className="relative z-20">{item.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
                className="absolute inset-0"
              >
                {/* Background image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center rounded-2xl overflow-hidden"
                  initial={{ scale: 0.0,}}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0, ease: "easeOut", delay: 0,},
                  }}
                >
                  <img
                    src={DataImages[active]?.imageanimation}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Foreground content */}
                <motion.div
                  animate={contentCtrls}
                  className="relative z-20 w-full h-full p-6 md:p-10 flex flex-col justify-end text-white bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                >
                  <div className="size-[52px] rounded-full flex items-center justify-center mb-4 bg-[#204285] shadow-md">
                    <img
                      className="h-6 w-6"
                      src={DataImages[active]?.LogoImage}
                      alt=""
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {DataImages[active]?.secondtext}
                  </h3>
                  <p className="text-base md:text-lg font-normal ">
                    {DataImages[active]?.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
