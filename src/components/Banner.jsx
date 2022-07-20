import React from "react";

const Banner = () => {
  const data = [
    "images/banner-1.jpg",
    "images/banner-2.jpg",
    "images/banner-3.jpg",
  ];
  return (
    <section className="banner">
      <div className="box-container">
        {data.map((item) => (
          <div class="box">
            <div class="image">
              <img src={item} alt="" />
            </div>
            <div class="content">
              <h3>special offer</h3>
              <h2>upto 50% off</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
