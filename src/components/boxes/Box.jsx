import styles from "./box.module.css";
const Box = ({ icon, text1, text2, text3, iconColor, red }) => {
  return (
    <div className={styles.box}>
      <div className={styles.icon} style={{ backgroundColor: iconColor }}>
        {icon}
      </div>
      <div className={styles.text}>
        <p className={styles.boxTitle}>{text1}</p>
        <p className={styles.boxBoldText}>{text2}</p>
        <p className={styles.boxText}>
          <span className={red ? styles.boxRedText : styles.boxGreenText}>
            &nbsp;{text3}
          </span>
          this month
        </p>
      </div>
    </div>
  );
};

export default Box;
