import { motion } from "motion/react";

export default function OurGallery() {
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
    <motion.section className="bg-[#800000] w-full relative p-2">
      <motion.p
        className="text-white font-medium text-lg font-lobster text-center"
        {...fadeUp()}
      >
        Our Gallery
      </motion.p>
      <motion.div className="grid grid-cols-2 gap-2 items-center justify-center mt-6">
        <motion.img
          src="/images/img22.jpeg"
          alt="Our Gallery"
          className="w-full object-cover rounded-md border-2 border-white shadow-lg"
          {...fadeUp(0.08)}
        />
        <motion.img
          src="/images/img20.jpeg"
          alt="Our Gallery"
          className="w-full object-cover rounded-md border-2 border-white shadow-lg"
          {...fadeUp(0.16)}
        />
        <motion.img
          src="/images/img28.jpeg"
          alt="Our Gallery"
          className="w-full object-cover rounded-md border-2 border-white shadow-lg"
          {...fadeUp(0.24)}
        />
        <motion.img
          src="/images/img30.jpeg"
          alt="Our Gallery"
          className="w-full object-cover rounded-md border-2 border-white shadow-lg"
          {...fadeUp(0.32)}
        />
      </motion.div>
    </motion.section>
  );
}
