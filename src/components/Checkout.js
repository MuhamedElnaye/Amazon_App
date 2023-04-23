import React from "react";
import chackoutImg from "../images/checkoutAd.jpg";
import { useAuth } from "../context/GlobalContext";
import ChackoutProduct from "./ChackoutProduct";
import "./Chackout.css";
import SubTotal from "./SubTotal";
const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="chackout">
      <div className="chackout-left">
        <img className="chackout-ad" src={chackoutImg} alt="ChackoutImage" />
        <div>
          <h3 className="chackout-title">
            Hello {user ? `${user.email}` : "Guest"}
          </h3>
          <h2>Your Shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <ChackoutProduct
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                rating1={item.rating1}
                rating2={item.rating2}
              />
            ))
          ) : (
            <h3 className="no-item">
              You Don't have any items in your basket.To buy one or more
              items,click <span>"Add to basket " </span>in Home Page.
            </h3>
          )}
        </div>
      </div>
      <div className="Chackout-right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
