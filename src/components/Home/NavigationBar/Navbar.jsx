import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>My Notes</h1>
      <input type="search" placeholder="Search for a note" />
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
    </div>
  );
};

export default Navbar;
