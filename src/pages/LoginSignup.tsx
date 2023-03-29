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
    </div>
  )
}

export default LoginSignup