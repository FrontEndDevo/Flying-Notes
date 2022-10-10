import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./UserNotes.module.scss";

const UserNotes = () => {
  const userNotes = useSelector((state) => state.note.notes);
  const totalUserNotes = useSelector((state) => state.note.totalNotes);

  return (
    <div className={classes["user-notes"]}>
      {totalUserNotes === 0 && (
        <p className={classes["no-notes"]}>
          You have no notes, <Link to="/add-new-note">Add one?</Link>
        </p>
      )}
      {totalUserNotes !== 0 && (
        <div className={classes["all-notes"]}>UserNotes</div>
      )}
    </div>
  );
};

export default UserNotes;
