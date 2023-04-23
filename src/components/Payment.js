import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/GlobalContext";
import "./Payment.css";
import ChackoutProduct from "./ChackoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/AppReducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./Axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firenbase";
const Payment = () => {
  const { basket, user, dispatch } = useAuth();
  const [clientSecret, setClientSecert] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  // console.log(user);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecert(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);
  const handelChange = (e) => {
    // e.preventDefault();
    setDisabled(e.empty);
    setError(error && error.message);
  };
  const handelSubmite = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
        setDoc(ref, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders", { replace: true });
        dispatch({
          type: "EMPTY_BASKET",
        });
      });
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Chackout (
          <Link to="/checkout" className="items-number">
            {basket.length}
            {basket.length > 1 ? " items" : " item"}
          </Link>
          )
        </h1>
        {/* Address */}
        <div className="payment-section">
          <h3 className="payment-title">Delivery Address</h3>
          <div className="payment-address">
            <h4>{user ? `${user.email}` : "Geust"}</h4>
            <h4>Alexandire Egypt</h4>
          </div>
        </div>
        {/* Review Items */}
        <div className="payment-section">
          <h3 className="payment-title">Review Items and Delivery</h3>
          <div className="payment-items">
            {basket.map((item) => (
              <ChackoutProduct
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                rating1={item.rating1}
                rating2={item.rating2}
              />
            ))}
          </div>
        </div>
        {/* payment Method */}
        <div className="payment-section">
          <h3 className="">Payment Method </h3>
          <div className="payment-details">
            <form onSubmit={handelSubmite}>
              <CardElement onChange={handelChange} />
              <div className="payment-pricecontainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>
                      Order Total :<strong> {value}</strong>
                    </h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  type="submit"
                  className="buy-now"
                  disabled={processing || succeeded || disabled}
                >
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
