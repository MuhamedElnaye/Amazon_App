import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Logino";
import { auth } from "./firenbase";
import { useAuth } from "./context/GlobalContext";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import "./App.css";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const App = () => {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe(
    "pk_test_51MyhxzLAVCzjpGSlJnrPyVHxGLo4eDWXNVx3IZMMDGFNf2Tmlk9jRwoYt3nW0WWxFpsyRjA4QpfcpQIMvBTPMoCt00iynMa28G"
  );
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />

        <Route path="*" element={<h1>This Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
