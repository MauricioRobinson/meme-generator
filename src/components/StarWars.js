import React, { useEffect, useState } from "react";

function StarWars() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount((prevCount) => (prevCount = prevCount + 1));
  }

  useEffect(() => {
    console.log("Effect ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((response) => response.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <h2 className="text-4xl font-semibold">The count is {count}</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 mt-8 text-white font-semibold">
        Get Next Character
      </button>
      <div>{JSON.stringify(starWarsData, null, 2)}</div>
    </div>
  );
}

export default StarWars;
