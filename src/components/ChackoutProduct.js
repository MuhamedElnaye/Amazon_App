import React from "react";
import ratingIcon1 from "../images/Icons/star.png";
import ratingIcon2 from "../images/Icons/empstart.png";
import "./CheckoutProduct.css";
import { useAuth } from "../context/GlobalContext";
const ChackoutProduct = ({
  id,
  image,
  price,
  title,
  rating1,
  rating2,
  hiddenButton,
}) => {
  const { dispatch } = useAuth();
  const removeProductFromBasket = () => {
    dispatch({
      type: "REMOVE_PRODUCT_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="chackoutProduct">
      <img className="chackoutProduct-image" src={image} alt="product_Iamge" />
      <div className="chackoutProduct-info">
        <div className="chackoutProduct-title">{title}</div>
        <p className="chackoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="chackoutProduct-rating">
          {Array(rating1)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={ratingIcon1} alt="Ratingfull" />
              </p>
            ))}
          {Array(rating2)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={ratingIcon2} alt="Ratingempty" />
              </p>
            ))}
        </div>
        {!hiddenButton && (
          <button onClick={removeProductFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
};
export default ChackoutProduct;
