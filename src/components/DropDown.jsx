import React from "react";

const DropDown = ({ handleFilterFood }) => {
  return (
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
  );
};

export default DropDown;
