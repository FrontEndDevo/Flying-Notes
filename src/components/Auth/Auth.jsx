import React from "react";
import classes from "./Auth.module.scss";
import auth_img from "../../assets/images/auth_img.svg";
const Auth = () => {
  return (
    <section className={classes.auth}>
      <div className={classes["wave-background"]}>
        <img src={auth_img} alt="auth-light-background" />
      </div>
      <div className={classes.content}>
        <div className={classes.user}>
          <img src="" alt="" />
          <h3>Welcome</h3>
        </div>
        <form>
          <div className={classes.field}>
            <label htmlFor="">Username</label>
            <i>Icon</i>
            <input type="text" name="" id="" />
          </div>
          <div className={classes.field}>
            <label htmlFor="">Password</label>
            <i>Icon</i>
            <input type="text" name="" id="" />
          </div>
          <button>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Auth;
