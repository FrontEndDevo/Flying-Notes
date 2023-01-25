import styles from "./ColorPicker.module.scss";
const ColorPicker = (props) => {
  return (
    <li className={styles["color-picker"]}>
      <div
        className={`${{ backgroundColor: props.color }} ${styles.color}`}
      ></div>
    </li>
  );
};

export default ColorPicker;
