import React, { useState } from "react";
// import Header from "./components/Header";
// import Meme from "./components/Meme";
import boxes from "./boxes";
import Box from "./components/Box";

function App() {
  const [squares, setSquares] = useState(boxes);

  function toogle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  return (
    <div>
      {/* <Header />
      <Meme /> */}
      <h1 className="text-4xl font-semibold">Boxes will go here</h1>
      {squares.map((square) => (
        <Box
          key={square.id}
          id={square.id}
          on={square.on}
          toogle={() => toogle(square.id)}
        />
      ))}
    </div>
  );
}

export default App;
