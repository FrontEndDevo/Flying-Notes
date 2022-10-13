import React, { useReducer, useState } from "react";
import classes from "./Auth.module.scss";
import auth_img from "../../assets/images/auth_img.svg";
import avatar from "../../assets/images/avatar.png";

// Initial State for input events:
const initialState = {
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

    default:
      return initialState;
  }
};

const Auth = () => {
  const [isMember, setIsMember] = useState(true);

  const switchSigningHandler = () => {
    setIsMember((state) => !state);
  };
  const [events, dispatch] = useReducer(inputReducer, initialState);

  // Username (onFocus & onBlur) events handlers:
  const emailFocusHandler = () => {
    dispatch({ event: "EMAIL_FOCUS" });
  };
  const emailBlurHandler = () => {
    dispatch({ event: "EMAIL_BLUR" });
  };

  // Password (onFocus & onBlur) events handlers:
  const passwordFocusHandler = () => {
    dispatch({ event: "PASSWORD_FOCUS" });
  };
  const passwordBlurHandler = () => {
    dispatch({ event: "PASSWORD_BLUR" });
  };

  // FORM SUBMMITION
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  // Set email classes:
  const emailFocus = `${classes.field} ${
    events.emailBorder ? `${classes.borders} ${classes.labels}` : ""
  }`;

  // Set password classes:
  const passwordFocus = `${classes.field} ${
    events.passwordBorder ? `${classes.borders} ${classes.labels}` : ""
  }`;

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
              type="text"
              name="email"
              id="email"
              onFocus={emailFocusHandler}
              onBlur={emailBlurHandler}
            />
          </div>
          <div className={passwordFocus}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onFocus={passwordFocusHandler}
              onBlur={passwordBlurHandler}
            />
          </div>
          {isMember && (
            <p>
              Not a user?{" "}
              <span onClick={switchSigningHandler}>Sign up now</span>
            </p>
          )}
          {!isMember && (
            <p>
              Already have an account?{" "}
              <span onClick={switchSigningHandler}>Login now</span>
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
