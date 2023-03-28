import React from "react";
import { useFormik } from "formik";

interface SformData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobileNumber: string;
  OTP: number | undefined;
}
const Signup = () => {
  const Sformik = useFormik<SformData>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      OTP: undefined,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="signup_form" action="#" onSubmit={Sformik.handleSubmit}>
      <div className="hour_form_control">
        <label htmlFor="OTP">FirstName</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter Firstname"
          onChange={Sformik.handleChange}
          onBlur={Sformik.handleBlur}
          value={Sformik.values.firstName}
          required
        />
      </div>
      <div className="hour_form_control">
        <label htmlFor="OTP">LastName</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Lastname"
          onChange={Sformik.handleChange}
          onBlur={Sformik.handleBlur}
          value={Sformik.values.lastName}
          required
        />
      </div>
      <div className="hour_form_control">
        <label htmlFor="OTP">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={Sformik.handleChange}
          onBlur={Sformik.handleBlur}
          value={Sformik.values.email}
          required
        />
      </div>
      <div className="hour_form_control">
        <label htmlFor="OTP">Password</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter Password"
          onChange={Sformik.handleChange}
          onBlur={Sformik.handleBlur}
          value={Sformik.values.password}
          required
        />
      </div>
      <div className="hour_form_control">
        <label htmlFor="OTP">Confirm Password</label>
        <input
          type="text"
          name="firstName"
          placeholder="Confirm Password"
          onChange={Sformik.handleChange}
          onBlur={Sformik.handleBlur}
          value={Sformik.values.confirmPassword}
          required
        />
      </div>
      <div className="hour_form_control">
        <label htmlFor="OTP">Phone</label>
        <input
            type="number"
            name="mobileNumber"
            placeholder="Enter phone......."
            onChange={Sformik.handleChange}
            onBlur={Sformik.handleBlur}
            value={9816284342}
            disabled
          />
      </div>
      <div className="hour_form_control">
        <label htmlFor="OTP">OTP</label>
        <input
          type="text"
          name="firstName"
          placeholder="X X X X X X"
          onChange={Sformik.handleChange}
          onBlur={Sformik.handleBlur}
          value={Sformik.values.firstName}
          required
        />
      </div>
      <div className="hour_form_control button_control">
        <button
          className="global_button login_signup"
          type="submit"
        >Submit</button>
       </div>
    </form>
  );
};

export default Signup;
