import React from "react";
import classes from "./meals-list.module.css";
import MealItem from "./meal-item";

const MealsList = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsList;
