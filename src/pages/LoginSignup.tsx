import React from 'react'
import '../styles/partials/loginsignup.css'
import Login from "../globalComponents/LoginSignup/Login"
import Signup from "../globalComponents/LoginSignup/Signup"
import Navigation from '../globalComponents/home/Navigation'

const LoginSignup = () => {
  return (
    <div className="login_signup_container">
      <div className="navigation_container">
        <Navigation/>
      </div>
        <Login/>
        <div className="hoteiler_login_box">
        <h1>Are you a Hoteiler??</h1>
        <button className="global_button">Login As hoteiler</button>
      </div>
    </div>
  )
}

export default LoginSignup