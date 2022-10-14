import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { AuthActions } from "../../store/auth-slice";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
    history.replace("/authentication");
  };

  return (
    <div className={styles.navbar}>
      <h1>My Notes</h1>

      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/my-notes">
            My Notes
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/add-new-note">
            Add a Note
          </NavLink>
        </li>
      </ul>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Navbar;
