import React from "react";
import { useState } from "react";
import { useAuth } from "../context/GlobalContext";
import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firenbase";
import Order from "./Order";
import "./Orders.css";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const collRef = collection(db, "users", user?.uid, "orders");
      const orderRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(orderRef, (querySnapShot) => {
        setOrders(
          querySnapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
