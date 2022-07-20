import React from "react";

const NewsLetter = () => {
  return (
    <section class="newsLetter">
      <div class="content">
        <h2>newsletter</h2>
        <p>subscribe for weekly newsletter</p>
      </div>
      <div class="input">
        <form action="">
          <input type="email" placeholder="enter your mail here...." />
          <button class="btn">subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
