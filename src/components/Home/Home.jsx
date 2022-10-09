import classes from "./Home.module.scss";
import person from "../../assets/images/home_note.svg";

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
        <button>My notes</button>
        <button>Add a new note</button>
      </div>
    </main>
  );
};

export default Home;
