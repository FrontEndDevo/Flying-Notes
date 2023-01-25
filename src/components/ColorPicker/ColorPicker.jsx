import styles from "./ColorPicker.module.scss";
const ColorPicker = (props) => {
  return (
    <li
      style={{ backgroundColor: props.color }}
      className={styles["color-picker"]}
    >
    </li>
  );
};

export default ColorPicker;
