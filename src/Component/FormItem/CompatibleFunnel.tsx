import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import avatar from "../../assets/avatar.png";
import iconN from "../../assets/-icon.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";

const CompatibleFunnel: FunctionComponent = () => {
    return (
        <div className={styles.frameParent5}>
          <div className={styles.wrapper}>
            <b className={styles.b3}>対応ファネル</b>
          </div>
          <div className={styles.chips1InputbTextOnlyAParent}>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src={avatar}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>認知</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src={iconN} />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src={avatar1}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>興味</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src={iconN} />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src={avatar2}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>理解</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src={iconN} />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src={avatar3}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>購買 / 来店促進</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src={iconN} />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src={avatar4}
                />
              </div>
              <div className={styles.label8}>
                <div className={styles.label1}>リピート</div>
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
                  src={avatar5}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>推奨</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src={iconN} />
              </div>
            </button>
          </div>
        </div>
    )
};

export default CompatibleFunnel;