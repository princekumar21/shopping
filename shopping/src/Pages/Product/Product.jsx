import React, { useState } from "react";
import "./Product.scss";
const image = [
  "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F1e%2F491eacb95ad3db977d5a5de5e84eef58be3c7def.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F50%2F65%2F5065faef1d35bafd81b400d3feebefd53880fe27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
];
const Product = () => {
  const [viewImage, setViewImage] = useState(0);
  console.log(viewImage);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={image[0]}
            onClick={() => {
              setViewImage(0);
            }}
            alt=""
          />
          <img
            src={image[1]}
            onClick={() => {
              setViewImage(1);
            }}
            alt=""
          />
        </div>
        <div className="mainImg">
          <img src={image[viewImage]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Product;
