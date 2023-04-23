import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../images/login-logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { auth } from "../firenbase";
const Logino = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => error.message);
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch(() => console.log("this Acount Not Found"));
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={LoginImg} className="login-logo" alt="LoginImage" />
      </Link>
      <div className="login-container">
        <h1>Sing in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" onClick={signIn}>
            Sign in
          </button>
          <p>
            By continuing you agree to Amazon's Fake Clone conditions of use and
            privacy Notice
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Logino;
