import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";

const TargetType: FunctionComponent = () => {
    return (
        <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>ターゲット種別</b>
                </div>
                <div className={styles.chips1InputbTextOnlyAParent}>
                  <button className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="../../../public/avatar6.png"
                      />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.label1}>toC</div>
                    </div>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
                    </div>
                  </button>
                  <button className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="../../../public/avatar7.png"
                      />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.label1}>toB</div>
                    </div>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
                    </div>
                  </button>
                  <button className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="../../../public/avatar8.png"
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>両方</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
                    </div>
                  </button>
                </div>
        </div>
    )
};

export default TargetType;