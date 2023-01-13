import React from "react";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct type={"Featured"} />
      <FeaturedProduct type={"Trending"} />
    </div>
  );
};

export default Home;
