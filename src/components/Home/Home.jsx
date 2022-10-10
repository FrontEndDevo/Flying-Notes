import classes from "./Home.module.scss";
import person from "../../assets/images/home_note.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={classes.home}>
      <img src={person} alt="home-note-icon" />
      <h2>One app to replace them all</h2>
      <div className={classes.notes}>
        <p>Notes in front of your eyes</p>
        <p>Notes in your pocket</p>
        <p>Notes in your mind</p>
      </div>
      <div className={classes.buttons}>
        <Link to="/my-notes">My notes</Link>
        <Link to="/add-new-note">Add a new note</Link>
      </div>
    </main>
  );
};

export default Home;
