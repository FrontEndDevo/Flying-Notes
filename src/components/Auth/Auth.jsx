import React, { useReducer } from "react";
import classes from "./Auth.module.scss";
import auth_img from "../../assets/images/auth_img.svg";
import avatar from "../../assets/images/avatar.png";

// Initial State for input events:
const initialState = {
  usernameBorder: false,
  passwordBorder: false,
  usernameLabel: false,
  passwordLabel: false,
};

// Username & Password events
const inputReducer = (state, action) => {
  switch (action.event) {
    case "USERNAME_FOCUS":
      return {
        ...state,
        usernameBorder: true,
      };
    case "USERNAME_BLUR":
      return {
        ...state,
        usernameBorder: false,
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
  const [events, dispatch] = useReducer(inputReducer, initialState);

  // Username (onFocus & onBlur) events handlers:
  const usernameFocusHandler = () => {
    dispatch({ event: "USERNAME_FOCUS" });
  };
  const usernameBlurHandler = () => {
    dispatch({ event: "USERNAME_BLUR" });
  };

  // Password (onFocus & onBlur) events handlers:
  const passwordFocusHandler = () => {
    dispatch({ event: "PASSWORD_FOCUS" });
  };
  const passwordBlurHandler = () => {
    dispatch({ event: "PASSWORD_BLUR" });
  };

  // Set username classes:
  const usernameFocus = `${classes.field} ${
    events.usernameBorder ? `${classes.borders} ${classes.labels}` : ""
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
        <form>
          <div className={usernameFocus}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onFocus={usernameFocusHandler}
              onBlur={usernameBlurHandler}
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
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Auth;
