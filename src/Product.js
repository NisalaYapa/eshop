import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title : title,
                image: image,
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
                
                {[...Array(Math.floor(Number(rating)))].map((_, i) => (<span key={i}>⭐</span>))}

                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
