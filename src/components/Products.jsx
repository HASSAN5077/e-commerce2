import React from "react";
import products from "../data/products";
import Title from "./Title";
const Products = () => {
    console.log(products);
  return (
    <section className="products">
    <Title simple='featured' fancy='products'/>
      <div className="box-container">
        {products.map((item) => (
          <div class="box">
            <div class="image">
              <img src={item.img[0]} alt="" class="original" />
              <img src={item.img[1]} alt="" class="hover" />
            </div>
            <div class="content">
              <h2>{item.name}</h2>
              <p>
                {item.discountPrice} <span>{item.price}</span>
              </p>
              <div class="icons">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class="side-icons">
              <i class="fas fa-shopping-cart"></i>
              <i class="fas fa-search-plus"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-share"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
