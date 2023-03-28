import React from 'react'
import '../styles/partials/loginsignup.css'
import Login from "../globalComponents/LoginSignup/Login"
import Signup from "../globalComponents/LoginSignup/Signup"

const LoginSignup = () => {
  return (
    <div className="login_signup_container">
        <Login/>
    </div>
  )
}

export default LoginSignup