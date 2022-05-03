import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./HomePage.module.css";
import userSlice from "../store/slices/user-slice";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { name, email, phoneNumber, photo } = useSelector(
    (state) => state.user.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(userSlice.actions.logout());
  };

  useEffect(() => {
    console.log("Use Effect Run of Home");
    if (name === "") {
      navigate("/signup", { replace: true });
    }
  });

  return (
    <div className={classes.profile}>
      <div className={classes["img-wrapper"]}>
        <img className={classes.img} src={photo.url} alt="img" />
      </div>
      <div>
        <p>
          {`Hello " ${name} ", you are registered with the email id - " ${email} " and phone number - " ${phoneNumber} "`}
        </p>
      </div>
      <div>
        <button onClick={handleClick} className={classes["logout-btn"]}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;
