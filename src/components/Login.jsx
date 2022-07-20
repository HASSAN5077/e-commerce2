import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='login'>
        <form action="">
        <h3>login now</h3>
        <input type="email" placeholder="Enter email.." class="box" />
        <input type="password" placeholder="Enter password..." class="box" />
        <div class="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label for="remember-me"> remember me </label>
        </div>
        <button class="btn">Login now</button>
        <p>don't have account???</p>
        <Link class="btn" to="/register">register now</Link>
      </form>
    </section>
  )
}

export default Login