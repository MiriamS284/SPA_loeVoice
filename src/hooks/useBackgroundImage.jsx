import { useState, useEffect } from "react";

const useBackgroundImage = (bgImageLarge, bgImageSmall) => {
  const [backgroundImage, setBackgroundImage] = useState(
    window.innerWidth >= 768 ? bgImageLarge : bgImageSmall
  );

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(
        window.innerWidth >= 768 ? bgImageLarge : bgImageSmall
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [bgImageLarge, bgImageSmall]);

  return backgroundImage;
};

export default useBackgroundImage;
