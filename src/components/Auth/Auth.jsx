import React, { useReducer, useState } from "react";
import classes from "./Auth.module.scss";
import auth_img from "../../assets/images/auth_img.svg";
import avatar from "../../assets/images/avatar.png";

// Initial State for input events:
const initialState = {
  emailInputVal: "",
  passwordInputVal: "",
  emailBorder: false,
  passwordBorder: false,
  emailLabel: false,
  passwordLabel: false,
};

// Username & Password events
const inputReducer = (state, action) => {
  switch (action.event) {
    case "EMAIL_FOCUS":
      return {
        ...state,
        emailBorder: true,
      };
    case "EMAIL_BLUR":
      return {
        ...state,
        emailBorder: false,
      };
    case "EMAIL_VALUE":
      return {
        ...state,
        emailInputVal: action.value,
      };

    case "PASSWORD_FOCUS":
      return {
        ...state,
        passwordBorder: true,
      };
    case "PASSWORD_BLUR":
      return {
        ...state,
        passwordBorder: false,
      };
    case "PASSWORD_VALUE":
      return {
        ...state,
        passwordInputVal: action.value,
      };

    default:
      return initialState;
  }
};

const Auth = () => {
  const [isMember, setIsMember] = useState(true);

  const switchAuthWayHandler = () => {
    setIsMember((state) => !state);
  };

  const [events, dispatch] = useReducer(inputReducer, initialState);

  const emailValue = events.emailInputVal;
  const passwordValue = events.passwordInputVal;

  // Username (onFocus & onBlur) events handlers:
  const emailChangeHandler = (e) => {
    dispatch({ event: "EMAIL_VALUE", value: e.target.value });
  };
  const emailFocusHandler = () => {
    dispatch({ event: "EMAIL_FOCUS" });
  };
  const emailBlurHandler = () => {
    dispatch({ event: "EMAIL_BLUR" });
  };

  // Password (onFocus & onBlur) events handlers:
  const passwordChangeHandler = (e) => {
    dispatch({ event: "PASSWORD_VALUE", value: e.target.value });
  };
  const passwordFocusHandler = () => {
    dispatch({ event: "PASSWORD_FOCUS" });
  };
  const passwordBlurHandler = () => {
    dispatch({ event: "PASSWORD_BLUR" });
  };

  // FORM SUBMMITION
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(events.emailInputVal);
    console.log(events.passwordInputVal);
    // This will reset values, thanks to default case.
    dispatch({});
  };

  // Set email classes:
  const emailFocus = `${classes.field} ${
    events.emailBorder ? `${classes.borders} ${classes.labels}` : ""
  } ${emailValue.length === 0 ? "" : classes.labels}`;

  // Set password classes:
  const passwordFocus = `${classes.field} ${
    events.passwordBorder ? `${classes.borders} ${classes.labels}` : ""
  } ${passwordValue.length === 0 ? "" : classes.labels}`;

  return (
    <section className={classes.auth}>
      <div className={classes["wave-background"]}>
        <img src={auth_img} alt="auth-light-background" />
      </div>
      <div className={classes.content}>
        <div className={classes.user}>
          <img src={avatar} alt="auth-avatar" />
          <h3>Welcome</h3>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className={emailFocus}>
            <label htmlFor="email">E-mail</label>
            <input
              value={emailValue}
              type="text"
              name="email"
              id="email"
              onFocus={emailFocusHandler}
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={passwordFocus}>
            <label htmlFor="password">Password</label>
            <input
              value={passwordValue}
              type="password"
              name="password"
              id="password"
              onFocus={passwordFocusHandler}
              onBlur={passwordBlurHandler}
              onChange={passwordChangeHandler}
            />
          </div>
          {isMember && (
            <p>
              Not a user?{" "}
              <span onClick={switchAuthWayHandler}>Sign up now</span>
            </p>
          )}
          {!isMember && (
            <p>
              Already have an account?{" "}
              <span onClick={switchAuthWayHandler}>Login now</span>
            </p>
          )}
          {isMember && <button>Login</button>}
          {!isMember && <button>Sign Up</button>}
        </form>
      </div>
    </section>
  );
};

export default Auth;
