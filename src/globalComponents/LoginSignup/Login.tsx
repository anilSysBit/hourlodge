import React, { useState } from "react";
import { useFormik } from "formik";
import Signup from "./Signup";

interface EFormValues {
  email: string;
  password: string;
}
const login = () => {
  const [enOTP, setEnOTP] = useState(false);
  const [otpBox, setOtpBox] = useState(false);
  const [num,setNum] = useState('')
  const [accFound,setAccFound] = useState(false);





  const LoginForm:React.FC= () => {
    const Eformik = useFormik<EFormValues>({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });
    return (
      <form
        action="#"
        onSubmit={Eformik.handleSubmit}
      >
        <div className="hour_form_control">
          <label htmlFor="email"> Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email.."
              onChange={Eformik.handleChange}
              onBlur={Eformik.handleBlur}
              value={Eformik.values.email}
              required
            />
        </div>
          <div className="hour_form_control">
            <label htmlFor="email">password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password.."
              onChange={Eformik.handleChange}
              onBlur={Eformik.handleBlur}
              value={Eformik.values.password}
              required
            />
          </div>
        <div className="hour_form_control button_control">
          <button
            className="global_button login_signup"
            onClick={handleLoginClick}
            type='submit'
          >
            {enOTP ? "Login with Password" : "Login"}
          </button>
          <button
            className="global_button login_signup"
            onClick={handleOTPclick}
            type='submit'
          >
            Get OTP
          </button>
        </div>
      </form>
    );
  };

  const PhoneForm:React.FC=()=>{
    const Pformik = useFormik<{ phone:string;}>({
      initialValues: {
        phone: "",
      },
      onSubmit: (values) => {
        setOtpBox(true);
        setNum(values.phone)
      },
    });
    return(
      <form
      action="#"
      onSubmit={Pformik.handleSubmit}
    >
      <div className="hour_form_control">
        <label htmlFor="email"> Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter phone......."
            onChange={Pformik.handleChange}
            onBlur={Pformik.handleBlur}
            value={Pformik.values.phone}
            required
          />
      </div>
      <div className="hour_form_control button_control">
        <button
          className="global_button login_signup"
          onClick={handleLoginClick}
        >
          {enOTP ? "Login with Password" : "Login"}
        </button>
        <button
          className="global_button login_signup"
          onClick={handleOTPclick}
        >
          Get OTP
        </button>
      </div>
    </form>
    )
  }

  const OTPBox: React.FC = () => {
    const OFormik = useFormik<{ OTP: string }>({
      initialValues: {
        OTP: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });
    const handleGoBack=()=>{
      setOtpBox(false);
    }
    return (
      <form onSubmit={OFormik.handleSubmit}>
        <div className="hour_form_control">
          <label htmlFor="OTP">Enter the Code sent to {num}</label>
          <input
            type="number"
            name="OTP"
            placeholder="X X X X X X"
            onChange={OFormik.handleChange}
            onBlur={OFormik.handleBlur}
            value={OFormik.values.OTP}
          />
        </div>
        <div className="hour_form_control button_control">
          <button
            className="global_button login_signup"
          >Submit</button>
                    <button
            className="global_button login_signup"
          onClick={handleGoBack}>Go Back</button>
        </div>
      </form>
    );
  };

  const handleOTPclick = (e:React.MouseEvent<HTMLButtonElement>) => {
    setEnOTP(true);
  };
  const handleLoginClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    setEnOTP(false);
  };
  return (
    <div className="login_main_container">
      <div className="form_container">
        <div className="login_title_container">
          <h1>{"Login/Signup"} to your account</h1>
          <h2>
            And access special rates and perks reserved for our loyal guests
          </h2>
          <h3>Doesn't Have an Account Get OTP</h3>
          <h3>Forgot Password Get OTP</h3>
        </div>
        <div className="form_box_container">
          <div className="thumbnail_container">
            <h1>Welcome to HourStay</h1>
            <p>Please Enter the details below </p>
          </div>
          {enOTP ? otpBox ? accFound?<OTPBox/>:<Signup/> :<PhoneForm/> : <LoginForm/>}
          
        </div>
      </div>
      <div className="hoteiler_login_box">
        <h1>Are you a Hoteiler??</h1>
        <button className="global_button">Login As hoteiler</button>
      </div>
    </div>
  );
};

export default login;
