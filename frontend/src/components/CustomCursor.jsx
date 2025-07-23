import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (event) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;

      const edgeThreshold = 20;
      if (
        event.clientX <= edgeThreshold ||
        event.clientY <= edgeThreshold ||
        event.clientX >= window.innerWidth - edgeThreshold ||
        event.clientY >= window.innerHeight - edgeThreshold
      ) {
        cursor.style.opacity = "0";
      } else {
        cursor.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="sm:flex hidden"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        backgroundColor: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: ".085s ease",
        zIndex: 9999,
        mixBlendMode: "difference",
        opacity: 1,
        margin: "-9px"
      }}
      id="cursor"
    />
  );
};

export default CustomCursor;
