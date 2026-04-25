import { motion } from "motion/react";
import { useTimer } from "react-timer-hook";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: new Date("2026-05-03T09:00:00"),
  });

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
      <svg
        className="w-full h-20 text-[#800000]"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          fill="currentColor"
          d="M0,0 Q50,25 100,0 L100,100 Q50,75 0,100 Z"
        />
      </svg>

      <motion.div className="flex flex-col gap-2 items-center justify-center">
        <motion.img src="/images/souv.png" className="size-20" {...fadeUp()} />
        <motion.p
          className="font-lobster font-medium text-lg"
          {...fadeUp(0.08)}
        >
          Indahnya hari yang dinanti
        </motion.p>

        <motion.div className="flex gap-2" {...fadeUp(0.16)}>
          <motion.div
            className="flex flex-col items-center bg-[#800000] text-white p-2 rounded-lg size-20"
            {...fadeUp(0.2)}
          >
            <motion.span className="text-2xl font-bold" {...fadeUp(0.22)}>
              {days}
            </motion.span>
            <motion.span className="text-sm" {...fadeUp(0.23)}>
              Days
            </motion.span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-[#800000] text-white p-2 rounded-lg size-20"
            {...fadeUp(0.24)}
          >
            <motion.span className="text-2xl font-bold" {...fadeUp(0.26)}>
              {hours}
            </motion.span>
            <motion.span className="text-sm" {...fadeUp(0.27)}>
              Hours
            </motion.span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-[#800000] text-white p-2 rounded-lg size-20"
            {...fadeUp(0.28)}
          >
            <motion.span className="text-2xl font-bold" {...fadeUp(0.3)}>
              {minutes}
            </motion.span>
            <motion.span className="text-sm" {...fadeUp(0.31)}>
              Minutes
            </motion.span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-[#800000] text-white p-2 rounded-lg size-20"
            {...fadeUp(0.32)}
          >
            <motion.span className="text-2xl font-bold" {...fadeUp(0.34)}>
              {seconds}
            </motion.span>
            <motion.span className="text-sm" {...fadeUp(0.35)}>
              Seconds
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.p {...fadeUp(0.4)}>
          Kami mengundang Bapak/Ibu/Saudara/i untuk menyaksikan pernikahan kami
          pada tanggal:
        </motion.p>
        <motion.div
          className="bg-[#800000] text-white p-2 rounded-lg flex flex-col items-center"
          {...fadeUp(0.48)}
        >
          <motion.span
            className="text-lg font-bold font-lobster"
            {...fadeUp(0.5)}
          >
            Akad Nikah
          </motion.span>
          <motion.span {...fadeUp(0.51)}>Minggu, 03 Mei 2026</motion.span>
          <motion.span {...fadeUp(0.52)}>Pukul 08.00 WIB</motion.span>
          <motion.span {...fadeUp(0.53)}>
            Tempat: Kediaman mempelai wanita
          </motion.span>
        </motion.div>
        <motion.div
          className="bg-[#800000] text-white p-2 rounded-lg flex flex-col items-center"
          {...fadeUp(0.56)}
        >
          <motion.span
            className="text-lg font-bold font-lobster"
            {...fadeUp(0.58)}
          >
            Resepsi
          </motion.span>
          <motion.span {...fadeUp(0.59)}>Minggu, 03 Mei 2026</motion.span>
          <motion.span {...fadeUp(0.6)}>Pukul 08.00 WIB</motion.span>
          <motion.span {...fadeUp(0.61)}>
            Tempat: Kediaman mempelai wanita
          </motion.span>
        </motion.div>

        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.18851160247!2d107.45669439999999!3d-7.1041389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDYnMTQuOSJTIDEwN8KwMjcnMjQuMSJF!5e0!3m2!1sen!2sid!4v1777023251056!5m2!1sen!2sid"
          width="300"
          height="350"
          loading="lazy"
          className="border-2 border-[#800000] rounded-lg mt-4"
          {...fadeUp(0.64)}
        ></motion.iframe>
        <motion.a
          href="https://www.google.com/maps?q=-7.104134559631348,107.45669555664062&z=17&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-2 px-4 rounded-md mt-4"
          {...fadeUp(0.72)}
        >
          Lihat Lokasi
        </motion.a>

        <motion.img
          src="/images/bingkai-bunga.png"
          data-aos="zoom-in"
          {...fadeUp(0.08)}
        />
      </motion.div>
    </motion.section>
  );
}
