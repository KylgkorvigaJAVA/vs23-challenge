import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3001/meals")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch meals");
                }
                return response.json();
            })
            .then(data => {
                console.log("Meals data: ", data);
                setMeals(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    return (
        <ul id="meals">
            {meals.map((meal, index) => (
                <MealItem key={index} meal={meal} />
            ))}
        </ul>
    )
}

export default Meals