import React from 'react'
import Title from './Title'

const Arrivals = ({arrivals}) => {
console.log(arrivals)
    const display = arrivals.map(item=>(
        <div class="box">
          <div class="image">
            <img src={item.img[0]} class="main-img" alt="" />
            <img src={item.img[1]} class="hover-img" alt="" />
          </div>
          <div class="content">
            <h3>{item.product}</h3>
            <p>$249.99 <span>$399.99</span></p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
    ))
  return (
    <section className="arrivals">
      <Title simple='New' fancy='Arrivals'/>
        <div className="box-container">{display}</div>
    </section>
  )
}

export default Arrivals