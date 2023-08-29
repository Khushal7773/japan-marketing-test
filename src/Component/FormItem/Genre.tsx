import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import maskedIcon from "../../assets/maskedicon.png";

const Genre: FunctionComponent = () => {
    return (
      <div className={styles.frameParent4}>
        <div className={styles.wrapper}>
          <b className={styles.b2}>ジャンル</b>
        </div>
        <div className={styles.buttonoutlinedWrapper}>
          <button className={styles.buttonoutlined}>
            <div className={styles.unstyledbutton}>
              <div className={styles.content}>
                <img
                  className={styles.maskedicon}
                  alt="Maskedicon"
                  src={maskedIcon}
                />
                <div className={styles.button}>ターゲットを選ぶ</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    )
};

export default Genre;