import React from 'react';
import "./Product.css";

function Product({ Title, price, rating, imageurl }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{Title}</p>
        <p className="product__price">{price}</p>
        <div className="product__rating">{rating}</div>
      </div>
      <img src={imageurl} alt={Title} className="product__image" />
      <button className="add__toCart">Add To Cart</button>
    </div>
  );
}

export default Product;
