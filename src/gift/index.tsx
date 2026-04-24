import { motion } from "motion/react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

export default function Gift() {
  const bcaAccount = "6768322164";
  const { isCopied, copy } = useCopyToClipboard(2500);

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

        <motion.p
          className="font-lobster font-medium text-lg text-center"
          {...fadeUp()}
        >
          Amplop Digital
        </motion.p>
        <motion.p className="font-medium text-sm text-center" {...fadeUp(0.08)}>
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami, dan
          jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado
          secara cashless.
        </motion.p>

        {/* <motion.div
          className="bg-[#800000] text-white font-medium py-2 px-4 rounded-md"
          {...fadeUp(0.16)}
        >
          Kirim Hadiah
        </motion.div> */}

        <motion.div
          className="w-80 h-40 bg-white gap-4 relative mt-4 rounded-lg shadow-lg px-4"
          {...fadeUp(0.24)}
        >
          <div className="flex flex-col" {...fadeUp(0.28)}>
            <img src="/images/chip-bank.png" className="w-12 mt-4" />
            <p className="text-sm font-medium" {...fadeUp(0.36)}>
              XXXXXXXXX
            </p>
            <p className="font-medium text-sm" {...fadeUp(0.4)}>
              Alista Lisviani
            </p>
          </div>
          <img
            src="/images/logo-bca.png"
            className="w-20 mt-4 absolute right-4 -top-5"
            {...fadeUp(0.44)}
          />

          <button
            className="bg-[#800000] text-white font-medium py-1 px-3 rounded-md hover:bg-[#600000] transition-colors absolute right-4 bottom-4"
            onClick={copy.bind(null, bcaAccount)}
            {...fadeUp(0.48)}
          >
            {isCopied ? "Tersalin!" : "Salin"}
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
