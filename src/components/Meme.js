import React, { useState } from "react";
import memesData from "./../data";

function Meme(props) {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage(e) {
    const memes = memesData.data.memes;
    const random = Math.floor(Math.random() * memes.length);
    console.log(memes[random].url);
    setMemeImage((prevMemeImage) => (prevMemeImage = memes[random].url));

    e.preventDefault();
  }

  return (
    <main className="mt-16 p-8">
      <form className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Top text"
          className="border-2 border-slate-500 rounded-lg p-2 mr-4"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="border-2 border-slate-500 rounded-lg p-2"
        />
        <button
          type="submit"
          onClick={getMemeImage}
          className="mt-6 bg-gradient-to-r from-yellow-600 to-orange-500 text-white font-bold p-2 rounded-lg col-span-2">
          Generate meme image
        </button>
      </form>
      <div className="h-80 mt-10">
        <img
          src={`./images/${memeImage}.webp`}
          alt="Experimental meme"
          className="w-full h-80 object-cover"
        />
      </div>
    </main>
  );
}

export default Meme;
