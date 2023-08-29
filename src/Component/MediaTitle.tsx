import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import avatar9 from "../assets/avatar9.png";
import icon01 from "../assets/-icon1.png";

const MediaTitle: FunctionComponent = () => {
    return(
        <div className={styles.choiceChipbActiveParent}>
              <div className={styles.choiceChipbActive}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src={avatar9}
                  />
                </div>
                <div className={styles.label8}>
                  <div className={styles.label20}>ライフスタイル</div>
                </div>
                <div className={styles.icon18}>
                  <img
                    className={styles.icon19}
                    alt=""
                    src={icon01}
                  />
                </div>
              </div>
              <b className={styles.title}>MediaTitleMediaTitle</b>
        </div>
    )
};

export default MediaTitle;