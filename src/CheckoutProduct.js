import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://cdn.mos.cms.futurecdn.net/c4oFFiYeWTjAjoCffwcetR.jpg" alt="" className="checkoutProduct__image" />

            <div className="product__info">
                <p className="checkoutProduct__title">This is the product in the cart</p>
                <p className="checkoutProductPrice">$30</p>

                <div className="checkoutProduct__rating">
                    ⭐⭐⭐⭐
                </div>

                <button>Remove From Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
