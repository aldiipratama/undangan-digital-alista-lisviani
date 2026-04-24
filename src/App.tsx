import { useLayoutEffect } from "react";
import Bridge from "./bridge";
import Countdown from "./countdown";
import Dating from "./dating";
import Ending from "./ending";
import Gift from "./gift";
import Intro from "./Intro";
import LoveStory from "./love-story";
import OurGallery from "./our-gallery";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useLayoutEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="max-w-md min-h-screen mx-auto relative bg-[#f2eadf] pb-20">
      <Intro />
      <Dating />
      <Bridge />
      <LoveStory />
      <Countdown />
      <OurGallery />
      <Gift />
      <Ending />
    </main>
  );
}

export default App;
