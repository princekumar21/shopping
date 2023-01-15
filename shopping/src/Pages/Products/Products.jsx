import React, { useState } from "react";
import "./Products.scss";
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";
const Products = () => {
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sort, setSort] = useState("");
  const CategoryParamId = parseInt(useParams().id);
  const changePriceRange = (e) => {
    setMaxPrice(e.target.value);
  };
  const changeSort = (e) => {
    setSort(e);
  };
  return (
    <div className="products">
      <div className="left">
        <div className="fliterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label for="1">Shoe</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label for="2">Hoodie</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label for="3">Skirt</label>
          </div>
        </div>
        <div className="fliterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>500</span>
            <input
              type="range"
              min={500}
              max={10000}
              onChange={(e) => {
                changePriceRange(e);
              }}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="fliterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => {
                changeSort(e.target.value);
              }}
            />
            <lable for="asc">Price(Low to High)</lable>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="des"
              value="des"
              name="price"
              onChange={(e) => {
                changeSort(e.target.value);
              }}
            />
            <lable for="des">Price(High to Low)</lable>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg"
          src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/fermion/images/category_slider/img/tr:w-3806,/Indianwear_Teen%20Store_Desktop%20copy.jpg?rnd=20200526195200"
          alt=""
        />

       <div className="listContainer">
       <List
          CategoryParamId={CategoryParamId}
          sort={sort}
          maxPrice={maxPrice}
        />
       </div>
      </div>
    </div>
  );
};

export default Products;
