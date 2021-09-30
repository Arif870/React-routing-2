import React from "react";
import { useState, useEffect } from "react";
import Food from "../Food/Food";
import "./Foods.css";

export default function Foods() {
  let [foods, setFoods] = useState([]);
  let [text, setText] = useState("");

  let changehandlar = e => {
    let searchText = e.target.value;
    setText(searchText);
  };

  useEffect(() => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setFoods(data.meals));
  }, [text]);

  return (
    <div className="foods">
      <input
        onChange={changehandlar}
        type="text"
        placeholder="Search your foods.."
      />
      <div className="foodshow">
        {foods.map(food => (
          <Food key={food.idMeal} food={food} />
        ))}
      </div>
    </div>
  );
}
