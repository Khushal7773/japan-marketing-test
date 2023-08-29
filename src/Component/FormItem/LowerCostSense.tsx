import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import vector1 from "../../assets/vector1.png";

const LowerCostSense: FunctionComponent = () => {
    return(
        <div className={styles.frameParent5}>
          <div className={styles.wrapper5}>
            <b className={styles.b3}>下限費用感</b>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.textFieldoutlinedParent}>
              <div className={styles.textFieldoutlined}>
                <div className={styles.input}>
                  <div className={styles.container1}>
                    <div className={styles.label18}>選択してください</div>
                  </div>
                </div>
              </div>
              <div className={styles.arrowdropdownfilled}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src={vector1}
                />
              </div>
            </div>
          </div>
        </div>
    )
};

export default LowerCostSense;