import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
       <div className="company">
       <Link to="/"> Pradise Nursery </Link>
       </div>
       <div className="items">
       <Link to="/shop"> Plants </Link>
       
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
       </div>
      </div>
    </div>
  );
};
