import { useState, useEffect } from "react";

const useDynamicHeight = (ref) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(ref.current ? ref.current.offsetHeight : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return height;
};

export default useDynamicHeight;
