import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MouseTrackingEffect = () => {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseCircle = document.getElementById("mouseCircle");

    //  check if DOM element referenced by ref has been mounted
    if (ref.current) {
      const handlePointerMove = (e) => {
        const element = ref.current;
        // calculate x and y coordinates
        const x = e.clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = e.clientY - element.offsetTop - element.offsetHeight / 2;
        // update state
        setCoordinates({ x, y });

        if (e.target.tagName.toLowerCase() === "span") {
          mouseCircle.classList.add("circle-active");
          console.log(mouseCircle);
        } else {
          mouseCircle.classList.remove("circle-active");
        }
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <motion.div
      id="mouseCircle"
      ref={ref}
      className="circle absolute"
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{
        type: "spring",
        duration: 0.1,
      }}
    />
  );
};

export default MouseTrackingEffect;
