import { Parallax } from "react-parallax";
import About from "./About"; // Annahme, dass dies jetzt Komponenten für Sektionen sind
import Demos from "./Demos";
import Services from "./Services";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div>
      <Parallax bgImage="/path/to/image.jpg" strength={500}>
        {/* Inhalt für den Parallax-Abschnitt, z.B. eine Willkommensnachricht */}
      </Parallax>
      <About />
      <Demos />
      <Services />
      <Contact />
      {/* Weitere Parallax und normale Sektionen hier einfügen */}
    </div>
  );
};

export default MainPage;
