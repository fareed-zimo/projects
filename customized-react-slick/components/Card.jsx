import React, { useEffect, useRef, useState } from "react";

const Card = ({
  index,
  img,
  hoveredIndex,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const cardRef = useRef(null);

  const [isOnLeftSide, setIsOnLeftSide] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      setIsOnLeftSide(rect.left < window.innerWidth / 2);
    }
  }, [hoveredIndex]);

  return (
    <div ref={cardRef} className={`flex items-end`}>
      <div
        className={`hover:scale-[2.4] lg:hover:scale-[1.85] hover:z-10 transition duration-150 ease-in-out ${
          isOnLeftSide ? "origin-bottom-left" : "origin-bottom-right"
        } overflow-visible`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          onClick={() => alert(`You click on image ${index + 1}`)}
          src={img.post_url}
          alt={`image ${index}`}
          className="w-auto h-full"
        />
      </div>
    </div>
  );
};

export default Card;
