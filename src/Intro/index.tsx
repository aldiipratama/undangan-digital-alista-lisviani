import { motion } from "motion/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function Intro() {
  const namaTamu = useSearchParams()[0].get("nama-tamu") || "Tamu Undangan";
  const [introShow, setIntroShow] = useState<boolean>(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!introShow) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [introShow]);

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-4 h-screen bg-[url('/images/bingkai.png')] bg-[#f2eadf] bg-center bg-contain bg-no-repeat place-content-center overflow-hidden absolute inset-0 z-999"
      initial={{ opacity: 1 }}
      animate={{ opacity: introShow ? 1 : 0, translateY: introShow ? 0 : -100 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src="/images/img21.jpeg"
        alt="Intro"
        className="w-full max-w-50 rounded-lg shadow-lg border-white border-4"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
      />
      <motion.p
        className="text-center font-lobster text-2xl"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
      >
        Alista & Rijal
      </motion.p>
      <motion.p
        className="text-xs font-bold"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
      >
        Kepada Bapak/Ibu/Saudara/i
      </motion.p>
      <motion.p
        className="text-xs font-bold uppercase"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
      >
        {namaTamu}
      </motion.p>
      <motion.button
        className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-2 px-4 rounded-md"
        onClick={() => setIntroShow(false)}
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
      >
        Buka Undangan
      </motion.button>
    </motion.div>
  );
}
