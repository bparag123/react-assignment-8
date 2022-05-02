import { useFormik } from "formik";
import React, { useEffect } from "react";
import SignupSchema from "../schema/signup.schema";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../store/slices/user-slice";
import { useNavigate } from "react-router-dom";
import classes from "./SignUpForm.module.css";
import img from "../assets/login.jpg";

const SignUpform = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      photo: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const { confirmPassword, ...data } = values;
      dispatch(userSlice.actions.addUser(data));
    },
  });

  useEffect(() => {
    console.log("Use Effect Run of Signup");
    if (user.user.name !== "") {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className={classes["signup_wrapper"]}>
      <div className={classes["form_wrapper"]}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            id="photo"
            onChange={(e) => {
              console.log(URL.createObjectURL(e.target.files[0]));
              const { size, name, type } = e.target.files[0];
              const data = {
                size,
                name,
                type,
                url: URL.createObjectURL(e.target.files[0]),
              };
              formik.setFieldValue("photo", data);
            }}
          />
          {formik.touched.photo && formik.errors.photo && (
            <p>{formik.errors.photo}</p>
          )}

          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name && (
            <p>{formik.errors.name}</p>
          )}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p>{formik.errors.phoneNumber}</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p>{formik.errors.confirmPassword}</p>
          )}
          <button type="submit">Submit</button>
          <button type="reset" onClick={formik.handleReset}>Reset</button>
        </form>
      </div>
      <div className={classes["login_image"]}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SignUpform;
