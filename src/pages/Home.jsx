import { Parallax } from "react-parallax";
import useBackgroundImage from "../hooks/useBackgroundImage";

import About from "./About";
import Demos from "./Demos";
import Services from "./Services";
import Contact from "./Contact";
import TypingEffect from "../utils/TypingEffect";
import { MicrophoneIcon } from "../utils/icons";

const Home = () => {
  const homeBgLarge = "/img/home_recording_bg.jpg";
  const homeBgSmall = "/img/home_recording_mobile.jpg";
  const homeBackgroundImage = useBackgroundImage(homeBgLarge, homeBgSmall);

  const OverlayWithEffect = ({ children }) => (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="absolute inset-0 bg-gray-800 opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );

  return (
    <div>
      {/* Home Sektion */}
      <OverlayWithEffect>
        <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${homeBackgroundImage})` }}
        >
          <div
            className="absolute inset-0 bg-slate-950 opacity-50 backdrop-filter backdrop-blur-lg"
            style={{ zIndex: 1 }}
          ></div>
          <div
            className="text-center text-slate-50 p-4 md:text-4xl md:font-medium text-xl font-normal leading-10 tracking-wide"
            style={{ zIndex: 2 }}
          >
            <h1 className="inline-flex items-center justify-center font-semibold leading-relaxed">
              <MicrophoneIcon className="mr-2 w-8 h-8 text-slate-50" />
              <TypingEffect text="LoeVoice" speed={150} />
            </h1>
            <h2 className="leading-loose">
              Professioneller Sprecher & Voice Over Artist
            </h2>
            <h3 className="leading-loose">Energetisch, Männlich, Tief</h3>
            <p className="text-base font-light leading-relaxed">
              <TypingEffect text="Thomas Loebel" speed={200} />
            </p>
          </div>
        </div>
      </OverlayWithEffect>
      <div className="bg-slate-950" style={{ height: 80 }}></div>
      <Parallax
        bgImage={useBackgroundImage(
          "/img/about_bg.jpg",
          "/img/about_bg_mobile.jpg"
        )}
        strength={500}
      >
        <div>
          <About />
        </div>
      </Parallax>
      <div className="bg-slate-950" style={{ height: 80 }}></div>
      <Parallax
        bgImage={useBackgroundImage(
          "/img/services_bg.jpg",
          "/img/services_bg_mobile.jpg"
        )}
        strength={500}
      >
        <div>
          <Services />
        </div>
      </Parallax>
      <div className="bg-slate-950" style={{ height: 80 }}></div>
      <Parallax
        bgImage={useBackgroundImage("/img/demos_bg.jpg", "/img/demos_bg.jpg")}
        strength={500}
      >
        <div style={{ height: 500 }}>
          <Demos />
        </div>
      </Parallax>
      <div className="bg-slate-950" style={{ height: 80 }}></div>
      <Parallax
        bgImage={useBackgroundImage(
          "/img/contact_bg.jpg",
          "/img/services_bg.jpg"
        )}
        strength={500}
      >
        <div style={{ height: 500 }}>
          <Contact />
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
