import React from "react";
import rateicon1 from "../images/Icons/star.png";
import rateicon2 from "../images/Icons/empstart.png";
import "./Product.css";
import { useAuth } from "../context/GlobalContext";
const Product = ({ id, image, price, title, rating1, rating2 }) => {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        title: title,
        rating1: rating1,
        rating2: rating2,
      },
    });
  };
  // console.log(basket);
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating1)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={rateicon1} alt="rateicon1" />
            </p>
          ))}
        {Array(rating2)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={rateicon2} alt="rateicon2" />
            </p>
          ))}
      </div>
      <img src={image} alt="productImg" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};
export default Product;
