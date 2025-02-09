import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, imageurl, price, rating}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: imageurl,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {rating}
                </div>
            </div>

            <img src={imageurl} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
