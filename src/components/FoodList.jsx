import React from "react";

const FoodList = ({ item, index }) => {
  return (
    <div
      key={index}
      className=" flex flex-col items-center w-[400px] h-[500px] m-3 rounded-md"
    >
      <h1 className="bg-slate-700 w-full text-center text-white rounded-t-md p-2 text-xl">
        {item.foodName}
      </h1>
      <img
        src={item.image_url}
        alt={item.foodName}
        className="w-[400px] h-[470px] object-cover rounded-b-md"
      />
    </div>
  );
};

export default FoodList;
