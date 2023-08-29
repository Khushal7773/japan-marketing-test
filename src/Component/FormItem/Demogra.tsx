import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import maskedIcon from "../../assets/maskedicon.png";

const Demogra: FunctionComponent = () => {
    return(
        <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>デモグラ</b>
                </div>
                <div className={styles.buttonoutlinedWrapper1}>
                  <button className={styles.buttonoutlined}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src={maskedIcon}
                        />
                        <div className={styles.button}>デモグラを選ぶ</div>
                      </div>
                    </div>
                  </button>
                </div>
        </div>
    )
};

export default Demogra;