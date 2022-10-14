import React, { useReducer, useState } from "react";
import classes from "./Auth.module.scss";
import auth_img from "../../assets/images/auth_img.svg";
import avatar from "../../assets/images/avatar.png";
import { signInOrSignUp } from "../../helpers/AllHelpers";

// Regular Expressions for email and password validation:
const emailRegExp = /(.+)@(.+).(com|net|org|info)/; // should be something like this test@test.com
const passwordRegExp = /[0-9]{8,}/; // Should contain at least 8 digits.

// Initial State for input events:
const initialState = {
  emailInputVal: "",
  emailBorder: false,
  emailLabel: false,
  isEmailValid: false,
  passwordInputVal: "",
  passwordBorder: false,
  passwordLabel: false,
  isPasswordValid: false,
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
    case "EMAIL_VALIDATION":
      return {
        ...state,
        isEmailValid: action.value,
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
    case "PASSWORD_VALIDATION":
      return {
        ...state,
        isPasswordValid: action.value,
      };

    default:
      return initialState;
  }
};

const Auth = () => {
  const [isMember, setIsMember] = useState(true);
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const switchAuthWayHandler = () => {
    setIsMember((state) => !state);
  };

  const [events, dispatch] = useReducer(inputReducer, initialState);

  // Input Values.
  const emailValue = events.emailInputVal;
  const passwordValue = events.passwordInputVal;

  // Input Validity
  const isEmailValid = events.isEmailValid;
  const isPasswordValid = events.isPasswordValid;

  // Username (onFocus & onBlur & onChange) events handlers:
  const emailChangeHandler = (e) => {
    dispatch({ event: "EMAIL_VALUE", value: e.target.value });

    // Check the validity of "email":
    const emailVal = e.target.value;
    const isValid = emailRegExp.test(emailVal.trim());
    dispatch({ event: "EMAIL_VALIDATION", value: isValid });
  };

  const emailFocusHandler = () => {
    dispatch({ event: "EMAIL_FOCUS" });
  };

  const emailBlurHandler = () => {
    dispatch({ event: "EMAIL_BLUR" });
  };

  // Password (onFocus & onBlur & onChange) events handlers:
  const passwordChangeHandler = (e) => {
    dispatch({ event: "PASSWORD_VALUE", value: e.target.value });

    // Check the validity of "email":
    const passwordVal = e.target.value;
    const isValid = passwordRegExp.test(passwordVal.trim());
    dispatch({ event: "PASSWORD_VALIDATION", value: isValid });
  };

  const passwordFocusHandler = () => {
    dispatch({ event: "PASSWORD_FOCUS" });
  };

  const passwordBlurHandler = () => {
    dispatch({ event: "PASSWORD_BLUR" });
  };

  // FORM SUBMMITION
  let statusMsg = (
    <p className={classes.valid}>Your account was created successfully</p>
  );
  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isMember && isEmailValid && isPasswordValid) {
      // Send Request to firebase to create the user account:
      const userData = {
        email: emailValue.trim(),
        password: passwordValue.trim(),
      };

      signInOrSignUp(userData, "SIGN_UP").catch((error) => {
        statusMsg = <p className={classes.invalid}>{error}</p>;
      });

      setIsAccountCreated(true);
      // To disappear the message after 5 seconds.
      setTimeout(() => {
        setIsAccountCreated(false);
      }, 5000);
      // This will reset values, thanks to default case.
      dispatch({});
    }
  };

  // Set email classes:
  const emailFocus = `${classes.field} ${
    events.emailBorder ? `${classes.borders} ${classes.labels}` : ""
  } ${emailValue.length === 0 ? "" : classes.labels}`;

  const emailValidity = !isEmailValid && !isMember && emailValue.length > 0 && (
    <p className={classes.invalid}>The E-mail is invalid!</p>
  );

  // Set password classes:
  const passwordFocus = `${classes.field} ${
    events.passwordBorder ? `${classes.borders} ${classes.labels}` : ""
  } ${passwordValue.length === 0 ? "" : classes.labels}`;

  const passwordValidity = !isPasswordValid &&
    !isMember &&
    passwordValue.length > 0 && (
      <p className={classes.invalid}>The password is invalid!</p>
    );

  return (
    <section className={classes.auth}>
      <div className={classes["wave-background"]}>
        <img src={auth_img} alt="auth-light-background" />
      </div>
      <div className={classes.content}>
        <div className={classes.user}>
          <img src={avatar} alt="auth-avatar" />
          <h3>{isMember ? "Welcome Back" : "Welcome"}</h3>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className={emailFocus}>
            <label htmlFor="email">E-mail</label>
            <input
              value={emailValue}
              type="text"
              name="email"
              id="email"
              required
              onFocus={emailFocusHandler}
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
            />
          </div>
          {emailValidity}
          <div className={passwordFocus}>
            <label htmlFor="password">Password</label>
            <input
              value={passwordValue}
              type="password"
              name="password"
              id="password"
              required
              onFocus={passwordFocusHandler}
              onBlur={passwordBlurHandler}
              onChange={passwordChangeHandler}
            />
          </div>
          {passwordValidity}
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
          <button>{isMember ? "login" : "Sign up"}</button>
        </form>
        {isAccountCreated && statusMsg}
      </div>
    </section>
  );
};

export default Auth;
