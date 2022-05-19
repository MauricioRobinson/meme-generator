import React, { useState } from "react";

function Card() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (800) 687-1875",
    email: "johndoe@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite
    ? "star_77949.svg"
    : "star_favorite_5754.png";

  function handleFavourite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <div className="max-w-xs mx-auto mt-20 shadow-lg rounded-lg bg-gray-50">
      <div className="">
        <div className="flex justify-center items-center">
          <img
            src="./images/Completed task _Outline.png"
            alt="Card cover"
            className="w-40 h-40 object-cover rounded-full bg-blue-200 m-8"
          />
        </div>
        <div className="p-6">
          <img
            src={`./images/${starIcon}`}
            alt="Star icon"
            className="w-10 h-10 mb-5 cursor-pointer"
            onClick={handleFavourite}
          />
          <h1 className="font-bold text-xl mb-4">{`${contact.firstName} ${contact.lastName}`}</h1>
          <p className="text-lg text-slate-500">{contact.phone}</p>
          <p className="text-lg text-slate-500">{contact.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
