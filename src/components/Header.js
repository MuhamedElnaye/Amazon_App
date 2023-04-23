import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/header-logo.png";
import searchIcon from "../images/Icons/searchIcon.png";
import shoppingCart from "../images/Icons/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../context/GlobalContext";
import { auth } from "../firenbase";
const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" alt="logo-img" src={logo} />
      </Link>
      <div className="header-search">
        <input
          placeholder="Search"
          className="header-searchInput"
          type="text"
        />
        <img className="header-searchIcon" src={searchIcon} alt="Search icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt="shoppingCart" />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
