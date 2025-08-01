"use client"
import { dots } from "../../utils/dots";
import { useEffect, useState } from "react";

export default function Dots() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="rounded-full absolute"
          style={{
            width: `${isMobile ? dot.width - 4 : dot.width}px`,
            height: `${isMobile ? dot.height - 4 : dot.height}px`,
            top: `${dot.top}px`,
            left: `${dot.left}px`,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,245,245,0) 100%)",
          }}
        ></div>
      ))}
    </>
  );
}