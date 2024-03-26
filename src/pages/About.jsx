import { useRef } from "react";
import useBackgroundImage from "../hooks/useBackgroundImage";
import useDynamicHeight from "../hooks/useDynamicHeight";
import { MicrophoneIcon } from "../utils/icons";

const About = () => {
  const aboutRef = useRef(null);
  const aboutHeight = useDynamicHeight(aboutRef);

  const bgImage = useBackgroundImage(
    "/img/about_bg.jpg",
    "/img/about_bg_mobile.jpg"
  );

  return (
    <div
      ref={aboutRef}
      className="relative overflow-hidden bg-cover bg-center min-h-screen"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-slate-950 opacity-50 backdrop-blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 text-slate-50">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2 space-y-4 p-4">
            <h1 className="text-4xl font-medium">
              Thomas Loebel - Meine Stimme für Ihren Erfolg
            </h1>
            <p className="text-xl">
              Ich bin Voice-Over-Künstler und professionellen Sprecher. Mit
              einer reichen Palette an Fähigkeiten und einem unvergleichlichen
              Talent bringe ich Ihre Projekte zum Leben und verleihe ihnen eine
              Stimme, die im Gedächtnis bleibt. Jedes Projekt, das ich
              übernehme, wird mit Hingabe und einem hohen Maß an
              Professionalität behandelt. Meine Stimme ist vielseitig,
              ausdrucksstark und einzigartig – sie verleiht Ihren Projekten
              Authentizität und Stil. Ich arbeite eng mit Ihnen zusammen, um
              sicherzustellen, dass Ihre Vorstellungen und Ziele übertroffen
              werden. Mit mehr als einem Jahrzehnt Erfahrung in der Branche habe
              ich meine Leidenschaft für das Sprechen und die Kunst des Voice
              Overs in einzigartige Meisterwerke verwandelt. Meine Stimme wurde
              für eine Vielzahl von Projekten eingesetzt, darunter:
            </p>
          </div>
          <div className="w-1/3 h-1/3 md:w-65 md:h-65 object-cover rounded-full">
            <img
              src="/img/profile.jpg"
              alt="Profil"
              className="object-cover rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
          {[
            {
              title: "Marketing und Werbung",
              icon: <MicrophoneIcon className="w-6 h-6 inline-block mr-2" />,
              description:
                "Innovative Marketing- und Werbelösungen, die Aufmerksamkeit erregen. Lassen Sie Ihre Produkte und Dienstleistungen mit meiner einnehmenden Stimme und überzeugenden Betonung erstrahlen. Ich bin spezialisiert auf die Verbindung mit Ihrem Publikum und das Hervorheben der Botschaft, die Sie vermitteln möchten.",
            },
            {
              title: "Unternehmenspräsentation",
              icon: <MicrophoneIcon className="w-6 h-6 inline-block mr-2" />,
              description:
                "  Fesseln Sie Ihr Publikum bei Geschäftspräsentationen, Schulungsvideos und E-Learning-Materialien. Meine klare und professionelle Stimme vermittelt komplexe Informationen auf verständliche Weise und steigert das Engagement Ihrer Zuhörer.",
            },
            {
              title: "Dokumentarfilme und Erzählungen",
              icon: <MicrophoneIcon className="w-6 h-6 inline-block mr-2" />,
              description:
                "Jede Geschichte verdient es, mit Leidenschaft und Hingabe erzählt zu werden. Als erfahrener Erzähler gebe ich Ihre Dokumentarfilmen, Hörbüchern und Geschichtenerzählungen ein unverwechselbare Stimme und verleihe ihnen Tiefe und Authentizität.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-slate-950 rounded-lg p-4 hover:bg-slate-800 bg-opacity-70 transition-all duration-300 ease-in-out overflow-hidden hover:max-h-full max-h-24 mb-4"
            >
              <div className="flex items-center space-x-2 text-center">
                {card.icon}
                <h3 className="text-xl text-slate-50 font-semibold">
                  {card.title}
                </h3>
              </div>
              <p className="text-slate-50 mt-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
