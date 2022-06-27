import React, { useState } from "react";
import WindowTracker from "./components/WindowTracker";
// import Header from "./components/Header";
// import Meme from "./components/Meme";

function App() {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow((prevState) => !prevState);
  }
  return (
    <div className="bg-orange-400 h-screen flex items-center justify-center flex-col gap-4">
      {/* <Header />
      <Meme /> */}
      <button
        onClick={handleClick}
        className="bg-slate-300 font-semibold px-4 py-2 rounded">
        Toogle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
