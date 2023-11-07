import { useState } from "react";
import "./App.css";
import MenuData from "./data/MenuData";

function App() {
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
  return (
    <div className="min-h-screen">
      <nav className="flex justify-between items-center p-8 bg-slate-900 text-white">
        <h2 className="text-2xl font-bold">Dynamic DropDown</h2>
        <select
          className="text-black p-3 rounded-lg text-lg"
          onChange={handleFilterFood}
        >
          <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
          <option value="ผัด-ทอด">ผัด-ทอด</option>
          <option value="สเต็ก">สเต็ก</option>
          <option value="แกง-ต้มยำ">แกง-ต้มยำ</option>
          <option value="เครื่องดื่ม">เครื่องดื่ม</option>
        </select>
      </nav>
      <div className="flex flex-row justify-center items-center flex-wrap gap-x-10">
        {food.map((item, index) => {
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
        })}
      </div>
    </div>
  );
}

export default App;
