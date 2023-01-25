import styles from "./ColorPicker.module.scss";
const ColorPicker = (props) => {
  return (
    <li
      style={{ backgroundColor: props.color }}
      className={styles["color-picker"]}
    >
      <div className={styles.color}></div>
    </li>
  );
};

export default ColorPicker;
