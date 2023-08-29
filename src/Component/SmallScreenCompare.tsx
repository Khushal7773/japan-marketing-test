import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import maskedIcon1 from "../assets/masked-icon1.png";
import icon11 from "../assets/icon11.png";

const SmallScreenCompare: FunctionComponent = () => {
    return (
        <div className={styles.frame2}>
              <div className={styles.content6}>
                <img
                  className={styles.maskedIcon1}
                  alt=""
                  src={maskedIcon1}
                />
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon11}
                />
                <div className={styles.button8}>比較</div>
              </div>
        </div>
    )
};

export default SmallScreenCompare;