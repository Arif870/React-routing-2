import React from "react";
import "./Food.css";

export default function Food(props) {
  let { strMeal, strMealThumb, strInstructions } = props.food;
  return (
    <div className="food">
      <div className="card">
        <img src={strMealThumb} className="card-img-top" alt="food img" />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{strInstructions.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
}
