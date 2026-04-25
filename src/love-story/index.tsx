import { motion } from "motion/react";

export default function LoveStory() {
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
    <motion.section className="w-full relative mt-20">
      <motion.div className="relative px-4" {...fadeUp()}>
        <svg
          className="w-full h-80 text-[#800000]"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            fill="currentColor"
            d="M0,0 Q50,25 100,0 L100,100 Q50,75 0,100 Z"
          />
        </svg>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-90 p-1 bg-white"
          {...fadeUp(0.08)}
        >
          <motion.p
            className="text-center text-sm font-bold border-[#800000] border-4 bg-white p-2"
            {...fadeUp(0.12)}
          >
            “Dan kawinkanlah orang-orang yang sendirian (bujang) di antara kamu,
            dan orang-orang yang layak (berkawin) dari hamba-hamba sahayamu yang
            lelaki dan hamba-hamba sahayamu yang perempuan. Jika mereka miskin
            Allah akan memampukan mereka dengan kurnia-Nya. Dan Allah Maha luas
            (pemberian-Nya) lagi Maha Mengetahui.” QS. Surat An-Nur Ayat 32
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-col gap-2 items-center justify-center mt-20">
        <motion.div
          className="w-80 h-50 bg-[url('/images/img34.jpeg')] bg-cover bg-position-[center_top_15rem] border-4 shadow-lg border-white rounded-md"
          {...fadeUp(0.2)}
        />
        <motion.span {...fadeUp(0.28)}>Resepsi Pernikahan</motion.span>
        <motion.p className="text-center text-sm" {...fadeUp(0.36)}>
          Kami bisa melakukan acara resepsi yang insyaAllah diadakan pada
          Minggu, 03 Mei 2026
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
