import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { AuthActions } from "../../store/auth-slice";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
    // Redirect user to login page.
    history.replace("/Flying-Notes/");
    // Remove this item from localStorage.
    localStorage.removeItem("isAuth");
  };

  return (
    <div className={styles.navbar}>
      <h1>Flying Notes</h1>

      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/Flying-Notes/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/Flying-Notes/my-notes">
            My Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            to="/Flying-Notes/add-new-note"
          >
            Add a Note
          </NavLink>
        </li>
      </ul>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Navbar;
