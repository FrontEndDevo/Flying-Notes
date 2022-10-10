import styles from "./NotFound.module.scss";
import notfound from "../../assets/images/notfound.svg";
const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <h3>The page you are trying to visit does not exist</h3>
      <img src={notfound} alt="not-found" />
    </div>
  );
};

export default NotFound;