import styles from "./TextPicker.module.scss";
const TextPicker = (props) => {
  return (
    <li
      style={{ backgroundColor: props.textColor }}
      className={styles["text-picker"]}
      // onClick={textColorHandler}
    ></li>
  );
};

export default TextPicker;
