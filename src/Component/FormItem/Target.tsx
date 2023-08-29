import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import maskedIcon from "../../assets/maskedicon.png";

const Target: FunctionComponent = () => {
    return (
        <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>ターゲット</b>
                </div>
                <div className={styles.buttonoutlinedFrame}>
                  <button className={styles.buttonoutlined}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
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

export default Target;