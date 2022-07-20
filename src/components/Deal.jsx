import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Deal = () => {
  const deal = ["images/product-banner-1.jpg", "images/product-banner-2.jpg"];
  return (
    <section className="deal">
      <Title simple="deal" fancy="of the day" />
      <div className="box-container">
        {deal.map((item) => (
          <div class="box">
            <div class="image">
              <img src={item} alt="" />
            </div>
            <div class="content">
              <h3>special offer</h3>
              <h2>upto 50% off</h2>
              <Link to="/" class="btn">
                shop now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deal;
