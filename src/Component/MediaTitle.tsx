import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";

const MediaTitle: FunctionComponent = () => {
    return(
        <div className={styles.choiceChipbActiveParent}>
              <div className={styles.choiceChipbActive}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="../../public/avatar9.png"
                  />
                </div>
                <div className={styles.label8}>
                  <div className={styles.label20}>ライフスタイル</div>
                </div>
                <div className={styles.icon18}>
                  <img
                    className={styles.icon19}
                    alt=""
                    src="../../public/-icon1.png"
                  />
                </div>
              </div>
              <b className={styles.title}>MediaTitleMediaTitle</b>
        </div>
    )
};

export default MediaTitle;