import { useState, useEffect } from "react";

const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isLargeScreen
    ? "url('/img/home_recording_bg.jpg')"
    : "url('/img/home_recording_mobile.jpg')";

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage }}
    >
      <div className="text-center text-slate-50 p-4 md:text-4xl md:font-medium text-xl font-normal leading-8 tracking-wide">
        <h1>Professioneller Sprecher & Voice Over Artist</h1>
        <h2>Energetisch, Männlich, Tief</h2>
      </div>
    </div>
  );
};

export default Home;
