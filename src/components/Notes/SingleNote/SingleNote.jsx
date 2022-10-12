import classes from "./SingleNote.module.scss";
const SingleNote = (props) => {
  return (
    <li className={classes["single-note"]}>
      <div className={classes["note-content"]}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <div className={classes["note-tools"]}>
        <div className={classes.tools}>note tools</div>
          <button>Delete Note</button>
      </div>
    </li>
  );
};

export default SingleNote;
