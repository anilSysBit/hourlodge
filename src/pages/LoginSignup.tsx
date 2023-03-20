import React from 'react'
import Login from "../globalComponents/LoginSignup/Login"
import Signup from "../globalComponents/LoginSignup/Signup"
const LoginSignup = () => {
  return (
    <div className="login_signup_container">
        <Login/>
        <Signup/>
    </div>
  )
}

export default LoginSignup