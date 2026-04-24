import { motion } from "motion/react";

export default function Ending() {
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
    <motion.section className="w-full relative mt-10">
      <motion.div className="flex flex-col gap-4 items-center justify-center">
        <motion.img
          src="/images/bingkai-bunga.png"
          data-aos="zoom-in"
          {...fadeUp(0.08)}
        />

        <motion.img
          src="/images/img20.jpeg"
          className="w-60 object-cover rounded-md shadow-lg border-2 border-white"
          {...fadeUp()}
        />

        <motion.p className="text-sm text-center" {...fadeUp(0.08)}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kamu, apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
          kehadiran dan doa restunya, kami ucapkan terima kasih.
        </motion.p>
        <motion.p className="font-medium text-sm text-center" {...fadeUp(0.16)}>
          Wassalamu'Alaikum Wr. Wb.
        </motion.p>
        <motion.p
          className="font-lobster font-medium text-lg"
          {...fadeUp(0.24)}
        >
          Alista & Rijal
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
