import { useState } from "react";
import MenuData from "../data/MenuData";

const useFood = () => {
  const [food, setFood] = useState(MenuData);

  const handleFilterFood = (e) => {
    if (e.target.value === "เมนูทั้งหมด") {
      setFood(MenuData);
    } else {
      const selectFood = e.target.value;
      const result = MenuData.filter((item) => item.menu === selectFood); //นำ DB มา filter ไม่ใช่ state
      setFood(result);
    }
  };
  return { food, setFood, handleFilterFood };
};

export default useFood;
