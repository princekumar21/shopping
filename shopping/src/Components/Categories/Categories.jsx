import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="category">
      <div className="col">
        <div className="row">
          <img
            className="product-img"
            src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/5/tr:w-480,/450a91eK22DB182RD_1.jpg?rnd=20200526195200"
            alt=""
          />
          <Link className="link">
            <h3 className="img-text">Shoes</h3>
          </Link>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/0/tr:w-480,/50fd1aeRSO2023A_1.jpg?rnd=20200526195200"
            alt=""
          />
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            className="product-img"
            src="https://contents.mediadecathlon.com/p2175529/9c31f6680d8013a02f28d73b21d5e305/p2175529.jpg?format=auto&quality=70&f=650x0"
            alt=""
          />
          <Link className="link">
            <h3 className="img-text">Shoes</h3>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="row">
                <img
                  className="product-img"
                  src="https://contents.mediadecathlon.com/p2175529/9c31f6680d8013a02f28d73b21d5e305/p2175529.jpg?format=auto&quality=70&f=650x0"
                  alt=""
                />
                <Link className="link">
                  <h3 className="img-text">Shoes</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="row">
                <img
                  className="product-img"
                  src="https://contents.mediadecathlon.com/p2175529/9c31f6680d8013a02f28d73b21d5e305/p2175529.jpg?format=auto&quality=70&f=650x0"
                  alt=""
                />
                <Link className="link">
                  <h3 className="img-text">Shoes</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <img
              className="product-img"
              src="https://contents.mediadecathlon.com/p2175529/9c31f6680d8013a02f28d73b21d5e305/p2175529.jpg?format=auto&quality=70&f=650x0"
              alt=""
            />
            <Link className="link">
              <h3 className="img-text">Shoes</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
