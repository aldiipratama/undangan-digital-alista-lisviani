import { motion } from "motion/react";

export default function Dating() {
  const handleSaveToCalendar = () => {
    // Create iCalendar format event
    const eventTitle = "Pernikahan Alista & Rijal";
    const eventStart = "20260503T090000";
    const eventEnd = "20260503T140000";
    const eventLocation = "Kediaman mempelai wanita";
    const eventDescription = "Undangan Pernikahan Alista Lisviani & Itep Rijal";
    const eventUid = `pernikahan-alista-rijal-${Date.now()}@undangan-digital`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Undangan Digital//Pernikahan Alista & Rijal//ID",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${eventUid}`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART:${eventStart}`,
      `DTEND:${eventEnd}`,
      `SUMMARY:${eventTitle}`,
      `LOCATION:${eventLocation}`,
      `DESCRIPTION:${eventDescription}`,
      `X-MICROSOFT-CDO-BUSYSTATUS:BUSY`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    // Download .ics file
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pernikahan-alista-rijal.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
    <motion.section className="h-screen w-full relative">
      <motion.div className="bg-linear-to-b from-[#c8c3bc] to-transparent grid grid-cols-2 items-center">
        <motion.img
          src="/images/img32-transparent.png"
          alt="Dating"
          className="w-full h-80 object-cover mask-b-from-70% mask-b-to-100%"
          {...fadeUp()}
        />
        <motion.img
          src="/images/img33-transparent.png"
          alt="Dating"
          className="w-full h-80 object-cover mask-b-from-70% mask-b-to-100%"
          {...fadeUp()}
        />
      </motion.div>

      <motion.div className="flex flex-col gap-2 items-center justify-center">
        <motion.img
          src="/images/souv.png"
          className="size-20"
          {...fadeUp(0.12)}
        />
        <motion.p
          className="text-center w-full font-lobster text-2xl"
          {...fadeUp(0.2)}
        >
          Alista & Itep
        </motion.p>
        <motion.p
          className="text-center w-full text-sm font-medium"
          {...fadeUp(0.28)}
        >
          Minggu, 03 Mei 2026 | 08.00 WIB
        </motion.p>
        <motion.button
          className="bg-[#800000] hover:bg-[#600000] text-white font-bold py-2 px-4 rounded-full mt-4"
          onClick={handleSaveToCalendar}
          {...fadeUp(0.36)}
        >
          Save the Date
        </motion.button>
      </motion.div>

      <motion.img
        src="/images/bingkai-bunga.png"
        className="absolute -bottom-35 left-0 right-0 z-1"
        {...fadeUp(0.44)}
      />
    </motion.section>
  );
}
