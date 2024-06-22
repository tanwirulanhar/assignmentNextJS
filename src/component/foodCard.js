import React from "react";

const FoodCard = ({ food, onClick }) => {
  return (
    <div
      className="border rounded-md shadow-md cursor-pointer "
      onClick={onClick}
    >
      <img
        src={food.imageUrl}
        alt={food.name}
        className="mb-2 rounded-md w-50 h-50"
      />
      <div className="p-10 ">
        <h2 className="text-lg font-semibold">{food.name}</h2>
        <p className="text-sm text-gray-600">{food.description}</p>
      </div>
    </div>
  );
};

export default FoodCard;


