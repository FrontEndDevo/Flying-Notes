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
        <ul className={classes["all-notes"]}>{existingNotes}</ul>
      )}
    </div>
  );
};

export default UserNotes;
