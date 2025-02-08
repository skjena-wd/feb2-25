import { LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>
      <ul className="site-nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button
          className="site-btn"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;