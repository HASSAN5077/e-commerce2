import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section class="about">
      <div class="image">
        <img src="images/about-img.png" alt="" />
      </div>

      <div class="content">
        <h3>Our stroy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, ab
          dolorem libero magni animi ipsum nam, cum itaque facere sed a tenetur.
          Dolore eligendi iusto maxime harum doloremque facere voluptatem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut ad
          soluta reprehenderit totam beatae saepe illo vel consequuntur commodi?
          Quo ea officiis voluptates alias quod quam ducimus itaque sequi?
        </p>
        <Link to="/" class="btn">read more</Link>
      </div>
    </section>
  )
}

export default About