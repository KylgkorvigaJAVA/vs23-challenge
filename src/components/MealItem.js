import React from "react";
import "../index.css";

const MealItem = (props) => {
    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
                <div>
                    <h3>{props.meal.name}</h3>
                    <p>props.meal.price</p>
                    <p>{props.meal.description}</p>
                </div>
                <p>
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>

    )
}

export default MealItem