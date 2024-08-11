import React from "react";
import { airplants } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Green Haven Nursery</h1>
      </div>
     <h1>Nursery Plants</h1>
     <div className="products">
        {airplants.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
