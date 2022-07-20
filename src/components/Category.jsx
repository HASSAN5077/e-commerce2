import React from "react";

const Category = () => {
  const data = [
    "images/cat_img1.png",
    "images/cat_img2.png",
    "images/cat_img3.png",
    "images/cat_img4.png",
    "images/cat_img5.png",
    "images/cat_img6.png",
    "images/cat_img6.png",
  ];
  return (
    <section className="category">
      <div className="box-container">
        {data.map((item) => (
          <div class="box">
            <img src={item} alt="" />
            <h2>Televisions</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
