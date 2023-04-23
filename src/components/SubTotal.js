import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GlobalContext";
import { getBasketTotal } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";
import "./SubTotal.css";
const SubTotal = () => {
  const navigate = useNavigate();
  const { basket } = useAuth();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* */}
              SubTotal ({basket?.length}
              {basket?.length > 1 ? " items" : " item"})
              <strong>:{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
