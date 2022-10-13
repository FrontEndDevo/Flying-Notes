import React from "react";
import classes from "./Auth.module.scss";
const Auth = () => {
  return (
    <section className={classes.auth}>
      <div className={classes.wave}></div>
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
