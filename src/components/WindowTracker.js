import React, { useEffect, useState } from "react";

function WindowTracker() {
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWith(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, [windowWith]);
  return (
    <h1 className="text-4xl font-semibold text-white">
      Window width: {windowWith}
    </h1>
  );
}

export default WindowTracker;
