import React, { useState } from "react";
import memesData from "./../data";

function Meme(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "alex-azabache-MoonoldXeqs-unsplash",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage(e) {
    const memes = allMemeImages.data.memes;
    const random = Math.floor(Math.random() * memes.length);
    const url = memes[random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });

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
          src={`./images/${meme.randomImage}.webp`}
          alt="Experimental meme"
          className="w-full h-80 object-cover"
        />
      </div>
    </main>
  );
}

export default Meme;
