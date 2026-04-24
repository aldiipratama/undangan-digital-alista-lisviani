import { motion } from "motion/react";

export default function Bridge() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <motion.section className="w-full relative">
      <motion.div className="relative" {...fadeUp()}>
        <svg
          className="w-full h-60 text-[#800000]"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            fill="currentColor"
            d="M0,0 Q50,25 100,0 L100,100 Q50,75 0,100 Z"
          />
        </svg>
        <motion.span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold"
          {...fadeUp(0.05)}
        >
          Bridge & Room
        </motion.span>
      </motion.div>

      <motion.img
        src="/images/bingkai-bunga.png"
        className="absolute top-25 left-0 right-0 z-1"
        data-aos="zoom-in"
        {...fadeUp(0.08)}
      />

      <motion.div className="flex flex-col gap-2 items-center justify-center">
        <motion.img
          src="/images/text-bismillah.png"
          className="w-40 mt-30"
          {...fadeUp(0.12)}
        />
        <motion.p {...fadeUp(0.2)}>Assalamu'Alaikum Wr. Wb.</motion.p>
        <motion.p {...fadeUp(0.28)} className="text-center">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri dalam acara pernikahan kami:
        </motion.p>
        <motion.img
          src="/images/img5-transparent.png"
          className="w-40 border-4 border-[#eae0d2] bg-[#800000] rounded-md mt-4"
          {...fadeUp(0.36)}
        />
        <motion.span className="font-medium font-lobster" {...fadeUp(0.44)}>
          Alista lisviani
        </motion.span>
        <motion.span className="text-sm" {...fadeUp(0.52)}>
          Putri Pertama Bapak Ayi Sugandi & Ibu Hj. Lilis Nursoda
        </motion.span>
        <motion.span
          className="text-lg font-lobster font-bold"
          {...fadeUp(0.6)}
        >
          &
        </motion.span>
        <motion.img
          src="/images/img1-transparent.png"
          className="w-40 border-4 border-[#eae0d2] bg-[#800000] rounded-md mt-4"
          {...fadeUp(0.68)}
        />
        <motion.span className="font-medium font-lobster" {...fadeUp(0.76)}>
          Itep Rijal
        </motion.span>
        <motion.span className="text-sm" {...fadeUp(0.84)}>
          Putra Pertama Bapak Ido & Ibu Lilis Hayati
        </motion.span>
      </motion.div>
    </motion.section>
  );
}
