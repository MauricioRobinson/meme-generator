import React from "react";

function Header(props) {
  return (
    <header className="h-16 bg-gradient-to-r from-yellow-600 to-orange-500 flex items-center p-5 text-white shadow-md">
      <h1 className="font-bold tracking-wide text-2xl">Meme Generator</h1>
    </header>
  );
}

export default Header;
