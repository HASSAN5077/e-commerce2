import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section class="register">
      <form action="">
        <h3>Register now</h3>
        <input type="text" placeholder="Enter name.." class="box" />
        <input type="email" placeholder="Enter email..." class="box" />
        <input type="password" placeholder="enter password" class="box" />
        <input type="password" placeholder="retype password" class="box" />
        <button class="btn">register now</button>
        <p>already have account???</p>
        <Link class="btn" to="/login">login now</Link>
      </form>
    </section>
  )
}

export default Register