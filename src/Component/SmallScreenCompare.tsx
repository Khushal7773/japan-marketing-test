import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";

const SmallScreenCompare: FunctionComponent = () => {
    return (
        <div className={styles.frame2}>
              <div className={styles.content6}>
                <img
                  className={styles.maskedIcon1}
                  alt=""
                  src="../../public/masked-icon1.png"
                />
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon11.png"
                />
                <div className={styles.button8}>比較</div>
              </div>
        </div>
    )
};

export default SmallScreenCompare;