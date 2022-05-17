import React, { useState } from "react";

function State() {
  const [answer, setAnswer] = useState("YES");

  function handleClick() {
    setAnswer((prevAnswer) => !prevAnswer);
  }

  return (
    <div className="bg-slate-800 h-screen flex items-center">
      <div className="p-10 text-center flex flex-col items-center">
        <h1 className="font-bold text-white text-5xl">
          Is state important to know?
        </h1>
        <div
          className="bg-white mt-12 rounded-full w-28 h-28 flex justify-center items-center p-16 cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-5xl">{answer ? "YES" : "NO"}</span>
        </div>
      </div>
    </div>
  );
}

export default State;
