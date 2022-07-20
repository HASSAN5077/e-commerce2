import React from "react";
import Arrivals from "../components/Arrivals";
import Banner from "../components/Banner";
import HomeSlider from "../components/HomeSlider";
import arrivals from "../data/arrival";
const Home = () => {
  console.log(arrivals);
  return (
    <>
      <HomeSlider />
      <Banner />
      <Arrivals arrivals={arrivals} />
    </>
  );
};

export default Home;
