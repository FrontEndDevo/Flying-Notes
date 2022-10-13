import React, { useState } from "react";
import classes from "./Auth.module.scss";
import auth_img from "../../assets/images/auth_img.svg";
import avatar from "../../assets/images/avatar.png";
const Auth = () => {
  // Username (onFocus & onBlur) events handlers:
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const usernameFocusHandler = () => {
    setIsUsernameFocused(true);
  };
  const usernameBlurHandler = () => {
    setIsUsernameFocused(false);
  };
  // Password (onFocus & onBlur) events handlers:
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const passwordFocusHandler = () => {
    setIsPasswordFocused(true);
  };
  const passwordBlurHandler = () => {
    setIsPasswordFocused(false);
  };

  const usernameFocus = `${classes.field} ${
    isUsernameFocused ? classes.focus : ""
  }`;

  const passwordFocus = `${classes.field} ${
    isPasswordFocused ? classes.focus : ""
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
