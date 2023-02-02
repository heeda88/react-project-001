import styles from "../css/GridDiv.module.css";

function GridDiv() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
        <div className={styles.item}>7</div>
        <div className={styles.item}>8</div>
        <div className={styles.item}>9</div>
        <div className={styles.item}>10</div>
        <div className={styles.item}>11</div>
        <div className={styles.item}>12</div>
      </div>
    </div>
  );
}

export default GridDiv;
