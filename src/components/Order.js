import moment from "moment";
import React from "react";
import ChackoutProduct from "./ChackoutProduct";
import CurrencyFormat from "react-currency-format";
import "./Order.css";
const Order = ({ order }) => {
  return (
    <div className="oeder">
      <p>{moment.unix(order.data.created).format("MMMM DD YYYY h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <ChackoutProduct
          key={item.id}
          id={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
          rating1={item.rating1}
          rating2={item.rating2}
          hiddenButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">
            Order Total :<strong> {value}</strong>
          </h3>
        )}
        decimalScale={2}
        value={order.data.amount * 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
