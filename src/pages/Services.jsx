import { useRef } from "react";
import useBackgroundImage from "../hooks/useBackgroundImage";
import useDynamicHeight from "../hooks/useDynamicHeight";

function Services() {
  const servicesRef = useRef(null);
  const servicesHeight = useDynamicHeight(servicesRef);

  const bgImage = useBackgroundImage(
    "/img/services_bg_full.jpg",
    "/img/services_bg_mobile.jpg"
  );

  return (
    <div ref={servicesRef} className="relative min-h-screen overflow-hidden">
      {/* Hintergrundbild mit Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 z-1 bg-slate-950 opacity-75 backdrop-blur-lg"></div>
      </div>

      {/* Inhalt der Seite */}
      <div className="relative z-20 p-8 text-white flex flex-col justify-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Kontaktieren Sie mich für Ihr Projekt!
          </h1>
          <p className="mb-8 text-center mx-10 block whitespace-pre-line">
            Verleihen Sie Ihren Projekten eine unverkennbare Stimme und lassen
            Sie sie mit Thomas Loebel Voice Over aufblühen. <br></br>
            Kontaktieren Sie mich noch heute, um mehr über meine
            Dienstleistungen zu erfahren und wie ich dazu beitragen kann, Ihre
            Botschaft auf beeindruckende Weise zu vermitteln.
          </p>
        </div>

        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src="/img/cards/videos.jpg"
                alt="Service"
                className="w-full h-48 object-cover relative z-20"
              />

              <div className="p-4 relative z-20">
                <h3 className="text-xl text-slate-50 font-bold mb-2">
                  Voice Over für Videos
                </h3>
                <p className="text-slate-50">
                  Ich verleihe Ihren Videos Charakter und Persönlichkeit, sei es
                  für Werbung, Animationen, Präsentationen oder Online-Inhalte.
                  Jede Zeile wird sorgfältig gestaltet, um Ihre Botschaft auf
                  den Punkt zu bringen und Ihre Zuschauer zu beeindrucken.
                </p>
              </div>
            </div>

            <div className="relative z-20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src="/img/cards/commercial_1.jpg"
                alt="Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-slate-50 font-bold mb-2">
                  Audiowerbung
                </h3>
                <p className="text-slate-50">
                  Ihre Werbekampagnen verdienen eine Stimme, die sich abhebt.
                  Mit meiner Hilfe werden Ihre Werbespots unvergesslich und
                  hinterlassen einen bleibenden Eindruck.
                </p>
              </div>
            </div>

            <div className="relative z-20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src="/img/cards/audiobooks.jpg"
                alt="Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-slate-50 font-bold mb-2">
                  Audiobooks & Hörbücher
                </h3>
                <p className="text-slate-50">
                  Tauchen Sie ein in fesselnde Geschichten, prägnante
                  Wissensvermittlung oder inspirierende Inhalte. Mit meiner
                  warmen und nuancierten Stimme verwandle ich Bücher in
                  immersive Hörerlebnisse, die die Fantasie anregen und die
                  Botschaft des Autors einfühlsam vermitteln.
                </p>
              </div>
            </div>

            <div className="relative z-20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src="/img/cards/ivr.jpg"
                alt="Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-slate-50 font-bold mb-2">
                  Telefonansagen und IVR
                </h3>
                <p className="text-slate-50">
                  Begrüßen Sie Ihre Anrufer mit einer professionellen und
                  einladenden Telefonansage. Ich sorge dafür, dass Ihre Kunden
                  sich von Anfang an geschätzt fühlen.
                </p>
              </div>
            </div>
            <div className="relative z-20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src="/img/cards/elearning_1.jpg"
                alt="Service"
                className="w-full h-48 object-cover relative z-20"
              />
              <div className="p-4">
                <h3 className="text-xl text-slate-50 font-bold mb-2 relative z-20">
                  Sprachlokalisierung
                </h3>
                <p className="text-slate-50">
                  Erschließen Sie neue Märkte, indem Sie Ihre Inhalte in
                  verschiedenen Sprachen anbieten. Ich biete hochwertige
                  Sprachlokalisierungsdienste an, um sicherzustellen, dass Ihre
                  Botschaft weltweit verstanden wird.
                </p>
              </div>
            </div>
            <div className="relative z-20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                src="/img/cards/dokumentation_2.jpg"
                alt="Dokumentation_Voice_Over"
                className="w-full h-48 object-cover relative z-20"
              />
              <div className="p-4">
                <h3 className="text-xl text-slate-50 font-bold mb-2 relative z-20">
                  Voice Over für Dokumentationen
                </h3>
                <p className="text-slate-50">
                  Voice-Over für Dokumentationen ist eine Kunst, die tiefer geht
                  als bloße Worte. Es geht darum, eine Stimme zu sein, die
                  fesselt, informiert und bewegt. Meine Stimme bringt nicht nur
                  Ihre Dokumentationen zum Leben, sondern verleiht ihnen auch
                  Tiefe, Charakter und eine emotionale Resonanz, die das
                  Publikum von Anfang bis Ende gebannt hält.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
