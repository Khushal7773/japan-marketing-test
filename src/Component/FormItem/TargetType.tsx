import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import avatar6 from "../../assets/avatar6.png";
import iconN from "../../assets/-icon.png";
import avatar7 from "../../assets/avatar7.png";
import avatar8 from "../../assets/avatar8.png";

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
                        src={avatar6}
                      />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.label1}>toC</div>
                    </div>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src={iconN} />
                    </div>
                  </button>
                  <button className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src={avatar7}
                      />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.label1}>toB</div>
                    </div>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src={iconN} />
                    </div>
                  </button>
                  <button className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src={avatar8}
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>両方</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src={iconN} />
                    </div>
                  </button>
                </div>
        </div>
    )
};

export default TargetType;