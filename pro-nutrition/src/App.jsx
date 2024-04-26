import React, { useState } from "react";
import Search from "./components/Search";
import FoodData from "./resources/FoodData";
import FoodBox from "./components/FoodBox";
import './App.css'

export default function App() {
  console.log(FoodData);
  const [search, setSearch] = useState("");
  const testArr = FoodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div id="parent">
      <h1>Pro-Nutrition</h1>
      <Search setSearch={setSearch} />
      <div id="food-box-parent">
        {testArr.length == 0 ? (
          <h1>No Results</h1>
        ) : (
          testArr.map((item) => {
            return (
              <FoodBox
                id={item.id}
                img={item.img}
                name={item.name}
                cal={item.cal}
              />
            );
          })
        )}
      </div>
    </div>
  );
}