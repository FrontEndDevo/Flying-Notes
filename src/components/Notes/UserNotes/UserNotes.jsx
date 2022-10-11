import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleNote from "../SingleNote/SingleNote";
import classes from "./UserNotes.module.scss";

const UserNotes = () => {
  const userNotes = useSelector((state) => state.note.notes);
  const totalUserNotes = useSelector((state) => state.note.totalNotes);

  // Mapping on userNotes.
  const existingNotes = userNotes.map((note) => (
    <SingleNote key={note.title} title={note.title} content={note.content} />
  ));

  return (
    <div className={classes["user-notes"]}>
      {totalUserNotes === 0 && (
        <p className={classes["no-notes"]}>
          You have no notes, <Link to="/add-new-note">Add one?</Link>
        </p>
      )}
      {totalUserNotes !== 0 && (
        <div className={classes["all-notes"]}>
          <div className={classes["total-button-box"]}>
            <h4>
              Your Notes are{" "}
              <span className={classes.signs}>
                &lt;
                <span className={classes.number}> {totalUserNotes} </span>
                &gt;
              </span>
            </h4>
            <Link to="/add-new-note">Add another one?</Link>
          </div>
          <ul>{existingNotes}</ul>
        </div>
      )}
    </div>
  );
};

export default UserNotes;
