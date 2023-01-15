import React from "react";
import "./List.scss";
import Cards from "../Cards/Cards";
const data = [
  {
    id: 1,
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F70%2F56%2F70566d2add88ad3a93428a49e806041ece6fa7ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    img2: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F56%2F37%2F56377ee4d2d3d860f5bf1cb946e4108f013e7e30.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    title: "Slim Fit Fine-knit polo-neck jumper",
    isNew: true,
    oldPrice: 2000,
    price: 1499,
  },
  {
    id: 2,
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb7%2Fcd%2Fb7cdf41d2aab2a9ec6ff72cc17c08737aeebf33a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    img2: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F78%2F64%2F7864997378aaff7ea47fa82d8b3632d1be5cabdd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    title: "The Sweater",
    isNew: true,
    oldPrice: 3500,
    price: 2999,
  },
  {
    id: 3,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F1e%2F491eacb95ad3db977d5a5de5e84eef58be3c7def.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    img2: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F50%2F65%2F5065faef1d35bafd81b400d3feebefd53880fe27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    title: "Button-front bouclé dress",
    isNew: true,
    oldPrice: 2000,
    price: 1499,
  },
  {
    id: 4,
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fee%2F57%2Fee57a30bfe953ca3c0373ad95852e455dfb17a61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    img2: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F25%2Fad%2F25ad5d2ae64403b15c25c824fe7cf09541a2fe27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    title: "Brushed-inside leggings",
    isNew: false,
    oldPrice: 999,
    price: 799,
  },
];
const List = () => {
  return (
    <div className="list">
      {data.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
