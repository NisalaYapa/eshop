import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="product__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProductPrice">{price}</p>

                <div className="checkoutProduct__rating">
                

                {[...Array(Math.floor(Number(rating)))].map((_, i) => (<span key={i}>⭐</span>))}
                </div>

                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
