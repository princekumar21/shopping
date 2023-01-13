import React from "react";
import { Link } from "react-router-dom";
import "./Cards.scss";
const Cards = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="cards">
        <div className="image">
          {item.isNew && <span>New Arrival</span>}
          <img src={item.img} className="mainImg" alt="" />
          <img src={item.img2} className="secImg" alt="" />
        </div>
        <h5 className="title">{item.title}</h5>
        <div className="prices">
          <h6>Rs. {item.oldPrice}.00</h6>
          <h6>Rs. {item.price}.00</h6>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
